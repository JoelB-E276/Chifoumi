
var i = 0;
while (i <= 9) {
  console.log("One run of the loop");
  i ++;
}// Affiche 10 fois "One run of the loop" Boucle While
var i = 0;
while (i <= 9) {
  console.log("One run of the loop");
  i+=2;
}// n'affiche plus que tours. Je ne sais pas si le compteur est passé de deux en deux ?
// le i++ incrément le compteur et 

// ####  EXERCICE 2 Boucle For
for (var i=0; i <=9 ; i++) {
    console.log("One run of the loop");
  }
  // Remplace le i++ par i+2
  for (var i=0; i <=9 ; i+=2) {
    console.log("One run of the loop");
  }// 
// #### EXERCICE 3 
for (var i=0; i <=99 ; i++) {
console.log(i)
    // Boucle qui s'affiche jusqu'a 99 
}
for (var i=0; i <=99 ; i+=2) {
    console.log(i)
}// Boucle qui affiche les chiffres de deux en deux
// #### EXERCICE 4
for (var i=0; i <=100 ; i++) {
if (i%4===0){
    console.log (i+" is even")
}    
    else{console.log (i+" is odd")}
}
// #### EXERCICE 5
var items = [
    "First item",
    "Second item",
    "Third item",
    "Fourth item",
];
for (var i=0; i < 4; i++) {
    console.log(items[i]);
  }// affiche : first item, second item etc.
  // La cmd de d'afficher les 4 index du tableau
  // Je ne vois pas la correspondance de "i" dans le tableau "items" 

 // ##### EXERCICE 6 
  var customers = [
    "Albin Term",
    "Anna Sandgrove",
    "John Doe",
    "Terrance Head",
    "Yan Mock",
    "Zoe Durst",
  ];
  console.log("List of all customers");
  for (var i=0; i < 6; i++) {
     console.log(customers[i]);
  }
  // ##### EXERCICE 7
  console.log("\nExercice 7");
  items = ["First item", "Second item", "Third item", "Fourth item"];
  for (var item of items) {
    console.log(item);
}
// #### EXERCICE 8 a terminer
var citizen = {
  "firstname" : "John",
  "lastname" :  "Doe",
  "age" : 45,
  "income" : 60000
};
 for (var i in citizen ){
   console.log(citizen[i]);
 }
  
 






    // #### Boucle For OF
    var cats = [
        "minouche",
        "blanco",
        "Le chat ",
        "nabu",
        "felix",
    ];
    for (var chat of cats){ 
        console.log(chat);
    }

    // #### Boucle For In
for (var index in cats)
console.log(index);
// ##### Boucle avec tableau associatif
var dog = {
    name:"Medor",
    age:4,
    color: "black"
};
for (var index in dog)
console.log(index + " : " + dog[index]);