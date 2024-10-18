import React from 'react';

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl }) => {
  return (
    <div className="product-item">
      <img src={imageUrl} alt={title} className="img-fluid" />
      <div className="product-content">
        <h5>{title}</h5>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
