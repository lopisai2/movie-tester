import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState = Object.freeze({
  locale: "es",
});

export interface LocaleStore {
  locale: string;
  setLocale: (locale: string) => void;
}

export const useLocaleStore = create<LocaleStore>()(
  devtools(
    (set) => ({
      locale: initialState.locale,
      setLocale: (locale) => set({ locale }),
    }),
    { name: "localeStore" }
  )
);
