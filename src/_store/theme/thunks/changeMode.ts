import {
  CustomThemeState,
  ThemeType,
} from "@/_interfaces/CustomTheme.interface";
import { StoreApi } from "zustand";

interface ChangeThemeThunkInteface {
  set: StoreApi<CustomThemeState>["setState"];
  get?: StoreApi<CustomThemeState>["getState"];
  mode: ThemeType;
}

export const changeThemeMode = async ({ set, mode, }: ChangeThemeThunkInteface): Promise<void> => {
  localStorage.setItem('themeMode', mode)
  set({
    theme: {
      tailwindTheme: mode,
    },
  });
};
