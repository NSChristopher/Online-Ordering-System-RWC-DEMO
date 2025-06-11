import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed, Store, DollarSign } from 'lucide-react';
import { usePublicMenu } from '@/hooks/usePublicMenu';

const Home = () => {
  // For demo purposes, using store ID 2. In a real app, this would come from URL params or store selection
  const { menuItems, loading } = usePublicMenu(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <UtensilsCrossed className="h-8 w-8 mr-3 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">
                Mario's Pizza Restaurant
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  <Store className="h-4 w-4 mr-2" />
                  Store Owner
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm">Join as Owner</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Welcome to Our Restaurant
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Browse our delicious menu and discover your next favorite meal. 
              Fresh ingredients, authentic flavors, made with love.
            </p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Menu</h3>
          <p className="text-lg text-gray-600">
            Carefully crafted dishes made with the finest ingredients
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading our delicious menu...</p>
          </div>
        ) : menuItems.length === 0 ? (
          <Card className="text-center py-12">
            <CardContent>
              <UtensilsCrossed className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-700 mb-2">
                Menu Coming Soon
              </h4>
              <p className="text-gray-500">
                We're working on something delicious! Check back soon for our full menu.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{item.name}</CardTitle>
                      <CardDescription className="text-2xl font-bold text-green-600 mt-2">
                        <DollarSign className="h-5 w-5 inline mr-1" />
                        {item.price.toFixed(2)}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                {(item.description || item.imageUrl) && (
                  <CardContent>
                    {item.imageUrl && (
                      <img 
                        src={item.imageUrl} 
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-md mb-4"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                    {item.description && (
                      <p className="text-gray-600">{item.description}</p>
                    )}
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        )}

        {/* Call to Action */}
        {menuItems.length > 0 && (
          <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Order?
            </h4>
            <p className="text-gray-600 mb-6">
              Contact us to place your order or visit us in person!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Call to Order: (555) 123-4567
              </Button>
              <Button variant="outline" size="lg">
                Visit Our Location
              </Button>
            </div>
          </div>
        )}

        {/* Store Owner Section */}
        <div className="mt-16 bg-gray-100 rounded-lg p-8">
          <div className="text-center">
            <Store className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Restaurant Owner?
            </h4>
            <p className="text-gray-600 mb-6">
              Join our platform to manage your menu online and reach more customers.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/register">
                <Button>Create Store Account</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline">Owner Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;