$(document).ready(function () {

    /*Création des pistolets*/
    let piranha = new Pistolet("compact", 10, "Piranha", "piranha");
    let shark = new Pistolet("medium", 10, "Shark", "shark");
    let wave = new Pistolet("ultra", 20, "Wave", "wave");
    let tsunami = new Pistolet("double recharge", 50, "Tsunami", "tsunami");
    
    var tabPistolets = [piranha, shark, wave, tsunami];
    
    /*Création des joueurs*/
    let joueur1 = new Joueur("joueur 1", "joueur1", piranha, "joueur1");
    let joueur2 = new Joueur("joueur 2", "joueur1", shark, "joueur2");
    
    /*Création de la carte de jeu*/
    let board = new Board(10,10);
    board.displayPlayers(joueur1, joueur2)
    
    /*Positionnement des pistolets*/
    wave.positionArme();
    tsunami.positionArme();
    
    /*Positionnement des joueurs*/
    joueur1.positionPerso(joueur2);
    joueur2.positionPerso(joueur1);
    
    
    
    let tour = {
        joueur: joueur1,
        iteration: 3,
        iterationMax: 3
    }
    
    /*Déplacement des joueurs avec les flèches*/
    $(document).on('keydown', function (e) {
        if (tour.iteration > 0) {
            tour.iteration--;
        } else {
            tour.iteration = 2;
            if (tour.joueur == joueur1) {
                tour.joueur = joueur2;
                $(".btn-j1").prop("disabled", true).css("background-color", "white");
                $(".btn-j2").prop("disabled", false).css("background-color", "red");
            } else if (tour.joueur == joueur2) {
                tour.joueur = joueur1;
                $(".btn-j2").prop("disabled", true).css("background-color", "white");
                $(".btn-j1").prop("disabled", false).css("background-color", "red");
            }
        }
        board.deplacement(e, tour, tabPistolets);
        board.displayPlayers(joueur1, joueur2);
        
        console.log("joueur1 : " + JSON.stringify(joueur1.position));
        console.log("joueur2 : " + JSON.stringify(joueur2.position));
        console.log("pistolet rose : " + JSON.stringify(wave.position));
        console.log("pistolet jaune : " + JSON.stringify(tsunami.position));
        console.log("pistolet violet : " + JSON.stringify(shark.position));
        console.log("pistolet orange : " + JSON.stringify(piranha.position));
    });
    

    $(".boutonarret").click(function () {
        tour.iteration = 3;
        if (tour.joueur == joueur1) {
            tour.joueur = joueur2;
            $(".btn-j1").prop("disabled", true).css("background-color", "white");
            $(".btn-j2").prop("disabled", false).css("background-color", "red");
        } else if (tour.joueur == joueur2) {
            tour.joueur = joueur1;
            $(".btn-j2").prop("disabled", true).css("background-color", "white");
            $(".btn-j1").prop("disabled", false).css("background-color", "red");
        }
    });

});