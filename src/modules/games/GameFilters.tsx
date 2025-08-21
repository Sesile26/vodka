import React from "react";
import clsx from "clsx";
import Filters from "../mainPage/FilteredGames/Filters";
import FilteredGames from "../mainPage/FilteredGames/FilteredGames";

type Props = {
  props?: string;
};

const GameFilters: React.FC<Props> = ({ props }) => {
  return (
    <div className="mx-auto max-w-full w-[1440px] px-5 pb-[50px]">
      <FilteredGames />
    </div>
  );
};

export default GameFilters;
