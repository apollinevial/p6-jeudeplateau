/*Génération carte*/
class Board {
    constructor(numberOfLines, numberOfCells) {
        this.numberOfLines = numberOfLines;
        this.numberOfCells = numberOfCells;
        this.numberOfGreyCells = entierAleatoire(5, 20);

        this.createMap();
        this.createGreyCells();
    }


    createMap() {

        for (let y = 1; y <= this.numberOfLines; y++) {

            /*On ajoute des lignes au tableau autant de fois que le nombre numberOfLines*/
            let tr = $('<tr></tr>').appendTo('.map').addClass('ligne').attr('id', 'ligne' + y);

            /*Pour chaque ligne On ajoute des cellules autant de fois que le nombre numberOfCells*/
            for (let x = 1; x <= this.numberOfCells; x++) {

                let td = $('<td></td>').appendTo('#ligne' + y).attr('id', 'x' + x + 'y' + y).addClass('cellule');
            }
        }
    }


    createGreyCells() {

        /*Génération cases grisées*/
        console.log("nombre de cases grises : " + this.numberOfGreyCells);

        var i = 1;

        /*Tant que le nombre aléatoire de cases grises à placer n'est pas atteint on passe dans la boucle*/
        while (i <= this.numberOfGreyCells) {

            let a = entierAleatoire(1, 10);
            let b = entierAleatoire(1, 10);

            /*Si la case désignée est déjà grise on n'incrémente pas i et on repasse dans la boucle*/
            if ($("#x" + a + "y" + b).hasClass("grise")) {

            } else {

                /*Si la case désignée n'est pas déjà grise on passe la case en gris et on incrémente i */
                $("#x" + a + "y" + b).css("background-color", "grey").addClass("grise");
                i++;
            }
        }
    }


    displayPlayers(tabJoueurs) {

        for (const tabJoueur of tabJoueurs) {

            tabJoueur.display();
        }

    }

    /*Method déplacer joueurs*/
    deplacement(e, tour, tabPistolets) {

        let intKeyCode = e.which || e.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés

        switch (intKeyCode) {
            case 37:

                tour.joueur.move(tour, tabPistolets, -1, 0);
                break;
            case 38:

                tour.joueur.move(tour, tabPistolets, 0, -1);
                break;
            case 39:

                tour.joueur.move(tour, tabPistolets, 1, 0);
                break;
            case 40:

                tour.joueur.move(tour, tabPistolets, 0, 1);
                break;
        }

    }


}
