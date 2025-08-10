
export type ThemeType = "light" | "dark";

export interface CustomThemeInterface {
  tailwindTheme: ThemeType;
  mantineMode: ThemeType
}

export interface CustomThemeState {
  theme: CustomThemeInterface
  changeThemeMode: (mode: ThemeType) => void;
}
