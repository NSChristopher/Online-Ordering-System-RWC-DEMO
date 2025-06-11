# Customer Order Status Wireframe

## User Story
*As a customer, I want to view the status of my submitted orders so I know what to expect.*

## Page Overview
The order status page allows customers to track their order progress in real-time with clear status updates and estimated completion times.

## Desktop Layout (1024px+)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Logo: Restaurant Name]                    [Menu] [Contact] [Help]           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─ Order Status ──────────────────────────────────────────────────────────────┐│
│ │                                                                           ││
│ │ Order #OO-2024-001                                   Estimated: 25-30 min ││
│ │ Placed at 2:34 PM                                   Type: Pickup          ││
│ │                                                                           ││
│ │ ┌─ Progress Tracker ─────────────────────────────────────────────────────┐ ││
│ │ │                                                                       │ ││
│ │ │ ✅ Order Received    🟡 Being Prepared    ⭕ Ready    ⭕ Complete     │ ││
│ │ │    2:34 PM              Current Status                                 │ ││
│ │ │                                                                       │ ││
│ │ └───────────────────────────────────────────────────────────────────────┘ ││
│ │                                                                           ││
│ │ ┌─ Current Status ───────────────────────────────────────────────────────┐ ││
│ │ │                                                                       │ ││
│ │ │               🍕 Your order is being prepared                         │ ││
│ │ │                                                                       │ ││
│ │ │           We're working on your delicious order! It should be         │ ││
│ │ │               ready for pickup in about 15-20 minutes.               │ ││
│ │ │                                                                       │ ││
│ │ │               We'll call you at (555) 123-4567 when ready            │ ││
│ │ │                                                                       │ ││
│ │ └───────────────────────────────────────────────────────────────────────┘ ││
│ │                                                                           ││
│ │ ┌─ Order Details ────────────────────────────────────────────────────────┐ ││
│ │ │ Customer: John Smith               Phone: (555) 123-4567              │ ││
│ │ │ Email: john@email.com             Pickup Location: 123 Main St       │ ││
│ │ │                                                                       │ ││
│ │ │ Items Ordered:                                                        │ ││
│ │ │ • Pepperoni Pizza (Large) - $18.99                                   │ ││
│ │ │   Extra cheese, thick crust                                           │ ││
│ │ │ • Caesar Salad (Regular) - $16.99                                    │ ││
│ │ │   Extra croutons, no anchovies                                        │ ││
│ │ │                                                                       │ ││
│ │ │ Special Instructions: Please call when ready for pickup               │ ││
│ │ │                                                                       │ ││
│ │ │ Total: $43.03                                                         │ ││
│ │ └───────────────────────────────────────────────────────────────────────┘ ││
│ │                                                                           ││
│ │ ┌─ Actions ──────────────────────────────────────────────────────────────┐ ││
│ │ │ [📞 Call Restaurant] [📍 Get Directions] [❓ Need Help?] [🔄 Refresh] │ ││
│ │ └───────────────────────────────────────────────────────────────────────┘ ││
│ │                                                                           ││
│ │ [← Back to Menu] [📱 Track Another Order] [💬 Contact Support]           ││
│ └───────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
```

## Mobile Layout (320px-767px)

```
┌─────────────────────────────────┐
│ ← Order #OO-001      [🔄 Refresh] │
├─────────────────────────────────┤
│ Pickup • Estimated: 15-20 min   │
├─────────────────────────────────┤
│                                 │
│ ┌─ Status ─────────────────────┐ │
│ │ ✅ Received     (2:34 PM)    │ │
│ │ 🟡 Preparing    (Current)    │ │
│ │ ⭕ Ready                     │ │
│ │ ⭕ Complete                  │ │
│ └──────────────────────────────┘ │
│                                 │
│ ┌─ Update ─────────────────────┐ │
│ │      🍕 Being Prepared       │ │
│ │                              │ │
│ │ Your order is being made!    │ │
│ │ We'll call when ready.       │ │
│ │                              │ │
│ │ ETA: 15-20 minutes           │ │
│ └──────────────────────────────┘ │
│                                 │
│ ┌─ Order Items ────────────────┐ │
│ │ • Pepperoni Pizza (L) $18.99 │ │
│ │   Extra cheese, thick crust  │ │
│ │ • Caesar Salad (R)   $16.99  │ │
│ │   Extra croutons, no anchov. │ │
│ │                              │ │
│ │ Total: $43.03                │ │
│ └──────────────────────────────┘ │
│                                 │
│ ┌─ Contact Info ───────────────┐ │
│ │ John Smith                   │ │
│ │ (555) 123-4567              │ │
│ │ john@email.com              │ │
│ └──────────────────────────────┘ │
│                                 │
│ [📞 Call] [📍 Directions] [❓ Help] │
│                                 │
│ [← Back to Menu]                │
└─────────────────────────────────┘
```

## Order Status Progression

### Status Indicators
```
1. ✅ Order Received    - Order confirmed by restaurant
2. 🟡 Being Prepared    - Kitchen is working on order  
3. 🟢 Ready for Pickup  - Order is complete and waiting
4. ✅ Complete          - Order has been picked up

