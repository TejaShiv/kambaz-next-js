import { create } from "zustand";

type CounterState = {
  count: number;
  up: () => void;
  down: () => void;
};

const useCounterStore = create<CounterState>((set) => ({
  count: 34,
  up: () => set((state) => ({ count: state.count + 1 })),
  down: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounterStore;
