
function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || (changeArray.length === 0) ) {
      return "invalid array";
  } else {
      let sum = 0;
      for (let i = 0; i < changeArray.length; i++) {
          sum += changeArray[i];
      }
      if (sum < totalDue) {
          return false;
      } else {
          return true;
      }
  }
}

let arr = [2,4,2];
let taka = 10;

let value = canPay(arr, taka); 
console.log(value); 


