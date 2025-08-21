import React from "react";

import Slide6_bg from "@/assets/mainSlider/slide6_bg.jpg";
import Slide6_person from "@/assets/mainSlider/slide6_person.webp";

import Visa from "@/assets/mainSlider/slide6_visa.svg";
import Master from "@/assets/mainSlider/slide6_master.svg";
import SBP from "@/assets/mainSlider/slide6_sbp.png";
import Money from "@/assets/mainSlider/slide6_money.svg";
import Cripto from "@/assets/mainSlider/slide6_cripto.svg";

type Props = {
  props?: string;
};

const Slide6: React.FC<Props> = ({ props }) => {
  return (
    <div className="w-[1400px]">
      <div className="font-black uppercase z-[1] mx-[100px] mt-[90px] flex flex-col gap-[100px]">
        <div>
          <div className="text-[38px] text-[#4fff6f] leading-[50px]">
            Моментальный <b className="text-white"> вывод </b>
          </div>
          <div className="text-[72px] text-white leading-[72px]">
            любой суммы
          </div>
        </div>
        <div className="flex gap-[30px] p-[20px] backdrop-blur-[2px] bg-[rgba(17,23,37,0.302)] text-white text-[16px] font-[700] max-w-[722px] rounded-[18px]">
          <div className="flex flex-col justify-center items-center gap-[15px] w-[207px]">
            <div className="flex gap-[15px]">
              <img src={Visa} alt="" width={50} />
              <img src={Master} alt="" width={44} />
              <img src={SBP} alt="" width={30} />
            </div>
            <div>На банковские карты</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[15px] w-[207px]">
            <img src={Money} alt="" />
            <div>В наличные</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[15px] w-[207px]">
            <img src={Cripto} alt="" />
            <div>В криптовалюты</div>
          </div>
        </div>
      </div>
      <img
        src={Slide6_person}
        alt=""
        className="absolute z-[1] h-[470px] right-[60px] top-0"
      />
      <img
        src={Slide6_bg}
        alt=""
        className="absolute rounded-[25px] h-[430px] top-[40px] z-[-1] w-full"
      />
    </div>
  );
};

export default Slide6;
