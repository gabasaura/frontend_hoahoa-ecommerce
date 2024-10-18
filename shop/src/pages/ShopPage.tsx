// src/pages/ShopPage.tsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { useFetchProducts } from '../hooks/useFetchProducts';

const ShopPage: React.FC = () => {
  const { products, loading, error } = useFetchProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="shop-page">
      <h1>Shop Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
