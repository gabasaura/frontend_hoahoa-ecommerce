import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const MainSlideshow: React.FC = () => {

  return (
    <section>
      <div className="container-fluid">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
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
