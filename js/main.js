//        JEU DU CHIFOUMI

// Message d'acceuil avec boite d'invite pour indiquer son nom.
var name = prompt('Bienvenue ! Tu peux te détendre en faisant une partie de Chifoumi ! Quel est ton nom ?');

// Réutilisation du nom avec validation
alert ('Heureux de te faire ta connaissance'+ " " + name +'.   Clique sur "OK" si tu es près.');

// Choix de l'utilisateur
var chifoumi = prompt('Choisis en tapant : pierre, feuille ou ciseaux puis valide avec "OK"');

// Affichage des choix utilisateur et machine
var choice = ["pierre", "feuille", "ciseaux"];

var randomChoice = choice[Math.floor(Math.random() * choice.length)];

alert ("Tu as choisi " + chifoumi + ",et j'ai choisi "+ randomChoice);

// Résultats du jeu dans boite de dialogue alert

if ((chifoumi === "pierre" && randomChoice === "ciseaux") || (chifoumi === "ciseaux" && randomChoice === "feuille") || (chifoumi === "feuille") && (randomChoice === "pierre")) {

    resultat = prompt("Gagné! Tape sur la touche F5 pour rejouer");
}
  if (chifoumi === randomChoice) {
        resultat = prompt("Egalité! Tape sur la touche F5 pour rejouer");
  }
  else {
    resultat = prompt("Perdu! Tape sur la touche F5 pour rejouer");
  }

