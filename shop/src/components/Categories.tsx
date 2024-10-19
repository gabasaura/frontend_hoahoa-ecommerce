import React from 'react';

const Categories: React.FC = () => {
  return (
    <section className="categories overflow-hidden">
      <div className="container-fluid">
        <div className="row g-5">
          {categoryData.map((category, index) => (
            <div className={`col-md-${category.colSize}`} key={index}>
              <span className="d-block py-3 text-white text-uppercase fs-7 ls-1">{category.number}</span>
              <div className="jarallax position-relative mb-4" style={{ height: '480px' }}>
                <img src={category.image} alt="categories" className="jarallax-img img-fluid" />
                <div className="category-content position-absolute bottom-0 p-5 text-uppercase">
                  <a href={category.link} className="text-white btn-link">
                    {category.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const categoryData = [
  {
    number: '01. Electronic Gadgets',
    image: 'images/category-thumb-1.jpg',
    link: 'shop-four-column-wide.html',
    buttonText: 'Shop it Now',
    colSize: 3,
  },
  {
    number: '02. Cool Stuff',
    image: 'images/category-thumb-2.jpg',
    link: 'shop-four-column-wide.html',
    buttonText: 'Shop it Now',
    colSize: 2,
  },
  {
    number: '03. Accessories',
    image: 'images/category-thumb-3.jpg',
    link: 'shop-four-column-wide.html',
    buttonText: 'Shop it Now',
    colSize: 5,
  },
  {
    number: '04. Display Units',
    image: 'images/category-thumb-4.jpg',
    link: 'shop-four-column-wide.html',
    buttonText: 'Shop it Now',
    colSize: 2,
  },
];

export default Categories;
