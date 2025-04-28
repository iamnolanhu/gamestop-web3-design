import React from 'react';
import { ArrowRight } from 'lucide-react';

const PromoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Trade-in Promo */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Trade-in & Save</h3>
              <p className="text-blue-200 mb-6">
                Get up to $300 credit when you trade in your old console or games. 
                Upgrade to the latest gaming hardware for less.
              </p>
              <a 
                href="/trade-in" 
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Learn more <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
          
          {/* Pro Membership Promo */}
          <div className="bg-gradient-to-br from-red-900 to-pink-900 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">GameStop Pro</h3>
              <p className="text-red-200 mb-6">
                Join GameStop Pro and get exclusive discounts, early access to new releases,
                and monthly rewards with blockchain-verified benefits.
              </p>
              <a 
                href="/pro-membership" 
                className="inline-flex items-center text-white font-medium hover:underline"
              >
                Join now <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;