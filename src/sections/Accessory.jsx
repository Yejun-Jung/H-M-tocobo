import React from "react";
import accessoryData from "../util/accessory";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/Accessory.scss";

const Accessory = () => {
  return (
    <div className="accessory-section">
      <div className="inner accessory-inner">
        <div className="top-wrap">
          <div className="t-wrap">
            <h2 className="tit">The New Standard of Elegance</h2>
            <p className="txt">Explore Our Curated Collections</p>
          </div>
          <a href="#" className="btn-light">
            악세서리 둘러보기
          </a>
        </div>
      </div>

      <div className="slider-full-wrap">
        <div className="in">
          <Swiper
            modules={[Navigation]}
            loop={true}
            observer={true}
            observeParents={true}
            navigation={{
              prevEl: ".nav-prev",
              nextEl: ".nav-next",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                centeredSlides: false,
                spaceBetween: 15,
              },
              766: {
                slidesPerView: 2.5,
                centeredSlides: true,
                spaceBetween: 20,
              },
              1025: {
                slidesPerView: 3.5,
                centeredSlides: false,
                spaceBetween: 20,
              },
            }}
            className="accessory-slider"
          >
            {accessoryData.map((sl) => (
              <SwiperSlide key={sl.id}>
                <a
                  href={sl.link}
                  className="slide-link"
                  style={{ backgroundImage: `url(${sl.image})` }}
                ></a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="slider-nav">
          <button className="nav-prev">
            <img src="/img/L_Arrow.png" alt="L_Arrow" />
          </button>
          <button className="nav-next">
            <img src="/img/R_Arrow.png" alt="R_Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accessory;