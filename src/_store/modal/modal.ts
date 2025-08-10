import { ModalStore } from "@/_interfaces/ModalStore.interface";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

const initialState = Object.freeze({
  isModalOpen: { demoDrawer: false, loginDrawer: false, visitDrawer: false }, // Estado inicial con múltiples modales
});

export const useModalStore = create<ModalStore>()(
  devtools(
    (set) => ({
      isModalOpen: initialState.isModalOpen,
      toggleModal: (modalKey: keyof typeof initialState.isModalOpen, isOpen: boolean) =>
        set((state) => ({
          isModalOpen: {
            ...state.isModalOpen, // Copia el estado actual
            [modalKey]: isOpen, // Actualiza solo el modal especificado
          },
        })),
    }),
    { name: "modalStore" }
  )
);
