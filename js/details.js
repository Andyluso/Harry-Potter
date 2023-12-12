
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
    


    },

}).mount('#app')




\

