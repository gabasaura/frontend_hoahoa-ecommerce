import React from 'react';

const NewArrivals: React.FC = () => {
    return (
        <section id="new-arrival" className="new-arrival">
            <div className="container-fluid">
                <div className="d-flex flex-wrap justify-content-between align-items-center mt-5 mb-3">
                    <h4 className="text-uppercase">Our New Arrivals</h4>
                    <a href="shop.html" className="btn-link">View All Products</a>
                </div>

                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5">
                    {newArrivalData.map((product, index) => (
                        <div className="col" key={index}>
                            <ProductCard image={product.image} title={product.title} price={product.price} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProductCard: React.FC<{ image: string; title: string; price: number }> = ({ image, title, price }) => (
    <div className="product-item hover-effect-slide">
        <div className="image-holder position-relative">
            <a href="single-product.html">
                <img src={image} alt="product" className="product-image img-fluid" />
            </a>
            <a href="#" className="btn btn-primary w-100 mt-2 rounded-1">Add to cart</a>
        </div>
        <div className="product-content d-flex flex-column justify-content-between align-items-center">
            <h5 className="fs-5 mt-3">
                <a href="single-product.html">{title}</a>
            </h5>
            <span>${price.toFixed(2)}</span>
        </div>
    </div>
);

const newArrivalData = [
    { image: 'images/product-small-1.jpg', title: 'Phone Cover 5.6 inches', price: 95 },
    { image: 'images/product-small-2.jpg', title: 'Smart Phone 128GB RAM', price: 55 },
    { image: 'images/product-small-3.jpg', title: 'Smart Phone 128GB RAM', price: 55 },
    { image: 'images/product-small-4.jpg', title: 'Smart Phone 128GB RAM', price: 55 },
    { image: 'images/product-small-5.jpg', title: '22 Inch LED Display', price: 65 },
];

export default NewArrivals;
