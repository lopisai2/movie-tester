
export interface NavbarState {
  servicesModal: boolean,
  lastMenuSelected?: number,
  changeNavbarProps: (collapsed: boolean) => void;
}
