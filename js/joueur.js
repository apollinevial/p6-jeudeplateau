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


    /*Method déplacer joueurs*/
    deplacement(e) {

        let intKeyCode = e.which || e.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés

        switch (intKeyCode) {
            case 37:
                if (this.canMove(-1, 0)) {
                    this.position.x -= 1;


                    if (this.position.x == wave.position.x && this.position.y == wave.position.y) {
                        this.pistolet = wave;
                    } else {}

                    if (this.position.x == tsunami.position.x && this.position.y == tsunami.position.y) {
                        this.pistolet = tsunami;
                    } else {}

                    if (this.position.x == shark.position.x && this.position.y == shark.position.y) {
                        this.pistolet = shark;
                    } else {}

                    if (this.position.x == piranha.position.x && this.position.y == piranha.position.y) {
                        this.pistolet = piranha;
                    } else {}
                    this.pistolet.position.x == this.position.x;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                break;
            case 38:
                if (this.canMove(0, -1)) {
                    this.position.y -= 1;


                    if (this.position.x == wave.position.x && this.position.y == wave.position.y) {
                        this.pistolet = wave;
                    } else {}

                    if (this.position.x == tsunami.position.x && this.position.y == tsunami.position.y) {
                        this.pistolet = tsunami;
                    } else {}

                    if (this.position.x == shark.position.x && this.position.y == shark.position.y) {
                        this.pistolet = shark;
                    } else {}

                    if (this.position.x == piranha.position.x && this.position.y == piranha.position.y) {
                        this.pistolet = piranha;
                    } else {}
                    this.pistolet.position.y == this.position.y;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                break;
            case 39:
                if (this.canMove(+1, 0)) {
                    this.position.x += 1;


                    if (this.position.x == wave.position.x && this.position.y == wave.position.y) {
                        this.pistolet = wave;
                    } else {}

                    if (this.position.x == tsunami.position.x && this.position.y == tsunami.position.y) {
                        this.pistolet = tsunami;
                    } else {}

                    if (this.position.x == shark.position.x && this.position.y == shark.position.y) {
                        this.pistolet = shark;
                    } else {}

                    if (this.position.x == piranha.position.x && this.position.y == piranha.position.y) {
                        this.pistolet = piranha;
                    } else {}
                    this.pistolet.position.x == this.position.x;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                break;
            case 40:
                if (this.canMove(0, 1)) {
                    this.position.y += 1;

                    if (this.position.x == wave.position.x && this.position.y == wave.position.y) {
                        this.pistolet = wave;
                    } else {}

                    if (this.position.x == tsunami.position.x && this.position.y == tsunami.position.y) {
                        this.pistolet = tsunami;
                    } else {}

                    if (this.position.x == shark.position.x && this.position.y == shark.position.y) {
                        this.pistolet = shark;
                    } else {}

                    if (this.position.x == piranha.position.x && this.position.y == piranha.position.y) {
                        this.pistolet = piranha;
                    } else {}
                    this.pistolet.position.y == this.position.y;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                break;


        }

        $(this.visuel).appendTo("#x" + this.position.x + "y" + this.position.y);
        $(this.pistolet.visuel).appendTo("#x" + this.position.x + "y" + this.position.y);


        $(".arme-j1").empty();
        $(joueur1.pistolet.visuel).clone().appendTo('.arme-j1');
        $(".points-j1").html("Dégats arme : " + joueur1.pistolet.degat);
        $(".vies-j1").html("Nombre de points : " + joueur1.points);
        $(".arme-j2").empty();
        $(joueur2.pistolet.visuel).clone().appendTo('.arme-j2');
        $(".points-j2").html("Dégats arme : " + joueur2.pistolet.degat);
        $(".vies-j2").html("Nombre de points : " + joueur1.points);

        console.log("joueur1");
        console.log(joueur1.position);
        console.log("joueur2");
        console.log(joueur2.position);
        console.log("rose");
        console.log(wave.position);
        console.log("jaune");
        console.log(tsunami.position);
        console.log("violet");
        console.log(shark.position);
        console.log("orange");
        console.log(piranha.position);
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
}
