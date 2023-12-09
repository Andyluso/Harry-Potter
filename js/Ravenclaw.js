fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {

        let RavenclawCharacters = data.filter(character => character.house === 'Ravenclaw');

        let carrusel = document.getElementById("carruselPrincipal");

        for (let i = 0; i < RavenclawCharacters.length; i += 4) {
            let carruselItem;
            if (i < 4) {
                carruselItem = document.createElement("div");
                carruselItem.classList.add("carousel-item", "active");
            } else {
                carruselItem = document.createElement("div");
                carruselItem.classList.add("carousel-item");
            }
            let contenedor = document.createElement("div");
            contenedor.classList.add("d-flex", "justify-content-around", "p-5", "m-5", "flex-wrap");

            for (let j = i; j < i + 4; j++) {
                if (RavenclawCharacters[j] != undefined) {
                    let card = document.createElement("div");
                    card.classList.add("card", "tamañoCard", "mb-4");
                    card.innerHTML = `
                         <img src="${RavenclawCharacters[j].image}" class="card-img" alt="">
                            <div class="card-body">
                                <h1 class="card-title">${RavenclawCharacters[j].name}</h1>
                                <p class="card-sub-title">${RavenclawCharacters[j].house}</p>
                                <p class="card-info">${RavenclawCharacters[j].species}, ${RavenclawCharacters[j].gender}, ${RavenclawCharacters[j].ancestry}</p>

                                <a href="Details.html?id=${RavenclawCharacters[j]._id}" class="btn btn-primary m-2">book tour
                            </div>
                    `;
                    contenedor.appendChild(card);
                }
            }
            carruselItem.appendChild(contenedor);
            carrusel.appendChild(carruselItem);
        }
    })
    function updateRavenclawCharacters(statusFilter) {
        fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => {
            let ravenclawCharacters = data.filter(character => character.house === 'Ravenclaw');
            let filteredCharacters = ravenclawCharacters;
            if (statusFilter !== 'all') {
                const isAlive = statusFilter === 'alive';
                filteredCharacters = ravenclawCharacters.filter(character => character.alive === isAlive);
            }
            clearCarousel();
            populateCarousel(filteredCharacters);
        });
    }
    function clearCarousel() {
        const carrusel = document.getElementById('carruselPrincipal');
        while (carrusel.firstChild) {
          carrusel.removeChild(carrusel.firstChild);
        }
      }
      function populateCarousel(filteredCharacters) {
        const carrusel = document.getElementById('carruselPrincipal');
        filteredCharacters.forEach(character => {
          let card = document.createElement("div");
          card.classList.add("card", "tamañoCard", "mb-4");
          card.innerHTML = `
            <img src="${character.image}" class="card-img-top" alt="${character.name}">
            <div class="card-body">
              <h5 class="card-title">${character.name}</h5>
              <p class="card-text">${character.actor}</p>
              <p class="card-text">${character.house}</p>
              <p class="card-text">${character.alive ? 'Alive' : 'Deceased'}</p>
            </div>
          `;
          carrusel.appendChild(card);
        });
      }
document.addEventListener('DOMContentLoaded', () => {
    const statusFilterElement = document.getElementById('statusFilter');
    if (statusFilterElement) {
        statusFilterElement.addEventListener('change', (event) => {
            updateRavenclawCharacters(event.target.value); // Cambia el nombre de la función según la casa
        });
    } else {
        console.error('Elemento #statusFilter no encontrado');
    }
});