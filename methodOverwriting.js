class makeCoffeeMachine{
    makeCoffee(){
        console.log('making coffee')
    }

}
class specialCoffeeMachine extends makeCoffeeMachine{ 
    makeCoffee(cb){
        console.log('make coffee and ...')
        cb()
    }
}
var a= new specialCoffeeMachine
a.makeCoffee(function(){
    console.log('call the guest')
})