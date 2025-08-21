import React from "react";

import Slide4_bg from "@/assets/mainSlider/slide4_bg.webp";
import Slide4_person from "@/assets/mainSlider/slide4_person.webp";
import Slide3_button from "@/assets/mainSlider/slide3_button.svg";
import TimerSlide4 from "@/ui/TimerSlide4";

type Props = {
  props?: string;
};

const Slide4: React.FC<Props> = ({ props }) => {
  return (
    <div>
      <div className="font-black uppercase z-[1] mx-[100px] my-[90px] flex flex-col gap-[40px]">
        <div>
          <div className="text-[66px] text-white leading-[66px]">Стань </div>
          <div className="text-[56px] text-[#fdd14f] leading-[56px]">
            королем водки
          </div>
        </div>
        <div className="flex items-center backdrop-blur-[3.7px] bg-[#1921366e] rounded-[25px] p-[15px] max-w-[630px] text-white gap-[20px]">
          <TimerSlide4 targetDate={"2025-08-15T21:00:00"} />
          <div>
            <div className="text-[31px] leading-[31px]">
              $1 945.00 + 4 680FS
            </div>
            <div className="text-[16px]">Вип гонка уровней</div>
          </div>
        </div>
        <div className="text-white cursor-pointer max-w-[250px] h-[60px] bg-[linear-gradient(149deg,_#41c6ff_8.4%,_#1a64fc_80.38%)] rounded-[15px] flex items-center justify-center">
          Участвовать
        </div>
      </div>
      <img
        src={Slide4_person}
        alt=""
        className="absolute z-[1] h-[495px] right-[20px] top-[-23px]"
      />
      <img
        src={Slide4_bg}
        alt=""
        className="absolute rounded-[25px] h-[430px] top-[40px] z-[-1]"
      />
    </div>
  );
};

export default Slide4;
