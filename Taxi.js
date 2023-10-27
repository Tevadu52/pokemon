class Personnage{
    constructor(name, mp){
        this.name = name;
        this.mp = mp;
    }
}
let John = new Personnage("John", 10)

class Musique{
    constructor(name, auteur){
        this.name = name;
        this.auteur = auteur;
    }
}
const Anissa = new Musique("Anissa", "Wejdene")
let musiques = [Anissa,new Musique("Come as you are", "Niravana"),new Musique("The Inevitable", "Piotr Musial"),new Musique("Miku", "Hatsune Miku"),new Musique("Ce matin va etre une pure soirée", "Fatal Bazooka")]

class Trajet{
    constructor(radio, stop, change){
        this.radio = radio;
        this.stop = stop;
        this.change = change;
    }
}
let retour = new Trajet(musiques, 30, 0)


while(retour.stop>0){
    let song = retour.radio[Math.floor(Math.random() * retour.radio.length)];
    console.log(song.name + " de "+ song.auteur + " à la radio et il reste " + retour.stop + " feu rouge!");
    if(song==Anissa){
        John.mp--;
        retour.change++;
        if(John.mp==0){
            alert("EXPOLSION");
            break;
        }
    }
    retour.stop--
}
if(retour.stop==0){
   alert(John.name + " est rentrer en un seul morceau, après avoir changer " + retour.change + " fois de taxi.")
}