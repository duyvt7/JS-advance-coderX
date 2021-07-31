//apply
//call: func.call(this,param1, param2, ...)
//apply: func.apply(this, [param1, param2, ...])

// function greeting(){
//     console.log(`hi, my name is ${this.name}. i'm ${this.age} year old`)
// }
// var cat = {
//     name: 'Tom',
//     age :2,
// }
// greeting.apply(cat)

function sum() {
    const Number = Array.from(arguments)
    return Number.reduce((sum,num) =>{return sum+=num},0)
}
function avg(){
    //sum
    const x = sum.apply(null, arguments)
    //sum/argm.length
    return x/arguments.length
}

var x = sum(2,4,5)
console.log(x)

var y = avg(1,2,3,6)
console.log(y)