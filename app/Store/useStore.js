import { create } from "zustand";

const useStore = create((set) => ({
  clicked: null,
  urls: [1, 1, 1].map((u) => `/${u}.png`),
  setClicked: (index) =>
    set((state) => ({
      clicked: index === state.clicked ? null : index,
    })),
}));

export default useStore;
