import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slider5";
import Slide6 from "./Slide6";
import Slide1 from "./Slide1";

const MainSlider = () => {
  return (
    <div className="max-w-[1400px] mx-auto">
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="swiper swiper-coverflow swiper-3d swiper-initialized swiper-horizontal swiper-watch-progress banners h-[470px] mySwiper myBigSwiper"
      >
        <SwiperSlide>
          <Slide1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide4 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide5 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide6 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
