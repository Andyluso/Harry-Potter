let urlAPI = 'https://hp-api.onrender.com/api/characters'

const {createApp} = Vue

const app = createApp({

    data() {
        return{
            gryffindorCharacters:{},
            carrusel:{},


        }
    },

    created(){
        this.traerData(urlAPI)
    },

    methods:{
        traerData(url) {
            fetch(url).then(response => response.json()).then(data => {






            })

    }},

    computed:{}


})



// fetch(urlAPI)
//     .then(response => response.json())
//     .then(data => {
       
//         let gryffindorCharacters = data.filter(character => character.house === 'Gryffindor');
//         let gryffindorCharacters = data.filter(character => character.house === 'Gryffindor');

//         let carrusel = document.getElementById("carruselPrincipal");
//         let carrusel = document.getElementById("carruselPrincipal");

//         for (let i = 0; i < gryffindorCharacters.length; i += 4) {
//             let carruselItem;
//             if (i < 4) {
//                 carruselItem = document.createElement("div");
//                 carruselItem.classList.add("carousel-item", "active");
//             } else {
//                 carruselItem = document.createElement("div");
//                 carruselItem.classList.add("carousel-item");
//             }
//             let contenedor = document.createElement("div");
//             contenedor.classList.add("d-flex", "justify-content-around", "p-5", "m-5", "flex-wrap");
//         for (let i = 0; i < gryffindorCharacters.length; i += 4) {
//             let carruselItem;
//             if (i < 4) {
//                 carruselItem = document.createElement("div");
//                 carruselItem.classList.add("carousel-item", "active");
//             } else {
//                 carruselItem = document.createElement("div");
//                 carruselItem.classList.add("carousel-item");
//             }
//             let contenedor = document.createElement("div");
//             contenedor.classList.add("d-flex", "justify-content-around", "p-5", "m-5", "flex-wrap");

//             for (let j = i; j < i + 4; j++) {
//                 if (gryffindorCharacters[j] != undefined) {
//                     let card = document.createElement("div");
//                     card.classList.add("card", "tamañoCard", "mb-4");
//                     card.innerHTML = `
//                          <img src="${gryffindorCharacters[j].image}" class="card-img" alt="">
//                             <div class="card-body cardCSS">
//                                 <h1 class="card-title">${gryffindorCharacters[j].name}</h1>
//                                 <p class="card-sub-title">${gryffindorCharacters[j].house}</p>
//                                 <p class="card-info">${gryffindorCharacters[j].species}, ${gryffindorCharacters[j].gender}, ${gryffindorCharacters[j].ancestry}</p>

//                                 <a href="Details.html?id=${gryffindorCharacters[j].id}" class="btn btn-primary m-2">book tour                           
//                                  </div>
//                     `;
//                     contenedor.appendChild(card);
//                 }
//             }
//             carruselItem.appendChild(contenedor);
//             carrusel.appendChild(carruselItem);
//         }
//     })
//                                 <a href="Details.html?id=${gryffindorCharacters[j].id}" class="btn btn-primary m-2">book tour                           
//                                  </div>
//                     `;
//                     contenedor.appendChild(card);
//                 }
//             }
//             carruselItem.appendChild(contenedor);
//             carrusel.appendChild(carruselItem);
//         }
//     })
