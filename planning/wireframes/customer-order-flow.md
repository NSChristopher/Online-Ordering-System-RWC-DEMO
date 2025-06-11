# Customer Order Flow Wireframe

## User Story
*As a customer, I want to select menu items and submit an order online so that I can order conveniently from my device.*

## Flow Overview
1. **Cart Review**: Review selected items and quantities
2. **Customer Info**: Provide contact and pickup/delivery details
3. **Order Confirmation**: Review order and submit
4. **Order Status**: Track order progress

## 1. Cart Review Page

### Desktop Layout
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [← Back to Menu]                                          [Logo]             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─ Your Cart ──────────────────────┐ ┌─ Order Summary ──────────────────────┐│
│ │                                  │ │                                      ││
│ │ ┌─ Pepperoni Pizza ─────────────┐ │ │ Subtotal:              $35.98      ││
│ │ │ [Image] Large                 │ │ │ Tax (8.5%):             $3.06      ││
│ │ │ Pepperoni Pizza        $18.99 │ │ │ Delivery Fee:           $3.99      ││
│ │ │ Extra cheese, thick crust     │ │ │                                    ││
│ │ │ [-] Qty: 1 [+]      [Remove] │ │ │ Total:                $43.03      ││
│ │ └───────────────────────────────┘ │ │                                    ││
│ │                                  │ │ [Continue to Checkout]              ││
│ │ ┌─ Caesar Salad ────────────────┐ │ │                                    ││
│ │ │ [Image] Regular               │ │ └────────────────────────────────────┘│
│ │ │ Caesar Salad           $16.99 │ │                                      │
│ │ │ Extra croutons, no anchovies  │ │                                      │
│ │ │ [-] Qty: 1 [+]      [Remove] │ │                                      │
│ │ └───────────────────────────────┘ │                                      │
│ │                                  │                                      │
│ │ [← Add More Items]               │                                      │
│ └──────────────────────────────────┘                                      │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Mobile Layout
```
┌─────────────────────────────────┐
│ ← Your Cart (2 items)           │
├─────────────────────────────────┤
│ ┌─ Pepperoni Pizza ────────────┐ │
│ │ [Img] Large Pepperoni $18.99 │ │
│ │ Extra cheese, thick crust    │ │
│ │ [-] 1 [+]         [Remove]   │ │
│ └──────────────────────────────┘ │
│                                 │
│ ┌─ Caesar Salad ───────────────┐ │
│ │ [Img] Caesar Salad    $16.99 │ │
│ │ Extra croutons, no anchovies │ │
│ │ [-] 1 [+]         [Remove]   │ │
│ └──────────────────────────────┘ │
│                                 │
│ [+ Add More Items]              │
│                                 │
│ ┌─ Order Summary ──────────────┐ │
│ │ Subtotal:            $35.98  │ │
│ │ Tax (8.5%):           $3.06  │ │
│ │ Delivery Fee:         $3.99  │ │
│ │ ─────────────────────────────  │ │
│ │ Total:              $43.03  │ │
│ └───────────────────────────────┘ │
│                                 │
│ [Continue to Checkout]          │
└─────────────────────────────────┘
```

## 2. Customer Information Page

### Desktop Layout
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [← Back to Cart]                                          [Logo]             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─ Customer Information ────────────────┐ ┌─ Order Summary ──────────────────┐│
│ │                                       │ │                                  ││
│ │ ◉ Pickup    ○ Delivery                │ │ 2 items                          ││
│ │                                       │ │ Total: $43.03                    ││
│ │ Contact Information                   │ │                                  ││
│ │ ┌─────────────────────────────────────┐ │ │ Estimated Time:                  ││
│ │ │ First Name *                       │ │ │ 25-30 minutes                    ││
│ │ └─────────────────────────────────────┘ │ └──────────────────────────────────┘│
│ │ ┌─────────────────────────────────────┐ │                                  │
│ │ │ Last Name *                        │ │                                  │
│ │ └─────────────────────────────────────┘ │                                  │
│ │ ┌─────────────────────────────────────┐ │                                  │
│ │ │ Phone Number *                     │ │                                  │
│ │ └─────────────────────────────────────┘ │                                  │
│ │ ┌─────────────────────────────────────┐ │                                  │
│ │ │ Email Address                      │ │                                  │
│ │ └─────────────────────────────────────┘ │                                  │
│ │                                       │ │                                  │
│ │ Special Instructions                  │ │                                  │
│ │ ┌─────────────────────────────────────┐ │                                  │
│ │ │ Any special requests or notes...   │ │                                  │
│ │ │                                    │ │                                  │
│ │ └─────────────────────────────────────┘ │                                  │
│ │                                       │ │                                  │
│ │ [Review Order]                        │ │                                  │
│ └───────────────────────────────────────┘ │                                  │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 3. Order Confirmation Page

