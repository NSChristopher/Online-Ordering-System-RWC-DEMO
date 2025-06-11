const express = require("express");
const db = require("../db");

const router = express.Router();

// POST /api/orders - Place a new order
router.post("/", async (req, res) => {
  try {
    const { storeId, customerName, customerContact, items } = req.body;
    
    // Validate required fields
    if (!storeId || !customerName || !customerContact || !items || items.length === 0) {
      return res.status(400).json({ 
        error: "Missing required fields: storeId, customerName, customerContact, and items" 
      });
    }
    
    // Validate items structure
    for (const item of items) {
      if (!item.menuItemId || !item.quantity || item.quantity <= 0) {
        return res.status(400).json({ 
          error: "Each item must have menuItemId and positive quantity" 
        });
      }
    }
    
    // Create the order
    const order = db.order.create({
      data: {
        storeId: parseInt(storeId),
        customerName: customerName.trim(),
        customerContact: customerContact.trim(),
        status: 'pending',
        items: items.map(item => ({
          menuItemId: parseInt(item.menuItemId),
          quantity: parseInt(item.quantity)
        }))
      }
    });
    
    res.status(201).json({
      orderId: order.id,
      status: order.status || 'pending',
      message: "Order placed successfully"
    });
    
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to place order" });
  }
});

// GET /api/orders/:id - Get order details (for customer confirmation)
router.get("/:id", async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    
    const order = db.order.findUnique({
      where: { id: orderId },
      include: { items: true }
    });
    
    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }
    
    res.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ error: "Failed to fetch order" });
  }
});

module.exports = router;