export function randomNumberInRange(min: number, max: number) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function listIsSorted(array: number[]) {
  // 👇️ check if array is sorted in ascending order
  let prevValue = null;
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== "undefined") {
      if (prevValue !== null && array[i] < prevValue) {
        return false;
      }
      prevValue = array[i];
    }
  }
  return true;
}

export function checkIfPlayerWon(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "undefined") {
      return false;
    }
  }
  return true;
}

export function checkIfPlayerLost(array: number[], randomNumber: number) {
  for (let i = 0; i < array.length; i++) {
    //also need to check to see if we're already past the point we could go to
    if (i != 0 && randomNumber < array[i - 1]) {
      //we broke the sorted order property
      return true;
    }
    //only need to check undefined spots
    if (typeof array[i] === "undefined") {
      const nextNumber = getNextNumberInList(array, i);
      if (randomNumber < nextNumber) {
        return false;
      }
    }
  }
  return true;
}

function getNextNumberInList(array: number[], index: number) {
  for (let i = index + 1; i < array.length; i++) {
    if (typeof array[i] != "undefined") {
      return array[i];
    }
  }
  return Number.MAX_SAFE_INTEGER;
}
