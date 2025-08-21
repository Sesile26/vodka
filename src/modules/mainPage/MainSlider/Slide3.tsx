import React from "react";

import Slide3_bg from "@/assets/mainSlider/slide3_bg.jpg";
import Slide3_person from "@/assets/mainSlider/slide3_person.webp";
import Slide3_button from "@/assets/mainSlider/slide3_button.svg";

type Props = {
  props?: string;
};

const Slide3: React.FC<Props> = ({ props }) => {
  return (
    <div>
      <div className="font-black uppercase z-[1] mx-[100px] my-[90px] flex flex-col gap-[40px]">
        <div>
          <div className="text-[75px] text-white leading-[75px]">VODKA</div>
          <div className="text-[78px] text-[#4ce892] leading-[78px]">
            JACKPOT
          </div>
          <div className="text-[24px] text-white leading-[24px]">
            Соберите 4 ключа и откройте суперприз
          </div>
        </div>
        <div className="relative w-[300px] h-[110px] pl-[20px] normal-case drop-shadow-[0_0_10px_rgba(121,158,216,0.5)] hover:drop-shadow-[0_0_15px_rgba(121,158,216,0.7)] transition-shadow duration-300">
          <div className="flex w-[300px] h-[110px] items-center relative justify-center hover:rotate-[3.467deg] transition-transform duration-150">
            <div className="z-[1] text-[39px] font-[900] text-[#087f00] rotate-[-3.467deg]">
              Играть
            </div>
            <img
              src={Slide3_button}
              alt=""
              className="absolute w-full h-full top-[8px]"
            />
          </div>
        </div>
      </div>
      <img
        src={Slide3_person}
        alt=""
        className="absolute z-[1] h-[470px] right-[60px] top-0"
      />
      <img
        src={Slide3_bg}
        alt=""
        className="absolute rounded-[25px] h-[430px] top-[40px] z-[-1]"
      />
    </div>
  );
};

export default Slide3;
