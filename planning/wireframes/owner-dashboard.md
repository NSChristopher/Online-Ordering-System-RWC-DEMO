# Owner Dashboard Wireframe

## User Story
*As a store owner, I want to see incoming orders in real-time on a business dashboard so that I can process them quickly.*

## Page Overview
The owner dashboard provides a comprehensive view of orders, menu management, and business metrics in an easy-to-use interface.

## Desktop Layout (1024px+)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Logo] Owner Dashboard              [Settings] [Profile] [Logout] [Help]     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─ Navigation ────┐ ┌─ Main Content ─────────────────────────────────────────┐│
│ │ 🏠 Dashboard    │ │                                                       ││
│ │ 📋 Orders       │ │ ┌─ Quick Stats ──────────────────────────────────────┐ ││
│ │ 🍕 Menu         │ │ │ Today's Orders: 24    Pending: 3    Revenue: $487 │ ││
│ │ 📊 Analytics    │ │ └───────────────────────────────────────────────────┘ ││
│ │ ⚙️  Settings    │ │                                                       ││
│ │                 │ │ ┌─ Recent Orders ────────────────────────────────────┐ ││
│ │                 │ │ │ 🔴 NEW  Order #OO-001   2:34 PM                  │ ││
│ │                 │ │ │ Customer: John Smith    Total: $43.03            │ ││
│ │                 │ │ │ Type: Pickup           ETA: 25-30 min            │ ││
│ │                 │ │ │ Items: Pepperoni Pizza (Large), Caesar Salad    │ ││
│ │                 │ │ │ [Accept] [Decline] [View Details]               │ ││
│ │                 │ │ │ ──────────────────────────────────────────────── │ ││
│ │                 │ │ │ 🟡 PREP  Order #OO-002   2:28 PM                │ ││
│ │                 │ │ │ Customer: Jane Doe      Total: $28.50            │ ││
│ │                 │ │ │ Type: Delivery         ETA: 15-20 min            │ ││
│ │                 │ │ │ Items: Margherita Pizza (Medium)                │ ││
│ │                 │ │ │ [Mark Ready] [Call Customer] [View Details]     │ ││
│ │                 │ │ │ ──────────────────────────────────────────────── │ ││
│ │                 │ │ │ 🟢 READY Order #OO-003   2:15 PM                │ ││
│ │                 │ │ │ Customer: Bob Wilson    Total: $52.75            │ ││
│ │                 │ │ │ Type: Pickup           Waiting for pickup       │ ││
│ │                 │ │ │ Items: 2x Pepperoni Pizza (Large)               │ ││
│ │                 │ │ │ [Mark Complete] [Call Customer]                 │ ││
│ │                 │ │ └───────────────────────────────────────────────── │ ││
│ │                 │ │                                                     │ ││
│ │                 │ │ [View All Orders]                                   │ ││
│ │                 │ └─────────────────────────────────────────────────────┘ │
│ └─────────────────┘                                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Mobile Layout (320px-767px)

```
┌─────────────────────────────────┐
│ ☰ Dashboard        👤 [Profile] │
├─────────────────────────────────┤
│ ┌─ Today's Stats ──────────────┐ │
│ │ Orders: 24  Pending: 3       │ │
│ │ Revenue: $487                │ │
│ └──────────────────────────────┘ │
│                                 │
│ ┌─ New Orders (3) ─────────────┐ │
│ │ 🔴 Order #OO-001    2:34 PM  │ │
│ │ John Smith          $43.03   │ │
│ │ Pickup • ETA 25-30min        │ │
│ │ [Accept] [Decline] [Details] │ │
│ └──────────────────────────────┘ │
│                                 │
│ ┌─ In Progress (2) ────────────┐ │
│ │ 🟡 Order #OO-002    2:28 PM  │ │
│ │ Jane Doe            $28.50   │ │
│ │ Delivery • ETA 15-20min      │ │
│ │ [Ready] [Call] [Details]     │ │
│ └──────────────────────────────┘ │
│                                 │
│ ┌─ Ready for Pickup (1) ───────┐ │
│ │ 🟢 Order #OO-003    2:15 PM  │ │
│ │ Bob Wilson          $52.75   │ │
│ │ Pickup • Ready!              │ │
│ │ [Complete] [Call] [Details]  │ │
│ └──────────────────────────────┘ │
│                                 │
│ [View All Orders]               │
└─────────────────────────────────┘
```

## Order Detail Modal

