import React, { useEffect, useRef } from "react";
import useGamesStore from "@/store/useGamesStore";
import Play from "@/assets/livebets/play.svg";
import { useNavigate } from "react-router-dom";

const GameList: React.FC = () => {
  const navigate = useNavigate();

  const searchGames = useGamesStore((s) => s.searchGames);
  const meta = useGamesStore((s) => s.metaByName["searchGames"]);
  const loadMore = useGamesStore((s) => s.loadMore);

  const { openGame } = useGamesStore();

  // саме прокручуваний контейнер!
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // щоб не вантажити двічі один і той самий токен
  const lastTokenRef = useRef<string | null>(null);

  useEffect(() => {
    const root = containerRef.current; // <-- правильний root
    const target = sentinelRef.current;
    if (!root || !target) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting) return;

        const token = meta?.next_page_token ?? null;
        if (!token) return;

        // якщо цей токен вже вантажили – не повторюємо
        if (lastTokenRef.current === token) return;
        lastTokenRef.current = token;

        // відписатися на час запиту, щоб не зациклитись
        io.unobserve(target);

        loadMore("searchGames")
          .catch(() => {})
          .finally(() => {
            // після рендера sentinel зміститься вниз — підпишемось знову
            const newTarget = sentinelRef.current;
            if (newTarget) io.observe(newTarget);
          });
      },
      { root, rootMargin: "200px", threshold: 0 }
    );

    io.observe(target);
    return () => io.disconnect();
  }, [loadMore, meta?.next_page_token]); // оновлюємо, коли з’являється новий токен

  return (
    <div
      className="overflow-y-auto pt-[5px] h-[310px] px-[10px] mini-scrollbar mt-[10px]"
      ref={containerRef} // <-- ТУТ root
    >
      <div className="grid gap-[10px] grid-cols-[repeat(auto-fill,minmax(245px,1fr))]">
        {searchGames?.games?.map((item, index) => (
          <div
            key={`${item.id ?? item.slug ?? item.name}-${index}`} // стабільний ключ
            className="flex gap-[10px] rounded-[20px] cursor-pointer h-[75px] p-[10px] bg-[#11192d] group"
            onClick={() => openGame(item, navigate)}
          >
            <div className="h-[55px] w-[55px] shrink-0 overflow-hidden rounded-[9px] relative">
              <img src={item.img} alt="" className="h-[55px]" />
              <div className="absolute bg-[#10131f70] inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="rounded-[10px] h-[40px] w-[40px] flex justify-center items-center"
                  style={{
                    background: "linear-gradient(180deg, #3ec2fa, #195fee)",
                  }}
                >
                  <img src={Play} alt="" className="h-[24px] w-[24px]" />
                </div>
              </div>
            </div>
            <div className="text-white uppercase flex flex-col justify-center">
              <div className="text-[14px] leading-[14px] font-black mb-[5px]">
                {item.name}
              </div>
              <div className="text-[7px] leading-[7px] font-[300]">
                {item.providers}
              </div>
            </div>
          </div>
        ))}

        {/* sentinel показуємо тільки коли є що догружати */}
        {!!meta?.next_page_token && (
          <div ref={sentinelRef} className="col-span-full h-[1px]" />
        )}
      </div>
    </div>
  );
};

export default GameList;
