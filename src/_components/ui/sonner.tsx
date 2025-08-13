"use client";
import { useThemeStore } from "@/_store/theme/theme";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "light" } = useThemeStore();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className='toaster group'
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
