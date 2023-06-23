export function randomNumberInRange(min: number, max: number) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getLeftNumber(arr: any, index: number) {
  for (let i = index - 1; i >= 0; i--) {
    if (typeof arr[i] === "number") {
      return arr[i];
    }
  }

  return Number.NEGATIVE_INFINITY;
}

export function getRightNumber(arr: any, index: number) {
  for (let i = index + 1; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      return arr[i];
    }
  }

  return Number.POSITIVE_INFINITY;
}

export function setDisabledList(
  sortedList: number[],
  disabledList: boolean[],
  randomNumber: number
) {
  sortedList.map((number: number, index: number) => {
    if (number === undefined) {
      if (
        getLeftNumber(sortedList, index) < randomNumber &&
        getRightNumber(sortedList, index) > randomNumber
      ) {
        disabledList[index] = false;
      } else {
        disabledList[index] = true;
      }
    }
  });
}
