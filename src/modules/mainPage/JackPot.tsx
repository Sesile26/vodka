import React from "react";
import JackPotsBg from "@/assets/jackpots/jackpotBlockF.webp";

import JackPotBear from "@/assets/jackpots/jackpotBear.webp";
import JackPotChest from "@/assets/jackpots/jackpotChest.webp";
import JackPotMaskot from "@/assets/jackpots/titleMascot.webp";
import JackPotPlayButton from "@/assets/jackpots/BtnBodyPlay.svg";

type Props = {
  props?: string;
};

const JackPot: React.FC<Props> = ({ props }) => {
  return (
    <div className="max-w-[1300px] mx-auto my-[50px] h-[180px] relative rounded-[25px] border-[7px] border-[#3b54d080] cursor-pointer group">
      <div className="flex gap-[10px] px-[35px]">
        <div className="w-[200px]">
          <img
            src={JackPotBear}
            alt=""
            className="w-[200px] absolute bottom-[-30px] left-0 object-contain"
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="font-black uppercase pt-[10px] relative w-full max-w-[800px]">
            <div className="">
              <div className="text-[34px] text-white ">Jackpot Суперприз</div>
              <div className="text-[56px] text-[#28ff69] leading-[56px]">
                $133 094,05 <b className="text-white">USD</b>
              </div>
              <div className="text-[16px] text-[#5b69a5] font-[500] pt-[6px]">
                найди 4 ключа и получи сокровище водки
              </div>
            </div>
            <img
              src={JackPotMaskot}
              alt=""
              className="absolute top-0 right-0 w-[150px]"
            />
          </div>
          <div className="flex items-center relative w-[200px] justify-center group-hover:rotate-[3.467deg] transition-transform duration-150">
            <div className="z-[1] text-[34px] font-[800] text-[#087f00] rotate-[-3.467deg]">
              Играть
            </div>
            <img
              src={JackPotPlayButton}
              alt=""
              className="absolute w-[200px] h-[115px] top-[22px]"
            />
          </div>
        </div>
      </div>
      <img
        src={JackPotsBg}
        alt=""
        className="absolute h-full w-full object-cover top-0 rounded-[25px] z-[-1]"
      />
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: "100%",
          top: "10px",
          background: "#161452",
          borderRadius: "25px",
          zIndex: -2,
        }}
      ></div>
    </div>
  );
};

export default JackPot;
