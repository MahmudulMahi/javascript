function multiple(number){
  let result=1
  for(let i=1; i<=number;i++){
    result =result*i;
  }
  return result;

}
const a =multiple(50)
console.log(a)