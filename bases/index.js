let maVariable;
let monAutreVar = "hello";
monAutreVar = "Hello World";
console.log(monAutreVar);

const prenom = "olivier";

let chaine = "je suis une chaine de caractères";

let nouvelleChaine = "Chaine précédente : " + chaine + ".";
console.log(nouvelleChaine);

let autreConcatenation = `Chaine  précédente : ${chaine}.`;
console.log(autreConcatenation);

// **** Les typesde données ****
let vraifaux = false; // true

// Les tableau avec []
let tab = ["Hello", false, 34, "World"];
console.log(tab);
console.log(tab[2])

// Objet avec des {}
let objet = {
    prenom: "olivier",
    age: 38,
    ville: "Issoudin"
};

console.log(objet);
console.log(objet.ville);


// **** Les opérateurs ****
console.log(4 + 5);

// exposant
console.log(4**5);

// les opérateurs d'affectation
let total = 0;
console.log(total);

total = total + 1;
total++
console.log(total);

total += 5;
console.log(total);


// **** les structures de controle (conditions) ****
let x = 2;
let y = 2;

if (x > y){
    console.log("x et plus grand que y");
} else if (y > x){
    console.log("Y est plus grand que X");
} else {
    console.log("Ils sont égaux");
}

let bool = false;
if(bool){
    console.log("bool est vrai");
} else {
    console.log("bool est faux");
}

// Un ! inverse  le résultat
if (!bool){
    console.log("bool est faux mais l'inverse est vrai");
}

// == test l'églité de valeur
if(x == y){
    console.log("X est Y sont égaux");
}

x = 3;
y = "3";

if(x === y){
    console.log("X est Y sont égaux");
} else {
    console.log("X et Y ne sont pas égaux en valeur et en type");
}

// Ou ||
// Et &&
x = 4;
y = 5;
// soit l'une, soit l'autre
if(x < y || x > 5) {
    console.log("X remplie une condition");
}
// toute les conditions sont remplies
if(x < y && x > 3) {
    console.log("X remplie une condition");
}


// **** les structures itératives (boucles) ****
// le premier c'est le depart, le second i l'arrivée et le troisieme ici pour dire que sa augmente de 1 jusqu'a que sa soit inférieur a 10
for(let i = 0; i < 10; i++){
    console.log(i);
}

// Insertion de données dans un tableau
tab = [];
for(let i = 0; i < 10; i++){
    tab.push(i*2);
}
console.log(tab);
//Push permet de pousser des données et avec le *2 permet de multiplié par 2 les valeurs

// Lecture de données dans le tableau
//les boucles for qu'on utilise quand on c combien de boucle et while quand on ne sait pas car sa ve dire tant que
//tab.length, pour faire jusqu'a la taille du tableau qu'on a mi la a 10
for(let i = 0; i < tab.length; i++){
    console.log(tab[i]);
}

// **** Les fonctions ****
// fonction classique
function maFonction(){
    console.log("J'éxécute ma fonction");
}
maFonction();

// fonction fléchée
const addition = (a,b) => {
    console.log(a + b);
}

const addReturn = (a,b) => {
    return a + b;
}
//let res = addReturn(a:2, b:6);
//console.log(res);







//Exercice 1
const addition = (a, b) => {
    if(typeof a !=="number" || typeof  b !== "number") {
        return "erreur : veuillez rentrer un nombre";
    }
    return a+b;
}
let exo1 = addition(a:3, b:4);
console.log(exo1);


// recup un message
let message = prompt(message : "Quelle est votre avis ?");
console.log(message);
















