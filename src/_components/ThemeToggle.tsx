"use client";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/_components/ui/dropdown-menu";
import { useThemeStore } from "@/_store/theme/theme";
import { FC } from "react";

export const ThemeToggle: FC = () => {
  const changeThemeMode = useThemeStore((state) => state.changeThemeMode);
  const handleChangeTheme = (theme: "light" | "dark") => {
    changeThemeMode(theme);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='h-11 w-12 cursor-pointer'
          aria-label="Cambiar tema"
        >
          <Sun className='h-[1.6rem] w-[1.6rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <Moon className='absolute h-[1.6rem] w-[1.6rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Cambiar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='z-[1500]'>
        <DropdownMenuItem onClick={() => handleChangeTheme("light")}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeTheme("dark")}>
          Oscuro
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
