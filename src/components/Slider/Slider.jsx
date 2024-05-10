import { SliderProducts } from "../../data/products";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination } from "swiper";

// Import default Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import user defined Css
import "./Slider.css";

const Slider = () => {
    return (
        <div className="container-l">
            <Swiper
                modules={[Pagination, Navigation]}
                className="mySwiper"
                navigation={true}
                loopFillGroupWithBlank={true}
                slidesPerView={3} // no of slides are visible in the swiper container
                spaceBetween={40} // space between two slides
                slidesPerGroup={1} // no of slides move together when user swipes within the container
                loop={true}
            >
                {SliderProducts.map((slide, index) => (
                    <SwiperSlide>
                        <div className="leftSide">
                            <div className="name">
                                <span>{slide.name}</span>
                                <span>{slide.detail}</span>
                            </div>
                            <span>{slide.price}$</span>
                            <div>Shop now</div>
                        </div>
                        <img
                            src={slide.img}
                            alt="product"
                            className="img-product"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
