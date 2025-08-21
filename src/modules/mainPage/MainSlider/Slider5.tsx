import React from "react";

import Slide5_bg from "@/assets/mainSlider/slide5_bg.jpg";
import Slide5_person from "@/assets/mainSlider/slide5_person.webp";
import TimerSlide5 from "@/ui/TimerSlide5";

type Props = {
  props?: string;
};

const Slide5: React.FC<Props> = ({ props }) => {
  return (
    <div>
      <div className="font-black uppercase z-[1] mx-[100px] my-[90px] flex flex-col gap-[40px]">
        <TimerSlide5 targetDate={"2025-08-16T21:00:00"} />
        <div>
          <div className="text-[40px] text-white leading-[50px]">
            До еженедельного
          </div>
          <div className="text-[72px] text-white leading-[72px]">Кешбэка</div>
        </div>
        <div className="text-white cursor-pointer max-w-[250px] h-[60px] bg-[linear-gradient(149deg,_#41c6ff_8.4%,_#1a64fc_80.38%)] rounded-[15px] flex items-center justify-center">
          Интересно
        </div>
      </div>
      <img
        src={Slide5_person}
        alt=""
        className="absolute z-[1] h-[470px] right-[140px] top-0"
      />
      <img
        src={Slide5_bg}
        alt=""
        className="absolute rounded-[25px] h-[430px] top-[40px] z-[-1]"
      />
    </div>
  );
};

export default Slide5;
