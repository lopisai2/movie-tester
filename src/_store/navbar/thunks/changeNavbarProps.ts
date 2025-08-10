import {
  NavbarState,
} from "@/_interfaces/Navbar.interface";
import { StoreApi } from "zustand";

interface changeThemeThunkInteface {
  set: StoreApi<NavbarState>["setState"];
  get?: StoreApi<NavbarState>["getState"];
  servicesModal: boolean;
}

export const changeNavbarProps = async ({ set, servicesModal, }: changeThemeThunkInteface): Promise<void> => {
  window.localStorage.setItem('servicesModal', servicesModal ? '1' : '0')
  return set({
    servicesModal
  });
};
