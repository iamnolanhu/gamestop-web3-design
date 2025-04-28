import React from 'react';
import { featuredProducts } from '../../data/products';
import ProductCard from '../products/ProductCard';

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Games</h2>
          <a href="/products" className="text-red-500 hover:text-red-600 transition">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;