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
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS Post (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT,
    published INTEGER DEFAULT 0,
    authorId INTEGER NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (authorId) REFERENCES User(id)
  );

  CREATE TABLE IF NOT EXISTS Store (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ownerId INTEGER NOT NULL,
    name TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (ownerId) REFERENCES User(id)
  );

  CREATE TABLE IF NOT EXISTS MenuItem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    storeId INTEGER NOT NULL,
    name TEXT NOT NULL,
    price REAL NOT NULL,
    description TEXT,
    imageUrl TEXT,
    available INTEGER DEFAULT 1,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (storeId) REFERENCES Store(id)
  );

  CREATE TABLE IF NOT EXISTS "Order" (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    storeId INTEGER NOT NULL,
    customerName TEXT NOT NULL,
    customerContact TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (storeId) REFERENCES Store(id)
  );

  CREATE TABLE IF NOT EXISTS OrderItem (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    orderId INTEGER NOT NULL,
    menuItemId INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (orderId) REFERENCES "Order"(id),
    FOREIGN KEY (menuItemId) REFERENCES MenuItem(id)
  );
`);

// Simple ORM-like interface
const createUser = db.prepare(`
  INSERT INTO User (email, username, password) 
  VALUES (?, ?, ?)
`);

const findUserByEmail = db.prepare(`
  SELECT * FROM User WHERE email = ?
`);

const findUserById = db.prepare(`
  SELECT * FROM User WHERE id = ?
`);

const createPost = db.prepare(`
  INSERT INTO Post (title, content, published, authorId) 
  VALUES (?, ?, ?, ?)
`);

const findAllPosts = db.prepare(`
  SELECT p.*, u.username, u.email 
  FROM Post p 
  JOIN User u ON p.authorId = u.id 
  ORDER BY p.createdAt DESC
`);

const findPostById = db.prepare(`
  SELECT p.*, u.username, u.email 
  FROM Post p 
  JOIN User u ON p.authorId = u.id 
  WHERE p.id = ?
`);

const updatePost = db.prepare(`
  UPDATE Post 
  SET title = ?, content = ?, published = ?, updatedAt = CURRENT_TIMESTAMP 
  WHERE id = ?
`);

const deletePost = db.prepare(`
  DELETE FROM Post WHERE id = ?
`);

// Menu and ordering operations
const findMenuItemsByStore = db.prepare(`
  SELECT * FROM MenuItem 
  WHERE storeId = ? AND available = 1
  ORDER BY name ASC
`);

const createOrder = db.prepare(`
  INSERT INTO "Order" (storeId, customerName, customerContact, status) 
  VALUES (?, ?, ?, ?)
`);

const createOrderItem = db.prepare(`
  INSERT INTO OrderItem (orderId, menuItemId, quantity) 
  VALUES (?, ?, ?)
`);

const findOrderById = db.prepare(`
  SELECT * FROM "Order" WHERE id = ?
`);

const findOrderItemsByOrderId = db.prepare(`
  SELECT oi.*, mi.name, mi.price 
  FROM OrderItem oi 
  JOIN MenuItem mi ON oi.menuItemId = mi.id 
  WHERE oi.orderId = ?
`);

// Store operations (for seeding sample data)
const createStore = db.prepare(`
  INSERT INTO Store (ownerId, name) 
  VALUES (?, ?)
`);

const createMenuItem = db.prepare(`
  INSERT INTO MenuItem (storeId, name, price, description, imageUrl, available) 
  VALUES (?, ?, ?, ?, ?, ?)
`);

const findStoreById = db.prepare(`
  SELECT * FROM Store WHERE id = ?
