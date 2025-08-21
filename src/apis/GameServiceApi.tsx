import { http } from "@/lib/network/http";

export type GamesQuery = {
  system_id?: string;
  group_id?: string;
  name?: string;

  "pr.page_token"?: string;
  "pr.limit"?: number;
  "pr.order_by"?: string;

  // допускаємо один тег або масив тегів
  tag?: string | string[];

  tiny_img?: boolean;
  is_favorite?: boolean;

  // фільтри бонусів
  play_bonus_balance?: boolean; // NON zero
  play_bonus_credits?: boolean; // zero + active bonuses

  with_tags?: boolean; // повертати теги
  sort?: any;
};

function toQueryString(params: GamesQuery = {}): string {
  const qs = new URLSearchParams();

  const append = (key: string, value: unknown) => {
    if (Array.isArray(value)) {
      value.forEach((v) => qs.append(key, String(v)));
    } else if (typeof value === "boolean") {
      // явно передаємо true/false, якщо задано
      qs.set(key, value ? "true" : "false");
    } else if (value !== undefined && value !== null && value !== "") {
      qs.set(key, String(value));
    }
  };

  Object.entries(params).forEach(([k, v]) => append(k, v));

  const s = qs.toString();
  return s ? `?${s}` : "";
}

export const GameServiceApi = {
  async gamesList(params?: GamesQuery) {
    const query = toQueryString(params);
    return await http(`/games${query}`);
  },
  async systemsGroups() {
    return await http(`/systems/groups`);
  },
};

// await http("/path");                   // GET
// await http("/path", "POST", payload);  // POST
// await http("/path", "PUT", payload);   // PUT
// await http("/path", "DELETE");         // DELETE
