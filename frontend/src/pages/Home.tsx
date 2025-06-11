import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ShoppingCart, Store } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                Online Ordering System
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/menu">
                <Button variant="ghost">Browse Menu</Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost">Business Login</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Online Ordering Made Simple
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A complete online ordering platform for restaurants and customers.
            Browse menus, place orders, and manage your business all in one place.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/menu">
              <Button size="lg" className="flex items-center">
                Browse Menu <ShoppingCart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg">
                Start Your Business
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <ShoppingCart className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Easy Online Ordering</CardTitle>
              <CardDescription>
                Customers can browse your menu and place orders quickly without creating accounts.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Store className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Business Management</CardTitle>
              <CardDescription>
                Manage your menu, view orders, and update order status from your business dashboard.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Customer Friendly</CardTitle>
              <CardDescription>
                Simple ordering process with no sign-up required. Perfect for quick and easy orders.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            How It Works
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">For Customers</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Browse restaurant menus online</li>
                <li>• Add items to cart with quantities</li>
                <li>• Place orders without creating accounts</li>
                <li>• Provide contact info for order updates</li>
                <li>• Receive order confirmation instantly</li>
                <li>• Track order status updates</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">For Businesses</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Manage your restaurant menu online</li>
                <li>• Receive new orders in real-time</li>
                <li>• Confirm or decline orders quickly</li>
                <li>• View order history and details</li>
                <li>• Update customers on order status</li>
                <li>• Simple dashboard interface</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;