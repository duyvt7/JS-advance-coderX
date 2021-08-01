// create an obj 
//using constructor function
function Mouse (name){
    this.name =name;
}
var Jerry = new Mouse('Jerry')

//obj literal

var Cat = {
    name: 'Tom',
    weight: 5,
}
console.log(Cat)

//enhance obj literal
const name = 'Spike',
const Dog = {
    name,// name : name;
    run() {
        console.log('this dog is eatting ...')
    }
}
console.log(Dog.run)

//nodeJS dont assist this function, 
//this function is assisted by ES6
