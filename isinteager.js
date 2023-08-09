function isinteger(x){
  if(typeof x!== 'number'){
    return "please provide a number"
  }

  if(x%1===0){
    return true;
  }
  else{
    return false;
  }
}
console.log(isinteger(5))