console.log("Atelier sur les boucles");

var products = [
    "télé",
    "switch",
    "lin",
    "Aspiro",
    "tutu",
];

var i = 0;

console.log("Notre tableau contient " + products.lenght + " éléments");
// Boucle while
while (i < products.length) {
    console.log(products[i]);
    i++;
}
// Boucle for

for (var i = 0; i < products.length; i++) {
    console.log(products[i]);
}
    console.log("\n Exemple de boucle for sans tableau :");

    for (var i = 0;i < 10;i++){
        console.log(i);
}
