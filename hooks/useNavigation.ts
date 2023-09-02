"use client"
import { shallow } from "zustand/shallow"
import { createWithEqualityFn } from "zustand/traditional"

interface useNavigationType {
  path: string
  setpath: (newPath: string) => void
  IsOpen: boolean
  setIsOpen: () => void
}

export const useNavigation = createWithEqualityFn<useNavigationType>(
  (set) => ({
    path: "/",
    IsOpen: false,
    setpath: (newPath: string) => set(() => ({ path: newPath })),
    setIsOpen: () => set((state) => ({ IsOpen: !state.IsOpen })),
  }),
  shallow
)
