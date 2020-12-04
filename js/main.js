$(document).ready(function () {
    
    /*Création de la carte de jeu*/
    let map = new Map(10,10);
    map.createMap();

    /*Création des pistolets*/
    let piranha = new Pistolet("compact", 10, "Piranha", "piranha");
    let shark = new Pistolet("medium", 10, "Shark", "shark");
    let wave = new Pistolet("ultra", 20, "Wave", "wave");
    let tsunami = new Pistolet("double recharge", 50, "Tsunami", "tsunami");
    
    var pistolets = [piranha, shark, wave, tsunami];
    console.log("nombre de pistolets : " + pistolets.length);
    
    /*Positionnement des pistolets*/
    wave.positionArme();
    tsunami.positionArme();

    /*Création des joueurs*/
    let joueur1 = new Joueur("joueur 1", "joueur1", piranha, "joueur1");
    let joueur2 = new Joueur("joueur 2", "joueur1", shark, "joueur2");
    
    /*Positionnement des joueurs*/
    joueur1.positionPerso(joueur2);
    joueur2.positionPerso(joueur1);
    
    /*Affichage des colonnes sur les côtés*/
    $(joueur1.pistolet.visuel).clone().appendTo('.arme-j1');
    $(".points-j1").html("Dégats arme : " +joueur1.pistolet.degat);
    $(".vies-j1").html("Nombre de points : " +joueur1.points);
    $(joueur2.pistolet.visuel).clone().appendTo('.arme-j2');
    $(".points-j2").html("Dégats arme : " +joueur2.pistolet.degat);
    $(".vies-j2").html("Nombre de points : " +joueur1.points);

});