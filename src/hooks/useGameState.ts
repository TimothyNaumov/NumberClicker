import React from "react";
import gameStateReducer, {
  initialState,
  RESET_GAME,
  SPACE_SELECTED,
} from "../reducer/game-state.reducer";

export const useGameState = () => {
  const [state, dispatch] = React.useReducer(gameStateReducer, initialState);

  const spaceSelected = (spaceIndex: number) => {
    dispatch({ type: SPACE_SELECTED, payload: { spaceIndex } });
  };

  const resetGame = () => {
    dispatch({ type: RESET_GAME });
  };

  return { spaceSelected, resetGame, ...state };
};
