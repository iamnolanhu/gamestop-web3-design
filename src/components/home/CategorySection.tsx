import React from 'react';
import { categories } from '../../data/products';

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Browse Categories</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <a 
              key={category.id}
              href={`/category/${category.slug}`}
              className="group bg-gray-800 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4 relative z-20 -mt-8">
                <h3 className="text-lg font-semibold text-white text-center">{category.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;