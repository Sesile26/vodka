import React, { useRef } from "react";
import SliderControls from "./GameSlider/SliderControls";
import Tornaments from "@/assets/SliderControls/tournaments.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import TornamentBG1 from "@/assets/tornamentsSlideer/futureBackNew.webp";
import TornamentBG1_man from "@/assets/tornamentsSlideer/futureGuestNew1.webp";

import TornamentBG2 from "@/assets/tornamentsSlideer/vipRaceBackNew.webp";
import TornamentBG2_man from "@/assets/tornamentsSlideer/vipRaceNew.png";
import TimerTournament from "@/ui/TimerTournament";

const Slides = [
  {
    bg: TornamentBG1,
    man: TornamentBG1_man,
    description: "Гости из будущего. Ежедневный",
    bonus: "$340.00 + 400 FS",
    targetDate: "2025-08-18T00:00:00",
  },
  {
    bg: TornamentBG2,
    man: TornamentBG2_man,
    description: "Вип гонка уровней. Еженедельный",
    bonus: "$1 945.00 + 4 680 FS",
    targetDate: "2025-08-18T00:00:00",
  },
];

type Props = {
  props?: string;
};

const Tournaments: React.FC<Props> = ({ props }) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="max-w-[1300px] mx-auto mt-[50px] relative">
      <SliderControls swiperRef={swiperRef} name={"Турниры"} img={Tornaments} />
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        className="h-[482px] mySwiper mt-[20px] myBigSwiper"
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
      >
        {Slides.map((slide) => (
          <SwiperSlide>
            <div className="h-full text-white uppercase font-black">
              <div className="flex flex-col gap-[40px] relative z-[1] mt-[100px] mx-[60px] w-fit">
                <div className="bg-[#1117253b] rounded-[25px] h-[110px] px-[25px] backdrop-blur-[13px] flex items-center">
                  <div className="flex flex-col mr-[15px] [text-shadow:0_13px_18px_#172e502e]">
                    <div className="text-[18px]">Осталось времени</div>
                    <div className="text-[25px]">До окончания</div>
                  </div>
                  <div className="relative bottom-[3px]">
                    <TimerTournament targetDate={slide.targetDate} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-[28px]">{slide.description}</div>
                  <div className="text-[42px]">{slide.bonus}</div>
                </div>
                <div className="h-[55px] w-[180px] shadow-[0_5px_6px_0_#11141b1f] bg-[linear-gradient(149deg,#41c6ff_8.4%,#1a64fc_80.38%)] rounded-[15px] flex justify-center items-center">
                  Подробнее
                </div>
              </div>
              <img
                src={slide.bg}
                alt=""
                className="absolute top-[70px] rounded-[35px] h-[400px] object-cover"
              />
              <img src={slide.man} alt="" className="absolute right-0 top-0" />
              <div
                className="absolute top-0 left-0 w-full"
                style={{
                  height: "412px",
                  top: "70px",
                  background: "#1d263c",
                  borderRadius: "35px",
                  zIndex: -1,
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="bg-[radial-gradient(50%_50%_at_49.09%_48.05%,#2d66f0_0,#2d66f000_100%)] shrink-0 h-[450px] opacity-[0.26] absolute right-[-28%] top-[-62px] w-[876px]"></div>
      <div className="bg-[radial-gradient(50%_50%_at_49.09%_48.05%,#2d66f0_0,#2d66f000_100%)] shrink-0 h-[450px] opacity-[0.26] absolute right-[16%] top-[-80px] w-[876px]"></div>
      <div className="bg-[radial-gradient(50%_50%_at_49.09%_48.05%,#2d66f0_0,#2d66f000_100%)] shrink-0 h-[450px] opacity-[0.26] absolute right-[69%] top-[-62px] w-[876px]"></div>
    </div>
  );
};

export default Tournaments;
