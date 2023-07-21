import {
  getNewRandomNumber,
  playerLost,
  playerWon,
  randomNumberInRange,
  setDisabledList,
} from "../utils/list.utils";

import win from "../sounds/win.mp3";
import lose from "../sounds/lose.mp3";

const winSound = new Audio(win);
winSound.load();
const loseSound = new Audio(lose);
loseSound.load();

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
      //TODO: change state to be immutable
      const spaceIndex = action.payload.spaceIndex;

      //state.sortedList[spaceIndex] = state.randomNumber;
      const nextSortedList = [...state.sortedList];
      nextSortedList[spaceIndex] = state.randomNumber;

      //state.randomNumber = getNewRandomNumber(state.usedRandomNumbers);
      const nextRandomNumber = getNewRandomNumber(state.usedRandomNumbers);
      //state.usedRandomNumbers.push(state.randomNumber);

      let nextEndGameState = "INPROGRESS";
      if (playerWon(nextSortedList)) {
        nextEndGameState = "WIN";
        winSound.play();
      } else if (playerLost(nextSortedList, nextRandomNumber)) {
        nextEndGameState = "LOSE";
        loseSound.play();
      }

      //setDisabledList(state.sortedList, state.disabledList, state.randomNumber);
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
