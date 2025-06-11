# Menu Management (CRUD) Wireframe

## User Story
*As a store owner, I want to create and update my menu online so that my customers always see accurate offerings.*

## Page Overview
The menu management interface allows store owners to create, read, update, and delete menu items and categories with an intuitive drag-and-drop interface.

## Desktop Layout (1024px+)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ [Logo] Menu Management              [Settings] [Profile] [Logout] [Help]     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ ┌─ Navigation ────┐ ┌─ Menu Management ──────────────────────────────────────┐│
│ │ 🏠 Dashboard    │ │                                                       ││
│ │ 📋 Orders       │ │ ┌─ Actions ────────────────────────────────────────┐  ││
│ │ 🍕 Menu         │ │ │ [+ Add Category] [+ Add Item] [📥 Import] [📤 Export] │ ││
│ │ 📊 Analytics    │ │ └──────────────────────────────────────────────────┘  ││
│ │ ⚙️  Settings    │ │                                                       ││
│ │                 │ │ ┌─ Categories & Items ─────────────────────────────┐  ││
│ │                 │ │ │                                                   │  ││
│ │                 │ │ │ ▼ Pizza (12 items) [✏️ Edit] [🗑️ Delete] [👁️ Hide]   │  ││
│ │                 │ │ │   ┌─ Pepperoni Pizza ─────────────────────────┐  │  ││
│ │                 │ │ │   │ [Image] Large: $18.99, Medium: $15.99    │  │  ││
│ │                 │ │ │   │ Available ✅  Popular ⭐                  │  │  ││
│ │                 │ │ │   │ [✏️ Edit] [📋 Duplicate] [🗑️ Delete] [👁️ Hide] │  │  ││
│ │                 │ │ │   └───────────────────────────────────────────┘  │  ││
│ │                 │ │ │   ┌─ Margherita Pizza ────────────────────────┐  │  ││
│ │                 │ │ │   │ [Image] Large: $16.99, Medium: $13.99    │  │  ││
│ │                 │ │ │   │ Available ✅  Popular ⭐                  │  │  ││
│ │                 │ │ │   │ [✏️ Edit] [📋 Duplicate] [🗑️ Delete] [👁️ Hide] │  │  ││
│ │                 │ │ │   └───────────────────────────────────────────┘  │  ││
│ │                 │ │ │   [+ Add Item to Pizza]                       │  │  ││
│ │                 │ │ │                                               │  │  ││
│ │                 │ │ │ ▼ Salads (5 items) [✏️ Edit] [🗑️ Delete] [👁️ Hide]    │  ││
│ │                 │ │ │   ┌─ Caesar Salad ─────────────────────────┐    │  │  ││
│ │                 │ │ │   │ [Image] Regular: $16.99               │    │  │  ││
│ │                 │ │ │   │ Available ✅                          │    │  │  ││
│ │                 │ │ │   │ [✏️ Edit] [📋 Duplicate] [🗑️ Delete] [👁️ Hide] │    │  │  ││
│ │                 │ │ │   └───────────────────────────────────────┘    │  │  ││
│ │                 │ │ │   [+ Add Item to Salads]                    │  │  ││
│ │                 │ │ └───────────────────────────────────────────────┘  ││
│ │                 │ │                                                     │
│ │                 │ │ [💾 Save Changes] [🔄 Reset] [👀 Preview Menu]      │
│ │                 │ └─────────────────────────────────────────────────────┘ │
│ └─────────────────┘                                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Add/Edit Item Modal

