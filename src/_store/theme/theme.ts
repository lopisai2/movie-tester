// src/store/themeStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { changeThemeMode } from "./thunks/changeMode";
import {
  CustomThemeState,
  ThemeType,
} from "@/_interfaces/CustomTheme.interface";

const getDefaultTheme = (): ThemeType => {
  // Solo se ejecuta en cliente
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("themeMode") as ThemeType | null;
    if (stored) return stored;

    // Si no hay en localStorage, usar preferencia del SO
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDark ? "dark" : "light";
  }
  // Valor por defecto en el servidor
  return "light";
};

export const useThemeStore = create<CustomThemeState>()(
  devtools(
    (set, get) => ({
      theme: { tailwindTheme: getDefaultTheme() },
      changeThemeMode: (mode: ThemeType) => {
        
        changeThemeMode({ set, get, mode });
      },
    }),
    {
      name: "theme", // clave de almacenamiento
    }
  )
);
