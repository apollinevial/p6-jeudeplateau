jQuery(document).ready(function () {

    let tour = {
        joueur: joueur1,
        iteration: 3,
        iterationMax: 3
    }

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
        deplacement(e, tour.joueur);

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

    function deplacement(e, joueur) {

        var intKeyCode = e.which || e.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés

        switch (intKeyCode) {
            case 37:
                if (joueur.canMove(-1, 0)) {
                    joueur.position.x -= 1;


                    if (joueur.position.x == wave.position.x && joueur.position.y == wave.position.y) {
                        joueur.pistolet = wave;
                    } else {}

                    if (joueur.position.x == tsunami.position.x && joueur.position.y == tsunami.position.y) {
                        joueur.pistolet = tsunami;
                    } else {}

                    if (joueur.position.x == shark.position.x && joueur.position.y == shark.position.y) {
                        joueur.pistolet = shark;
                    } else {}

                    if (joueur.position.x == piranha.position.x && joueur.position.y == piranha.position.y) {
                        joueur.pistolet = piranha;
                    } else {}
                    joueur.pistolet.position.x == joueur.position.x;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                break;
            case 38:
                if (joueur.canMove(0, -1)) {
                    joueur.position.y -= 1;


                    if (joueur.position.x == wave.position.x && joueur.position.y == wave.position.y) {
                        joueur.pistolet = wave;
                    } else {}

                    if (joueur.position.x == tsunami.position.x && joueur.position.y == tsunami.position.y) {
                        joueur.pistolet = tsunami;
                    } else {}

                    if (joueur.position.x == shark.position.x && joueur.position.y == shark.position.y) {
                        joueur.pistolet = shark;
                    } else {}

                    if (joueur.position.x == piranha.position.x && joueur.position.y == piranha.position.y) {
                        joueur.pistolet = piranha;
                    } else {}
                    joueur.pistolet.position.y == joueur.position.y;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                break;
            case 39:
                if (joueur.canMove(+1, 0)) {
                    joueur.position.x += 1;


                    if (joueur.position.x == wave.position.x && joueur.position.y == wave.position.y) {
                        joueur.pistolet = wave;
                    } else {}

                    if (joueur.position.x == tsunami.position.x && joueur.position.y == tsunami.position.y) {
                        joueur.pistolet = tsunami;
                    } else {}

                    if (joueur.position.x == shark.position.x && joueur.position.y == shark.position.y) {
                        joueur.pistolet = shark;
                    } else {}

                    if (joueur.position.x == piranha.position.x && joueur.position.y == piranha.position.y) {
                        joueur.pistolet = piranha;
                    } else {}
                    joueur.pistolet.position.x == joueur.position.x;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                break;
            case 40:
                if (joueur.canMove(0, 1)) {
                    joueur.position.y += 1;

                    if (joueur.position.x == wave.position.x && joueur.position.y == wave.position.y) {
                        joueur.pistolet = wave;
                    } else {}

                    if (joueur.position.x == tsunami.position.x && joueur.position.y == tsunami.position.y) {
                        joueur.pistolet = tsunami;
                    } else {}

                    if (joueur.position.x == shark.position.x && joueur.position.y == shark.position.y) {
                        joueur.pistolet = shark;
                    } else {}

                    if (joueur.position.x == piranha.position.x && joueur.position.y == piranha.position.y) {
                        joueur.pistolet = piranha;
                    } else {}
                    joueur.pistolet.position.y == joueur.position.y;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                break;


        }

        $(joueur.visuel).appendTo("#x" + joueur.position.x + "y" + joueur.position.y);
        $(joueur.pistolet.visuel).appendTo("#x" + joueur.position.x + "y" + joueur.position.y);


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








});
