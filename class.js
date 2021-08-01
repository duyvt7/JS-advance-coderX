// ussing constructor function
function Mouse (name){
    this.name = name    
}
Mouse.prototype.run = function(){
    console.log('this mouse is running ...')
}
const mouse = new Mouse('Jerry');
mouse.run()

//using class (has constructor function inside of it)

class Cat {
    constructor(name){
        this.name = name
    }
    run(){
        console.log(`this ${this.name} is running`)
    }
}
let Tom = new Cat('TOm');
Tom.run();