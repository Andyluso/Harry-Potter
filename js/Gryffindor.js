fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
        let gryffindorCharacters = data.filter(character => character.house === 'Gryffindor');

        let carrusel = document.getElementById("carruselPrincipal");

        for (let i = 0; i < gryffindorCharacters.length; i += 4) {
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
                if (gryffindorCharacters[j] != undefined) {
                    let card = document.createElement("div");
                    card.classList.add("card", "tamañoCard", "mb-4");
                    card.innerHTML = `
                         <img src="${gryffindorCharacters[j].image}" class="card-img" alt="">
                            <div class="card-body">
                                <h1 class="card-title">${gryffindorCharacters[j].name}</h1>
                                <p class="card-sub-title">${gryffindorCharacters[j].house}</p>
                                <p class="card-info">${gryffindorCharacters[j].species}, ${gryffindorCharacters[j].gender}, ${gryffindorCharacters[j].ancestry}</p>

                                <a href="Details.html?id=${gryffindorCharacters[j]._id}" class="btn btn-primary m-2">Book Tour</a>                           </div>
                    `;
                    contenedor.appendChild(card);
                }
            }
            carruselItem.appendChild(contenedor);
            carrusel.appendChild(carruselItem);
        }
    })
    function updateCharacterDisplay(statusFilter) {
        fetch('https://hp-api.onrender.com/api/characters')
          .then(response => response.json())
          .then(data => {
            const gryffindorCharacters = data.filter(character => character.house === 'Gryffindor');
        
            let filteredCharacters;
            if (statusFilter === 'all') {
              filteredCharacters = gryffindorCharacters;
            } else {
              const isAlive = statusFilter === 'alive';
              filteredCharacters = gryffindorCharacters.filter(character => character.alive === isAlive);
            }
            clearCarousel();
            populateCarousel(filteredCharacters);
          })
          .catch(error => console.error('Error fetching characters:', error));
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
            updateCharacterDisplay(event.target.value);
          });
        } else {
          console.error('Elemento #statusFilter no encontrado');
        }
      });