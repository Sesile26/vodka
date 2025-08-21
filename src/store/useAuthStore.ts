import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AuthServiceApi } from "@/apis/AuthServiceApi";
import useModalStore from "./useModalStore";

export const useAuthStore = create(persist((set, get) => ({
  user: null,
  accessToken: null,
  status: "idle",
  currentUser: null,

  setAccessToken: (t) => set({ accessToken: t }),

  login: async (form: { login: string; password: string }) => {
    try {
      set({ status: "loading" });
      const { token, user_uuid } = await AuthServiceApi.login(form);
      set({ accessToken: token, user_uuid, status: "auth" });

      await get().getCurrentUser();

      useModalStore.getState().closeModal();
    } catch {

    }

  },

  logout: async () => {
    try { await AuthServiceApi.logout(); } catch {}
    set({ user: null, accessToken: null, status: "guest" });
  },

  getCurrentUser: async () => {
    try { 
      const { user } = await AuthServiceApi.getCurrentUser(); 
      console.log(user, "user");
    } catch {

    }
  }
}), {
  name: "auth",                                     // ключ у localStorage
  storage: createJSONStorage(() => localStorage),
  // необов'язково: що саме зберігати
  partialize: (s) => ({ accessToken: s.accessToken, user_uuid: s.user_uuid, status: s.status }),
}));

(() => {
  const store = useAuthStore.getState();
  store.getCurrentUser();
})();
