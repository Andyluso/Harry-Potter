fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
        let SlytheringCharacters = data.filter(character => character.house === 'Slytherin');
        console.log(SlytheringCharacters);

        let carrusel = document.getElementById("carruselPrincipal");

        for (let i = 0; i < SlytheringCharacters.length; i += 4) {
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
                if (SlytheringCharacters[j].image != "") {
                    let card = document.createElement("div");
                    card.classList.add("card", "tamañoCard", "mb-4");
                    card.innerHTML = `
                         <img src="${SlytheringCharacters[j].image}" class="card-img imagenFaltante" alt="">
                            <div class="card-body cardCSS">
                                <h1 class="card-title">${SlytheringCharacters[j].name}</h1>
                                <p class="card-sub-title">${SlytheringCharacters[j].house}</p>
                                <p class="card-info">${SlytheringCharacters[j].species}, ${SlytheringCharacters[j].gender}, ${SlytheringCharacters[j].ancestry}</p>

                                <a href="Details.html?id=${SlytheringCharacters[j].id}" class="btn btn-primary m-2 ">Details                           
                                 </div>
                    `;
                    contenedor.appendChild(card);
                }
                if (SlytheringCharacters[j].image === "") {

                    let card = document.createElement("div");
                    card.classList.add("card", "tamañoCard", "mb-4");
                    card.innerHTML = `
                     <img src="./imagenes/Personajefaltante/proclamación.jpg" class="card-img imagenFaltante" alt="">
                        <div class="card-body cardCSS">
                            <h1 class="card-title">${SlytheringCharacters[j].name}</h1>
                            <p class="card-sub-title">${SlytheringCharacters[j].house}</p>
                            <p class="card-info">${SlytheringCharacters[j].species}, ${SlytheringCharacters[j].gender}, ${SlytheringCharacters[j].ancestry}</p>

                            <a href="Details.html?id=${SlytheringCharacters[j].id}" class="btn btn-primary m-2 ">Details                           
                             </div>
                `;
                    contenedor.appendChild(card);
                }

            }
            carruselItem.appendChild(contenedor);
            carrusel.appendChild(carruselItem);
        }
    })
