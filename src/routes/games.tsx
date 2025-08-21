import Layouts from "../layouts/Layout";
import Footer from "@/modules/footer/Footer";
import Filters from "@/modules/mainPage/FilteredGames/Filters";
import Search from "@/modules/games/Search";
import useGamesStore from "@/store/useGamesStore";
import GameItem from "@/modules/games/GameItem";
import { useEffect, useRef } from "react";

import NoFound from "@/assets/GamePage/notFound.webp";

export default function Index() {
  const searchGames = useGamesStore((s) => s.searchGames);
  const meta = useGamesStore((s) => s.metaByName["searchGames"]);
  const loadMore = useGamesStore((s) => s.loadMore);

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = sentinelRef.current;
    if (!target) return;

    // Якщо скролиться все вікно — root: null.
    // Якщо у вас є окремий контейнер з overflow, поставте root на нього.
    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e.isIntersecting) return;
        if (!meta?.next_page_token) return;

        // головний трюк: прибираємо спостереження на час запиту
        io.unobserve(target);
        loadMore("searchGames")
          .catch(() => {})
          .finally(() => {
            // після рендеру sentinel зміститься вниз — підпишемось знову
            const newTarget = sentinelRef.current;
            if (newTarget) io.observe(newTarget);
          });
      },
      {
        root: null, // 👈 спостерігаємо відносно viewport
        rootMargin: "400px", // підвантажуємо трохи завчасно
        threshold: 0,
      }
    );

    io.observe(target);
    return () => io.disconnect();
  }, [loadMore, meta?.next_page_token]);

  useEffect(() => {
    console.log(searchGames?.games, "searchGames?.games");
  }, [searchGames]);

  return (
    <Layouts>
      <div className="bg-[#0c111c]">
        <div className="mx-auto max-w-full w-[1440px] px-5 pb-[50px]">
          <Search />
          <div className="max-w-[1400px] mx-auto bg-[#192136] rounded-[30px] px-[20px] pb-[20px] my-[20px]">
            <Filters maxWidth="1000" />
          </div>
          {/* <div className="flex justify-between text-white px-[20px]">
            <div className="text-[#677a9d] font-[500]">
              Показаны 99 из 545 игр
            </div>
            <div>icon</div>
          </div> */}
          {searchGames?.games.length !== 0 && (
            <div
              className="mt-[20px] grid
            grid-cols-[repeat(auto-fill,minmax(178px,1fr))]
            gap-y-[25px] gap-x-[20px]
            justify-items-center
            min-h-[300px] relative"
            >
              {searchGames?.games.map((game) => (
                <GameItem game={game} />
              ))}
              {!!meta?.next_page_token && (
                <div ref={sentinelRef} className="col-span-full h-[1px]" />
              )}
            </div>
          )}
          {searchGames?.games.length === 0 && (
            <div className="text-white opacity-50 flex flex-col items-center justify-center w-[650px] mx-auto">
              <img src={NoFound} alt="" className="h-[450px] w-[575px]" />
              <div className="flex flex-col items-center justify-center relative bottom-[60px]">
                <div className="text-[28px] font-[700]">Ничего не найдено</div>
                <div className="">
                  Попробуйте изменить параметры поиска. Если вы зашли на сайт со
                  смартфона, учтите, что некоторые игры доступны только с
                  компьютера и наоборот.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </Layouts>
  );
}
