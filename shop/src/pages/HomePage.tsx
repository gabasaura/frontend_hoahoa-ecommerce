import React from 'react';
import ProductCard from '../components/ProductCard';
import CartOffCanvas from '../components/CartOffCanvas';
import MainSlideshow from '../components/MainSlideshow';
import Categories from '../components/Categories';
import WelcomeSection from '../components/WelcomeSection';
import NewArrivals from '../components/NewArrivals';
import BestSellers from '../components/BestSellers';
import Newsletter from '../components/Newsletter';
import Features from '../components/Features';

const HomePage: React.FC = () => {
  return (
    <>

<MainSlideshow />
<Features />
<WelcomeSection />
<Categories />
<NewArrivals />
<BestSellers />
<Newsletter />

</>

  );
};


export default HomePage;
