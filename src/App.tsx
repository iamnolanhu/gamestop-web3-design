import React from 'react';
import { Web3Provider } from './contexts/Web3Context';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import CategorySection from './components/home/CategorySection';
import FeaturedProducts from './components/home/FeaturedProducts';
import DigitalAssetSection from './components/web3/DigitalAssetSection';
import PromoSection from './components/home/PromoSection';
import NewsletterSection from './components/common/NewsletterSection';

function App() {
  return (
    <Web3Provider>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main>
          <HeroSection />
          <CategorySection />
          <FeaturedProducts />
          <PromoSection />
          <DigitalAssetSection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </Web3Provider>
  );
}

export default App;