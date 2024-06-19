fetchAllPokemons(150);
async function fetchAllPokemons(limit = 6) {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=" + limit;
    fetch(url).then((response)=>response.json()).then((allpokemons)=>showAllPokemons(allpokemons.results)).catch((err)=>console.log(`Error: ${err}`));
}
function fetchOnePokemon(url) {
    fetch(url).then((response)=>response.json()).then((pokemon)=>setPokemonToList(pokemon)).catch((err)=>console.log(`Error: ${err}`));
}
function showAllPokemons(allpokemons) {
    allpokemons.forEach((pokemon)=>{
        fetchOnePokemon(pokemon.url);
    });
}
function setPokemonToList(pokemon) {
    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const pokemonObj = {
        id: pokemon.id,
        name: pokemonName,
        weight: pokemon.weight,
        height: pokemon.height,
        picture: pokemon.sprites.front_default
    };
    const pokemonList = document.getElementById("pokemonList");
    const pokemonDiv = document.createElement("li");
    pokemonDiv.setAttribute("class", "flex flex-row flex-wrap justify-center content-center relative border-2 p-4 rounded-lg border-blue-400 flex flex-row>");
    let saveButton = document.createElement("a");
    saveButton.setAttribute("href", "#");
    //saveButton.setAttribute("onClick", 'saveToFav('+JSON.stringify(pokemonObj) + ')');
    saveButton.innerText = "Save";
    saveButton.classList.add("inline-flex", "items-center", "justify-center", "mx-4", "align-center", "border-2", "rounded-lg", "font-bold", "p-2", "border-blue-400", "rounded");
    saveButton.addEventListener("click", function() {
        saveToFav(pokemonObj);
    });
    pokemonDiv.innerHTML = '<img class="w-40 h-auto mr-4 ml-0" src="' + pokemon.sprites.front_default + '"alt="Pokemonbild">';
    pokemonDiv.innerHTML += '<div class="discription flex flex-col justify-center"><p class="id text-center">ID: ' + pokemon.id + "</p>" + '<p class="name text-center">' + pokemonName + "</p>" + '<p class="height text-center">Height:' + pokemon.height + " ft</p>" + '<p class="weight text-center">Weight: ' + pokemon.weight + " lbs</p>" + "</div>";
    pokemonDiv.appendChild(saveButton);
    pokemonList.appendChild(pokemonDiv);
}
function saveToFav(pokemon) {
    let pokemonfavoriten = JSON.parse(localStorage.getItem("pokemonfavoriten"));
    if (pokemonfavoriten === null) pokemonfavoriten = [
        pokemon
    ];
    else if (!pokemonfavoriten.find((p)=>p.id === pokemon.id)) pokemonfavoriten.push(pokemon);
    localStorage.setItem("pokemonfavoriten", JSON.stringify(pokemonfavoriten));
    console.log(pokemonfavoriten);
}
// filter 
const filterInput = document.getElementById("search");
filterInput.addEventListener("keyup", (e)=>filter(e));
function filter(e) {
    const filter = e.target.value.toUpperCase();
    const lis = Array.from(document.getElementsByTagName("li"));
    lis.forEach((li)=>{
        const name = li.getElementsByClassName("name")[0].textContent;
        if (name.toUpperCase().startsWith(filter)) li.style.display = "flex";
        else li.style.display = "none";
    });
}

//# sourceMappingURL=index.c4775257.js.map
