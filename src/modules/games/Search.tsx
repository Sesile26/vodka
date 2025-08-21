import React, { useEffect, useState } from "react";

import Search_bg from "@/assets/GamePage/search_bg.webp";
import Search_chest from "@/assets/GamePage/search_chest.webp";
import useGamesStore from "@/store/useGamesStore";

type Props = {
  props?: string;
};

const Search: React.FC<Props> = ({ props }) => {
  const [search, setSearch] = useState("");
  const { useFilters } = useGamesStore();

  useEffect(() => {
    const id = setTimeout(() => {
      const trimmed = search.trim();
      useFilters({ name: trimmed }, "searchGames");
    }, 300);
    return () => clearTimeout(id);
  }, [search, useFilters]);

  return (
    <div className="pt-[172px] relative">
      <div className="p-[30px] w-[1400px] h-[200px] relative z-[1] ">
        <div className="text-[26px] font-black text-white">Все игры</div>
        <div className="text-[16px] text-[#677a9d]">
          От более 50 ведущих провайдеров
        </div>
        <div className="bg-[#192232] h-[70px] rounded-[20px] px-[20px] max-w-[500px] group flex items-center mt-[6px]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#192232] outline-none text-white text-[18px] font-black placeholder:text-[#475774] w-full"
            placeholder="Найдите вашу игру"
          />
          <div className="text-[#475774] group-hover:text-[#2b90fe] transition-colors duration-200 ease-in-out w-[20px] h-[20px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.1343 11.5638C18.8428 11.5638 11.31 19.0657 11.31 28.3191C11.31 37.5725 18.8428 45.0744 28.1343 45.0744C37.4258 45.0744 44.9586 37.5725 44.9586 28.3191C44.9586 19.0657 37.4258 11.5638 28.1343 11.5638ZM0.09375 28.3191C0.09375 12.896 12.6477 0.393555 28.1343 0.393555C43.6209 0.393555 56.1748 12.896 56.1748 28.3191C56.1748 34.0107 54.4647 39.3046 51.5291 43.7191L62.0095 54.1573C64.1997 56.3384 64.1997 59.8742 62.0095 62.0554C59.8193 64.2365 56.269 64.2365 54.0789 62.0554L43.5977 51.6179C39.1651 54.5415 33.8493 56.2446 28.1343 56.2446C12.6477 56.2446 0.09375 43.7422 0.09375 28.3191Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <img
        src={Search_chest}
        alt=""
        className="absolute h-[245px] w-[215px] right-[122px] top-[100px] z-[2]"
      />
      <img
        src={Search_bg}
        alt=""
        className="absolute w-[1400px] h-[200px] object-cover rounded-[20px] bottom-0"
      />
    </div>
  );
};

export default Search;
