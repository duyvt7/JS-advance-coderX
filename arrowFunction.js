//function arrow expression
//fat arrow

function sum(a,b){
    return a+b
}
console.log(sum(5,6))
var sum2 = function(a,b){
    return a+b
}
console.log(sum2(1,2))

//using arrow function 
var sum3 = (a,b) =>{return a+b}
console.log (sum3(3,4))
//syntax: (parameter) =>{command to do}
//need return
// neu chi co 1 tham so co the không cần dấu ()
//nếu chỉ có 1 command có thể khong cần dấu {}
var square = x=>x*x
console.log(square(3))
var arr = [1,3,5]
let newArr = arr.map(x => {return x+1})
console.log(newArr)