### Layout
```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [← Edit Order]                                            [Logo]             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─ Order Review ─────────────────────────────────────────────────────────────┐│
│ │                                                                           ││
│ │ Order Type: Pickup                     Contact: John Smith                ││
│ │ Estimated Time: 25-30 minutes          Phone: (555) 123-4567             ││
│ │                                                                           ││
│ │ ┌─ Items ──────────────────────────────────────────────────────────────┐  ││
│ │ │ • Pepperoni Pizza (Large)                                    $18.99  │  ││
│ │ │   Extra cheese, thick crust                                          │  ││
│ │ │ • Caesar Salad (Regular)                                     $16.99  │  ││
│ │ │   Extra croutons, no anchovies                                       │  ││
│ │ └──────────────────────────────────────────────────────────────────────┘  ││
│ │                                                                           ││
│ │ ┌─ Pricing ────────────────────────────────────────────────────────────┐  ││
│ │ │ Subtotal:                                                    $35.98  │  ││
│ │ │ Tax (8.5%):                                                   $3.06  │  ││
│ │ │ Delivery Fee:                                                 $3.99  │  ││
│ │ │ ─────────────────────────────────────────────────────────────────────│  ││
│ │ │ Total:                                                      $43.03  │  ││
│ │ └──────────────────────────────────────────────────────────────────────┘  ││
│ │                                                                           ││
│ │ Special Instructions: Please call when ready for pickup                   ││
│ │                                                                           ││
│ │ [← Edit Order]                                   [Submit Order]           ││
│ └───────────────────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────────────────┘
```

## 4. Order Submitted Success Page

### Layout
```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                           [Logo]             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                                    ✓                                       │
│                          Order Submitted Successfully!                      │
│                                                                             │
│                              Order #OO-2024-001                             │
│                                                                             │
│           We've received your order and will begin preparation shortly.     │
│                                                                             │
│              Estimated pickup time: 25-30 minutes                          │
│              We'll call you at (555) 123-4567 when ready                   │
│                                                                             │
│                          [Track Your Order]                                │
│                                                                             │
│                          [Order Another Item]                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Accessibility Features

### Form Accessibility
- **Required Fields**: Clear asterisk (*) indicators and ARIA labels
- **Error Handling**: Inline validation with clear error messages
- **Label Association**: All inputs properly labeled
- **Field Groups**: Related fields grouped with fieldset/legend

### Keyboard Navigation
- **Tab Order**: Logical flow through form elements
- **Button States**: Clear focus indicators on all interactive elements
- **Form Submission**: Enter key submits forms appropriately

### Screen Reader Support
- **Progress Indicators**: "Step 1 of 3" announced
- **Order Summary**: Table structure for pricing breakdown
- **Status Updates**: Live regions for cart updates

## Interactive Behaviors

### Cart Management
- **Quantity Updates**: Immediate price recalculation
- **Remove Items**: Confirmation dialog for item removal
- **Empty Cart**: Clear messaging and link back to menu

### Form Validation
- **Real-time**: Phone number format validation
- **Required Fields**: Cannot proceed without required info
- **Email Validation**: Basic email format checking

### Order Processing
- **Loading States**: Spinner and "Processing..." message
- **Error Handling**: Retry mechanism for failed submissions
- **Success Feedback**: Clear confirmation with order number

## User Testing Scenarios

### Happy Path Testing
1. Add items to cart from menu
2. Adjust quantities and review cart
3. Fill out customer information
4. Review and submit order
5. Receive confirmation

### Error Handling Testing
1. Try to submit with missing required fields
2. Test with invalid phone/email formats
3. Handle network errors during submission
4. Test cart with out-of-stock items

### Usability Metrics
- **Completion Rate**: > 90% for valid orders
- **Time to Complete**: < 3 minutes for returning customers
- **Error Recovery**: Users can easily correct form errors
- **Mobile Usability**: Smooth experience on small screens

## Technical Considerations

### Data Validation
- Frontend validation for immediate feedback
- Backend validation for security
- Sanitization of special instructions input

### State Management
- Cart persisted in localStorage
- Form data maintained during navigation
- Order submission with proper error handling

### Performance
- Optimized images for menu items
- Minimal re-renders during cart updates
- Fast form validation responses