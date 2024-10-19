import React from 'react';

const MainSlideshow: React.FC = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="slideshow slide-in arrow-absolute text-white" style={{ height: '80vh' }}>
          <div className="swiper-wrapper">
            {slideshowData.map((slide, index) => (
              <div className="swiper-slide jarallax" key={index}>
                <img src={slide.image} className="jarallax-img" alt="slideshow" />
                <div className="banner-content w-100">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-10 pt-5">
                        <h2 className="display-1 ls-0 mt-5 pt-5 txt-fx slide-up">{slide.title}</h2>
                        <p className="caption">{slide.caption}</p>
                        <a href="#" className="btn btn-outline-light text-uppercase rounded-3 px-4 py-3 mt-3">
                          {slide.buttonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="icon-arrow icon-arrow-left text-white">
            <svg width="50" height="50" viewBox="0 0 24 24">
              <use xlinkHref="#arrow-left"></use>
            </svg>
          </div>
          <div className="icon-arrow icon-arrow-right text-white">
            <svg width="50" height="50" viewBox="0 0 24 24">
              <use xlinkHref="#arrow-right"></use>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

const slideshowData = [
  {
    image: 'images/banner-large-1.jpg',
    title: 'Buy Electronic Gadgets at Affordable Prices',
    caption: 'Tech gadgets are all about making your life easier',
    buttonText: 'Shop Now',
  },
  {
    image: 'images/banner-large-2.jpg',
    title: 'Cool Tech Gadgets Collection 2023',
    caption: 'Tech gadgets are all about making your life easier',
    buttonText: 'Shop Now',
  },
  {
    image: 'images/banner-large-3.jpg',
    title: 'Sturdy And Multifunction New Gadgets',
    caption: 'Tech gadgets are all about making your life easier',
    buttonText: 'Shop Now',
  },
];

export default MainSlideshow;
