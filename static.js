//using keywork static to create a static method
//what is the diff between normal method and static method
//static method can not be call ed from instance of the class, but from the class itself
//instance of the class is an obj created from that class

//example:

class a {
    constructor(){

    }
    static noob (){
        console.log('a noob player ...')
    }
    newbie(){
        console.log('this a a newbie')
    }
}
//using static 
a.noob()
//normal
var b= new a
b.newbie()