const express = require('express');
const db = require('../db');
const { authenticateToken } = require('./auth');

const router = express.Router();

// Get all menu items for store (auth required)
router.get('/', authenticateToken, async (req, res) => {
  try {
    // Get user's store
    const store = db.store.findFirst({ where: { ownerId: req.user.userId } });
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    // Get menu items for this store
    const menuItems = db.menuItem.findMany({ where: { storeId: store.id } });
    res.json(menuItems);
  } catch (error) {
    console.error('Get menu items error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new menu item (auth required)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { name, price, description, imageUrl } = req.body;

    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }

    // Get user's store
    const store = db.store.findFirst({ where: { ownerId: req.user.userId } });
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    const newMenuItem = db.menuItem.create({
      storeId: store.id,
      name,
      price: parseFloat(price),
      description: description || '',
      imageUrl: imageUrl || ''
    });

    res.status(201).json(newMenuItem);
  } catch (error) {
    console.error('Create menu item error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update menu item (auth required)
router.patch('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, imageUrl } = req.body;

    // Get user's store
    const store = db.store.findFirst({ where: { ownerId: req.user.userId } });
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    // Check if menu item exists and belongs to user's store
    const existingItem = db.menuItem.findUnique({ where: { id: parseInt(id) } });
    if (!existingItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    if (existingItem.storeId !== store.id) {
      return res.status(403).json({ error: 'You can only edit your own menu items' });
    }

    // Update the menu item
    const updateData = {};
    if (name !== undefined) updateData.name = name;
    if (price !== undefined) updateData.price = parseFloat(price);
    if (description !== undefined) updateData.description = description;
    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;

    const updatedItem = db.menuItem.update({
      where: { id: parseInt(id) },
      data: updateData
    });

    res.json(updatedItem);
  } catch (error) {
    console.error('Update menu item error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete menu item (auth required)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    // Get user's store
    const store = db.store.findFirst({ where: { ownerId: req.user.userId } });
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    // Check if menu item exists and belongs to user's store
    const existingItem = db.menuItem.findUnique({ where: { id: parseInt(id) } });
    if (!existingItem) {
      return res.status(404).json({ error: 'Menu item not found' });
    }

    if (existingItem.storeId !== store.id) {
      return res.status(403).json({ error: 'You can only delete your own menu items' });
    }

    db.menuItem.delete({ where: { id: parseInt(id) } });
    res.json({ success: true });
  } catch (error) {
    console.error('Delete menu item error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;