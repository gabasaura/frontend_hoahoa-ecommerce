import React from 'react';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  return (
    <div>
      <section className="hero">
        <h1>Welcome to SideQuest</h1>
        <p>Shop you millennial fashion goods!</p>
      </section>
      <section className="products">
        <ProductCard title="Smartphone" price={299} imageUrl="../assets/images/category-thumb-1.jpg" />
        <ProductCard title="Laptop" price={799} imageUrl="../assets/images/category-thumb-2.jpg" />
      </section>
    </div>
  );
};

export default HomePage;
