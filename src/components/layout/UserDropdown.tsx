import React from 'react';
import { LogOut, User, Wallet, ShoppingBag, Heart } from 'lucide-react';
import { useWeb3 } from '../../contexts/Web3Context';

const UserDropdown: React.FC = () => {
  const { user, connectWallet, disconnectWallet, isLoading } = useWeb3();

  return (
    <div className="absolute right-0 mt-2 w-60 bg-gray-900 rounded-lg shadow-xl border border-gray-800 overflow-hidden z-50">
      {user.isConnected ? (
        <>
          <div className="p-4 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <img 
                src={user.avatarUrl} 
                alt={user.username}
                className="w-10 h-10 rounded-full object-cover" 
              />
              <div>
                <div className="font-medium text-white">{user.username}</div>
                <div className="text-xs text-gray-400 truncate">{user.address}</div>
              </div>
            </div>
          </div>
          <div className="py-2">
            <a href="/profile" className="flex items-center px-4 py-2 text-white hover:bg-gray-800 transition">
              <User size={18} className="mr-3" />
              <span>Profile</span>
            </a>
            <a href="/digital-wallet" className="flex items-center px-4 py-2 text-white hover:bg-gray-800 transition">
              <Wallet size={18} className="mr-3" />
              <span>Digital Wallet</span>
            </a>
            <a href="/orders" className="flex items-center px-4 py-2 text-white hover:bg-gray-800 transition">
              <ShoppingBag size={18} className="mr-3" />
              <span>Orders</span>
            </a>
            <a href="/wishlist" className="flex items-center px-4 py-2 text-white hover:bg-gray-800 transition">
              <Heart size={18} className="mr-3" />
              <span>Wishlist</span>
            </a>
            <button 
              className="w-full flex items-center px-4 py-2 text-white hover:bg-gray-800 transition"
              onClick={disconnectWallet}
            >
              <LogOut size={18} className="mr-3" />
              <span>Disconnect</span>
            </button>
          </div>
        </>
      ) : (
        <div className="p-4">
          <p className="text-white mb-3">Connect with your crypto wallet to access exclusive Web3 features and manage your digital assets.</p>
          <button 
            className={`w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            onClick={connectWallet}
            disabled={isLoading}
          >
            {isLoading ? 'Connecting...' : 'Connect Wallet'}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;