import React, { useState } from 'react';
import { MenuItem } from './MenuItem';
import { ArrowUpDown } from 'lucide-react';
import type { Restaurant } from '../types';

interface RestaurantSectionProps {
  restaurant: Restaurant;
  selectedCategory: string;
}

export function RestaurantSection({ restaurant, selectedCategory }: RestaurantSectionProps) {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const category = restaurant.categories.find(cat => cat.name === selectedCategory);
  
  if (!category) return null;

  const sortedItems = [...category.items].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  const toggleSort = () => {
    setSortOrder(current => current === 'asc' ? 'desc' : 'asc');
  };

  return (
    <section 
      className="py-8" 
      id={`${restaurant.name.toLowerCase().replace(/\s+/g, '-')}-${selectedCategory.toLowerCase()}`}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{restaurant.name}</h2>
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
          <button
            onClick={toggleSort}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <ArrowUpDown size={16} />
            Fiyata Göre Sırala ({sortOrder === 'desc' ? 'Ucuzdan Pahalıya' : 'Pahalıdan Ucuza'})
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}