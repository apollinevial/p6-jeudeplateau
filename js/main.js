var piranha;
var shark;
var wave;
var tsunami;
var joueur1;
var joueur2;

$(document).ready(function () {

    piranha = new Pistolet("compact", 10, "Piranha", "piranha");
    shark = new Pistolet("medium", 10, "Shark", "shark");
    wave = new Pistolet("ultra", 20, "Wave", "wave");
    tsunami = new Pistolet("double recharge", 50, "Tsunami", "tsunami");

    joueur1 = new Joueur("joueur 1", "joueur1", piranha, "joueur1");
    joueur2 = new Joueur("joueur 2", "joueur1", shark, "joueur2");

});