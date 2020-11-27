$(document).ready(function () {

    /*Affichage des colonnes sur les côtés*/
    $(joueur1.pistolet.visuel).clone().appendTo('.arme-j1');
    $(".points-j1").html("Dégats arme : " +joueur1.pistolet.degat);
    $(".vies-j1").html("Nombre de points : " +joueur1.points);
    $(joueur2.pistolet.visuel).clone().appendTo('.arme-j2');
    $(".points-j2").html("Dégats arme : " +joueur2.pistolet.degat);
    $(".vies-j2").html("Nombre de points : " +joueur1.points);
    
    /*Génération carte*/
    var numberOfLines = 10; // nombre de lignes dans la carte
    var numberOfCells = 10; // nombre de cellules par ligne dans la carte

    for (var y = 1; y <= numberOfLines; y++) {

        var tr = $('<tr></tr>').appendTo('.map').addClass('ligne').attr('id', 'ligne' + y);

        for (var x = 1; x <= numberOfCells; x++) {
            var td = $('<td></td>').appendTo('#ligne' + y).attr('id', 'x' + x + 'y' + y).addClass('cellule');
        }
    }

    /*Génération cases grisées*/


    var numberOfGreyCells = entierAleatoire(5, 20);

    console.log(numberOfGreyCells + "grises");


    var i = 1;
    /*Tant que le nombre aléatoire de cases grises à placer n'est pas atteint*/
    while (i <= numberOfGreyCells) {

        var a = entierAleatoire(1, 10);
        var b = entierAleatoire(1, 10);

        /*Si la case désignée est déjà grise on n'incrémente pas i et on repasse dans la boucle*/
        if ($("#x" + a + "y" + b).hasClass("grise")) {

        } else 
        /*Si la case désignée n'est pas déjà grise on incrémente i et passe la case en gris*/{
            $("#x" + a + "y" + b).css("background-color", "grey").addClass("grise");
            i++;
        }
    }


});
