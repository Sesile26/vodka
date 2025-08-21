import React, { useEffect, useState } from "react";
import clsx from "clsx";
import useGamesStore from "@/store/useGamesStore";

type Props = {
  props?: string;
};

const Search: React.FC<Props> = ({ props }) => {
  const { useFilters } = useGamesStore();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      const trimmed = search.trim();
      useFilters({ name: trimmed }, "searchGames");
    }, 300);
    return () => clearTimeout(id);
  }, [search, useFilters]);

  return (
    <div className="bg-[#11192d] rounded-[20px] h-[50px] px-[20px] mt-[20px] flex items-center gap-[20px]">
      <svg
        width="20"
        height="20"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.1343 11.5638C18.8428 11.5638 11.31 19.0657 11.31 28.3191C11.31 37.5725 18.8428 45.0744 28.1343 45.0744C37.4258 45.0744 44.9586 37.5725 44.9586 28.3191C44.9586 19.0657 37.4258 11.5638 28.1343 11.5638ZM0.09375 28.3191C0.09375 12.896 12.6477 0.393555 28.1343 0.393555C43.6209 0.393555 56.1748 12.896 56.1748 28.3191C56.1748 34.0107 54.4647 39.3046 51.5291 43.7191L62.0095 54.1573C64.1997 56.3384 64.1997 59.8742 62.0095 62.0554C59.8193 64.2365 56.269 64.2365 54.0789 62.0554L43.5977 51.6179C39.1651 54.5415 33.8493 56.2446 28.1343 56.2446C12.6477 56.2446 0.09375 43.7422 0.09375 28.3191Z"
          fill="#475774"
        />
      </svg>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Начните вводить название слота"
        className={clsx(
          "h-full w-full bg-[#11192d] border-none outline-none text-[#475771] text-[18px] font-[700]",
          "placeholder:text-[#475771] placeholder:font-[700] placeholder:text-[18px]"
        )}
      />
    </div>
  );
};

export default Search;
