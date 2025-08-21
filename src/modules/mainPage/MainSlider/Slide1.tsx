import React from "react";

import Slide1_bg from "@/assets/mainSlider/slide1_bg1.jpg";
import Slide1_person from "@/assets/mainSlider/slide1_person.webp";
import Slide1GameItem from "./Slide1GameItem";

type Props = {
  props?: string;
};

const Slide1: React.FC<Props> = ({ props }) => {
  return (
    <div>
      <div className="font-black uppercase z-[1] mx-[100px] my-[90px] flex flex-col gap-[40px]">
        <div>
          <div className="text-[36px] text-white leading-[46px]">
            Встречайте
          </div>
          <div className="text-[52px] text-white leading-[52px]">
            главные новинки
          </div>
        </div>
        <div className="flex gap-[15px]">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Slide1GameItem key={index} />
          ))}
        </div>
      </div>
      <img
        src={Slide1_person}
        alt=""
        className="absolute z-[1] h-[470px] right-[60px] top-0"
      />
      <img
        src={Slide1_bg}
        alt=""
        className="absolute rounded-[25px] h-[430px] top-[40px] z-[-1] w-[1400px] object-cover"
      />
    </div>
  );
};

export default Slide1;
