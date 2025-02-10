import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { RestaurantNav } from './components/RestaurantNav';
import { CategoryNav } from './components/CategoryNav';
import { RestaurantSection } from './components/RestaurantSection';
import { restaurants, restaurantMenus, getRestaurantCategories } from './data/menu';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Update selected category when restaurant changes
  useEffect(() => {
    const categories = getRestaurantCategories(selectedRestaurant);
    setSelectedCategory(categories[0] || '');
  }, [selectedRestaurant]);

  // Find the current restaurant data
  const currentRestaurant = restaurantMenus.find(r => r.name === selectedRestaurant);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center items-center w-full">
            <h1 className="text-2xl font-bold text-gray-900 mx-auto">BSN Cloud Kitchen</h1>
          </div>
        </div>

        <div className="border-t">
          {/* Always render RestaurantNav */}
          <RestaurantNav
            selectedRestaurant={selectedRestaurant}
            onSelectRestaurant={(restaurant) => {
              setSelectedRestaurant(restaurant);
            }}
          />
        </div>

        {currentRestaurant && (
          <div className="border-t border-b bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex justify-center items-center">
                <img
                  src={currentRestaurant.logoUrl}
                  alt={`${currentRestaurant.name} logo`}
                  className="h-40 object-contain"
                />
              </div>
            </div>
          </div>
        )}

        <div className="border-t">
          {/* Always render CategoryNav and make it scrollable */}
          <CategoryNav
            selectedCategory={selectedCategory}
            selectedRestaurant={selectedRestaurant}
            onSelectCategory={(category) => {
              setSelectedCategory(category);
            }}
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {restaurantMenus.map((restaurant) => (
          restaurant.name === selectedRestaurant && (
            <RestaurantSection 
              key={restaurant.id} 
              restaurant={restaurant}
              selectedCategory={selectedCategory}
            />
          )
        ))}
      </main>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">
            Afiyet Olsun
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
