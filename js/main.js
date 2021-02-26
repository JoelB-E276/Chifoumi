//        JEU DU CHIFOUMI
// Message d'acceuil avec boite d'invite our indiquer son nom.
var name = prompt('Bienvenue ! Tu peux te détendre en faisant une partie de Chifoumi ! Quel est ton nom ?');

// Réutilisation du nom avec validation
        alert ('Heureux de te faire ta connaissance'+ " " +name+'. Clique sur "OK" si tu es près.');

// Choix de l'utilisateur
var chifoumi = prompt('Choisis et tapes : pierre, feuille ou ciseaux puis valide avec "OK"');

// Affichage des choix utilisateur et machine
        const choise = ["pierre", "feuille", "ciseaux"];
        const randomChoise = choise[Math.floor(Math.random() * choise.length)];

console.log (prompt("Tu as choisi " +chifoumi+ ",et j'ai choisi "+randomChoise));




// Commande en stand by
console.log (prompt("random choise =>", randomChoise));