Alternative flows:
❌ Declined            - Order was declined by restaurant
⏱️ Delayed             - Order is taking longer than expected
```

## Order Declined State

### Desktop Layout
```
┌─ Order Status ──────────────────────────────────────────────────────────────┐
│                                                                             │
│ Order #OO-2024-001                                   Status: Declined       │
│ Placed at 2:34 PM                                   Type: Pickup           │
│                                                                             │
│ ┌─ Order Declined ────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │                        ❌ Order Declined                                │ │
│ │                                                                         │ │
│ │              We're sorry, but we cannot fulfill this order.            │ │
│ │                                                                         │ │
│ │              Reason: We're currently out of the ingredients needed      │ │
│ │              for the Pepperoni Pizza.                                   │ │
│ │                                                                         │ │
│ │              You have not been charged for this order.                 │ │
│ │                                                                         │ │
│ │              [📞 Call Us] [🔄 Place New Order] [💬 Chat Support]       │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ We apologize for any inconvenience. Please feel free to place a new order │
│ or contact us directly at (555) 123-4567.                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Order Ready State

### Mobile Layout
```
┌─────────────────────────────────┐
│ ← Order #OO-001      [🔄 Refresh] │
├─────────────────────────────────┤
│ Pickup • Ready Now!             │
├─────────────────────────────────┤
│                                 │
│ ┌─ Status ─────────────────────┐ │
│ │ ✅ Received     (2:34 PM)    │ │
│ │ ✅ Prepared     (2:52 PM)    │ │
│ │ 🟢 Ready Now!   (2:58 PM)    │ │
│ │ ⭕ Complete                  │ │
│ └──────────────────────────────┘ │
│                                 │
│ ┌─ Ready for Pickup ───────────┐ │
│ │        🎉 Order Ready!       │ │
│ │                              │ │
│ │ Your delicious order is      │ │
│ │ ready for pickup!            │ │
│ │                              │ │
│ │ Location: 123 Main Street    │ │
│ │ Please come when convenient  │ │
│ └──────────────────────────────┘ │
│                                 │
│ [📞 Call Restaurant]            │
│ [📍 Get Directions]             │
│ [✅ Mark as Picked Up]          │
└─────────────────────────────────┘
```

## Track Multiple Orders Page

