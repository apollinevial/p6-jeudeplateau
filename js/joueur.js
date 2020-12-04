/*objets javascript pour les joueurs*/
class Joueur {
    constructor(nom, identifiant, pistolet, visuel) {
        this.nom = nom;
        this.identifiant = identifiant;
        this.pistolet = pistolet;
        this.position = {
            x: null,
            y: null
        }
        this.points = 100;
        this.visuel = $('#' + visuel);
    }

    /*Placer personnages*/
    positionPerso(adversaire) {
        let a = entierAleatoire(1, 10);
        let b = entierAleatoire(1, 10);
        let dessus = b - 1;
        let droite = a + 1;
        let dessous = b + 1;
        let gauche = a - 1;

        /*Si la case sélectionnée aléatoirement est grise ou contient une arme ou que les 4 cases autour contiennent l'autre personnage on rejoue la fonction*/
        if ($("#x" + a + "y" + b).hasClass("grise") ||
            $("#x" + a + "y" + b).children().hasClass("arme") ||
            $("#x" + a + "y" + b).children().hasClass(adversaire.identifiant) ||
            $("#x" + a + "y" + dessus).children().hasClass(adversaire.identifiant) ||
            $("#x" + gauche + "y" + b).children().hasClass(adversaire.identifiant) ||
            $("#x" + a + "y" + dessous).children().hasClass(adversaire.identifiant) ||
            $("#x" + droite + "y" + b).children().hasClass(adversaire.identifiant)) {
            this.positionPerso(adversaire);
        } else
        /*Sinon on déplace l'image de l'arme 1 dans la case et on lui donne une position*/
        {
            $("#x" + a + "y" + b).append(this.visuel, this.pistolet.visuel);
            this.position.x = a;
            this.position.y = b;
            this.pistolet.position.x = a;
            this.pistolet.position.y = b;
        }
    }


    canMove(deplacementHorizontal, deplacementVertical) {
        var nextPositionX = this.position.x + deplacementHorizontal;
        var nextPositionY = this.position.y + deplacementVertical;
        if (
            //Si le déplacement horizontal est inférieur à 0 et donc fait sortir le joueur de la grille
            nextPositionX < 0 ||
            //Ou si le déplacement horizontal est supérieur à 10
            nextPositionX > 10 ||
            //Ou si le déplacement vertical est inférieur à 0
            nextPositionY < 0 ||
            //Ou si le déplacement vertical est supérieur à 10
            nextPositionY > 10 ||
            //Ou si la case suivante est grise
            $('#x' + nextPositionX + 'y' + nextPositionY).hasClass('grise') ||
            //Ou si la case suivante contient l'autre joueur
            $('#x' + nextPositionX + 'y' + nextPositionY).children().hasClass('joueur')
        ) {
            //On ne déplace pas
            return false;
        }
        return true;
    }
}
