$(document).ready(function () {
    
    
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
    }


    /*Placer personnages*/
    function positionPerso(joueurActif, adversaire) {
        var a = entierAleatoire(1, 10);
        var b = entierAleatoire(1, 10);
        var dessus = b - 1;
        var droite = a + 1;
        var dessous = b + 1;
        var gauche = a - 1;

        /*Si la case sélectionnée aléatoirement est grise ou contient une arme ou que les 4 cases autour contiennent l'autre personnage on rejoue la fonction*/
        if ($("#x" + a + "y" + b).hasClass("grise") ||
            $("#x" + a + "y" + b).children().hasClass("arme") ||
            $("#x" + a + "y" + b).children().hasClass(adversaire.identifiant) ||
            $("#x" + a + "y" + dessus).children().hasClass(adversaire.identifiant) ||
            $("#x" + gauche + "y" + b).children().hasClass(adversaire.identifiant) ||
            $("#x" + a + "y" + dessous).children().hasClass(adversaire.identifiant) ||
            $("#x" + droite + "y" + b).children().hasClass(adversaire.identifiant)) {
            positionPerso(joueurActif, adversaire);
        } else 
        /*Sinon on déplace l'image de l'arme 1 dans la case et on lui donne une position*/{
            $("#x" + a + "y" + b).append(joueurActif.visuel, joueurActif.pistolet.visuel);
            joueur1.position.x = a;
            joueur1.position.y = b;
            joueur1.pistolet.position.x = a;
            joueur1.pistolet.position.y = b;
        }
    }
    
    positionPerso(joueur1, joueur2);
    positionPerso(joueur2, joueur1);

});