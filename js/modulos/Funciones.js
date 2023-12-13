export let profesorCheckbox
export let estudianteCheckbox
export let aliveCheckBox
export let deceasedCheckBox
export let busquedaimpunt
export let favoritosCheckbox


export function filterAndUpdateCarousel() {
    hideError();
   
    if (profesorCheckbox.checked && estudianteCheckbox.checked) {
        showError('Un personaje no puede ser profesor y estudiante al mismo tiempo.');
        return;
    }
    if (aliveCheckBox.checked && deceasedCheckBox.checked) {
        showError('Un personaje no puede estar vivo y muerto al mismo tiempo.');
        return;
    }
    if (characters[j].image===""){innerHTML=`<img src="./imagenes/Personajefaltante/proclamación.jpg" class="card-img" alt=""></img>`}


    const isFavorite = favoritosCheckbox.checked;
    const isProfesor = profesorCheckbox.checked;
    const isEstudiante = estudianteCheckbox.checked;
    const isAlive = aliveCheckBox.checked;
    const isDeceased = deceasedCheckBox.checked;
    const searchText = busquedaimpunt.value.toLowerCase();
    let filteredCharacters = gryffindorCharacters.filter(character => {
        const matchProfesor = !isProfesor || character.hogwartsStaff;
        const matchEstudiante = !isEstudiante || character.hogwartsStudent;
        const matchAlive = !isAlive || character.alive;
        const matchDeceased = !isDeceased || !character.alive;
        const matchSearchText = !searchText || character.name.toLowerCase().includes(searchText);
        return matchProfesor && matchEstudiante && matchAlive && matchDeceased && matchSearchText;
    });
    if (isFavorite) {
        filteredCharacters = filteredCharacters.filter(character =>
            localStorage.getItem(character.name) === 'true'
        );
    }
    displayCharacters(filteredCharacters);
}

export function displayCharacters(characters) {
    let imagenFaltante = './imagenes/Personajefaltante/proclamación.jpg';
    let carrusel = document.getElementById("carruselPrincipal");
    carrusel.innerHTML = '';
    if (characters.length === 0) {
        showError('<div class="error-container"><p class="error-message">No se encontraron personajes que coincidan con la búsqueda.</p></div>');
        return;
    } 
    for (let i = 0; i < characters.length; i += 4) {
        let carruselItem = document.createElement("div");
        carruselItem.classList.add("carousel-item");
        if (i === 0) {
            carruselItem.classList.add("active");
        }
        let contenedor = document.createElement("div");
        contenedor.classList.add("d-flex", "justify-content-around", "p-5", "m-5", "flex-wrap");
        for (let j = i; j < i + 4; j++) {
            if (characters[j]) {
                let isChecked = localStorage.getItem(characters[j].name) === 'true';
                let imagenesFaltante = characters[j].image || imagenFaltante ;
                let card = document.createElement("div");
                card.classList.add("card", "tamañoCard", "mb-4");
                card.innerHTML = `
                  <img src="${imagenesFaltante}" class="card-img" alt="">
                  <div class="card-body cardCSS">
                      <h1 class="card-title text-warning">${characters[j].name}</h1>
                      
                      <label class="favorite-label text-light">
                          <input type="checkbox" class="favorite-checkbox " ${isChecked ? 'checked' : ''} data-character-name="${characters[j].name}"> Agregar a Favoritos
                      </label>
                      <a href="Details.html?id=${characters[j].id}" class="btn btn-primary m-2">Details</a>
                  </div>
                `;
                contenedor.appendChild(card);
            } 
        }
        carruselItem.appendChild(contenedor);
        carrusel.appendChild(carruselItem);
    }
    // Añadir los event listeners a los checkboxes creados.
    document.querySelectorAll('.favorite-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            let characterName = e.target.getAttribute('data-character-name');
            localStorage.setItem(characterName, e.target.checked);
        });
    });
}

export function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.innerHTML = message; // Usar innerHTML para interpretar el tag HTML
    errorDiv.style.display = 'block'; // Asegurarse que el contenedor del error sea visible
}
export function hideError() {
    const errorDiv = document.getElementById('error-message');
    errorDiv.style.display = 'none';
}


