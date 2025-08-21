import React, { useEffect, useRef, useState } from "react";
import Arrow from "@/assets/SliderControls/arrowLeft.svg?react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import FiltersItem from "./FiltersItem";

import AllGames from "@/assets/filteredItems/allGames.svg?react";
import ProvidersList from "./ProvidersList";
import useGamesStore from "@/store/useGamesStore";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  maxWidth?: string;
};

const GameFilters = [
  {
    name: "Все игры",
    count: "10366",
    img: AllGames,
    filter_name: "all",
  },
  {
    name: "Новые",
    count: "125",
    img: AllGames,
    isActive: false,
    sort: "created_at+desc",
    filter_name: "new",
  },
  {
    name: "Live",
    count: "842",
    img: AllGames,
    isActive: false,
    tag: "live",
    filter_name: "live",
  },
  {
    name: "Слоты",
    count: "8612",
    img: AllGames,
    isActive: false,
    tag: "slots",
    filter_name: "slots",
  },
  {
    name: "Покер",
    count: "156",
    img: AllGames,
    isActive: false,
    tag: "poker",
    filter_name: "poker",
  },
  {
    name: "Столы",
    count: "156",
    img: AllGames,
    isActive: false,
    tag: "tables",
    filter_name: "tables",
  },
];

const Filters: React.FC<Props> = ({ maxWidth = "900" }) => {
  const swiperRef = useRef<any>(null);
  const { systemGroup } = useGamesStore();

  const [providers, setProviders] = useState<[any]>([]);

  useEffect(() => {
    if (systemGroup) {
      const list = systemGroup?.systems;
      setProviders([{ id: "", name: "Все провайдеры" }, ...list]);
    }
  }, [systemGroup]);

  return (
    <div className="flex pt-[20px] gap-[10px]">
      <div className="flex gap-[10px]">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={clsx(
            "flex justify-center items-center",
            "w-[50px] h-[50px] bg-[#1f2941] text-[#677a9d] rounded-[15px] rotate-180",
            "transition-colors duration-150 ease-in-out",
            "hover:text-[#2b90fecc]"
          )}
        >
          <Arrow width={15} height={15} />
        </button>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={20}
          slidesPerView="auto"
          className={clsx(
            "mySwiper [&_.swiper-slide]:!w-auto",
            `w-[${maxWidth}px]`
          )}
          style={{
            width: `${maxWidth}px`,
          }}
        >
          {GameFilters.map((bets) => (
            <SwiperSlide className="relative w-auto">
              <FiltersItem
                name={bets.name}
                count={bets.count}
                Img={bets.img}
                isActive={bets.isActive}
                tag={bets.tag}
                sort={bets.sort}
                filter_name={bets.filter_name}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={clsx(
            "flex justify-center items-center",
            "w-[50px] h-[50px] bg-[#1f2941] text-[#677a9d] rounded-[15px]",
            "transition-colors duration-150 ease-in-out",
            "hover:text-[#2b90fecc]"
          )}
        >
          <Arrow width={15} height={15} />
        </button>
      </div>

      <ProvidersList />
    </div>
  );
};

export default Filters;
