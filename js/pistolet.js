/*Création pistolets*/
class Pistolet {
    constructor(type, degat, nom, sourceVisuel) {
        this.type = type;
        this.degat = degat;
        this.position = {
            x: null,
            y: null
        }
        this.nom = nom;
        this.sourceVisuel = sourceVisuel;
        this.creationImage();
        this.visuel = $('#' + this.nom);
    }
    
    
    creationImage() {
        
        $(`<img class="arme" id="${this.nom}" src="./img/${this.sourceVisuel}" alt="${this.degat} PTS">`).appendTo('.plateau');
        
    }

    /*Placer armes*/
    positionArme() {
        let a = entierAleatoire(1, 10);
        let b = entierAleatoire(1, 10);

        /*Si la case sélectionnée aléatoirement est grise ou contient déjà une arme on rejoue la fonction*/
        if ($("#x" + a + "y" + b).hasClass("grise") ||
            $("#x" + a + "y" + b).children().hasClass("arme")) {
            this.positionArme();
            /*Sinon on déplace l'image de l'arme dans la case*/
        } else
        /*Sinon on pose l'arme et on lui donne une position*/
        {
            $("#x" + a + "y" + b).append(this.visuel);
            this.position.x = a;
            this.position.y = b;
            console.log(this.visuel);
            
        }
    }




}
