const API_URL = "https://api.punkapi.com/v2/beers";
let cardsDOM = document.getElementById("cards");

function generateCard({ibu, abv, name, tagline, description, image_url}) {
    return `
        <div class="card">
            <span class="ibu">IBU: ${ibu}</span>
            <span class="abv">ABV: ${abv}</span>
            <div class="beer-img" style="background-image: url('${image_url}');"></div>
            <h2>${name}</h2>
            <h3>${tagline}</h3>
            <p>${description}</p>
        </div>`
}

fetch(API_URL)
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        cardsDOM.innerHTML += generateCard(element)
    });
})