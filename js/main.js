$(document).ready(function () {

    /*Création des pistolets*/
    let piranha = new Pistolet("compact", 10, "Piranha", "piranha");
    let shark = new Pistolet("medium", 10, "Shark", "shark");
    let wave = new Pistolet("ultra", 20, "Wave", "wave");
    let tsunami = new Pistolet("double recharge", 50, "Tsunami", "tsunami");

    var tabPistolets = [piranha, shark, wave, tsunami];

    /*Création des joueurs*/
    let joueur1 = new Joueur("joueur 1", "joueur1", "1", piranha, "joueur1");
    let joueur2 = new Joueur("joueur 2", "joueur1", "2", shark, "joueur2");
    
    var tabJoueurs = [joueur1, joueur2];

    /*Création de la carte de jeu*/
    let board = new Board(10, 10);
    board.displayPlayers(tabJoueurs)

    /*Positionnement des pistolets*/
    wave.positionArme();
    tsunami.positionArme();

    /*Positionnement des joueurs*/
    joueur1.positionPerso(joueur2);
    joueur2.positionPerso(joueur1);



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
       /* board.displayPlayers(joueur1, joueur2);*/

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
            tour.adversaire = joueur1;
            $(".partie-j" + tour.joueur.numero).removeClass("joueur-attente").addClass("joueur-actif");
            $(".partie-j" + tour.adversaire.numero).removeClass("joueur-actif").addClass("joueur-attente");
        } else if (tour.joueur == joueur2) {
            tour.joueur = joueur1;
            tour.adversaire = joueur2;
            $(".partie-j" + tour.joueur.numero).removeClass("joueur-attente").addClass("joueur-actif");
            $(".partie-j" + tour.adversaire.numero).removeClass("joueur-actif").addClass("joueur-attente");
        }
    });

});
