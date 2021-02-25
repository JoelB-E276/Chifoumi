console.log ("atelier fonction")

function greetings (){
    console.log("un texte Xtra long");
    console.log("un texte en plus")
}
// Appel de la fonction
greetings();
// ###### Exemple 
var cookingTime = {
    "Hamburger": 10,
    "Hot dog" : 5,
    "Sushis" : 30
};

// Déclaration de la fonction service
function service(order=false, name="Cher client,") {
    // Instruction à réaliser
    if(order) {
        return (name + " Vous avez commandé un " + order + ", ce sera prêt dans " + cookingTime[order] + " minutes");
    }
    else {
        return ("Nous n'avons pas compris votre commande");
    }
}

// Appel de la fonction service
service("Hamburger"," Toto");
service("Hot dog","Tata");
service();

//##### Exercice 1 https://thomgo.github.io/Exercices/frontend/javascript/debutant/functions_creation/functions_creation.html
function product(a,b) {
     return (a*b);
}

var result = product(4,30);
console.log(result);


//##### Exercice 2
function showDigits(){
    for (var i = 0;i <= 9 ; i++){
        console.log (i)
    }
}
    showDigits()

//##### Exercice 3

function welcome(firstname="John", lastname="Doe") {
    console.log("Welcome to our site " + firstname + " " + lastname);
    
};
welcome()


//#### Exerecice 4
function isAdult(age=false){
    if(age){
      return (age >= 18) ? true : false;
    }
    return false;
  }
  
  if (isAdult(27)) {
    console.log("Welcome to the site");}
    

    // Exercice sur fonctions Natives

    //###  Exercice 1 ###

    Math.random();
var retour = Math.random();
console.log(retour)

    //###  Exercice 2 ###

    var number = 12.42359 ;
    console.log (number)
    console.log (Math.round (number));
    console.log (parseFloat(number).toFixed(2));

    //###  Exercice 3 ###
    var age = 35 ; 
    console.log(typeof 35);
    console.log (parseInt(age));
    console.log(typeof 35);