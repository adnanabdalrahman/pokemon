fetchAllPokemons(150);

function fetchAllPokemons(limit = 6) {
    let url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit;
    fetch(url)  
    .then(response => response.json())  
    .then(allpokemons => showAllPokemons(allpokemons.results))
    .catch((err) => 
        console.log(`Error: ${err}`)
    );
}
function saveToFAv(id){
    console.log(id)
}

function fetchOnePokemon(url) {
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
        fetchOnePokemon(pokemon.url)
    });
}


function setPokemonToList(pokemon){
console.log(pokemon)
const pokemonName = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1);


    const pokemonList = document.getElementById('pokemonList');
    const pokemonDiv = document.createElement("div");
    pokemonDiv.innerHTML = '<div class="relative border-2 p-4 rounded-lg border-blue-400 flex flex-row">' + 
                '<img class="w-44 h-auto mr-4 ml-0" src="' + 
                pokemon.sprites.front_default +
                '"alt="Pokemonbild">' +
                '<div class="discrption">' + 
                    '<p class="text-center">ID:'+
                    pokemon.id + 
                    '</p>'+
                    '<p class="text-center">Name: ' + 
                    pokemonName + 
                    '</p>'+
                    '<p class="text-center mb-5">Height: ' + 
                     pokemon.height +
                    ' ft</p>'+
                    '<p class="text-center mb-5">Weight: ' + 
                     pokemon.weight +
                    ' lbs</p>'+
                '</div>' + 
                '<a href="#" onclick="saveToFAv('+
                pokemon.id +
                ')">save</a>' +         
                '</div>';
    pokemonList.appendChild(pokemonDiv);
}




