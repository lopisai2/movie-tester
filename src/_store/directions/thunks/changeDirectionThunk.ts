import { DirectionState, DirectionType, } from "@/_interfaces/DirectionState.interface";
import { StoreApi } from "zustand";

interface changeDirectionThunkInteface {
  set: StoreApi<DirectionState>["setState"];
  get?: StoreApi<DirectionState>["getState"];
  direction: DirectionType;
}

export const changeDirectionThunk = async ({ set, direction, }: changeDirectionThunkInteface): Promise<void> => {
  set({
    directions: {
      routerDirection: direction,
    },
  });
};
