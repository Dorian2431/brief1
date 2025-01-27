const addition = (a, b) => {
    if(typeof a !=="number" || typeof  b !== "number") {
        return "erreur : veuillez rentrer un nombre";
    }
    return a+b;
}
let exo1 = addition( 4, 4);
console.log(exo1);


function minuteToSeconde(minutes){
    return minutes*60;
}
let exo2 = minuteToSeconde(10);
console.log(exo2)





function getmax(nombre1, nombre2, nombre3){
    let max = 0;

    if (nombre1 > nombre2){
        max = nombre1;
    } else {
        max = nombre2;
    }
    if (nombre3 > max){
    max = nombre3;
    }
    return max;
}
let exo3 = getmax(10, 7, 6);
console.log(exo3)




function restediv(a, b){
    return a%b;
}
let exo4 = restediv (2, 4);
console.log(exo4)


const reversetab = (tab) => {

    let res = [];
    for(let i = tab.length -1; i > -1; i--){
        res.push(tab[i]);
    }
    return res;
}
let exo5 = reversetab([3, 2, 5, 1, 4]);
console.log(exo5);




function nbrsPatte(Poulet, Vache, Chevaux) {
    return Vache * 4 + Chevaux * 4 + Poulet * 2;

}
let exo6 = nbrsPatte (4, 11, 7);
console.log(exo6)




function find(tab, val) {
    for(let i = 0; i < tab.length; i++){
        if (tab[i] === val){
            return i;
        }
    }
    return -1;
}
let exo7 = find([2,7,1], 2)
console.log(exo7);




function find2(tab, val) {
    for(let i = 0; i < tab.length; i++){
        if (tab[i] === val){ //On regarde si un des nombres et égal a la valeur val
            return "oui";
        }
    }
    return "non";
}
let exo8 = find2([4,6,3], 5)
console.log(exo8);



function sum(tab){
    let num = 0;
    for (let i = 0; i < tab.length; i++){
        num += tab[i]
    }
    return num;
}

let exo9 = sum([6, 52, 49])
console.log(exo9);


function nbrPaire(num) {
    let tab = []
    for(let i = 0; i < num; i++){
        if (i % 2 == 0){
            tab.push(i)
        }

    }
    return tab
}
let exo10 = nbrPaire(4500000)
console.log(exo10)