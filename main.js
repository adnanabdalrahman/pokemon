fetchAllPokemons(150);

async function fetchAllPokemons(limit = 6) {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit;
    const results = fetch(url);
    
    fetch(url)  
    .then(response => response.json())  
    .then(allpokemons => showAllPokemons(allpokemons.results))
    .catch((err) => 
        console.log(`Error: ${err}`)
    );
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
    allpokemons.forEach(pokemon => {
        fetchOnePokemon(pokemon.url)
    });
}


function setPokemonToList(pokemon){
    const pokemonName = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1);

    const pokemonObj = {
        id: pokemon.id,
        name:pokemonName,
        weight:pokemon.weight,
        height:pokemon.height,
    } 
    const pokemonList = document.getElementById('pokemonList');
    const pokemonDiv = document.createElement("li");
    pokemonDiv.setAttribute('class','relative border-2 p-4 rounded-lg border-blue-400 flex flex-row>')
    let saveButton = document.createElement("a");
    saveButton.setAttribute("href", '#');
    saveButton.setAttribute("onClick", 'saveToFAv('+JSON.stringify(pokemonObj) + ')');
    saveButton.innerText = 'save';

     
    pokemonDiv.innerHTML = 
                '<img class="w-40 h-auto mr-4 ml-0" src="' + 
                pokemon.sprites.front_default +
                '"alt="Pokemonbild">';
                
    pokemonDiv.innerHTML += 
                '<div class="discrption">' + 
                    '<p class="id text-center">'+
                    pokemon.id + 
                    '</p>'+
                    '<p class="name text-center">' + 
                    pokemonName + 
                    '</p>'+
                    '<p class="height text-center">' + 
                     pokemon.height +
                    ' ft</p>'+
                    '<p class="weight text-center mb-5">' + 
                     pokemon.weight +
                    ' lbs</p>'+
                '</div>';
    pokemonDiv.appendChild(saveButton);  
    pokemonList.appendChild(pokemonDiv);
}





function saveToFAv(pokemon){
    console.log(pokemon)
    console.log(pokemon.id)
    console.log(pokemon.name)
    console.log(pokemon.weight)
    console.log(pokemon.height)
}



var input = document.getElementById('search');
/* input.onkeyup = function() {
    console.log('dsdsdsd');
}
    */
input.addEventListener('keyup',(e) => filter(e));


function filter(e) {
    const filter = e.target.value.toUpperCase();
    const lis = Array.from(document.getElementsByTagName('li'));

    lis.forEach(li => {
        const name = li.getElementsByClassName('name')[0].textContent;
        if (name.toUpperCase().startsWith(filter)) 
            li.style.display = 'flex';
        else
        li.style.display = 'none';
    });
}

