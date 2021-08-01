// class animal {
//     constructor(name){
//         this.name = name;
//     }
//     eat(){
//         console.log(`this ${this.name} is eatting ...`)
//     }
// }
// class bird extends animal{
//     fly(){
//         console.log('this bird is flying ...')
//     }
// }
// class parrot extends bird{
//     speak(){
//         console.log('this parrot is speaking ...')
//     }
// }
// var x = new parrot('abc')
// x.fly()

function animal(name){
    this.name = name;
}
animal.prototype.eat = function(){
    console.log(`${this.name} is eatting ...`)
}
function bird(name) {
    animal.apply(this, arguments)
}
bird.prototype = new animal()