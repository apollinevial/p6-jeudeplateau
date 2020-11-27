var piranha;
var shark;
var wave;
var tsunami;
var joueur1;
var joueur2;

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

    piranha = new Pistolet("compact", 10, "Piranha", "piranha");
    shark = new Pistolet("medium", 10, "Shark", "shark");
    wave = new Pistolet("ultra", 20, "Wave", "wave");
    tsunami = new Pistolet("double recharge", 50, "Tsunami", "tsunami");

    
    /*objets javascript pour les joueurs*/
    class Joueur {
        constructor(nom, pistolet, points, visuel) {
            this.nom = nom;
            this.pistolet = pistolet;
            this.position = {
                x: null,
                y: null
            }
            this.points = points;
            this.visuel = $('#' + visuel);
        }
    }

    joueur1 = new Joueur("joueur 1", piranha, 100, "joueur1");
    joueur2 = new Joueur("joueur 2", shark, 100, "joueur2");

});