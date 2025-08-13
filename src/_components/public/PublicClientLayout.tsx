"use client";
import NavbarWrapper from "./components/Navbar/NavbarWrapper";
import Footer from "./components/Footer/Footer";
import { FC, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import ScrollToTopButton from "./components/ScrollButton/ScrollButton";
import { useHydrateFavoritesOnClient } from "@/_store/favorites/favorites";

const PublicClientLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const queryClient = new QueryClient();
  useHydrateFavoritesOnClient();
  return (
    <QueryClientProvider client={queryClient}>
      <header className='public-header-container'>
        <NavbarWrapper navbarData={null} />
      </header>
      <>{children}</>
      <Footer footerData={null} />
      <Toaster />
      <ScrollToTopButton />
    </QueryClientProvider>
  );
};

export default PublicClientLayout;
