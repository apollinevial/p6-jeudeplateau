$(document).ready(function () {

    /*Création des pistolets*/
    let piranha = new Pistolet("compact", 10, "piranha", "pistolet-10.svg");
    let shark = new Pistolet("medium", 10, "shark", "pistolet-violet-10.svg");
    let wave = new Pistolet("ultra", 20, "wave", "pistolet-20.svg");
    let tsunami = new Pistolet("double recharge", 50, "tsunami", "pistolet-50.svg");

    var tabPistolets = [piranha, shark, wave, tsunami];

    /*Création des joueurs*/
    let joueur1 = new Joueur("1", piranha, "perso1.svg");
    let joueur2 = new Joueur("2", shark, "perso2.svg");
    joueur1.adversaire = joueur2;
    joueur2.adversaire = joueur1;

    var tabJoueurs = [joueur1, joueur2];

    /*Création de la carte de jeu*/
    let board = new Board(10, 10);
    board.displayPlayers(tabJoueurs)

    /*Positionnement des pistolets*/
    wave.positionArme();
    tsunami.positionArme();

    /*Positionnement des joueurs*/
    joueur1.positionPerso();
    joueur2.positionPerso();


    let tour = {
        joueur: joueur1,
        adversaire: joueur2,
        iteration: 3
    }


    /*Déplacement des joueurs avec les flèches*/
    $(document).on('keydown', function (e) {

            if (tour.iteration > 0) {
                if (tour.iteration == 3) {
                    $(".tour").html("Nombre de déplacements : 1");
                }
                if (tour.iteration == 2) {
                    $(".tour").html("Nombre de déplacements : 2");
                }
                if (tour.iteration == 1) {
                    $(".tour").html("Nombre de déplacements : 3");
                }
                tour.iteration--;
            } else {
                if (tour.iteration == 0) {
                    $(".tour").html("Nombre de déplacements : 1");
                }
                tour.iteration = 2;
                if (tour.joueur == joueur1) {
                    tour.joueur = joueur2;
                    tour.adversaire = joueur1;
                } else if (tour.joueur == joueur2) {
                    tour.joueur = joueur1;
                    tour.adversaire = joueur2;
                }
            }

            $(".partie-j" + tour.joueur.numero).removeClass("joueur-attente").addClass("joueur-actif");
            $(".partie-j" + tour.adversaire.numero).removeClass("joueur-actif").addClass("joueur-attente");
            board.deplacement(e, tour, tabPistolets);
        
    });


    $(".boutonarret").click(function () {
        tour.iteration = 3;
        if (tour.joueur == joueur1) {
            tour.joueur = joueur2;
            tour.adversaire = joueur1;
        } else if (tour.joueur == joueur2) {
            tour.joueur = joueur1;
            tour.adversaire = joueur2;
        }
    });
    

});
