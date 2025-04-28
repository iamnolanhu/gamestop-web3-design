import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <div className="relative h-52 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {product.isPreorder && (
            <span className="bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
              PRE-ORDER
            </span>
          )}
          {product.salePrice && (
            <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
              SALE
            </span>
          )}
        </div>
        
        {/* Quick Actions */}
        <div className={`absolute right-2 top-2 flex flex-col gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
            <Heart size={16} className="text-white" />
          </button>
          <button className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition">
            <ShoppingCart size={16} className="text-white" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        {product.platform && (
          <span className="text-xs text-gray-400">{product.platform}</span>
        )}
        
        <h3 className="font-semibold text-white mb-2 line-clamp-2">{product.title}</h3>
        
        <div className="flex items-center justify-between">
          <div>
            {product.salePrice ? (
              <div className="flex items-center gap-2">
                <span className="text-red-500 font-bold">${product.salePrice.toFixed(2)}</span>
                <span className="text-gray-400 line-through text-sm">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-white font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-400 ml-1">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <button 
          className={`mt-4 w-full py-2 rounded-lg font-medium transition-colors ${
            product.inStock 
              ? 'bg-red-600 hover:bg-red-700 text-white' 
              : 'bg-gray-700 text-gray-300 cursor-not-allowed'
          }`}
          disabled={!product.inStock}
        >
          {product.inStock 
            ? (product.isPreorder ? 'Pre-order Now' : 'Add to Cart')
            : 'Out of Stock'
          }
        </button>
      </div>
    </div>
  );
};

export default ProductCard;