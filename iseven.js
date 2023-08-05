function iseven(number){
let remainder=number%2;
if (remainder === 0){
  return true
}
else{
  return false
}
}

let numiseven=iseven(303)
console.log(numiseven)