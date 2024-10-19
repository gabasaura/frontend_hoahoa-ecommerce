import React from 'react';
import ProductCard from './ProductCard';

const BestSellers: React.FC = () => {
    return (
        <section id="best-sellers" className="best-sellers py-5 mb-5">
            <div className="container-fluid">
                <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
                    <h4 className="text-uppercase">Best Sellers</h4>
                    <a href="shop.html" className="btn-link">View All Products</a>
                </div>

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                    {bestSellerData.map((product, index) => (
                        <div className="col" key={index}>
                            <ProductCard imageUrl={product.image} title={product.title} price={product.price} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const bestSellerData = [
    { image: 'images/product-thumbnail-1.jpg', title: 'Phone Cover 5.6 inches', price: 95 },
    { image: 'images/product-thumbnail-2.jpg', title: 'Smart Phone 128GB RAM', price: 55 },
    { image: 'images/product-thumbnail-3.jpg', title: 'Smart Phone 128GB RAM', price: 55 },
    { image: 'images/product-thumbnail-4.jpg', title: 'Phone Cover 5.6 inches', price: 95 },
];

export default BestSellers;
