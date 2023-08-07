function leapyear(year){
  let remainder=year%4
  if (remainder ===0){
    return true
  }
  else{
    return false
  }
}

var year1=leapyear(2220)
console.log(year1)
