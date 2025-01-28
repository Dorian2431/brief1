const produits = [
    {nom: "Thé Vert", prix: "12,99"},
    {nom: "Café Arabica", prix: "8,99"},
    {nom: "Infusion Camomille", prix: "5,49"},
    {nom: "Café Robusta", prix: "9,99"}
];

const tbody = document.querySelector('#table-facture tbody');

function initTableau() {

    for (let i = 0; i < produits.length; i++)
    {
        const ligne = tbody.insertRow();
        let cellproduits = ligne.insertCell();
        cellproduits.innerHTML += produits[i].nom;
        let cellprix = ligne.insertCell();
        cellprix.innerHTML += produits[i].prix;
        let cellaction = ligne.insertCell();
        cellaction.innerHTML += '<button>Supprimer</button>';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    initTableau();
    calculCotisation()
});

function calculCotisation() {
    let total = produits.reduce((acc, p) => {
        let prixNumerique = parseFloat(p.prix.replace(",", "."));
        return acc + prixNumerique;
    }, 0);

    document.getElementById('total').innerHTML = `<p>Total: ${total.toFixed(2)}</p>`;
}




