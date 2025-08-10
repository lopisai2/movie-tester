
export type DirectionType = "right" | "left" | "";

export interface DirectionState {
  directions: {
    routerDirection: DirectionType;
  };
  changeDirection: (status: DirectionType) => void;
}