### Desktop Layout
```
┌─ Your Orders ───────────────────────────────────────────────────────────────┐
│                                                                             │
│ [🔍 Search by Order Number]                              [🔄 Refresh All]   │
│                                                                             │
│ ┌─ Active Orders ─────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │ ┌─ Order #OO-001 ─────────────────────────────────────────────────────┐ │ │
│ │ │ 🟡 Being Prepared    Pickup    ETA: 15-20 min    Total: $43.03     │ │ │
│ │ │ Pepperoni Pizza (L), Caesar Salad                  [View Details]   │ │ │
│ │ └─────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                         │ │
│ │ ┌─ Order #OO-002 ─────────────────────────────────────────────────────┐ │ │
│ │ │ 🟢 Ready for Pickup    Pickup    Ready Now!       Total: $28.50     │ │ │
│ │ │ Margherita Pizza (M)                               [View Details]   │ │ │
│ │ └─────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                         │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ┌─ Recent Orders ─────────────────────────────────────────────────────────┐ │
│ │                                                                         │ │
│ │ ┌─ Order #OO-003 ─────────────────────────────────────────────────────┐ │ │
│ │ │ ✅ Completed    Pickup    Yesterday 6:45 PM       Total: $52.75     │ │ │
│ │ │ 2x Pepperoni Pizza (L)                             [Reorder]        │ │ │
│ │ └─────────────────────────────────────────────────────────────────────┘ │ │
│ │                                                                         │ │
│ │ [View Order History]                                                    │ │
│ └─────────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Accessibility Features

### Keyboard Navigation
- **Tab Order**: Status indicators → Action buttons → Navigation links
- **Enter/Space**: Activate buttons and links
- **Arrow Keys**: Navigate between status indicators
- **Escape**: Close any modal dialogs

### Screen Reader Support
- **Status Announcements**: "Order status: Being prepared, estimated 15 to 20 minutes"
- **Time Updates**: "Order received at 2:34 PM, that was 18 minutes ago"
- **Progress Information**: "Step 2 of 4: Being prepared"
- **Live Updates**: Status changes announced automatically

### Visual Accessibility
- **High Contrast**: Status colors meet WCAG AA standards (4.5:1 minimum)
- **Focus Indicators**: Clear 2px outline on focused elements
- **Icon + Text**: Status indicated by both icons and text labels
- **Large Touch Targets**: Minimum 44px × 44px for mobile buttons

## Real-Time Updates

### Live Status Updates
- **WebSocket Connection**: Real-time status updates from restaurant
- **Polling Fallback**: Check for updates every 60 seconds if WebSocket fails
- **Visual Notifications**: Gentle animation when status changes
- **Audio Alerts**: Optional sound when order is ready (user preference)

### Connection Handling
- **Offline Indicator**: Show when connection is lost
- **Retry Mechanism**: Automatic reconnection attempts
- **Cached Data**: Show last known status while reconnecting
- **Manual Refresh**: Button to force status check

## Interactive Behaviors

### Status Progression
- **Smooth Transitions**: Animated progress between status stages
- **Time Estimates**: Dynamic ETA updates based on restaurant feedback
- **Contextual Messages**: Different messages for pickup vs delivery
- **Historical Timeline**: Show time stamps for each status change

### Customer Actions
- **Call Restaurant**: Direct phone link with restaurant number
- **Get Directions**: Integration with maps for pickup location
- **Order Again**: Quick reorder of same items
- **Share Status**: Share order tracking with family/friends

### Error Handling
- **Order Not Found**: Clear message with options to search again
- **Expired Orders**: Explanation and contact information
- **System Errors**: Friendly error messages with retry options
- **Invalid Order Numbers**: Format validation and suggestions

## Notification System

### Status Change Notifications
- **Order Accepted**: "Your order has been accepted and is being prepared"
- **Preparation Complete**: "Your order is ready for pickup!"
- **Delayed Orders**: "Your order is taking a bit longer than expected"
- **Order Issues**: "There's an issue with your order. Please call us."

### Delivery Notifications (Future Enhancement)
- **Driver Assigned**: "Your order is out for delivery"
- **On The Way**: "Your driver is 5 minutes away"
- **Delivered**: "Your order has been delivered"

## User Testing Scenarios

### Happy Path Testing
1. Customer places order and receives confirmation
2. Order status progresses from received → preparing → ready
3. Customer receives ready notification and picks up order
4. Customer can view order history and reorder

### Edge Case Testing
1. Order gets declined after initial acceptance
2. Order experiences significant delays
3. Customer loses internet connection while tracking
4. Customer enters invalid order number
5. Restaurant system goes offline during order

### Usability Metrics
- **Status Clarity**: Users understand current status within 5 seconds
- **ETA Accuracy**: Estimated times within ±10 minutes of actual
- **Action Discovery**: Users find call/directions buttons without help
- **Error Recovery**: Users can resolve issues independently 90% of time

## Performance Considerations

### Loading Optimization
- **Critical Data First**: Load order status before details
- **Progressive Enhancement**: Basic info first, then enhanced features
- **Cached Status**: Store recent status locally for instant display
- **Background Updates**: Fetch updates without blocking UI

### Real-Time Efficiency
- **Selective Updates**: Only update changed information
- **Connection Pooling**: Efficient WebSocket management
- **Graceful Degradation**: Fallback to polling if real-time fails
- **Battery Optimization**: Reduce update frequency when backgrounded

### Data Usage
- **Minimal Payloads**: Only send necessary status information
- **Compression**: Compress JSON responses for mobile
- **Caching Headers**: Appropriate cache control for static content
- **Offline Support**: Basic functionality when connection poor

## Technical Requirements

### Real-Time Integration
- WebSocket connection for live updates
- RESTful API fallback for status polling
- Push notification support (future enhancement)
- Database triggers for status change events

### Security Considerations
- Order number validation to prevent unauthorized access
- Rate limiting on status check requests
- Personal information protection (phone numbers partially masked)
- Secure customer identification methods

### Cross-Platform Support
- Responsive design for all device sizes
- Progressive Web App (PWA) capabilities
- Share functionality with Web Share API
- Deep linking support for order tracking URLs