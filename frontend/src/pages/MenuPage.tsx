import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import api from '../lib/api';
import { MenuItem, CartItem, Order, OrderResponse } from '../types';

interface MenuPageProps {
  storeId?: number;
}

const MenuPage: React.FC<MenuPageProps> = ({ storeId = 1 }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    contact: ''
  });

  // Load menu items
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/menu?storeId=${storeId}`);
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
        toast.error('Failed to load menu');
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [storeId]);

  // Add item to cart
  const addToCart = (menuItem: MenuItem, quantity: number = 1) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.menuItem.id === menuItem.id);
      if (existingItem) {
        return prev.map(item =>
          item.menuItem.id === menuItem.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, { menuItem, quantity }];
      }
    });
    toast.success(`Added ${menuItem.name} to cart`);
  };

  // Update cart item quantity
  const updateCartQuantity = (menuItemId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(menuItemId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.menuItem.id === menuItemId
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Remove item from cart
  const removeFromCart = (menuItemId: number) => {
    setCart(prev => prev.filter(item => item.menuItem.id !== menuItemId));
  };

  // Calculate total
  const getTotal = () => {
    return cart.reduce((total, item) => total + (item.menuItem.price * item.quantity), 0);
  };

  // Handle order submission
  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }

    if (!customerInfo.name.trim() || !customerInfo.contact.trim()) {
      toast.error('Please provide your name and contact information');
      return;
    }

    try {
      setSubmitting(true);
      
      const orderData: Order = {
        storeId,
        customerName: customerInfo.name.trim(),
        customerContact: customerInfo.contact.trim(),
        items: cart.map(item => ({
          menuItemId: item.menuItem.id,
          quantity: item.quantity
        }))
      };

      const response = await api.post<OrderResponse>('/orders', orderData);
      
      toast.success(`Order placed successfully! Order ID: ${response.data.orderId}`);
      
      // Reset form
      setCart([]);
      setCustomerInfo({ name: '', contact: '' });
      setShowCheckout(false);
      
    } catch (error: any) {
      console.error('Error placing order:', error);
      toast.error(error.response?.data?.error || 'Failed to place order');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading menu...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Demo Restaurant</h1>
            <p className="text-gray-600">Browse our menu and place your order</p>
          </div>
          
          {cart.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900">
                  Cart ({cart.length} {cart.length === 1 ? 'item' : 'items'})
                </span>
                <span className="text-lg font-bold text-green-600">
                  ${getTotal().toFixed(2)}
                </span>
              </div>
              <Button 
                onClick={() => setShowCheckout(true)} 
                className="w-full mt-2"
                size="sm"
              >
                Checkout
              </Button>
            </div>
          )}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">
                    ${item.price.toFixed(2)}
                  </span>
                  <Button onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {menuItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No menu items available at the moment.</p>
          </div>
        )}

        {/* Checkout Modal */}
        {showCheckout && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">Checkout</h2>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowCheckout(false)}
                  >
                    ×
                  </Button>
                </div>

                {/* Cart Items */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Your Order</h3>
                  {cart.map((item) => (
                    <div key={item.menuItem.id} className="flex justify-between items-center py-2 border-b">
                      <div className="flex-1">
                        <p className="font-medium">{item.menuItem.name}</p>
                        <p className="text-sm text-gray-500">${item.menuItem.price.toFixed(2)} each</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateCartQuantity(item.menuItem.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="px-2">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateCartQuantity(item.menuItem.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromCart(item.menuItem.id)}
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 font-bold text-lg">
                    Total: ${getTotal().toFixed(2)}
                  </div>
                </div>

                {/* Customer Information Form */}
                <form onSubmit={handleSubmitOrder}>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Your Name</Label>
                      <Input
                        id="name"
                        type="text"
                        value={customerInfo.name}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="contact">Contact (Email or Phone)</Label>
                      <Input
                        id="contact"
                        type="text"
                        value={customerInfo.contact}
                        onChange={(e) => setCustomerInfo(prev => ({ ...prev, contact: e.target.value }))}
                        required
                        placeholder="Enter your email or phone number"
                      />
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowCheckout(false)}
                      className="flex-1"
                    >
                      Back to Menu
                    </Button>
                    <Button
                      type="submit"
                      disabled={submitting || cart.length === 0}
                      className="flex-1"
                    >
                      {submitting ? 'Placing Order...' : 'Place Order'}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;