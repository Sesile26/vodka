// stores/useGamesStore.ts
import { GameServiceApi, type GamesQuery } from "@/apis/GameServiceApi";
import { GameSesionServiceApi } from "@/apis/GameSesionServiceApi";
import { create } from "zustand";

function clean<T extends Record<string, any>>(obj: T): Partial<T> {
  const out: Record<string, any> = {};

  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;

    if (typeof v === "string") {
      const s = v.trim();
      if (s === "") continue;
      out[k] = s;
      continue;
    }

    if (Array.isArray(v)) {
      const arr = v
        .map(x => (typeof x === "string" ? x.trim() : x))
        .filter(x => !(typeof x === "string" && x === ""));
      if (arr.length === 0) continue;
      out[k] = arr;
      continue;
    }

    // числа, boolean, об'єкти — залишаємо як є
    out[k] = v;
  }

  return out as Partial<T>;
}

type GamesStore = {
  [key: string]: any;
  fetchGames: (params: GamesQuery, name: string) => Promise<any>;
};

const useGamesStore = create<GamesStore>((set, get) => ({
  newGames: null,
  topGames: null,
  systemGroup: null,

  searchGames: null,

  lastParamsByName: {},
  metaByName: {},

  currentFilters: {} as Record<string, Partial<GamesQuery>>,

  setFilter: (name: string, patch: Partial<GamesQuery>) =>
    set(s => ({
      currentFilters: {
        ...s.currentFilters,
        [name]: { ...(s.currentFilters[name] ?? {}), ...patch },
      },
    })),

  resetFilters: async (name: string) => { 
    set(s => ({ currentFilters: { ...s.currentFilters, [name]: {} } }));

    return await get().useFilters({}, name);
  },

  useFilters: async (params, name) => {
    // const obj = clean({
    //   system_id: params.system_id,
    //   group_id: params.group_id,
    //   tag: params.tag,
    //   tiny_img: params.tiny_img,
    //   is_favorite: params.is_favorite,
    //   "pr.order_by": params["pr.order_by"] ?? "",
    //   "pr.limit": params["pr.limit"] ?? 20,
    //   with_tags: true,
    // });
    const prev = get().currentFilters[name] ?? {};
    const merged = {
      ...prev,
      ...params,
    };
    const next = clean({
      ...merged,
      "pr.limit": merged["pr.limit"] ?? 20,
      "pr.order_by": merged["pr.order_by"], // залишиться якщо був
      with_tags: merged.with_tags ?? true,
    }) as GamesQuery;

    delete (next as any)["pr.page_token"];

    set(s => ({ currentFilters: { ...s.currentFilters, [name]: next } }));

    return await get().fetchGames(next, name);
  },

  fetchGames: async (params, name) => {
    try {
      const res = await GameServiceApi.gamesList(params);
      set((s) => ({ 
        [name]: res ,
        lastParamsByName: { ...s.lastParamsByName, [name]: { ...params } },
        metaByName: { ...s.metaByName, [name]: res._meta },
      }));
      return res;
    } catch (e) {
      console.error("fetchGames error:", e);
      throw e;
    }
  },
  fetchSystemGroup: async () => {
    try {
      const res = await GameServiceApi.systemsGroups();
      set({ systemGroup: res });
      return res;
    } catch (e) {
      console.error("fetchGames error:", e);
      throw e;
    }
  },

  loadMore: async (name) => {
    const meta = get().metaByName[name];
    const token = meta?.next_page_token;
    if (!token) return;
    const last = get().lastParamsByName[name] ?? {};
    const nextParams: GamesQuery = { ...last, "pr.page_token": token };

    try {
      const res = await GameServiceApi.gamesList(nextParams);
  
      set((s) => {
        const prev = (s as any)[name] as { games?: any[]; _meta?: any } | null;
        return {
          [name]: {
            ...(res ?? {}),
            // 🚫 без mergeUniqueById — просто конкатенація
            games: [ ...(prev?.games ?? []), ...(res?.games ?? []) ],
            _meta: res?._meta,
          },
          lastParamsByName: { ...s.lastParamsByName, [name]: nextParams },
          metaByName: { ...s.metaByName, [name]: res?._meta },
        } as any;
      });
  
      return res;
    } catch (e) {
      console.error("loadMore error:", e);
      throw e;
    }
  },

  iFrameUrl: null,

  openGame: async (game, nav?: (path: string) => void) => {
    const request = {
      "game_slug": game.id,
      "currency_id": 6,
      "force_close": false,
      "lang": 2,
      "balance_type": "0"
      }
    try {
      const res = await GameSesionServiceApi.openSession(request);
      set((s) => ({ iFrameUrl: res.url }));
      nav?.(`/game?game_id=${game.id}`);
      return res;
    } catch (e) {
      console.error("fetchGames error:", e);
      throw e;
    }
  }
}));

// ⬇️ Автозапуск дефолтних запитів при першому імпорті
(() => {
  const store = useGamesStore.getState();
  store.fetchGames({ sort: "created_at%20desc" }, "newGames");
  store.fetchGames({ sort: "top_game_launch" }, "topGames");
  store.fetchSystemGroup("systemGroup");
  store.useFilters({}, "searchGames");
})();

export default useGamesStore;
