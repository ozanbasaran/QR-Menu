import React from 'react';
import { getRestaurantCategories } from '../data/menu';

interface CategoryNavProps {
  selectedCategory: string;
  selectedRestaurant: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryNav({ selectedCategory, selectedRestaurant, onSelectCategory }: CategoryNavProps) {
  const categories = getRestaurantCategories(selectedRestaurant);

  return (
    <div className="overflow-x-auto bg-white">
      <div className="flex space-x-2 p-4 min-w-max max-w-7xl mx-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}