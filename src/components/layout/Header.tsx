import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ShoppingCart, Heart, User as UserIcon } from 'lucide-react';
import { useWeb3 } from '../../contexts/Web3Context';
import UserDropdown from './UserDropdown';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { user } = useWeb3();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">Game<span className="text-red-600">Stop</span></span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/category/games" className="text-white hover:text-red-500 transition">Games</a>
            <a href="/category/consoles" className="text-white hover:text-red-500 transition">Consoles</a>
            <a href="/category/accessories" className="text-white hover:text-red-500 transition">Accessories</a>
            <a href="/category/collectibles" className="text-white hover:text-red-500 transition">Collectibles</a>
            <a href="/digital-assets" className="text-white hover:text-red-500 transition">Digital Assets</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-red-500 transition">
              <Search size={20} />
            </button>
            <a href="/wishlist" className="text-white hover:text-red-500 transition">
              <Heart size={20} />
            </a>
            <a href="/cart" className="text-white hover:text-red-500 transition">
              <ShoppingCart size={20} />
            </a>
            
            {/* User Profile / Connect Wallet */}
            <div className="relative">
              <button 
                className="flex items-center space-x-2 text-white hover:text-red-500 transition"
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              >
                {user.isConnected ? (
                  <img 
                    src={user.avatarUrl} 
                    alt={user.username} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <UserIcon size={20} />
                )}
              </button>
              
              {isUserDropdownOpen && <UserDropdown />}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4 mb-4">
              <a href="/category/games" className="text-white hover:text-red-500 transition">Games</a>
              <a href="/category/consoles" className="text-white hover:text-red-500 transition">Consoles</a>
              <a href="/category/accessories" className="text-white hover:text-red-500 transition">Accessories</a>
              <a href="/category/collectibles" className="text-white hover:text-red-500 transition">Collectibles</a>
              <a href="/digital-assets" className="text-white hover:text-red-500 transition">Digital Assets</a>
            </nav>
            
            <div className="flex items-center space-x-6">
              <button className="text-white hover:text-red-500 transition">
                <Search size={20} />
              </button>
              <a href="/wishlist" className="text-white hover:text-red-500 transition">
                <Heart size={20} />
              </a>
              <a href="/cart" className="text-white hover:text-red-500 transition">
                <ShoppingCart size={20} />
              </a>
              <button 
                className="text-white hover:text-red-500 transition"
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              >
                {user.isConnected ? (
                  <img 
                    src={user.avatarUrl} 
                    alt={user.username} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <UserIcon size={20} />
                )}
              </button>
            </div>
            
            {isUserDropdownOpen && <UserDropdown />}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;