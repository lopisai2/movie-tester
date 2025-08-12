import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { changeThemeMode } from "./thunks/changeMode";
import { CustomThemeState, ThemeType } from "@/_interfaces/CustomTheme.interface";

const initialState = Object.freeze({
  tailwindTheme: localStorage.getItem('themeMode') === 'light' ? 'light' : 'dark',
});

export const useThemeStore = create<CustomThemeState>()(
  devtools(
    (set, get) => {
      return {
        theme: initialState,
        changeThemeMode: (mode: ThemeType) => changeThemeMode({ set, get, mode }),
      };
    },
    {
      name: "theme",
    }
  )
);
