import React from 'react';
import { MenuItem } from './MenuItem';
import type { MenuItem as MenuItemType } from '../types';

interface MenuSectionProps {
  category_dt: string;
  items: MenuItemType[];
}

export function MenuSection({ category_dt, items }: MenuSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="py-8" id={category.toLowerCase()}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}