`);

module.exports = {
  user: {
    create: (data) => {
      const result = createUser.run(data.email, data.username, data.password);
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
          if (condition.username) {
            const user = db.prepare('SELECT * FROM User WHERE username = ?').get(condition.username);
            if (user) return user;
          }
        }
      }
      return null;
    }
  },
  post: {
    create: ({ data, include }) => {
      const result = createPost.run(data.title, data.content, data.published ? 1 : 0, data.authorId);
      const post = findPostById.get(result.lastInsertRowid);
      return {
        id: result.lastInsertRowid,
        title: data.title,
        content: data.content,
        published: Boolean(data.published),
        authorId: data.authorId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        author: {
          id: post.authorId,
          username: post.username,
          email: post.email
        }
      };
    },
    findMany: ({ include, orderBy }) => {
      const posts = findAllPosts.all();
      return posts.map(post => ({
        id: post.id,
        title: post.title,
        content: post.content,
        published: Boolean(post.published),
        authorId: post.authorId,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        author: {
          id: post.authorId,
          username: post.username,
          email: post.email
        }
      }));
    },
    findUnique: ({ where, include }) => {
      const post = findPostById.get(where.id);
      if (!post) return null;
      return {
        id: post.id,
        title: post.title,
        content: post.content,
        published: Boolean(post.published),
        authorId: post.authorId,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        author: {
          id: post.authorId,
          username: post.username,
          email: post.email
        }
      };
    },
    update: ({ where, data, include }) => {
      const current = findPostById.get(where.id);
      if (!current) return null;
      
      const title = data.title ?? current.title;
      const content = data.content !== undefined ? data.content : current.content;
      const published = data.published !== undefined ? (data.published ? 1 : 0) : current.published;
      
      updatePost.run(title, content, published, where.id);
      
      return {
        id: current.id,
        title,
        content,
        published: Boolean(published),
        authorId: current.authorId,
        createdAt: current.createdAt,
        updatedAt: new Date().toISOString(),
        author: {
          id: current.authorId,
          username: current.username,
          email: current.email
        }
      };
    },
    delete: ({ where }) => {
      deletePost.run(where.id);
      return {};
    }
  },
  menuItem: {
    findMany: ({ where }) => {
      if (where && where.storeId) {
        return findMenuItemsByStore.all(where.storeId);
      }
      return [];
    }
  },
  order: {
    create: ({ data }) => {
      const result = createOrder.run(data.storeId, data.customerName, data.customerContact, data.status || 'pending');
      const orderId = result.lastInsertRowid;
      
      // Create order items
      if (data.items && Array.isArray(data.items)) {
        for (const item of data.items) {
          createOrderItem.run(orderId, item.menuItemId, item.quantity);
        }
      }
      
      return {
        id: orderId,
        ...data,
        createdAt: new Date().toISOString()
      };
    },
    findUnique: ({ where, include }) => {
      const order = findOrderById.get(where.id);
      if (!order) return null;
      
      let result = order;
      if (include && include.items) {
        const items = findOrderItemsByOrderId.all(order.id);
        result.items = items;
      }
      
      return result;
    }
  },
  store: {
    create: ({ data }) => {
      const result = createStore.run(data.ownerId, data.name);
      return { id: result.lastInsertRowid, ...data };
    },
    findUnique: ({ where }) => {
      if (where.id) return findStoreById.get(where.id);
      return null;
    }
  },
  // Helper to seed sample data
  seedSampleData: () => {
    try {
      // Check if store already exists
      const existingStore = db.prepare('SELECT COUNT(*) as count FROM Store').get();
      if (existingStore.count > 0) return; // Already seeded
      
      // Create a demo user if none exists
      let demoUserId;
      const existingUser = db.prepare('SELECT * FROM User LIMIT 1').get();
      if (!existingUser) {
        const bcrypt = require('bcryptjs');
        const hashedPassword = bcrypt.hashSync('demo123', 10);
        const userResult = createUser.run('demo@restaurant.com', 'demo-restaurant', hashedPassword);
        demoUserId = userResult.lastInsertRowid;
      } else {
        demoUserId = existingUser.id;
      }
      
      // Create a demo store
      const storeResult = createStore.run(demoUserId, 'Demo Restaurant');
      const storeId = storeResult.lastInsertRowid;
      
      // Create sample menu items
      const menuItems = [
        { name: 'Margherita Pizza', price: 12.99, description: 'Fresh tomatoes, mozzarella, and basil', imageUrl: '' },
        { name: 'Pepperoni Pizza', price: 14.99, description: 'Classic pepperoni with mozzarella cheese', imageUrl: '' },
        { name: 'Caesar Salad', price: 8.99, description: 'Romaine lettuce, parmesan, croutons, caesar dressing', imageUrl: '' },
        { name: 'Cheeseburger', price: 11.99, description: 'Beef patty with cheese, lettuce, tomato, onion', imageUrl: '' },
        { name: 'Grilled Chicken Sandwich', price: 10.99, description: 'Grilled chicken breast with avocado and mayo', imageUrl: '' },
        { name: 'Fish & Chips', price: 15.99, description: 'Beer-battered fish with crispy fries', imageUrl: '' }
      ];
      
      for (const item of menuItems) {
        createMenuItem.run(storeId, item.name, item.price, item.description, item.imageUrl, 1);
      }
      
      console.log('✅ Sample menu data seeded successfully');
    } catch (error) {
      console.log('ℹ️ Sample data already exists or error seeding:', error.message);
    }
  },
  $disconnect: () => {
    db.close();
  }
};