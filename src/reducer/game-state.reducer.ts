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
  score: 0,
};

const gameStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SPACE_SELECTED: {
      const spaceIndex = action.payload.spaceIndex;

      const nextSortedList = [...state.sortedList];
      nextSortedList[spaceIndex] = state.randomNumber;

      const nextRandomNumber = getNewRandomNumber(state.usedRandomNumbers);

      const nextScore = state.score + 1;

      let nextEndGameState = "INPROGRESS";
      if (playerWon(nextSortedList)) {
        nextEndGameState = "WIN";
      } else if (playerLost(nextSortedList, nextRandomNumber)) {
        nextEndGameState = "LOSE";
      }

      const nextDisabledList = setDisabledList(
        nextSortedList,
        state.disabledList,
        nextRandomNumber
      );

      return {
        ...state,
        sortedList: nextSortedList,
        randomNumber: nextRandomNumber,
        usedRandomNumbers: [...state.usedRandomNumbers, nextRandomNumber],
        endGameState: nextEndGameState,
        disabledList: nextDisabledList,
        score: nextScore,
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
        score: 0,
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
