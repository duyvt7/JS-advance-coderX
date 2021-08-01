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