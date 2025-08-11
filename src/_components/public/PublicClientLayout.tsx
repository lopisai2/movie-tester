"use client";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import Footer from "./components/Footer/Footer";
import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "../ThemeProvider";

const PublicClientLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <header className='public-header-container'>
          <NavbarWrapper navbarData={null} />
        </header>
        <>{children}</>
        <Footer footerData={null} />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default PublicClientLayout;
