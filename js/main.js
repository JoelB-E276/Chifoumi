//        JEU DU CHIFOUMI
// Message d'acceuil avec boite d'invite pour indiquer son nom.

        var name = prompt('Bienvenue ! Tu peux te détendre en faisant une partie de Chifoumi ! Quel est ton nom ?');

// Réutilisation du nom avec validation
        alert ('Heureux de te faire ta connaissance'+ " " +name+'. Clique sur "OK" si tu es près.');

// Choix de l'utilisateur
        var chifoumi = prompt('Choisis en tapant : pierre, feuille ou ciseaux puis valide avec "OK"');

// Affichage des choix utilisateur et machine
        var choise = ["pierre", "feuille", "ciseaux"];
        var randomChoise = choise[Math.floor(Math.random() * choise.length)];

       alert ("Tu as choisi " +chifoumi+ ",et j'ai choisi "+randomChoise);

// Résultats du jeu dans tableau if/Else
        var resultat = {chifoumi , randomChoise};
    
    if (randomChoise == chifoumi) {
        alert  ("Egalité");
    }
    else if ((randomChoise === choise.indexOf(0) && randomChoise=== choise.indexOf(2)) || (randomChoise === choise.indexOf(2) && randomChoise === choise.indexOf(1)) || (randomChoise === choise.indexOf(1)) && (randomChoise === choise.indexOf(0))) {
        alert ("Gagné");
    }
    else {
        alert ("Perdu");
    }