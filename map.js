const arr=[1,3,4,5]

const sum=arr.map((item) =>item*2)
console.log(sum)
console.log("main",arr)

// forecch des not return

const sum1=arr.forEach((item) =>item*2)
console.log(sum1)

const fruits=["mango","chingo","bango","tango"]

fruits.forEach((ite,inde,ar) =>console.log(ite,inde,ar))