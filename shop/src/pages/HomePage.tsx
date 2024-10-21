import React from 'react';
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
      <NewArrivals />
      <BestSellers />
    </>
  );
};


export default HomePage;
