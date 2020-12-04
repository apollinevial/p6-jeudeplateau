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
    
    
    displayPlayers(joueur1, joueur2) {
        
    /*Affichage des joueurs sur les côtés de l'écran*/
    $(joueur1.visuel).clone().appendTo('.arme-j1');
    $(joueur1.pistolet.visuel).clone().appendTo('.arme-j1');
    $(".points-j1").html("Dégats arme : " +joueur1.pistolet.degat);
    $(".vies-j1").html("Nombre de points : " +joueur1.points);
        
    $(joueur2.visuel).clone().appendTo('.arme-j2');
    $(joueur2.pistolet.visuel).clone().appendTo('.arme-j2');
    $(".points-j2").html("Dégats arme : " +joueur2.pistolet.degat);
    $(".vies-j2").html("Nombre de points : " +joueur1.points);
        
    }
    
    
    /*Method déplacer joueurs*/
    deplacement(e, tour, tabPistolets) {

        let intKeyCode = e.which || e.keyCode; // le code est compatible tous navigateurs grâce à ces deux propriétés

        switch (intKeyCode) {
            case 37:
                if (tour.joueur.canMove(-1, 0)) {
                    
                    tour.joueur.position.x -= 1;

                    for(const tabPistolet of tabPistolets){
                        if (tour.joueur.position.x == tabPistolet.position.x && tour.joueur.position.y == tabPistolet.position.y) {
                        tour.joueur.pistolet = tabPistolet;
                        }
                    }

                    tour.joueur.pistolet.position.x == tour.joueur.position.x;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                
                break;
            case 38:
                if (tour.joueur.canMove(0, -1)) {
                    
                    tour.joueur.position.y -= 1;

                    for(const tabPistolet of tabPistolets){
                        if (tour.joueur.position.x == tabPistolet.position.x && tour.joueur.position.y == tabPistolet.position.y) {
                        tour.joueur.pistolet = tabPistolet;
                        }
                    }

                    tour.joueur.pistolet.position.y == tour.joueur.position.y;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                
                break;
            case 39:
                if (tour.joueur.canMove(+1, 0)) {

                    tour.joueur.position.x += 1;

                    for(const tabPistolet of tabPistolets){
                        if (tour.joueur.position.x == tabPistolet.position.x && tour.joueur.position.y == tabPistolet.position.y) {
                        tour.joueur.pistolet = tabPistolet;
                        }
                    }

                    tour.joueur.pistolet.position.x == tour.joueur.position.x;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                
                break;
            case 40:
                if (tour.joueur.canMove(0, 1)) {
                    
                    tour.joueur.position.y += 1;

                    for(const tabPistolet of tabPistolets){
                        if (tour.joueur.position.x == tabPistolet.position.x && tour.joueur.position.y == tabPistolet.position.y) {
                        tour.joueur.pistolet = tabPistolet;
                        }
                    }

                    tour.joueur.pistolet.position.y == tour.joueur.position.y;
                } else {
                    tour.iteration++;
                    alert("Cette case est inaccessible");
                }
                
                break;
        }

        $(tour.joueur.visuel).appendTo("#x" + tour.joueur.position.x + "y" + tour.joueur.position.y);
        $(tour.joueur.pistolet.visuel).appendTo("#x" + tour.joueur.position.x + "y" + tour.joueur.position.y);


        /*$(".arme-j1").empty();
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
        console.log(piranha.position);*/
    }
    

}
