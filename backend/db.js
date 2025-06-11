const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const path = require('path');

// Simple SQLite database initialization
const db = new Database(path.join(__dirname, 'prisma', 'dev.db'));

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS User (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    passwordHash TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS Store (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ownerId INTEGER NOT NULL,
    name TEXT NOT NULL,
    FOREIGN KEY (ownerId) REFERENCES User(id)
  );

  CREATE TABLE IF NOT EXISTS MenuItem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    storeId INTEGER NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT,
    imageUrl TEXT,
    FOREIGN KEY (storeId) REFERENCES Store(id)
  );

  CREATE TABLE IF NOT EXISTS OrderTable (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    storeId INTEGER NOT NULL,
    customerName TEXT NOT NULL,
    customerContact TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (storeId) REFERENCES Store(id)
  );

  CREATE TABLE IF NOT EXISTS OrderItem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    orderId INTEGER NOT NULL,
    menuItemId INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (orderId) REFERENCES OrderTable(id),
    FOREIGN KEY (menuItemId) REFERENCES MenuItem(id)
  );
`);

// Simple ORM-like interface
const createUser = db.prepare(`
  INSERT INTO User (email, passwordHash) 
  VALUES (?, ?)
`);

const findUserByEmail = db.prepare(`
  SELECT * FROM User WHERE email = ?
`);

const findUserById = db.prepare(`
  SELECT * FROM User WHERE id = ?
`);

const createStore = db.prepare(`
  INSERT INTO Store (ownerId, name) 
  VALUES (?, ?)
`);

const findStoreByOwnerId = db.prepare(`
  SELECT * FROM Store WHERE ownerId = ?
`);

const updateStore = db.prepare(`
  UPDATE Store SET name = ? WHERE id = ?
`);

const createMenuItem = db.prepare(`
  INSERT INTO MenuItem (storeId, name, price, description, imageUrl) 
  VALUES (?, ?, ?, ?, ?)
`);

const findMenuItemsByStoreId = db.prepare(`
  SELECT * FROM MenuItem WHERE storeId = ?
`);

const findMenuItemById = db.prepare(`
  SELECT * FROM MenuItem WHERE id = ?
`);

const updateMenuItem = db.prepare(`
  UPDATE MenuItem 
  SET name = ?, price = ?, description = ?, imageUrl = ? 
  WHERE id = ?
`);

const deleteMenuItem = db.prepare(`
  DELETE FROM MenuItem WHERE id = ?
`);

module.exports = {
  user: {
    create: (data) => {
      const result = createUser.run(data.email, data.passwordHash);
      return { id: result.lastInsertRowid, ...data };
    },
    findUnique: ({ where }) => {
      if (where.email) return findUserByEmail.get(where.email);
      if (where.id) return findUserById.get(where.id);
      return null;
    },
    findFirst: ({ where }) => {
      if (where.OR) {
        for (const condition of where.OR) {
          if (condition.email) {
            const user = findUserByEmail.get(condition.email);
            if (user) return user;
          }
        }
      }
      return null;
    }
  },
  store: {
    create: (data) => {
      const result = createStore.run(data.ownerId, data.name);
      return { id: result.lastInsertRowid, ...data };
    },
    findFirst: ({ where }) => {
      if (where.ownerId) return findStoreByOwnerId.get(where.ownerId);
      return null;
    },
    update: ({ where, data }) => {
      updateStore.run(data.name, where.id);
      return { id: where.id, ...data };
    }
  },
  menuItem: {
    create: (data) => {
      const result = createMenuItem.run(data.storeId, data.name, data.price, data.description, data.imageUrl);
      return { id: result.lastInsertRowid, ...data };
    },
    findMany: ({ where }) => {
      if (where && where.storeId) {
        return findMenuItemsByStoreId.all(where.storeId);
      }
      return [];
    },
    findUnique: ({ where }) => {
      if (where.id) return findMenuItemById.get(where.id);
      return null;
    },
    update: ({ where, data }) => {
      const current = findMenuItemById.get(where.id);
      if (!current) return null;
      
      const name = data.name ?? current.name;
      const price = data.price ?? current.price;
      const description = data.description !== undefined ? data.description : current.description;
      const imageUrl = data.imageUrl !== undefined ? data.imageUrl : current.imageUrl;
      
      updateMenuItem.run(name, price, description, imageUrl, where.id);
      
      return {
        id: current.id,
        storeId: current.storeId,
        name,
        price,
        description,
        imageUrl
      };
    },
    delete: ({ where }) => {
      deleteMenuItem.run(where.id);
      return {};
    }
  },
  $disconnect: () => {
    db.close();
  }
};