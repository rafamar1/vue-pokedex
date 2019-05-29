const app = new Vue({
    el: '#app',
    data(){
        return {
            typeColor:{
                "grass": "#78C850",
                "poison": "#A040A0",
                "fire": "#F08030",
                "flying": "#A890F0",
                "water": "#6890F0",
                "bug": "#A8B820",
                "normal": "#A8A878",
                "electric": "#F8D030"
            },
            pokemons:[],
            searchText:'',
            selectedTypes:[]
        };
    },
    computed :{
        filteredPokemons(){
            return this.pokemons
                .filter(pokemon => pokemon.name.includes(this.searchText))
                .filter(pokemon => {
                        if (this.selectedTypes.length === 0 ) return true;
                        return pokemon.types.some(type => this.selectedTypes.includes(type));
                });
        }
    },
    methods:{
      removePokemon(pokemon){
          this.pokemons = this.pokemons.filter(poke => poke!== pokemon);
      }
    },
    created(){
        //fetch('../data/pokemons.json')
        fetch('https://api.jsonbin.io/b/5ab37f77989617146bd6eb29 ')
            .then(response =>response.json())
            .then(pokemons =>{
                this.pokemons = pokemons;
            })
    }
});