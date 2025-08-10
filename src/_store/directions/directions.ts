import {
  DirectionState,
  DirectionType,
} from "@/_interfaces/DirectionState.interface";
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { changeDirectionThunk } from "./thunks/changeDirectionThunk";

export const useDirectionsStore = create<DirectionState>()(
  devtools(
    persist(
      (set, get) => {
        return {
          directions: {
            routerDirection: "",
          },
          changeDirection: (direction: DirectionType) =>
            changeDirectionThunk({ set, get, direction }),
        };
      },
      {
        name: "directions",
      }
    )
  )
);
