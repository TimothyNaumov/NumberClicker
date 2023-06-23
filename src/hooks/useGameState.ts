import React from "react";
import gameStateReducer, {
  initialState,
  SPACE_SELECTED,
} from "../reducer/game-state.reducer";

export const useGameState = () => {
  const [state, dispatch] = React.useReducer(gameStateReducer, initialState);

  const spaceSelected = (spaceIndex: number) => {
    dispatch({ type: SPACE_SELECTED, payload: { spaceIndex } });
  };

  return { spaceSelected, ...state };
};
