import React from "react";
import BG from "@/assets/allGamesBg.webp";
import Filters from "./Filters";

import GameList from "./GameList";
import Search from "./Search";

type Props = {
  props?: string;
};

const FilteredGames: React.FC<Props> = ({ props }) => {
  return (
    <div>
      <img src={BG} alt="" className="mx-auto mt-[20px]" />
      <div className="max-w-[1300px] mx-auto bg-[#192136] rounded-[30px] pt-[10px] px-[20px] pb-[30px]">
        <Filters />
        <Search />
        <GameList />
      </div>
    </div>
  );
};

export default FilteredGames;
