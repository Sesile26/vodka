import React from "react";
import Sweet from "@/assets/sliderNewGames/sweet_bonanza.avif";
import clsx from "clsx";
import Play from "@/assets/livebets/play.svg";
import Favorite from "@/assets/SliderControls/favorite.svg?react";

type Props = {
  props?: string;
};

const Slide1GameItem: React.FC<Props> = ({ props }) => {
  return (
    <div className="relative cursor-pointer">
      <div className="h-[196px] w-[140px] group transition-transform duration-300 hover:translate-y-[6px] z-[1] relative text-white">
        <picture>
          <img src={Sweet} alt="" className="rounded-[25px] h-[190px]" />
        </picture>
        <div className="absolute bottom-[10px] flex flex-col items-center justify-center w-full uppercase">
          <div className="text-[14px] leading-[0.9] text-center pb-[6px] font-black">
            <div>Sweet Bonanza</div>
            <div>Super Scatter</div>
          </div>
          <div className="text-[10px] opacity-80 font-bold">Pragmatic Play</div>
        </div>
        {/* on hover */}
        <div
          className={clsx(
            "flex flex-col items-center pt-[10px]",
            "absolute bg-[#10131FBF] w-full h-full top-0 opacity-0 rounded-[25px]",
            "group-hover:opacity-100 transition-opacity duration-300"
          )}
        >
          <div className="text-[14px] truncate w-[100px] font-bold">
            Sweet Bonanza Super Scatter
          </div>
          <div className="text-[12px] text-[#677a9d] font-normal pb-[10px]">
            Pragmatic Play
          </div>
          <div
            className={clsx(
              "group/button h-[56px] w-[56px] flex justify-center items-center rounded-[25%] z-[1] relative cursor-pointer",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            )}
            style={{
              background: "linear-gradient(180deg, #3ec2fa, #195fee)",
            }}
          >
            <img
              src={Play}
              alt=""
              className="h-[25px] w-[25px] transition-transform duration-300 group-hover/button:scale-[1.1]"
            />
          </div>
          <button
            className={clsx(
              "group/favorite",
              "bg-[#192232cc] h-[36px] w-[36px] mx-auto rounded-[10px] text-[#677a9d] flex justify-center items-center mt-[35px]",
              "hover:bg-[#192232] transition-all duration-300"
            )}
          >
            <Favorite
              width={18}
              height={18}
              className="transition-transform duration-300 group-hover/favorite:scale-[1.15]"
            />
          </button>
        </div>
        {/* on hover */}
      </div>
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: "calc(100%)",
          background: "linear-gradient(to bottom, transparent, #11192d)",
          borderRadius: "23px",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};

export default Slide1GameItem;
