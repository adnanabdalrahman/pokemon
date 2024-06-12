fetchAllPokemons();
console.log('sdsd')

function fetchAllPokemons(limit = 6) {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit;
    fetch(url)  
    .then(response => response.json())  
    .then(allpokemons => showAllPokemons(allpokemons.results))
    .catch((err) => 
        console.log(`Error: ${err}`)
    );
}

function fetchOnePokemons(url) {
    fetch(url)  
    .then(response => response.json())  
    .then(pokemon => setPokemonToList(pokemon))
    .catch((err) => 
        console.log(`Error: ${err}`)
    );
}

function showAllPokemons(allpokemons){
    console.log(allpokemons);
    allpokemons.forEach(pokemon => {
        fetchOnePokemons(pokemon.url)
    });
}


function setPokemonToList(pokemon){
    console.log(pokemon.height)
}




