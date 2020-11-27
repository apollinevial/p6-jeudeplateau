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

    /*variable nombre aléatoire <20*/
    function entierAleatoire(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
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


    /*Placer armes*/
    function positionArme(pistolet) {
        var a = entierAleatoire(1, 10);
        var b = entierAleatoire(1, 10);

        /*Si la case sélectionnée aléatoirement est grise ou contient déjà une arme on rejoue la fonction*/
        if ($("#x" + a + "y" + b).hasClass("grise") ||
            $("#x" + a + "y" + b).children().hasClass("arme")) {
            positionArme(pistolet);
            /*Sinon on déplace l'image de l'arme dans la case*/
        } else 
        /*Sinon on pose l'arme et on lui donne une position*/{
            $("#x" + a + "y" + b).append(pistolet.visuel);
            pistolet.position.x = a;
            pistolet.position.y = b;
            console.log(pistolet.position);
        }
    }

    positionArme(wave);
    positionArme(tsunami);


    /*Placer personnages*/
    function positionPerso1() {
        var a = entierAleatoire(1, 10);
        var b = entierAleatoire(1, 10);
        var dessus = b - 1;
        var droite = a + 1;
        var dessous = b + 1;
        var gauche = a - 1;

        /*Si la case sélectionnée aléatoirement est grise ou contient une arme ou que les 4 cases autour contiennent l'autre personnage on rejoue la fonction*/
        if ($("#x" + a + "y" + b).hasClass("grise") ||
            $("#x" + a + "y" + b).children().hasClass("arme") ||
            $("#x" + a + "y" + b).children().hasClass("perso2") ||
            $("#x" + a + "y" + dessus).children().hasClass("perso2") ||
            $("#x" + gauche + "y" + b).children().hasClass("perso2") ||
            $("#x" + a + "y" + dessous).children().hasClass("perso2") ||
            $("#x" + droite + "y" + b).children().hasClass("perso2")) {
            positionPerso1();
        } else 
        /*Sinon on déplace l'image de l'arme 1 dans la case et on lui donne une position*/{
            $("#x" + a + "y" + b).append(joueur1.visuel, joueur1.pistolet.visuel);
            joueur1.position.x = a;
            joueur1.position.y = b;
            joueur1.pistolet.position.x = a;
            joueur1.pistolet.position.y = b;
        }
    }

    positionPerso1();


    /*Placer perso 2*/
    function positionPerso2() {
        var a = entierAleatoire(1, 10);
        var b = entierAleatoire(1, 10);
        var dessus = b - 1;
        var droite = a + 1;
        var dessous = b + 1;
        var gauche = a - 1;

        /*Si la case sélectionnée aléatoirement est grise ou contient une arme ou que les 4 cases autour contiennent l'autre personnage on rejoue la fonction*/
        if ($("#x" + a + "y" + b).hasClass("grise") ||
            $("#x" + a + "y" + b).children().hasClass("arme") ||
            $("#x" + a + "y" + b).children().hasClass("perso1") ||
            $("#x" + a + "y" + dessus).children().hasClass("perso1") ||
            $("#x" + gauche + "y" + b).children().hasClass("perso1") ||
            $("#x" + a + "y" + dessous).children().hasClass("perso1") ||
            $("#x" + droite + "y" + b).children().hasClass("perso1")) {
            positionPerso2();
        } else 
            /*Sinon on déplace l'image de l'arme 1 dans la case*/{
            $("#x" + a + "y" + b).append(joueur2.visuel, joueur2.pistolet.visuel);
            joueur2.position.x = a;
            joueur2.position.y = b;
            joueur2.pistolet.position.x = a;
            joueur2.pistolet.position.y = b;
        }
    }

    positionPerso2();

});
