"use client"
import { shallow } from "zustand/shallow"
import { createWithEqualityFn } from "zustand/traditional"

interface useNavigationType {
  path: string
  setpath: (newPath: string) => void
}

export const useNavigation = createWithEqualityFn<useNavigationType>(
  (set) => ({
    path: "/",
    setpath: (newPath: string) => set(() => ({ path: newPath })),
  }),
  shallow
)
