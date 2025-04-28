import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Banner } from '../../types';
import { banners } from '../../data/products';

const HeroSection: React.FC = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextBanner = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }
  };

  const prevBanner = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextBanner();
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentBanner]);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section className="relative h-screen max-h-[800px] overflow-hidden">
      {/* Banners */}
      <div className="absolute inset-0">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container mx-auto px-4">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                    {banner.title}
                  </h2>
                  {banner.subtitle && (
                    <p className="text-xl md:text-2xl text-gray-200 mb-8">
                      {banner.subtitle}
                    </p>
                  )}
                  <a
                    href={banner.link}
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition transform hover:scale-105 duration-300"
                  >
                    {banner.buttonText || 'Shop Now'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30 transition"
        onClick={prevBanner}
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full z-30 transition"
        onClick={nextBanner}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-30">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentBanner
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;