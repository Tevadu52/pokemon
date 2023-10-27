class Tueur{
    constructor(name, pv){
        this.name = name;
        this.pv = pv;
    }
}
let tueur = new Tueur("Jason", 100)

let noms = ["Téva", "Lucas", "Sacha", "Alexandre", "Camille", "Léa", "Noé", "Jane", "Clara", "Uma", "Garance", "Baptiste", "Lucile", "Naëma"]

class Caracteristique{
    constructor(name, probDeath,probDmg,probDmgDeath){
        this.name = name
        this.probDeath = probDeath;
        this.probDmg = probDmg;
        this.probDmgDeath = probDmgDeath;
    }
}

Intello = new Caracteristique("Intello",.5,0.1,0.4);
Sportif = new Caracteristique("Sportif",0.3,0.3,0.4);
Peureux = new Caracteristique("Peureux",0.7,0.2,0.1);
Pimbèche = new Caracteristique("Pimbèche",0.7,0.1,0.2);
Leader = new Caracteristique("Leader",0.2,0.3,0.5);
Suicidaire = new Caracteristique("Suicidaire",0.6,0.1,0.3);
let caracteristiques = [Intello, Sportif, Peureux, Pimbèche, Leader, Suicidaire]

class Survivant{
    constructor(name, caracteristique){
        this.name = name
        this.caracteristique =  caracteristique
    }
}

let survivants = []
let morts = [];

for(let i=0;i<5;i++){
    let nom = noms.splice(Math.floor(Math.random() * noms.length),1)[0]
    let caracteristique =  caracteristiques.splice(Math.floor(Math.random() * caracteristiques.length),1)[0]
    survivants.push(new Survivant(nom, caracteristique))
    console.log(nom + " est " + caracteristique.name)
}

console.log("-----Début du massacre-----")

while(tueur.pv>0 && survivants.length>0){
    let victime = Math.floor(Math.random() * survivants.length)
    let survivant = survivants[victime]
    let chance = Math.random()
    if(chance<survivant.caracteristique.probDeath){
        console.log(tueur.name + " à tué " + survivant.name)
        morts.push(survivants.splice(victime,1)[0])
        continue;
    }
    chance = Math.random()
    if(chance<survivant.caracteristique.probDmg){
        tueur.pv-=10
        console.log(survivant.name + " à esquivé et à infligé 10 dmg " + tueur.name)
        continue;
    }
    chance = Math.random()
    if(chance<survivant.caracteristique.probDmgDeath){
        tueur.pv-=15
        console.log(survivant.name + " à infligé 15 dmg " + tueur.name + " contre sa vie!")
        morts.push(survivants.splice(victime,1)[0])
        continue;
    }
}
if(tueur.pv<=0 && survivants.length==0){
    console.log("Tout le monde est mort!")
}else if(tueur.pv<=0){
    console.log(tueur.name + " est mort, mais RIP à")
    morts.forEach(mort => {
        console.log(mort.name + ",")
    });
}else if(survivants.length==0){
    console.log(tueur.name + " à tué tout le monde.")
}