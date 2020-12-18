/*objets javascript pour les joueurs*/
class Joueur {
    constructor(nom, identifiant, numero, pistolet, visuel) {
        this.nom = nom;
        this.identifiant = identifiant;
        this.numero = numero;
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

    verifPosition(adversaire) {
        if (this.position.x == adversaire.position.x - 1 && this.position.y == adversaire.position.y ||
            this.position.x == adversaire.position.x && this.position.y == adversaire.position.y - 1 ||
            this.position.x == adversaire.position.x + 1 && this.position.y == adversaire.position.y ||
            this.position.x == adversaire.position.x && this.position.y == adversaire.position.y + 1) {

            return true;
        } else {
            return false;
        }
    }


    afficherBoutons() {

        $('<button>Attaquer</button>').appendTo('.boutons-combat-j' + this.numero).addClass('attaque');
        $('<button>Défendre</button>').appendTo('.boutons-combat-j' + this.numero).addClass('defense');
    }


    display() {

        /*Affichage des joueurs sur les côtés de l'écran*/
        $(".visuel-arme-j" + this.numero).empty();
        $(this.visuel).clone().appendTo('.visuel-arme-j' + this.numero);
        $(this.pistolet.visuel).clone().appendTo('.visuel-arme-j' + this.numero);
        $(".nom-arme-j" + +this.numero).html("Nom arme : " + this.pistolet.nom);
        $(".degats-arme-j" + this.numero).html("Dégats arme : " + this.pistolet.degat);
        $(".points-j" + this.numero).html("Nombre de points : " + this.points);

    }


    /*Method pour déplacer la joueur et son arme*/
    move(tour, tabPistolets, deplacementHorizontal, deplacementVertical) {

        if (this.canMove(deplacementHorizontal, deplacementVertical)) {

            /*Changement position joueur*/
            this.position.x += deplacementHorizontal;
            this.position.y += deplacementVertical;

            /*Changement position pistolet*/
            this.pistolet.position.x += deplacementHorizontal;
            this.pistolet.position.y += deplacementVertical;

            /*Déplacement des visuels*/
            $(this.visuel).appendTo("#x" + this.position.x + "y" + this.position.y);
            $(this.pistolet.visuel).appendTo("#x" + this.position.x + "y" + this.position.y);

            /*Si une arme est présente dans la nouvelle case on procède à l'échange*/
            for (const tabPistolet of tabPistolets) {
                if (this.position.x == tabPistolet.position.x && this.position.y == tabPistolet.position.y && tabPistolet != this.pistolet) {
                    this.pistolet = tabPistolet;

                    this.display();

                    break;
                }
            }

            if (this.verifPosition(tour.adversaire)) {
                setTimeout(() => {
                    alert("Combattez");
                    console.log(this);
                }, 800);
                tour.combat == true;
                this.afficherBoutons()
                tour.adversaire.afficherBoutons()

                $(".boutons-combat-j" + this.numero + " .attaque").click(() => {
                    tour.adversaire.points -= this.pistolet.degat;
                    tour.adversaire.display();
                });

            }


        } else {
            tour.iteration++;
            alert("Cette case est inaccessible");
        }

    }
}
