import {Pokemon} from './pokemonApi.js';
fetchAllPokemons();



function fetchAllPokemons(limit = 6) {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit;
    fetch(url)  
    .then(response => response.json())  
    .then(allpokemons => showAllPokemons(allpokemons))
    .catch((err) => 
        console.log(`Error: ${err}`)
    );
}


function showAllPokemons(allpokemons){
    console.log(allpokemons);

}




