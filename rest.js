function log(...a){
    console.log(a)
}
log(1,2,3,4)
function concat (seperator, ...strings){
    return strings.join(seperator);
}
var a = concat('.','a','b','c')
console.log (a)
