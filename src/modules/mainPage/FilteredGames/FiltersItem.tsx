import React, { useEffect, useState } from "react";
import clsx from "clsx";
import useGamesStore from "@/store/useGamesStore";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  name: string;
  count: string;
  Img: React.FC<React.SVGProps<SVGSVGElement>>;
  isActive?: boolean;
  tag?: string;
  sort?: string;
  filter_name?: string;
};

const FiltersItem: React.FC<Props> = ({
  name,
  count,
  Img,
  tag,
  sort,
  filter_name,
}) => {
  const { useFilters, resetFilters, currentFilters } = useGamesStore();
  const current = useGamesStore((s) => s.currentFilters?.searchGames);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const active =
    filter_name === "all"
      ? !current?.tag && !current?.sort
      : current?.tag === filter_name;

  const selectFilter = () => {
    if (pathname === "/" || pathname === "/index" || pathname === "/game") {
      navigate("/games");
    }
    if (filter_name === "all") {
      resetFilters("searchGames");
      return;
    }
    if (tag) {
      useFilters({ tag: tag, sort: "" }, "searchGames");
      return;
    }
    if (sort) {
      useFilters({ sort: sort, tag: "" }, "searchGames");
      return;
    }
  };

  return (
    <div
      className={clsx(
        "flex cursor-pointer group",
        "h-[46px] rounded-[15px]",
        "py-[5px] pr-[17px] pl-[10px]",
        "font-black",
        active &&
          `bg-[linear-gradient(180deg,#41c6ff,#1a64fc),_linear-gradient(180deg,#79cdfd,#1a64fc)]`
      )}
      onClick={selectFilter}
    >
      <div className="ml-[5px] mr-[8px] pt-[8px] ">
        <Img height={18} width={18} className="text-red-500" />
      </div>

      <div className="flex flex-col text-white">
        <div
          className={clsx(
            "text-[15px] group-hover:text-[#2b90fe] transition-colors duration-300",
            active && "group-hover:text-white"
          )}
        >
          {name}
        </div>
        <div className={clsx("text-[9px] ", !active && "text-[#5b647d]")}>
          {count}
        </div>
      </div>
    </div>
  );
};

export default FiltersItem;
