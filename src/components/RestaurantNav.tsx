import React from 'react';
import { restaurants } from '../data/menu';

interface RestaurantNavProps {
  selectedRestaurant: string;
  onSelectRestaurant: (restaurant: string) => void;
}

export function RestaurantNav({ selectedRestaurant, onSelectRestaurant }: RestaurantNavProps) {
  return (
    <div className="overflow-x-auto bg-white">
      <div className="flex space-x-2 p-4 min-w-max max-w-7xl mx-auto">
        {restaurants.map((restaurant) => (
          <button
            key={restaurant}
            onClick={() => onSelectRestaurant(restaurant)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedRestaurant === restaurant
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {restaurant}
          </button>
        ))}
      </div>
    </div>
  );
}