class hero {
    constructor(name, hp, damage){
        this.name = name;
        this.hp = hp;
        this.damage = damage;
    }
    applyDamage (damage){
        this.hp -= damage;
    }
    attack(enemy){
        enemy.applyDamage(this.damage);
    }
}

class rangeHero extends hero { //rangeHero is a subclass of hero
    constructor(name, hp, damage, range){
        super(name, hp, damage) // super is show for base class, in this case is shown for class hero 
        this.range = range;
    }
    attack(enemy){
        super.attack(enemy)
        this.hp += this.range;
    }
}
var heroA = new hero('A', 100,10)
var heroB = new hero('B', 200,5)
var heroC = new rangeHero('C',100,5,5)
console.log(heroA, heroB)
heroC.attack(heroB)
console.log(heroC, heroB)
