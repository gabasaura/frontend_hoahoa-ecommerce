import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';

const MainSlideshow: React.FC = () => {
  const slides = slideshowData.length;
  
  return (
    <section>
      <div className="container-fluid">
        <Swiper
          spaceBetween={80}
          slidesPerView={Math.min(slides, 3)} // Dynamically adjust slidesPerView based on the number of slides
          loop={slides > 3} // Enable loop only if there are more than 3 slides
          navigation={{
            nextEl: '.icon-arrow-right',
            prevEl: '.icon-arrow-left',
          }}
          breakpoints={{
            300: {
              slidesPerView: Math.min(slides, 1),
              spaceBetween: 20,
            },
            768: {
              slidesPerView: Math.min(slides, 2),
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: Math.min(slides, 3),
              spaceBetween: 80,
            },
          }}
        >
          {slideshowData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide ">
                <img src={slide.image} alt="slideshow" />
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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="icon-arrow icon-arrow-left text-white">
          <FaAngleLeft />
        </div>
        <div className="icon-arrow icon-arrow-right text-white">
          <FaAngleRight />
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
  // Add more slides here to prevent the warning
];

export default MainSlideshow;
