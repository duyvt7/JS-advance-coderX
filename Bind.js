var mouse = {
    name: 'jerry',
    sayHi: function(){
        console.log('hi my name is '+this.name)
    }
}
// var say = mouse.sayHi
/*
mouse.sayHi la function 
khi gan say = function, ta cos the gọi lại nó.
tuy nhiên, hàm function này lại không biết sayHi của scope nào

=> phải gán thêm method bind vào
*/
/*
bind syctax:
function.bind(obj)
*/
var cat = {
    name: 'tom'
}
var say = mouse.sayHi.bind(cat)
say();

//example2:

function run(cb){
    console.log('run ...')
    cb()
}//cb== call back 
run (mouse.sayHi.bind(mouse))
//truyền thêm vào hàm run 1 call back function
//call back này chính là function say hi của mouse
//nếu không được bind vào mouse/ cat => kết quả sẽ là undefined
//nếu được bind vào mouse ỏ cat // kết quả sẽ được như chạy chương trình
