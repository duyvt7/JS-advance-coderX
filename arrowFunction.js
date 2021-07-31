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

//sự khác nhau giữu sử dụng function thường và arrow function
//ví dụ
var mouse = {
    name: 'Jerry', 
    // run: function(){
    //     console.log(this.name)
    // }
    run: function(){
        var run2 = function(){
            console.log(this.name)
        }//.bind(mouse)
        run2.bind(this)() // this ở đây chỉ obj mouse
        //nếu không có bind thì this ở đây có giá trị như 1 function scope
        //this ở đây (nếu không có bind đang là 1 global context)
        //this chỉ có giá trị chỉ run2 chứ không chỉ Obj mouse
    },

    weight:0.5,
    weightor: function(){
        var miniWeightor = ()=>{
            console.log(this.weight)
        }
        miniWeightor()
    }
    // do ham arrow fucntion không có nội dung bên trong (function context)
    // nên scope (phạm vi của function) của arrow function cũng chính là hàm chứa nó bên trong
    // như trong ví dụ: this trong miniweight cũng chính chỉ obj Mouse

}
mouse.run()
mouse.weightor()