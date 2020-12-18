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

    /*Method placer joueurs sur la carte*/
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


    /*Method savoir si le joueur peut se déplacer*/
    canMove(deplacementHorizontal, deplacementVertical) {
        let nextPositionX = this.position.x + deplacementHorizontal;
        let nextPositionY = this.position.y + deplacementVertical;
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


    /*Method pour déplacer la joueur et son arme*/
    Move(tour, tabPistolets, deplacementHorizontal, deplacementVertical) {
        
        if (tour.joueur.canMove(deplacementHorizontal, deplacementVertical)) {

            /*Changement position joueur*/
            tour.joueur.position.x += deplacementHorizontal;
            tour.joueur.position.y += deplacementVertical;

            /*Changement position pistolet*/
            tour.joueur.pistolet.position.x += deplacementHorizontal;
            tour.joueur.pistolet.position.x += deplacementVertical;

            /*Déplacement des visuels*/
            $(tour.joueur.visuel).appendTo("#x" + tour.joueur.position.x + "y" + tour.joueur.position.y);
            $(tour.joueur.pistolet.visuel).appendTo("#x" + tour.joueur.position.x + "y" + tour.joueur.position.y);

            /*Si une arme est présente dans la nouvelle case on procède à l'échange*/
            for (const tabPistolet of tabPistolets) {
                if (tour.joueur.position.x == tabPistolet.position.x && tour.joueur.position.y == tabPistolet.position.y && tabPistolet != tour.joueur.pistolet) {
                    tour.joueur.pistolet = tabPistolet;
                    break;
                }
            }

        } else {
            tour.iteration++;
            alert("Cette case est inaccessible");
        }

    }
}
