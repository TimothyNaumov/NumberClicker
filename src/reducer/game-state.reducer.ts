import {
  getNewRandomNumber,
  playerLost,
  playerWon,
  randomNumberInRange,
  setDisabledList,
} from "../utils/list.utils";

export const SPACE_SELECTED = "SPACE_SELECTED";
export const RESET_GAME = "RESET_GAME";
const initialRandomNumber = randomNumberInRange(1, 100);

export const initialState = {
  randomNumber: initialRandomNumber,
  usedRandomNumbers: [initialRandomNumber],
  sortedList: Array(10).fill(undefined),
  disabledList: Array(10).fill(false),
  errors: {},
  endGameState: "INPROGRESS",
};

const gameStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SPACE_SELECTED: {
      const spaceIndex = action.payload.spaceIndex;

      state.sortedList[spaceIndex] = state.randomNumber;
      state.randomNumber = getNewRandomNumber(state.usedRandomNumbers);
      state.usedRandomNumbers.push(state.randomNumber);

      if (playerWon(state.sortedList)) {
        state.endGameState = "WIN";
      }

      if (playerLost(state.sortedList, state.randomNumber)) {
        state.endGameState = "LOSE";
      }

      setDisabledList(state.sortedList, state.disabledList, state.randomNumber);

      return {
        ...state,
      };
    }

    case RESET_GAME: {
      const initialRandomNumber = randomNumberInRange(1, 100);

      const newGameState = {
        randomNumber: initialRandomNumber,
        usedRandomNumbers: [initialRandomNumber],
        sortedList: Array(10).fill(undefined),
        disabledList: Array(10).fill(false),
        errors: {},
        endGameState: "INPROGRESS",
      };

      return {
        ...newGameState,
      };
    }

    default:
      return state;
  }
};

export default gameStateReducer;
