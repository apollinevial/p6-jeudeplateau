/*objets javascript pour les joueurs*/
class Joueur {
    constructor(numero, pistolet, sourceVisuel, adversaire) {
        this.numero = numero;
        this.nom = "Joueur " + this.numero;
        this.identifiant = "joueur" + this.numero;
        this.pistolet = pistolet;
        this.position = {
            x: null,
            y: null
        }
        this.points = 100;
        this.sourceVisuel = sourceVisuel;
        this.creationImage();
        this.visuel = $('#' + this.identifiant);
        this.adversaire = adversaire;
        this.defense = false;
    }

    creationImage() {

        $(`<img class="perso${this.numero} joueur${this.numero} joueur" id="joueur${this.numero}" src="./img/${this.sourceVisuel}" alt="perso1">`).appendTo('.plateau');

    }


    /*Method placer joueurs sur la carte*/
    positionPerso() {
        let a = entierAleatoire(1, 10);
        let b = entierAleatoire(1, 10);
        let dessus = b - 1;
        let droite = a + 1;
        let dessous = b + 1;
        let gauche = a - 1;

        /*Si la case sélectionnée aléatoirement est grise ou contient une arme ou que les 4 cases autour contiennent l'autre personnage on rejoue la fonction*/
        if ($("#x" + a + "y" + b).hasClass("grise") ||
            $("#x" + a + "y" + b).children().hasClass("arme") ||
            $("#x" + a + "y" + b).children().hasClass(this.adversaire.identifiant) ||
            $("#x" + a + "y" + dessus).children().hasClass(this.adversaire.identifiant) ||
            $("#x" + gauche + "y" + b).children().hasClass(this.adversaire.identifiant) ||
            $("#x" + a + "y" + dessous).children().hasClass(this.adversaire.identifiant) ||
            $("#x" + droite + "y" + b).children().hasClass(this.adversaire.identifiant)) {
            this.positionPerso();
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


    combat() {
        $('<div></div>').appendTo('.partie-j' + this.numero).addClass('boutons-combat-j' + this.numero);
        $('<button>Attaquer</button>').appendTo('.boutons-combat-j' + this.numero).addClass('attaque');
        $('<button>Défendre</button>').appendTo('.boutons-combat-j' + this.numero).addClass('defense');
        this.attaquer();
        this.defendre();
    }


    display() {

        /*Affichage des joueurs sur les côtés de l'écran*/
        $(".visuel-arme-j" + this.numero).empty();
        $(this.visuel).clone().appendTo('.visuel-arme-j' + this.numero);
        $(this.pistolet.visuel).clone().appendTo('.visuel-arme-j' + this.numero);
        $(".nom-arme-j" + this.numero).html("Nom arme : " + this.pistolet.nom);
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
            
            console.log(this.position.x);
            console.log(this.position.y);
            console.log(this.pistolet.position.x);
            console.log(this.pistolet.position.y);

            /*Déplacement des visuels*/
            $(this.visuel).appendTo("#x" + this.position.x + "y" + this.position.y);
            $(this.pistolet.visuel).appendTo("#x" + this.pistolet.position.x + "y" + this.pistolet.position.y);

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
                }, 800);
                
                /*déplacement bloqué*/
                $(document).off('keydown');
                console.log('keydown');
                
                this.combat();
            }


        } else {
            tour.iteration++;
            alert("Cette case est inaccessible");
        }
    }


    attaquer() {

        $(".boutons-combat-j" + this.numero + " .attaque").click(() => {
            if (this.adversaire.defense == true) {
                var Defense = this.pistolet.degat / 2;
                this.adversaire.points -= Defense;
                console.log(Defense);
                this.adversaire.defense = false;
            } else {
                this.adversaire.points -= this.pistolet.degat;
            }
            this.adversaire.display();
            
            if (this.points == 0 || this.adversaire.points == 0)
                alert("stop");
            else {
                $(".boutons-combat-j"+ this.numero).remove();
                this.adversaire.combat();
            }
        });
    }


    defendre() {

        $(".boutons-combat-j" + this.numero + " .defense").click(() => {
            this.defense = true;
            console.log(this.defense);

            if (this.points == 0 || this.adversaire.points == 0)
                alert("stop");
            else {
                $(".boutons-combat-j"+ this.numero).remove();
                this.adversaire.combat();
            }

        });

    }

}
