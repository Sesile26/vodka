// stores/useModalStore.ts
import { create } from "zustand";

type ModalName = "login";

type ModalState = {
  open: boolean;
  name?: ModalName;
  // довільні дані, які передаєш у модалку
  payload?: Record<string, unknown>;
  openModal: (name: ModalName, payload?: Record<string, unknown>) => void;
  closeModal: () => void;
};

const useModalStore = create<ModalState>((set) => ({
  open: false,
  name: undefined,
  payload: undefined,
  openModal: (name, payload) => set({ open: true, name, payload }),
  closeModal: () => set({ open: false, name: undefined, payload: undefined }),
}));

export default useModalStore;