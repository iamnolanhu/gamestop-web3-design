// Type definitions for the GameStop website

export interface Product {
  id: string;
  title: string;
  price: number;
  salePrice?: number;
  image: string;
  category: string;
  platform?: string;
  rating: number;
  inStock: boolean;
  isNew?: boolean;
  isPreorder?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image?: string;
}

export interface Banner {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  link: string;
  buttonText?: string;
}

export interface User {
  address?: string; // Web3 wallet address
  username?: string;
  avatarUrl?: string;
  isConnected: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface DigitalAsset {
  id: string;
  name: string;
  image: string;
  description: string;
  type: 'NFT' | 'GAME' | 'DLC';
}