// var let const
//declaration(khai bao bien)
//hoisting
//blockscope (if, for)
//redeclaration (khai bao laij)

//khai bao bien suw dung va ta khoong the su dun
var a = 2
let b = 3
const c=4
console.log(a,b,c)
var a=3
console.log (a) 
/*khi sử dụng vả chúng ta có thể khai báo lại biến 
=> sẽ xuất hiện nhầm lẫn ỏ trùng tê biến khi code quá dài 
*/
// let b = 4
// console.log (b)
/*
chúng ta không thể khai báo lại biến ở bên dưới nếu sử dụng let 
=> tránh gây nhầm lẫn => nếu khai báo lại như trên 
=> complier sẽ báo lỗi
tương tụ với const
*/ 
var a; //có thể khai báo biến mà không câng gán giá trị
// let b;
// const c =1 //khi sử dụng const luôn phải khai báo giá trị

function run(){
    const a =1
    console.log(a)
    // const a=1 //hoisting
}
run()

//if

if (true){
    var x = 2
    let y=3 // let chỉ có giá trị trong block scope của if
    const z =1 // const cũng như let
}
console.log(x)
for (var i =1; i < 5; i++){
    console.log(i)
}

// console.log(i)
// dùng var ra kết quả 1-5 . let ra kq 1-4
//dùng var dong console.log (i) ở ngoài sẽ không báo lỗi
// dùng let và const sẽ báo lỗi
//khi dùng loop không nên sử dụng const


//declaration:
// var có thể khai báo lại được còn let và const thì không
for (var i = 0; i <10; i+=2){
    console.log(i)
}
//=> nên chuyển qua sử dụng let thay vì var để tránh lỗi
