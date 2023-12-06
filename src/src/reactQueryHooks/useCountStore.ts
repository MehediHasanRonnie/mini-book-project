import { create } from "zustand";

type Store = {
  count: number;
  inc: () => void;
  dec: () => void;
  res: () => void;
};

const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
  res: () => set(() => ({ count: 0 })),
}));

export default useStore;
