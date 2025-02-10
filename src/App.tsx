import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { RestaurantNav } from './components/RestaurantNav';
import { CategoryNav } from './components/CategoryNav';
import { RestaurantSection } from './components/RestaurantSection';
import { restaurants, restaurantMenus, getRestaurantCategories } from './data/menu';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // Track header visibility

  // Update selected category when restaurant changes
  useEffect(() => {
    const categories = getRestaurantCategories(selectedRestaurant);
    setSelectedCategory(categories[0] || '');
  }, [selectedRestaurant]);

  // Find the current restaurant data
  const currentRestaurant = restaurantMenus.find(r => r.name === selectedRestaurant);

  // Detect scroll direction to hide/show header
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header
        className={`transition-all duration-300 bg-white shadow-md sticky top-0 z-50 ${isHeaderVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center items-center w-full">
            <h1 className="text-2xl font-bold text-gray-900 mx-auto">BSN Cloud Kitchen</h1>
            <button
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        <div className={`${isNavOpen ? 'block' : 'hidden'} md:block border-t`}>
          <RestaurantNav
            selectedRestaurant={selectedRestaurant}
            onSelectRestaurant={(restaurant) => {
              setSelectedRestaurant(restaurant);
              setIsNavOpen(false);
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

        <div className={`${isNavOpen ? 'block' : 'hidden'} md:block border-t`}>
          <CategoryNav
            selectedCategory={selectedCategory}
            selectedRestaurant={selectedRestaurant}
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setIsNavOpen(false);
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
