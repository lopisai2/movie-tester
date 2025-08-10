export interface ModalState {
  demoDrawer: boolean;
  loginDrawer: boolean;
  visitDrawer: boolean;
}

export interface ModalStore {
  isModalOpen: ModalState; // Estado de los modales
  toggleModal: (modalKey: keyof ModalState, isOpen: boolean) => void; // Función para alternar estado
}
