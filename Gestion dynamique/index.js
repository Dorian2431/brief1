const produits = [
    {nom: "Thé Vert", prix: "12,99"},
    {nom: "Café Arabica", prix: "8,99"},
    {nom: "Infusion Camomille", prix: "5,49"},
    {nom: "Café Robusta", prix: "9,99"}
];

const tbody = document.querySelector('#table-facture tbody');

function initTableau() {
    tbody.innerHTML = '';

    for (let i = 0; i < produits.length; i++) {
        const ligne = tbody.insertRow();
        let cellproduits = ligne.insertCell();
        cellproduits.innerHTML += produits[i].nom;
        let cellprix = ligne.insertCell();
        cellprix.innerHTML += produits[i].prix;
        let cellaction = ligne.insertCell();
        cellaction.innerHTML += '<button>Supprimer</button>';

        let sup = cellaction.querySelector('button');
        sup.addEventListener('click', () => {
            ligne.remove();
            calculCotisation();
        });
    }
}


document.addEventListener('DOMContentLoaded', () => {
    initTableau();
    calculCotisation()
});

function calculCotisation() {
    let total = 0;
    const tabTr = document.querySelectorAll('#table-facture tbody tr');

    tabTr.forEach(ligne => {
        let prix = ligne.cells[1].textContent.replace(",", ".");
        total += parseFloat(prix);

    });

    document.getElementById('total').innerHTML = `<p>Total: ${total.toFixed(2)}</p>`;
}


