import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface Web3ContextType {
  user: User;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  isLoading: boolean;
}

const defaultUser: User = {
  isConnected: false,
};

const Web3Context = createContext<Web3ContextType>({
  user: defaultUser,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  isLoading: false,
});

export const useWeb3 = () => useContext(Web3Context);

interface Web3ProviderProps {
  children: ReactNode;
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate wallet connection
  const connectWallet = async () => {
    setIsLoading(true);
    try {
      // In a real implementation, we would use a library like ethers.js or web3.js
      // to connect to the user's wallet (MetaMask, WalletConnect, etc.)
      
      // Simulating a successful connection after a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock wallet address and user data
      setUser({
        address: '0x1234...5678',
        username: 'CryptoGamer',
        avatarUrl: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg',
        isConnected: true,
      });
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const disconnectWallet = () => {
    setUser(defaultUser);
  };

  // Check if user was previously connected
  useEffect(() => {
    const checkConnection = async () => {
      // In a real implementation, we would check if the user has a connected wallet
      // and retrieve their wallet address and profile information
    };
    
    checkConnection();
  }, []);

  return (
    <Web3Context.Provider value={{ user, connectWallet, disconnectWallet, isLoading }}>
      {children}
    </Web3Context.Provider>
  );
};