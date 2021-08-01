function log(a,...numbers){
    console.log(a)
    console.log(numbers)
}
log(1,2,3,4)
function concat (seperator, ...strings){
    return strings.join(seperator);
}
function sum (...a){
    return a.reduce((a,b) => {
        return a+b
    })
}
let b= sum(1,2,3)
console.log (b)
var a = concat('.','a','b','c')
console.log (a)
