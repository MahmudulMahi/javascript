function isInteger(x){
  if(typeof x !== "number"){
      return "please provide a number";
  }else{
      if(x%1 === 0){
          return true;
      }else{
          return false;
      }
  }
}

console.log(isInteger(2))