// apis/AuthServiceApi.ts
import { http } from "@/lib/network/http";

export const GameSesionServiceApi = {
  openSession: (gameData: any) =>
    http("/sessions/open", "POST", gameData),

};
