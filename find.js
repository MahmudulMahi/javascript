const fruits=["mango","bango","tango"]

// const findFruit =(fruits) =>{
//   for(let item of fruits){
//     if(item ==="bango"){
//       return item
//     }
//   }
//   return null;
// }
// const x=findFruit(fruits)
// console.log(x)

const fruit=fruits.find((item)=> item==="bango")
console.log(fruit)