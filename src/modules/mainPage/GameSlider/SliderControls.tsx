import React from "react";
import Arrow from "@/assets/SliderControls/arrowLeft.svg?react";
import clsx from "clsx";

type Props = {
  name: string;
  img: any;
  swiperRef: any;
};

const SliderControls: React.FC<Props> = ({ swiperRef, name, img }) => {
  return (
    <div className="flex justify-between items-center relative z-10">
      <button
        className={clsx(
          "flex justify-center items-center gap-[10px] pr-[25px] pl-[20px]",
          "h-[55px] bg-[#161d30] text-[#677a9d] rounded-[13px]",
          "border-2 border-[#161d30] ",
          "transition-colors duration-150 ease-in-out",
          "hover:border-[#2b90fecc]"
        )}
      >
        <img src={img} alt="" width={23} height={23} />
        <div className="font-black text-white text-[20px]">{name}</div>
      </button>
      <div className="flex gap-5">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={clsx(
            "flex justify-center items-center",
            "w-[55px] h-[55px] bg-[#161d30] text-[#677a9d] rounded-[15px] rotate-180",
            "border-2 border-[#161d30] ",
            "transition-colors duration-150 ease-in-out",
            "hover:border-[#2b90fecc] hover:text-[#2b90fecc]"
          )}
        >
          <Arrow width={15} height={15} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={clsx(
            "flex justify-center items-center",
            "w-[55px] h-[55px] bg-[#161d30] text-[#677a9d] rounded-[15px]",
            "border-2 border-[#161d30] ",
            "transition-colors duration-150 ease-in-out",
            "hover:border-[#2b90fecc] hover:text-[#2b90fecc]"
          )}
        >
          <Arrow width={15} height={15} />
        </button>
      </div>
    </div>
  );
};

export default SliderControls;
