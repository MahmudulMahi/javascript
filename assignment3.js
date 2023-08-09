// function sortMaker(arr) {
//   if (arr[0] < 0) {
//     return "Invalid input";
//   }
//   else if (arr[1] > 0) {
//     return arr.sort((a, b) => b - a);
//   }
//   else if (arr[0] === arr[1]) {
//     return "equal";
//   }
// }

// const inputArray = [4, 4];
// const result = sortMaker(inputArray);
// console.log(result);

function sortMaker(arr) {
  if (arr[0] < 0 || arr[1] < 0) {
    return "Invalid Input";
  } else if (arr[0] < arr[1]) {
    return arr.sort((a, b) => b - a);
  } else if (arr[1] < arr[0]) {
    return arr;
  } else if (arr[0] === arr[1]) {
    return "equal";
  }
}

const inputArray = [2, 3];
const result = sortMaker(inputArray);
console.log(result);