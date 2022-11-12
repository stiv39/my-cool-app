import create from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'

type bearStore = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

export const useBearStore = create<bearStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('bearStore', useBearStore)
}
