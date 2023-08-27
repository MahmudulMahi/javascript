function cubeNumber(number) {
    if (typeof number !== 'number') {
      return "please Insert number"
    }
    else {
      let result = number * number * number
      return result
    }
  }



  function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string")
      return "please provide valid string"
    else {
      if (string1.includes(string2)) {
        return true
      }
      else {
        return false
      }
    }
  }


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


  function findAddress(obj) {
    if(typeof obj !=="object"){
      return "plese provide valid object"
    }
    else{
      const street= obj.street || '__' ;
      const house= obj.house || '__' ;
      const societyt= obj.society || '__' ;
  
      return  +street +',' + house +','+ societyt
     
    }
  }


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

