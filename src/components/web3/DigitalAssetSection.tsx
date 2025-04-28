import React from 'react';
import { Gamepad, Brush, Download } from 'lucide-react';

const DigitalAssetSection: React.FC = () => {
  const digitalAssets = [
    {
      id: 1,
      name: 'Gaming NFTs',
      description: 'Exclusive digital collectibles that can be used across multiple games',
      icon: <Brush size={40} className="text-red-500" />,
      link: '/digital-assets/nfts',
    },
    {
      id: 2,
      name: 'Game Licenses',
      description: 'Own your games forever with blockchain-verified game licenses',
      icon: <Gamepad size={40} className="text-blue-500" />,
      link: '/digital-assets/games',
    },
    {
      id: 3,
      name: 'DLC & Add-ons',
      description: 'Exclusive content and power-ups for your favorite games',
      icon: <Download size={40} className="text-purple-500" />,
      link: '/digital-assets/dlc',
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Digital Assets Marketplace</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The future of gaming is here. Own, trade, and use digital assets across your favorite games and platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {digitalAssets.map((asset) => (
            <div 
              key={asset.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {asset.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{asset.name}</h3>
                <p className="text-gray-400 mb-6">{asset.description}</p>
                <a 
                  href={asset.link}
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-2 rounded-lg transition"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/digital-assets" 
            className="inline-block bg-gradient-to-r from-red-600 to-purple-600 text-white font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300"
          >
            View All Digital Assets
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalAssetSection;