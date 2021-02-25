console.log("Atelier sur les conditions");
//Password from the user
var psd = 1234
//Password stored on the web site
var psdVerif = 1234 ;
//if the password is correct
var pseudo = "toto";
var pseudoVerif = "toto";

var money = 500;

var status = "missing data";

if(psd === psdVerif && pseudo === pseudoVerif) {
    console.log("bienvenue");
    if (money > 100) {
        console.log ("Achetez quelque chose!!")   
    }
    else if (money > 0){
        console.log("Ce n'est pas grave, nous proposons des solutions de crédit");
    }
    else {
        console.log("Dégage ou j'appelle ta mère!!")
    }
    if(status!== "completed");
console.log("merci de finaliser votre profil")
}

else{
    console.log("identifiants incorrects");
}