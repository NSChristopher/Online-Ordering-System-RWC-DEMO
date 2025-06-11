const express = require('express');
const db = require('../db');
const { authenticateToken } = require('./auth');

const router = express.Router();

// Get current owner's store details (auth required)
router.get('/', authenticateToken, async (req, res) => {
  try {
    const store = db.store.findFirst({ where: { ownerId: req.user.userId } });
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }
    res.json(store);
  } catch (error) {
    console.error('Get store error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update store details (auth required)
router.patch('/', authenticateToken, async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Store name is required' });
    }

    const store = db.store.findFirst({ where: { ownerId: req.user.userId } });
    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    const updatedStore = db.store.update({
      where: { id: store.id },
      data: { name }
    });

    res.json(updatedStore);
  } catch (error) {
    console.error('Update store error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;