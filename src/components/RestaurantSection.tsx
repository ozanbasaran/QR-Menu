import React from 'react';
import { MenuItem } from './MenuItem';
import type { Restaurant } from '../types';

interface RestaurantSectionProps {
  restaurant: Restaurant;
  selectedCategory: string;
}

export function RestaurantSection({ restaurant, selectedCategory }: RestaurantSectionProps) {
  const category = restaurant.categories.find(cat => cat.name === selectedCategory);
  
  if (!category) return null;

  return (
    <section 
      className="py-8" 
      id={`${restaurant.name.toLowerCase().replace(/\s+/g, '-')}-${selectedCategory.toLowerCase()}`}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">{restaurant.name}</h2>
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category.name}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}