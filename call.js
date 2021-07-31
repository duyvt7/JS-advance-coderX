function greeting(){
    console.log(`hi, my name is ${this.name}. i'm ${this.age} year old`)
}
var cat = {
    name: 'Tom',
    age :2,
}
greeting.call(cat)