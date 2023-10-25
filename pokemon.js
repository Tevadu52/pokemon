class Pokemon {
    constructor(name, attack, defense, hp, luck){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    is_lucky(){
        if(this.luck>Math.random()){
            return true;
        }else{
            return false;
        }
    }

    attackPokemon(ennemie){
        let degats = this.attack-ennemie.defense
        if(degats<0){degats=0;}
        ennemie.hp -= degats;
    }

    combattre(ennemie){
        console.log(this.name + " va combattre " + ennemie.name)
        while(this.hp>0){
            if(this.is_lucky()){
                this.attackPokemon(ennemie);
                console.log(ennemie.name + " a "+ennemie.hp + "hp après avoir reçu " + (this.attack-ennemie.defense) + " point de dégats.");
                if(ennemie.hp<=0){break;};
            }else{
                console.log(this.name + " râte son attaque!");
            }
            if(ennemie.is_lucky()){
                ennemie.attackPokemon(this);
                console.log(this.name + " a "+this.hp + "hp après avoir reçu " + (ennemie.attack-this.defense) + " point de dégats.")    ;
        
            }else{
                console.log(ennemie.name + " râte son attaque!");
            }
        }
        if(ennemie.hp<=0){
            console.log(ennemie.name + " est mort...");
        }else{
            console.log(this.name + " est mort...");
        }
    }
}

let Pikachu = new Pokemon("Pikachu", 55, 40, 35, 0.45);
let Ouisticram = new Pokemon("Ouisticram", 48, 42, 40, 0.52);

Pikachu.combattre(Ouisticram);
