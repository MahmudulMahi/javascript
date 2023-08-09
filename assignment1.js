function cubeNumber(number) {
  if (typeof number !== 'number') {
    return "please Insert number"
  }
  else {
    let result = number * number * number
    return result
  }
}
let num1 = 4
console.log(cubeNumber(num1))
