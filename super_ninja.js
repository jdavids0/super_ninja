class Ninja{
    // assigning default values
    // non-default values must come first
    constructor(name, health = 10, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(`${this.name} has a health of ${this.health}, a speed of ${this.speed}, and a strength of ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
    }
}

/* const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats(); */

class Sensei extends Ninja{
    constructor(name){
        super(name, 200, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Code a little, test a lot");
    }
}

const wiseSensei = new Sensei("Splinter");
wiseSensei.speakWisdom();
wiseSensei.showStats();

