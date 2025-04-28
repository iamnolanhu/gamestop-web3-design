import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Twitch } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><a href="/category/games" className="text-gray-400 hover:text-white transition">Games</a></li>
              <li><a href="/category/consoles" className="text-gray-400 hover:text-white transition">Consoles</a></li>
              <li><a href="/category/accessories" className="text-gray-400 hover:text-white transition">Accessories</a></li>
              <li><a href="/category/collectibles" className="text-gray-400 hover:text-white transition">Collectibles</a></li>
              <li><a href="/digital-assets" className="text-gray-400 hover:text-white transition">Digital Assets</a></li>
              <li><a href="/sale" className="text-gray-400 hover:text-white transition">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Account</h3>
            <ul className="space-y-2">
              <li><a href="/profile" className="text-gray-400 hover:text-white transition">My Profile</a></li>
              <li><a href="/orders" className="text-gray-400 hover:text-white transition">Orders</a></li>
              <li><a href="/digital-wallet" className="text-gray-400 hover:text-white transition">Digital Wallet</a></li>
              <li><a href="/wishlist" className="text-gray-400 hover:text-white transition">Wishlist</a></li>
              <li><a href="/rewards" className="text-gray-400 hover:text-white transition">GameStop Rewards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Help & Info</h3>
            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="/shipping" className="text-gray-400 hover:text-white transition">Shipping</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white transition">Returns</a></li>
              <li><a href="/store-finder" className="text-gray-400 hover:text-white transition">Store Finder</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition">FAQs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Youtube />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Twitch />
              </a>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest gaming news and exclusive offers.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <button 
                type="submit" 
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-xl font-bold">Game<span className="text-red-600">Stop</span></span>
            </div>
            
            <div className="text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} GameStop. All rights reserved.</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-gray-400">
                <li><a href="/terms" className="hover:text-white transition">Terms</a></li>
                <li><a href="/privacy" className="hover:text-white transition">Privacy</a></li>
                <li><a href="/cookies" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;