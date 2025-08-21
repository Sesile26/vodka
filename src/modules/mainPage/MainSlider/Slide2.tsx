import React from "react";

import Slide2_bg from "@/assets/mainSlider/slide2_bg.webp";
import Slide2_person from "@/assets/mainSlider/slide2_person.webp";

type Props = {
  props?: string;
};

const Slide2: React.FC<Props> = ({ props }) => {
  return (
    <div>
      <div className="font-black uppercase z-[1] mx-[100px] my-[90px] flex flex-col gap-[40px]">
        <div>
          <div className="text-[115px] text-[#4ce892] leading-[115px]">
            125%
          </div>
          <div className="text-[48px] text-white leading-[48px]">
            на первый{" "}
          </div>
          <div className="text-[66px] text-white leading-[66px]">депозит</div>
        </div>
        <div className="flex gap-[40px]">
          <div>
            <div className="text-[41px] text-[#4ce892] leading-[41px]">
              50FS
            </div>
            <div className="text-[18px] text-white leading-[18px]">
              за привязку
            </div>
            <div className="text-[18px] text-white leading-[18px]">
              телеграм
            </div>
          </div>
          <div>
            <div className="text-[41px] text-[#4ce892] leading-[41px]">
              до 300
            </div>
            <div className="text-[18px] text-white leading-[18px]">
              без вагера за
            </div>
            <div className="text-[18px] text-white leading-[18px]">депозит</div>
          </div>
        </div>
      </div>
      <img
        src={Slide2_person}
        alt=""
        className="absolute z-[1] h-[470px] right-[360px] top-0"
      />
      <img
        src={Slide2_bg}
        alt=""
        className="absolute rounded-[25px] h-[430px] top-[40px] z-[-1]"
      />
    </div>
  );
};

export default Slide2;
