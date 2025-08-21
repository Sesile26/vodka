import React from "react";
import clsx from "clsx";
import Play from "@/assets/livebets/play.svg";
import Favorite from "@/assets/SliderControls/favorite.svg?react";
import { useNavigate } from "react-router-dom";
import useGamesStore from "@/store/useGamesStore";

type Props = {
  game: string;
};

const GameItem: React.FC<Props> = ({ game }) => {
  const navigate = useNavigate();
  const { openGame } = useGamesStore();

  return (
    <div
      className="relative"
      style={{
        height: "calc(100% + 8px)",
      }}
      onClick={() => openGame(game, navigate)}
    >
      <div className="h-[240px] group transition-transform duration-300 hover:translate-y-[6px] relative text-white z-[1]">
        <picture>
          <img src={game.img} alt="" className="rounded-[25px] h-[236px]" />
        </picture>
        <div className="absolute bottom-[20px] flex flex-col items-center justify-center w-full uppercase ">
          <div className="text-[14px] leading-[0.9] text-center pb-[6px] font-black">
            <div>{game.name}</div>
          </div>
          <div className="text-[10px] opacity-80 font-bold">
            {game.system_id}
          </div>
        </div>
        {/* on hover */}
        <div
          className={clsx(
            "flex flex-col items-center pt-[6px]",
            "absolute bg-[#10131FBF] w-full h-full top-0 opacity-0 rounded-[25px]",
            "group-hover:opacity-100 transition-opacity duration-300"
          )}
        >
          <div className="text-[17px] truncate w-[130px] font-bold text-center">
            {game.name}
          </div>
          <div className="text-[14px] text-[#677a9d] font-normal pb-[10px]">
            {game.system_id}
          </div>
          <div
            className={clsx(
              "group/button h-[90px] w-[90px] flex justify-center items-center rounded-[25%] z-[1] relative cursor-pointer",
              "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            )}
            style={{
              background: "linear-gradient(180deg, #3ec2fa, #195fee)",
            }}
          >
            <img
              src={Play}
              alt=""
              className="h-[50px] w-[50px] transition-transform duration-300 group-hover/button:scale-[1.1]"
            />
          </div>
          <button className="bg-[#192232cc] text-[11px] font-bold h-[25px] w-[70px] mx-auto rounded-b-[10px] text-[#677a9d] hover:text-[#2b90fe] transition-text duration-300 translate-y-[-6px]">
            Демо
          </button>
          <button
            className={clsx(
              "group/favorite",
              "bg-[#192232cc] h-[36px] w-[36px] mx-auto rounded-[10px] text-[#677a9d] flex justify-center items-center mt-[5px]",
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

export default GameItem;
