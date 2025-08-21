// apis/AuthServiceApi.ts
import { http } from "@/lib/network/http";

export const AuthServiceApi = {
  login: (form: any) =>
    http("/auth", "POST", form),

  logout: () =>
    http("/auth/logout", "POST"),

  getCurrentUser: () => http("/users/current"),
};
