// Sélecteurs

// document.querySelector("h4").style.background = "red";
const baliseHTML = document.querySelector("h4");
// baliseHTML.style.background = "red";

// Ciblage de .click-event
// Avec querySelector si on cible un ID on met un #, une classe un .
const questionContainer = document.querySelector(".click-event");

// On écoute le déclenchement du click sur l'élément
// En gros quand on click, sa change
//questionContainer.addEventListener("click", () => {
  //  console.log("test du click");
    //questionContainer.style.background = "red";
    //questionContainer.style.border = "5px solid black"
//})

//questionContainer.addEventListener("click", () => {
    //Pour ajouter une class : add
    // questionContainer.classList.add("question-clicked")

    // Pour supprimer une class : remove
    // questionContainer.classList.remove("question-clicked")

    //questionContainer.classList.toggle("question-clicked")
//})

// Sélectionner un élément par son ID
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
//console.log(btn1);

// Quiz
const response = document.querySelector("p");

btn1.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red";
})
const form = document.querySelector("form");
btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";
    form.classList.add("rrr")

})

// Formulaire = Form events
const inputTexte = document.querySelector("input[type='text']");
// Permet de cibler tous les inputs de la page de type "texte"
let texte = "";
inputTexte.addEventListener("input", (e) => {
    // E veux dire event, on s'en sert pour npous ramenner toutes les données
    console.log(e.target.value);
    texte = e.target.value;
})

//Validation du formulaire

form.addEventListener("submit", (e) => {
    //Supprime la contionnalité native de l'élément ciblé
    e.preventDefault();

    //On insère du HTML avec JS dans une div
    document.querySelector("form > div").innerHTML = `<h3> texte : ${texte}</h3>`;
    //InnerHTML Permet d'inserer du html dans un document
})





// Pour html
//Action
//redirection des données, par exemple index.php c'est alors cette page qui traitera les données

//Method
//post = mettre les données en arrière plan
//get = envoie les données via l'url (on voit dans l'url)