export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface Category {
  name: string;
  items: MenuItem[];
}

export interface Restaurant {
  id: string;
  name: string;
  logoUrl: string;
  categories: Category[];
}