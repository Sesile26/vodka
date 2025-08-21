import { useMemo, useRef, useState, useEffect } from "react";
import clsx from "clsx";
import useGamesStore from "@/store/useGamesStore";
import { useLocation, useNavigate } from "react-router-dom";
import { CollectUniqueGroups } from "@/lib/CollectUniqueGroups";

type Props = {
  initial?: string | null;
  placeholder?: string;
  onChange?: (id: string | null) => void;
};

const ProvidersList: React.FC<Props> = ({
  placeholder = "Все провайдеры",
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>("");
  const rootRef = useRef<HTMLDivElement>(null);

  const current = useGamesStore((s) => s.currentFilters?.searchGames);

  useEffect(() => {
    if (current) {
      if (current.group_id) {
        setSelected(current.group_id);
      }
      console.log(current, "current");
    }
  }, [current]);

  const { systemGroup } = useGamesStore();

  const [providers, setProviders] = useState<[any]>([]);

  useEffect(() => {
    if (systemGroup) {
      const UniqueGroups = CollectUniqueGroups(systemGroup);
      console.log(UniqueGroups, "UniqueGroups");
      setProviders([{ id: "", name: "Все провайдеры" }, ...UniqueGroups]);
    }
  }, [systemGroup]);

  const { useFilters } = useGamesStore();

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return providers;
    return providers.filter((o) => o.name.toLowerCase().includes(q));
  }, [providers, query]);

  const selectedOpt = providers?.find((o) => o.id === selected) || "";

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleChoose = (id: string | null) => {
    if (pathname === "/" || pathname === "/index") {
      navigate("/games");
    }
    useFilters({ group_id: id }, "searchGames");
    setSelected(id);
    onChange?.(id);
    setOpen(false);
    setQuery("");
  };

  return (
    <div ref={rootRef} className="relative w-[250px] h-[50px]">
      {!open && (
        <button
          onClick={() => {
            setOpen(!open);
            setQuery("");
          }}
          className={clsx(
            "w-full h-full rounded-[14px] px-3.5 bg-[#25304d]",
            "flex items-center justify-between gap-2 transition-colors",
            selectedOpt?.id !== "" &&
              "bg-[linear-gradient(180deg,_#41c6ff,_#1a64fc),_linear-gradient(180deg,_#79cdfd,_#1a64fc)]"
          )}
        >
          <div className="flex justify-between w-full">
            <span className="flex items-center gap-2 min-w-0">
              {selectedOpt?.Icon ? (
                <selectedOpt.Icon className="size-5 text-white/80" />
              ) : (
                <span className="size-5" />
              )}
              <span className="truncate text-[16px] text-white font-black">
                {selectedOpt?.name ?? placeholder}
              </span>
            </span>
          </div>
        </button>
      )}

      {open && (
        <input
          autoFocus
          value={query}
          onClick={() => {
            setOpen(!open);
          }}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-full px-3 rounded-[14px] bg-[#25304d]
                              text-white
                             outline-none"
        />
      )}

      {/* EXPANDED: пошук + список (інпут схований) */}
      {open && (
        <div
          className="absolute z-50 mt-0 w-full rounded-[30px] p-2
                     bg-[#182232]
                     shadow-[0_10px_30px_rgba(0,0,0,.35)]"
        >
          <ul className="max-h-[400px] overflow-y-auto px-[5px] py-[10px] text-white no-scrollbar">
            {filtered.map((opt) => (
              <li key={opt.id}>
                <button
                  onClick={() => handleChoose(opt.id)}
                  className={clsx(
                    `w-full flex items-center gap-3 px-3 py-2 rounded-[50px] my-[5px]`,
                    "text-left transition-colors border border-[#182232]",
                    selected === opt.id &&
                      "bg-[#212f44b0] border border-[#293a53]",
                    "hover:bg-[#212f44b0] hover:border hover:border-[#293a53]",
                    "hover:translate-x-[3px] transition-transform duration-1000"
                  )}
                >
                  {opt.Icon ? (
                    <opt.Icon className="size-5 text-white" />
                  ) : (
                    <span className="size-5" />
                  )}
                  <span className="text-[15px]">{opt.name}</span>
                </button>
              </li>
            ))}

            {!filtered.length && (
              <li className="text-white/40">Провайдеры не найдены</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProvidersList;