### Desktop Modal
```
┌─ Add New Menu Item ─────────────────────────────────────────────────────────┐
│                                                                    [✕ Close] │
│                                                                             │
│ ┌─ Basic Information ──────────────┐ ┌─ Image & Display ───────────────────┐ │
│ │ Item Name *                      │ │ ┌─ Upload Image ──────────────────┐ │ │
│ │ ┌────────────────────────────────┐ │ │ │ [📷 Upload] [🔗 URL] [📁 Gallery] │ │ │
│ │ │ Pepperoni Pizza               │ │ │ │                                 │ │ │
│ │ └────────────────────────────────┘ │ │ │ [Drag & Drop Image Here]        │ │ │
│ │                                  │ │ │     or click to browse          │ │ │
│ │ Category *                       │ │ │                                 │ │ │
│ │ ┌────────────────────────────────┐ │ │ └─────────────────────────────────┘ │ │
│ │ │ Pizza                ▼        │ │ │                                   │ │
│ │ └────────────────────────────────┘ │ │ ☐ Mark as Popular Item            │ │
│ │                                  │ │ ☐ Featured on Homepage            │ │
│ │ Description                      │ │ ☐ Available for Order             │ │
│ │ ┌────────────────────────────────┐ │ └───────────────────────────────────┘ │
│ │ │ Classic pepperoni with         │ │                                     │
│ │ │ mozzarella cheese and tomato   │ │ ┌─ Pricing & Sizes ─────────────────┐ │
│ │ │ sauce on our signature crust   │ │ │ ☐ Single Price ☑ Multiple Sizes   │ │
│ │ │                                │ │ │                                   │ │
│ │ └────────────────────────────────┘ │ │ Small: $ [12.99] [+ Add Size]     │ │
│ └──────────────────────────────────┘ │ Medium: $ [15.99] [🗑️ Remove]       │ │
│                                      │ Large: $ [18.99] [🗑️ Remove]        │ │
│ ┌─ Customization Options ──────────┐ │                                   │ │
│ │ ☑ Allow Customizations           │ │ [+ Add Another Size]               │ │
│ │                                  │ │                                   │ │
│ │ Toppings: [Manage Toppings]      │ └───────────────────────────────────┘ │
│ │ Crust: [Manage Crust Options]    │                                     │
│ │ Size: [Already configured above] │                                     │
│ │                                  │                                     │
│ │ [+ Add Custom Option Group]      │                                     │
│ └──────────────────────────────────┘                                     │
│                                                                           │
│ [Cancel]                                      [Save as Draft] [Publish]  │
└───────────────────────────────────────────────────────────────────────────┘
```

## Mobile Layout (320px-767px)

```
┌─────────────────────────────────┐
│ ☰ Menu Management   [+ Add Item] │
├─────────────────────────────────┤
│ [Search menu items...]          │
├─────────────────────────────────┤
│ ┌─ Quick Actions ──────────────┐ │
│ │ [+ Category] [📥 Import]      │ │
│ │ [👀 Preview] [📤 Export]       │ │
│ └───────────────────────────────┘ │
│                                 │
│ ▼ Pizza (12 items) [✏️] [🗑️] [👁️] │
│                                 │
│ ┌─ Pepperoni Pizza ────────────┐ │
│ │ [Img] $15.99-$18.99          │ │
│ │ Available ✅ Popular ⭐       │ │
│ │ [Edit] [Copy] [Del] [Hide]   │ │
│ └──────────────────────────────┘ │
│                                 │
│ ┌─ Margherita Pizza ───────────┐ │
│ │ [Img] $13.99-$16.99          │ │
│ │ Available ✅ Popular ⭐       │ │
│ │ [Edit] [Copy] [Del] [Hide]   │ │
│ └──────────────────────────────┘ │
│                                 │
│ [+ Add Item to Pizza]           │
│                                 │
│ ▼ Salads (5 items) [✏️] [🗑️] [👁️]  │
│                                 │
│ [More categories...]            │
│                                 │
│ [💾 Save All Changes]            │
└─────────────────────────────────┘
```

## Category Management Modal

### Add/Edit Category
```
┌─ Add New Category ──────────────────────────────────────────────────────────┐
│                                                                    [✕ Close] │
│                                                                             │
│ Category Name *                                                             │
│ ┌───────────────────────────────────────────────────────────────────────────┐ │
│ │ Appetizers                                                               │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ Description                                                                 │
│ ┌───────────────────────────────────────────────────────────────────────────┐ │
│ │ Delicious starters to begin your meal                                   │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ Display Order                                                               │
│ ┌───────────────────────────────────────────────────────────────────────────┐ │
│ │ 3                                                                        │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│ ☑ Visible to customers                                                      │
│ ☐ Featured category                                                         │
│                                                                             │
│ [Cancel]                                                          [Save]   │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Bulk Operations Interface

### Multi-Select Actions
```
┌─ Bulk Actions ──────────────────────────────────────────────────────────────┐
│ 3 items selected                                                   [✕ Clear] │
│                                                                             │
│ [Hide Selected] [Delete Selected] [Duplicate Selected] [Move to Category ▼] │
│                                                                             │
│ ☑ Pepperoni Pizza                                                           │
│ ☑ Margherita Pizza                                                          │
│ ☐ Hawaiian Pizza                                                            │
│ ☑ Meat Lovers Pizza                                                         │
│ ☐ Veggie Supreme Pizza                                                      │
│                                                                             │
│ [Apply Actions]                                               [Cancel]     │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Accessibility Features

