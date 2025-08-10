"use client";
import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { NavbarState } from "@/_interfaces/Navbar.interface";
import { changeNavbarProps } from "./thunks/changeNavbarProps";

export const useNavbarStore = create<NavbarState>()(
  devtools(
    persist(
      (set, get) => ({
        servicesModal: false, // Estado inicial por defecto
        changeNavbarProps: (servicesModal: boolean) => changeNavbarProps({ set, get, servicesModal }),
      }),
      {
        name: "navbar",
      }
    )
  )
);

// Hook para inicializar `servicesModal` en el cliente
export const useInitializeNavbarStore = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const setServicesModal = useNavbarStore((state) => state.changeNavbarProps);

  useEffect(() => {
    const initialState = typeof window !== "undefined" && window.localStorage.getItem("servicesModal") ? true : false;
    setServicesModal(initialState);
    setIsInitialized(true);
  }, [setServicesModal]);

  return isInitialized;
};
