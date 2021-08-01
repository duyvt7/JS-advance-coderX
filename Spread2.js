const obj1 = {
    a: 1,
    b:2,
    c:3,
}

const obj2 = {
    ...obj1, //shadow clone
    z:1000
}
console.log(obj2)

let obj3 = {}
for (let i in obj1){
    obj3[i] = obj1 [i]
}
console.log(obj3)