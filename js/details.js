
let urlAPI = 'https://hp-api.onrender.com/api/characters'


const { createApp } = Vue

const app = createApp({
    data() {

        return {
            urlString: {},
            urlArmada: {},
            parametros: {},
            id: {},
            filteredData: {},
            
        }
    },
    created() {
        this.traerData(urlAPI)
   
    },

    methods: {
        traerData(url) {
            fetch(url).then(response => response.json()).then(data => {
      
                this.urlString = window.location.href
                this.urlArmada = new URL(this.urlString)
                this.parametros = new URLSearchParams(this.urlArmada.search)
                this.id = this.parametros.get("id")
                this.filteredData = data.filter((personaje) => personaje.id == this.id)
                console.log(this.filteredData);

                 
                


            })

        }

    },
    computed: {
        // filteredData: function () { this.data.filter(personaje => {return personaje.id == this.id})


    },

}).mount('#app')




// document.getElementById('name').innerHTML = filteredData[0].name
// document.getElementById('description').innerHTML = filteredData[0].species
// document.getElementById('date').innerHTML = filteredData[0].dateOfBirth
// document.getElementById('image').src = filteredData[0].image
// document.getElementById('category').innerHTML = filteredData[0].house
// document.getElementById('place').innerHTML = filteredData[0].ancestry
// document.getElementById('price').innerHTML = filteredData[0].wand
// document.getElementById('capacity').innerHTML = filteredData[0].patronus
// document.getElementById('assistance').innerHTML = filteredData[0].alive

