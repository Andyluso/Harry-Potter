import {hideError, showError, displayCharacters} from "./modulos/Funciones.js";
let profesorCheckbox;
let estudianteCheckbox;
let aliveCheckBox;
let deceasedCheckBox;
let busquedaimpunt;
let favoritosCheckbox;
let hufflepuffCharacters = [];

document.addEventListener('DOMContentLoaded', (event) => {
    try {
        favoritosCheckbox = document.getElementById('favoritos');
        profesorCheckbox = document.getElementById('profesorCheckbox');
        estudianteCheckbox = document.getElementById('estudianteCheckbox');
        aliveCheckBox = document.getElementById('aliveCheckBox');
        deceasedCheckBox = document.getElementById('deceasedCheckBox');
        busquedaimpunt = document.getElementById('busquedaimpunt');
        favoritosCheckbox.addEventListener('change', filterAndUpdateCarousel);
        profesorCheckbox.addEventListener('change', filterAndUpdateCarousel);
        estudianteCheckbox.addEventListener('change', filterAndUpdateCarousel);
        aliveCheckBox.addEventListener('change', filterAndUpdateCarousel);
        deceasedCheckBox.addEventListener('change', filterAndUpdateCarousel);
        busquedaimpunt.addEventListener('input', filterAndUpdateCarousel);
        fetchAndDisplayCharacters();
    } catch (error) {
        console.error("Error al inicializar los elementos del DOM o asignar event listeners: ", error);
    }
});
function filterAndUpdateCarousel() {
    hideError();
    if (profesorCheckbox.checked && estudianteCheckbox.checked) {
        showError('Un personaje no puede ser profesor y estudiante al mismo tiempo.');
        return;
    }
    if (aliveCheckBox.checked && deceasedCheckBox.checked) {
        showError('Un personaje no puede estar vivo y muerto al mismo tiempo.');
        return;
    }
    const isFavorite = favoritosCheckbox.checked;
    const isProfesor = profesorCheckbox.checked;
    const isEstudiante = estudianteCheckbox.checked;
    const isAlive = aliveCheckBox.checked;
    const isDeceased = deceasedCheckBox.checked;
    const searchText = busquedaimpunt.value.toLowerCase();
    let filteredCharacters = hufflepuffCharacters.filter(character => {
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
function fetchAndDisplayCharacters() {
    fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => {
            hufflepuffCharacters = data.filter(character => character.house === 'Hufflepuff');
            displayCharacters(hufflepuffCharacters);
        });
}

fetchAndDisplayCharacters();
