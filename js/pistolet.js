$(document).ready(function () {
    
    
/*objets javascript pour les pistolets*/
class Pistolet {
    constructor(type, degat, nom, visuel) {
        this.type = type;
        this.degat = degat;
        this.position = {
            x: null,
            y: null
        }
        this.nom = nom;
        this.visuel = $('#' + visuel);
    }
}

/*Placer armes*/
    function positionArme(pistolet) {
        var a = entierAleatoire(1, 10);
        var b = entierAleatoire(1, 10);

        /*Si la case sélectionnée aléatoirement est grise ou contient déjà une arme on rejoue la fonction*/
        if ($("#x" + a + "y" + b).hasClass("grise") ||
            $("#x" + a + "y" + b).children().hasClass("arme")) {
            positionArme(pistolet);
            /*Sinon on déplace l'image de l'arme dans la case*/
        } else 
        /*Sinon on pose l'arme et on lui donne une position*/{
            $("#x" + a + "y" + b).append(pistolet.visuel);
            pistolet.position.x = a;
            pistolet.position.y = b;
            console.log(pistolet.position);
        }
    }
    
    positionArme(wave);
    positionArme(tsunami);
});