import React from 'react';
import { Mail } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail size={48} className="text-red-500 mb-4 mx-auto" />
          <h2 className="text-3xl font-bold text-white mb-4">Stay in the Game</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for the latest gaming news, exclusive offers, and early access to pre-orders.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-gray-800 border border-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
            <button 
              type="submit" 
              className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition transform hover:scale-105 duration-300"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-gray-500 text-sm mt-4">
            By subscribing, you agree to receive marketing emails and accept our 
            <a href="/privacy" className="text-red-500 hover:text-red-400 ml-1">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;