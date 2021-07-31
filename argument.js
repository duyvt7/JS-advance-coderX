// array-like obj & arguments

const arr = ['a','b','c']
for (let i = 0; i < arr.length ; i++){
    console.log(arr[i])
}
const  fakeArr = {
    '0':'a',
    '1':'b',
    '2':'c',
    length:3,
}
for (let i = 0; i <fakeArr.length; i++){
    console.log(fakeArr[i])
}

//argument
// là 1 biến tồn tại bên trong scope của 1 hàm (function)
function sum() {
    let result = 0
    for (let i=0; i< arguments.length; i++){
        result+=arguments[i]
    }
    return result
}
var kq= sum(1,2,3)
console.log(kq)
//[Arguments] { '0': 1, '1': 2, '2': 3 } - trả về 1 array like obj
//cách 2
function sum2 (){
    const nums = Array.from(arguments) // array.from (array-like obj) and return an array
    return nums.reduce((a,b) => {return a+=b},0)
}
var kq2 = sum2(3,4,5)
console.log(kq2)