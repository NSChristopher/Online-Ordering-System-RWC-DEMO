# API Endpoints

_This document defines the REST API endpoints required to support all MVP user stories for the Online Ordering System. Endpoints follow RESTful conventions and align with the database schema and user needs._

---

## 1. Authentication

### POST /api/auth/login
- **Purpose:** Store owner login.
- **Body:**  
  ```json
  { "email": "owner@example.com", "password": "string" }
  ```
- **Response:**  
  ```json
  { "token": "jwt-token" }
  ```
- **Notes:** Returns JWT in HTTP-only cookie.

### POST /api/auth/logout
- **Purpose:** Log out store owner.
- **Response:**  
  ```json
  { "success": true }
  ```

---

## 2. Store Management (Owner Only)

### GET /api/store
- **Purpose:** Fetch current owner's store details.
- **Auth:** Required (JWT)
- **Response:**  
  ```json
  { "id": 1, "name": "My Store" }
  ```

### PATCH /api/store
- **Purpose:** Update store details.
- **Auth:** Required (JWT)
- **Body:**  
  ```json
  { "name": "New Store Name" }
  ```
- **Response:**  
  ```json
  { "id": 1, "name": "New Store Name" }
  ```

---

## 3. Menu Items (Owner Only)

### GET /api/menu-items
- **Purpose:** List all menu items for store.
- **Auth:** Required (JWT)
- **Response:**  
  ```json
  [
    { "id": 1, "name": "Pizza", "price": 10.0, "description": "Cheesy", "imageUrl": "" },
    ...
  ]
  ```

### POST /api/menu-items
- **Purpose:** Create a new menu item.
- **Auth:** Required (JWT)
- **Body:**  
  ```json
  { "name": "Salad", "price": 5.0, "description": "Fresh", "imageUrl": "" }
  ```
- **Response:**  
  ```json
  { "id": 2, "name": "Salad", ... }
  ```

### PATCH /api/menu-items/:id
- **Purpose:** Update a menu item.
- **Auth:** Required (JWT)
- **Body:**  
  ```json
  { "name": "Veggie Salad", "price": 6.0 }
  ```
- **Response:**  
  ```json
  { "id": 2, "name": "Veggie Salad", ... }
  ```

### DELETE /api/menu-items/:id
- **Purpose:** Delete a menu item.
- **Auth:** Required (JWT)
- **Response:**  
  ```json
  { "success": true }
  ```

---

## 4. Menu (Public/Customer)

### GET /api/menu
- **Purpose:** Get published menu for a store.
- **Query:** `?storeId=1`
- **Response:**  
  ```json
  [
    { "id": 1, "name": "Pizza", "price": 10.0, ... },
    ...
  ]
  ```

---

## 5. Orders (Customer)

### POST /api/orders
- **Purpose:** Place a new order.
- **Body:**  
  ```json
  {
    "storeId": 1,
    "customerName": "John Doe",
    "customerContact": "john@example.com",
    "items": [ { "menuItemId": 1, "quantity": 2 }, ... ]
  }
  ```
- **Response:**  
  ```json
  { "orderId": 100, "status": "pending" }
  ```

---

## 6. Orders (Owner/Business)

### GET /api/orders
- **Purpose:** List all orders for the store (dashboard).
- **Auth:** Required (JWT)
- **Response:**  
  ```json
  [
    {
      "id": 100,
      "customerName": "John Doe",
      "status": "pending",
      "createdAt": "2025-06-11T00:00:00Z",
      "items": [ { "menuItemId": 1, "name": "Pizza", "quantity": 2 }, ... ]
    },
    ...
  ]
  ```

### GET /api/orders/:id
- **Purpose:** Get details for a specific order.
- **Auth:** Required (JWT)
- **Response:**  
  ```json
  {
    "id": 100,
    "customerName": "John Doe",
    "status": "pending",
    "createdAt": "2025-06-11T00:00:00Z",
    "items": [ { "menuItemId": 1, "name": "Pizza", "quantity": 2 }, ... ]
  }
  ```

### PATCH /api/orders/:id
- **Purpose:** Update status (confirm/decline).
- **Auth:** Required (JWT)
- **Body:**  
  ```json
  { "status": "confirmed" }
  ```
- **Response:**  
  ```json
  { "id": 100, "status": "confirmed" }
  ```

---

## Notes

- All endpoints return appropriate error codes and messages for invalid input or unauthorized access.
- Owner endpoints require authentication (JWT).
- Customer-facing endpoints do not require authentication.
- Easily extensible for future features (e.g., pagination, searching, advanced order status).

---