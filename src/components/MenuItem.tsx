import React from 'react';
import type { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <span className="text-lg font-bold text-blue-600">
            ₺{item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-gray-600 text-sm">{item.description}</p>
      </div>
    </div>
  );
}