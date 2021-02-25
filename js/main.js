// Message d'acceuil avec boite d'invite our indiquer son nom.
var name = prompt('Bienvenue ! Tu peux te détendre en faisant une partie de Chifoumi ! Quel est ton nom ?');
// Réutilisation du nom avec validation
alert ('Heureux de te faire ta connaissance'+ " " +name+' Clique sur "OK" si tu es près.');
//
var chifoumi = prompt('Choisis et tapes : pierre, feuille ou ciseaux puis valide avec "OK"');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const randomMonth = months[Math.floor(Math.random() * months.length)];

console.log("random month =>", randomMonth);



const choise = ["pierre", "feuille", "ciseaux"];
const randomChoise = choise[Math.floor(Math.random() * choise.length)];

console.log("random choise =>", randomChoise);