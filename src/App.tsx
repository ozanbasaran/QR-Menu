import React, { useState, useEffect } from 'react';
import { RestaurantNav } from './components/RestaurantNav';
import { CategoryNav } from './components/CategoryNav';
import { RestaurantSection } from './components/RestaurantSection';
import { restaurants, restaurantMenus, getRestaurantCategories } from './data/menu';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Update selected category when restaurant changes
  useEffect(() => {
    const categories = getRestaurantCategories(selectedRestaurant);
    setSelectedCategory(categories[0] || '');
  }, [selectedRestaurant]);

  // Find the current restaurant data
  const currentRestaurant = restaurantMenus.find(r => r.name === selectedRestaurant);

  // Scroll behavior to hide/show header elements
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Detect if the user is scrolling down or up
      if (currentScrollPos > prevScrollPos) {
        // Scrolling down, hide header
        setIsHeaderVisible(false);
      } else {
        // Scrolling up, show header if at the top
        if (currentScrollPos === 0 || window.innerWidth > 768) {
          setIsHeaderVisible(true); // Show on scroll up and on desktop
        }
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header 
        className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${isHeaderVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center items-center w-full">
            <h1 className="text-2xl font-bold text-gray-900 mx-auto">BSN Cloud Kitchen</h1>
          </div>
        </div>

        <div className="border-t">
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

        <div className="border-t">
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
