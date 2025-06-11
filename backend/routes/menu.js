const express = require('express');
const db = require('../db');

const router = express.Router();

// Get public menu for a store (no auth required)
router.get('/', async (req, res) => {
  try {
    const { storeId } = req.query;

    if (!storeId) {
      return res.status(400).json({ error: 'storeId query parameter is required' });
    }

    // Get menu items for the specified store
    const menuItems = db.menuItem.findMany({ where: { storeId: parseInt(storeId) } });
    
    res.json(menuItems);
  } catch (error) {
    console.error('Get menu error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;