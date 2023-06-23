import { randomNumberInRange, setDisabledList } from "../utils/list.utils";

export const SPACE_SELECTED = "SPACE_SELECTED";
const initialRandomNumber = randomNumberInRange(1, 100);

export const initialState = {
  randomNumber: initialRandomNumber,
  usedRandomNumbers: [initialRandomNumber],
  sortedList: Array(10).fill(undefined),
  disabledList: Array(10).fill(false),
  errors: {},
  isGameOver: false,
};

const gameStateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SPACE_SELECTED: {
      const spaceIndex = action.payload.spaceIndex;

      state.sortedList[spaceIndex] = state.randomNumber;
      state.randomNumber = randomNumberInRange(1, 100);
      state.usedRandomNumbers.push(state.randomNumber);

      setDisabledList(state.sortedList, state.disabledList, state.randomNumber);

      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default gameStateReducer;
