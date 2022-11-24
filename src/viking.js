// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
this.health -= damage
    }

}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        
    this.name = name
    }
    receiveDamage(damage){
        this.health -= damage

    if(this.health > 0){
        return `${this.name} has received ${damage} points of damage`

    }  else {
        return `${this.name} has died in act of combat`
    }   
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage

    if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`

    }  else {
        return 'A Saxon has died in combat'
    }   
    }
}

// War
class War {constructor(){
    this.vikingArmy = []
    this.saxonArmy = []
}
   

    addViking(vikingSoldier){
        this.vikingArmy.push(vikingSoldier)
    }

    addSaxon(saxonSoldier){
        this.saxonArmy.push(saxonSoldier)
    }

    vikingAttack(){
const saxonSelector = Math.floor(Math.random()*this.saxonArmy.length)
const randomSaxon = this.saxonArmy[saxonSelector]
const randomViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
const vikingDamage = randomSaxon.receiveDamage(randomViking.attack())
if(randomSaxon.health <= 0){
    this.saxonArmy.splice(saxonSelector)
}
return vikingDamage

    }

    saxonAttack(){
const vikingSelector = Math.floor(Math.random()*this.vikingArmy.length)
const randomSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
const randomViking = this.vikingArmy[vikingSelector]
const result = randomViking.receiveDamage(randomSaxon.attack())

if(randomViking.health <= 0){
    this.vikingArmy.splice(vikingSelector)
}
return randomSaxon.strength
    }

    showStatus(){
        
        if(this.vikingArmy.length == 0){
            return 'Saxons have fought for their lives and survived another day...'
        }
        if(this.saxonArmy.length == 0){
            return "Vikings have won the war of the century!"
        }
        
         
        else{return "Vikings and Saxons are still in the thick of battle."
    }
}
 }


 const theWar = new War()
 const vikingOne = new Viking ("David", 10, 10)
 const saxonOne = new Saxon (13,13)
 theWar.addViking(vikingOne)
 theWar.addSaxon(saxonOne)
theWar.saxonAttack()
theWar.showStatus()
console.log(theWar.showStatus())
 console.log(theWar)