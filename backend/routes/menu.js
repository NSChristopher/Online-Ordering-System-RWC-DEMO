const express = require("express");
const db = require("../db");

const router = express.Router();

// GET /api/menu - Get published menu for a store
router.get("/", async (req, res) => {
  try {
    const { storeId = 1 } = req.query; // Default to store 1 for demo
    
    // Get menu items for the store
    const menuItems = db.menuItem.findMany({ 
      where: { storeId: parseInt(storeId) } 
    });
    
    res.json(menuItems);
  } catch (error) {
    console.error("Error fetching menu:", error);
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

module.exports = router;