### Desktop Modal
```
┌─ Order #OO-001 Details ─────────────────────────────────────────────────────┐
│                                                                    [✕ Close] │
│                                                                             │
│ ┌─ Customer Information ──────────────┐ ┌─ Order Items ──────────────────────┐│
│ │ Name: John Smith                    │ │ • Pepperoni Pizza (Large)   $18.99 ││
│ │ Phone: (555) 123-4567               │ │   Extra cheese, thick crust         ││
│ │ Email: john@email.com               │ │                                     ││
│ │ Type: Pickup                        │ │ • Caesar Salad (Regular)    $16.99 ││
│ │ Ordered: 2:34 PM                    │ │   Extra croutons, no anchovies     ││
│ │                                     │ │                                     ││
│ │ Special Instructions:               │ │ Subtotal:               $35.98     ││
│ │ "Please call when ready"            │ │ Tax (8.5%):              $3.06     ││
│ └─────────────────────────────────────┘ │ Delivery Fee:            $3.99     ││
│                                         │ ─────────────────────────────────   ││
│ ┌─ Order Status ──────────────────────┐ │ Total:                  $43.03     ││
│ │ Status: NEW                         │ └─────────────────────────────────────┘│
│ │ ETA: 25-30 minutes                  │                                       │
│ │                                     │                                       │
│ │ [Accept Order] [Decline Order]      │                                       │
│ │                                     │                                       │
│ │ Decline Reason:                     │                                       │
│ │ ○ Out of ingredients                │                                       │
│ │ ○ Too busy                          │                                       │
│ │ ○ Kitchen closed                    │                                       │
│ │ ○ Other: [text field]               │                                       │
│ └─────────────────────────────────────┘                                       │
│                                                                             │
│ [Close]                                                        [Print Order] │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Order Status Flow

### Status Progression
```
NEW → ACCEPTED → PREPARING → READY → COMPLETED
  ↓
DECLINED
```

### Status Indicators
- **🔴 NEW**: Red circle - Requires immediate action
- **🟡 PREPARING**: Yellow circle - In progress
- **🟢 READY**: Green circle - Ready for pickup/delivery
- **✅ COMPLETED**: Check mark - Order fulfilled
- **❌ DECLINED**: X mark - Order cancelled

## Navigation Menu

### Desktop Sidebar
- **Dashboard**: Overview and recent orders
- **Orders**: Full order management (All, New, In Progress, Ready, Completed)
- **Menu**: Add/edit/remove menu items and categories
- **Analytics**: Sales reports, popular items, peak times
- **Settings**: Store hours, contact info, notification preferences

### Mobile Menu (Hamburger)
Same sections as desktop, collapsed into slide-out menu

## Accessibility Features

### Keyboard Navigation
- **Tab Order**: Logical flow through dashboard elements
- **Action Buttons**: Enter/Space to activate order actions
- **Modal Navigation**: Tab trapped within modal dialogs
- **Menu Navigation**: Arrow keys for sidebar menu items

### Screen Reader Support
- **Order Status**: Status announced with context ("Order OO-001, status: new")
- **Time Information**: Relative time ("ordered 15 minutes ago")
- **Action Buttons**: Clear labels ("Accept order OO-001")
- **Live Updates**: New orders announced automatically

### Visual Accessibility
- **High Contrast**: Status colors meet WCAG AA standards
- **Focus Indicators**: Clear outline on focused elements
- **Text Size**: Scalable fonts, minimum 16px
- **Color Independence**: Status indicated by icons and text, not just color

## Real-Time Features

### Live Updates
- **Order Notifications**: Sound + visual alert for new orders
- **Status Changes**: Real-time updates without page refresh
- **Connection Status**: Indicator when offline/reconnecting

### Audio Notifications
- **New Order**: Distinctive chime sound
- **Order Ready**: Different tone for ready orders
- **Volume Control**: Adjustable notification volume

## Interactive Behaviors

### Order Management
- **Quick Actions**: One-click accept/decline for new orders
- **Bulk Operations**: Select multiple orders for status updates
- **Time Tracking**: Automatic ETA calculations based on order time

### Data Refresh
- **Auto-refresh**: Dashboard updates every 30 seconds
- **Manual Refresh**: Pull-to-refresh on mobile
- **Background Sync**: Updates when tab regains focus

## Performance Considerations

### Loading States
- **Skeleton Screens**: Show layout while loading order data
- **Progressive Loading**: Load critical data first
- **Error Handling**: Retry mechanisms for failed updates

### Caching Strategy
- **Order Cache**: Keep recent orders in memory
- **Optimistic Updates**: Show changes immediately, sync later
- **Background Fetch**: Pre-load likely next actions

## User Testing Scenarios

### Daily Operations
1. Review new orders and accept/decline
2. Update order status from preparing to ready
3. Handle customer calls and mark orders complete
4. Check daily sales and order volume

### Error Handling
1. Handle declined order workflow
2. Manage orders when internet connection is poor
3. Recover from page refresh during order processing
4. Handle system downtime gracefully

### Usability Metrics
- **Order Response Time**: < 2 minutes from order to acceptance
- **Status Update Efficiency**: < 30 seconds per status change
- **Error Rate**: < 1% incorrect status updates
- **Mobile Effectiveness**: Equal efficiency on mobile vs desktop

## Technical Requirements

### Real-Time Data
- WebSocket connection for live order updates
- Fallback to polling if WebSocket unavailable
- Offline mode with sync when reconnected

### Security Features
- Session timeouts for inactive periods
- Role-based access (owner vs employee accounts)
- Audit log of all order status changes

### Integration Points
- POS system integration (future enhancement)
- SMS notifications to customers
- Email receipts and confirmations