### Keyboard Navigation
- **Tab Order**: Categories → Items → Action buttons
- **Arrow Keys**: Navigate between items within categories
- **Enter/Space**: Activate edit mode or action buttons
- **Escape**: Cancel edit mode or close modals

### Screen Reader Support
- **Item Status**: "Pepperoni Pizza, available, popular item, has 3 size options"
- **Category Headings**: Proper heading structure (h2 for categories, h3 for items)
- **Form Labels**: All form inputs properly labeled
- **Action Context**: "Edit Pepperoni Pizza" instead of just "Edit"

### Visual Accessibility
- **High Contrast**: Status indicators meet WCAG AA standards
- **Focus Indicators**: Clear outlines on interactive elements
- **Icon Labels**: Text labels alongside icons
- **Color Independence**: Status shown with icons and text, not just color

## Interactive Behaviors

### Drag and Drop
- **Reorder Items**: Drag items within or between categories
- **Reorder Categories**: Drag categories to change display order
- **Visual Feedback**: Clear drop zones and drag indicators
- **Touch Support**: Long-press on mobile to initiate drag

### Live Preview
- **Customer View**: Toggle to see menu as customers see it
- **Changes Highlight**: Show unsaved changes in different color
- **Auto-save Draft**: Save progress automatically every 30 seconds

### Image Management
- **Upload Options**: File upload, URL input, or select from gallery
- **Image Optimization**: Automatic resize and compression
- **Alt Text**: Required alt text for accessibility
- **Placeholder Images**: Default images for items without photos

## Data Management Features

### Import/Export
- **CSV Import**: Bulk upload menu items from spreadsheet
- **JSON Export**: Export for backup or migration
- **Template Download**: CSV template with required columns
- **Error Handling**: Clear feedback on import errors

### Version Control
- **Change History**: Track all menu modifications
- **Rollback**: Restore previous versions
- **Draft Mode**: Work on changes without affecting live menu
- **Publishing**: One-click to make changes live

### Inventory Integration
- **Stock Levels**: Mark items as out of stock
- **Auto-hide**: Automatically hide out-of-stock items
- **Restock Alerts**: Notifications when items need restocking
- **Seasonal Items**: Schedule items to appear/disappear by date

## Validation and Error Handling

### Required Field Validation
- **Item Name**: Must be unique within category
- **Price**: Must be valid currency format
- **Category**: Must select existing category
- **Image**: Alt text required if image provided

### Business Rule Validation
- **Pricing Logic**: Large size can't cost less than small
- **Category Limits**: Maximum items per category (configurable)
- **Duplicate Detection**: Warn about similar item names
- **Availability**: Can't hide category if it has visible items

### Error Recovery
- **Auto-save**: Prevent data loss from browser crashes
- **Conflict Resolution**: Handle simultaneous edits gracefully
- **Offline Mode**: Allow editing when connection is poor
- **Sync Indicators**: Show when changes are being saved

## User Testing Scenarios

### Common Tasks
1. Add a new menu item with multiple sizes
2. Update pricing for existing items
3. Create a new category and move items into it
4. Upload and replace item images
5. Hide items that are temporarily unavailable

### Advanced Operations
1. Import a complete menu from CSV
2. Reorganize menu categories and items
3. Set up seasonal item scheduling
4. Manage complex customization options
5. Use bulk operations to update multiple items

### Error Scenarios
1. Handle upload of oversized images
2. Recover from network disconnection during save
3. Resolve conflicts when multiple users edit simultaneously
4. Import CSV with missing or invalid data
5. Manage insufficient storage space for images

## Performance Considerations

### Loading Optimization
- **Lazy Loading**: Load images and non-critical data on demand
- **Pagination**: Handle large menus (>100 items) efficiently
- **Caching**: Cache menu data for faster subsequent loads
- **Optimistic Updates**: Show changes immediately, sync in background

### Image Handling
- **Compression**: Automatic image optimization
- **CDN Integration**: Fast image delivery
- **Progressive Loading**: Show low-res images first
- **Responsive Images**: Serve appropriate sizes for device

### Data Efficiency
- **Delta Updates**: Only sync changed data
- **Batch Operations**: Group multiple changes into single request
- **Background Sync**: Process non-critical updates in background
- **Connection Awareness**: Adjust behavior based on connection speed