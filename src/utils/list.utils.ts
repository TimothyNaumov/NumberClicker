export function randomNumberInRange(min: number, max: number) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getNewRandomNumber(previousRandomNumbers: number[]) {
  let newRandomNumber = randomNumberInRange(1, 100);
  while (previousRandomNumbers.includes(newRandomNumber)) {
    newRandomNumber = randomNumberInRange(1, 100);
  }
  return newRandomNumber;
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
  const nextDisabledList = [...disabledList];
  sortedList.map((number: number, index: number) => {
    if (number === undefined) {
      if (
        getLeftNumber(sortedList, index) < randomNumber &&
        getRightNumber(sortedList, index) > randomNumber
      ) {
        nextDisabledList[index] = false;
      } else {
        nextDisabledList[index] = true;
      }
    }
  });
  return nextDisabledList;
}

export function playerWon(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "undefined") {
      return false;
    }
  }
  return true;
}

export function playerLost(sortedList: number[], randomNumber: number) {
  for (let i = 0; i < sortedList.length; i++) {
    if (sortedList[i] === undefined) {
      if (
        getLeftNumber(sortedList, i) < randomNumber &&
        getRightNumber(sortedList, i) > randomNumber
      ) {
        return false;
      }
    }
  }
  return true;
}
