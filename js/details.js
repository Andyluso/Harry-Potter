fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(data => {
        let urlString = window.location.href
        let urlArmada = new URL(urlString)
        let parametros = new URLSearchParams(urlArmada.search)
        let id = parametros.get('id')
        let filteredData = data.filter((character) => character.id == id)

        document.getElementById('name').innerHTML = filteredData[0].name
        document.getElementById('description').innerHTML = filteredData[0].species
        document.getElementById('date').innerHTML = filteredData[0].dateOfBirth
        document.getElementById('image').src = filteredData[0].image
        document.getElementById('category').innerHTML = filteredData[0].house
        document.getElementById('place').innerHTML = filteredData[0].ancestry
        document.getElementById('price').innerHTML = filteredData[0].wand
        document.getElementById('capacity').innerHTML = filteredData[0].patronus
        document.getElementById('assistance').innerHTML = filteredData[0].alive
    })
