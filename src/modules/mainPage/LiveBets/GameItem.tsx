import React from "react";
import LightIcon from "@/assets/livebets/slotLight.blue.svg?react";
import clsx from "clsx";
import GameIcon from "@/assets/livebets/gameImg.avif";
import Play from "@/assets/livebets/play.svg";

type Props = {
  winType: string;
  count: string;
  cur: string;
  userName: string;
  color: string;
};

const GameItem: React.FC<Props> = ({
  winType,
  count,
  cur,
  userName,
  color,
}) => {
  return (
    <div className="py-[20px] flex flex-col items-center group cursor-pointer relative">
      <div className="w-[50px] h-[50px] overflow-hidden rounded-[10px] shadow-[0_0_10px_0_#0a0f11] relative">
        <img
          src={GameIcon}
          alt=""
          className="transition-transform duration-300 group-hover:scale-[1.15]"
        />
        <div className="absolute bg-[#2A2A2A99] w-full h-full top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        {/* play icon */}
        <div
          className="absolute top-[5px] left-[5px] h-[40px] w-[40px] flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(180deg, #3ec2fa, #195fee)",
          }}
        >
          <img src={Play} alt="" className="h-[15px] w-[15px]" />
        </div>
        {/* play icon */}
      </div>
      <div className="flex flex-col items-center pt-2">
        <div className="text-[11px] font-black" style={{ color: color }}>
          {winType}
        </div>
        <div className="text-white font-black">{`${count} ${cur}`}</div>
        <div className="text-[#677a9d] text-[10px] pb-[7px]">{userName}</div>
      </div>
      <LightIcon className="absolute bottom-0" />
      <div
        className={clsx(`
      absolute left-1/2 translate-x-[-50%] translate-y-[-20px]
      w-[130px] aspect-square rounded-full pointer-events-none
      blur-[15px]
      animate-[glowUp_0.5s_ease_forwards]
      bottom-[-50%] opacity-20
    `)}
        style={{
          background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
        }}
      />
      <div className="absolute right-0 top-1/2 h-[95px] w-px bg-[#222c45] translate-y-[-50%]"></div>
    </div>
  );
};

export default GameItem;
