"use client"
import { shallow } from "zustand/shallow"
import { createWithEqualityFn } from "zustand/traditional"

interface useMenuTypes {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

const useMenu = createWithEqualityFn<useMenuTypes>(
  (set) => ({
    isOpen: false,
    onClose: () => set((state) => ({ isOpen: false })),
    onOpen: () => set((state) => ({ isOpen: true })),
  }),
  shallow
)

export default useMenu
