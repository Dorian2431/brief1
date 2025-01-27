// Sélecteurs

// document.querySelector("h4").style.background = "red";
const baliseHTML = document.querySelector("h4");
// baliseHTML.style.background = "red";

// Ciblage de .click-event
// Avec querySelector si on cible un ID on met un #, une classe un .
const questionContainer = document.querySelector(".click-event");

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
btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "green";

})



const questionContainer2 = document.querySelector(".click-event2");
const btn3 = document.querySelector("#btn-3");
const btn4 = document.getElementById("btn-4");
const response2 = document.getElementById("response-2");

btn3.addEventListener("click", () => {
    response2.classList.add("show-response2");
    response2.style.background = "green";
})
btn4.addEventListener("click", () => {
    response2.classList.add("show-response2");
    response2.style.background = "red";

})

const questionContainer3 = document.querySelector(".click-event3");
const btn5 = document.querySelector("#btn-5");
const btn6 = document.getElementById("btn-6");
const response3 = document.getElementById("response-3");

btn5.addEventListener("click", () => {
    response3.classList.add("show-response3");
    response3.style.background = "green";
})
btn6.addEventListener("click", () => {
    response3.classList.add("show-response3");
    response3.style.background = "red";

})

const questionContainer4 = document.querySelector(".click-event4");
const btn7 = document.querySelector("#btn-7");
const btn8 = document.getElementById("btn-8");
const response4 = document.getElementById("response-4");

btn7.addEventListener("click", () => {
    response4.classList.add("show-response4");
    response4.style.background = "red";
})
btn8.addEventListener("click", () => {
    response4.classList.add("show-response4");
    response4.style.background = "green";

})

const questionContainer5 = document.querySelector(".click-event5");
const btn9 = document.querySelector("#btn-9");
const btn10 = document.getElementById("btn-10");
const response5 = document.getElementById("response-5");

btn9.addEventListener("click", () => {
    response5.classList.add("show-response5");
    response5.style.background = "green";
})
btn10.addEventListener("click", () => {
    response5.classList.add("show-response5");
    response5.style.background = "red";

})

const questionContainer6 = document.querySelector(".click-event6");
const btn11 = document.querySelector("#btn-11");
const btn12 = document.getElementById("btn-12");
const response6 = document.getElementById("response-6");

btn11.addEventListener("click", () => {
    response6.classList.add("show-response6");
    response6.style.background = "red";
})
btn12.addEventListener("click", () => {
    response6.classList.add("show-response6");
    response6.style.background = "green";

})

const questionContainer7 = document.querySelector(".click-event7");
const btn13 = document.querySelector("#btn-13");
const btn14 = document.getElementById("btn-14");
const response7 = document.getElementById("response-7");

btn13.addEventListener("click", () => {
    response7.classList.add("show-response7");
    response7.style.background = "red";
})
btn14.addEventListener("click", () => {
    response7.classList.add("show-response7");
    response7.style.background = "green";

})

const questionContainer8 = document.querySelector(".click-event8");
const btn15 = document.querySelector("#btn-15");
const btn16 = document.getElementById("btn-16");
const response8 = document.getElementById("response-8");

btn15.addEventListener("click", () => {
    response8.classList.add("show-response8");
    response8.style.background = "red";
})
btn16.addEventListener("click", () => {
    response8.classList.add("show-response8");
    response8.style.background = "green";

})

const questionContainer9 = document.querySelector(".click-event9");
const btn17 = document.querySelector("#btn-17");
const btn18 = document.getElementById("btn-18");
const response9 = document.getElementById("response-9");

btn17.addEventListener("click", () => {
    response9.classList.add("show-response9");
    response9.style.background = "green";
})
btn18.addEventListener("click", () => {
    response9.classList.add("show-response9");
    response9.style.background = "red";

})

const questionContainer10 = document.querySelector(".click-event10");
const btn19 = document.querySelector("#btn-19");
const btn20 = document.getElementById("btn-20");
const response10 = document.getElementById("response-10");

btn19.addEventListener("click", () => {
    response10.classList.add("show-response10");
    response10.style.background = "red";
})
btn20.addEventListener("click", () => {
    response10.classList.add("show-response10");
    response10.style.background = "green";

});