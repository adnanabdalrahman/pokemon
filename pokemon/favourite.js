// Abrufen und Parsen des Arrays

const pokemonfavoriten = retrieveAllPokemons();
console.log(pokemonfavoriten);
if (pokemonfavoriten) pokemonfavoriten.forEach(setPokemonToList);

// Darstellung der Favoriten 
function setPokemonToList(pokemon) {
    if (!pokemon || !pokemon.name) {
        console.error('pokemon oder pokemon.name ist undefiniert');
        return;
    }

    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    const pokemonObj = {
        id: pokemon.id,
        name: pokemonName,
        weight: pokemon.weight,
        height: pokemon.height,
        note: pokemon.note,
    };

    const pokemonList = document.getElementById('pokemonfavoriten');
    const pokemonLi = document.createElement("li");
    pokemonLi.setAttribute('class', 'flex-col relative border-2 p-4 rounded-lg border-blue-400 flex flex-row w-1/2'); // Hier die Breite angepasst

    pokemonLi.innerHTML = 
        '<div class="w-full flex flex-wrap">' +
            '<img class="w-40 h-auto mr-4 ml-0" src="' + pokemon.picture + '" alt="Pokemonbild">' + 
            '<div class="description content-center">' + 
                '<p class="id text-center">' + pokemon.id + '</p>' +
                '<p class="name text-center">' + pokemonName + '</p>' +
                '<p class="height text-center">' + pokemon.height + ' ft</p>' +
                '<p class="weight text-center mb-5">' + pokemon.weight + ' lbs</p>' +
            '</div>' +
        '</div>';

    let noteDiv = document.createElement("div");
    noteDiv.setAttribute("class", 'w-full flex-wrap flex gap-2 p-3');

    // delete button
    let deleteButton = document.createElement("a");
    deleteButton.setAttribute("href", '#');
    deleteButton.setAttribute("class", 'border-2 rounded-lg mb-5 p-2 border-blue-400');
    deleteButton.setAttribute("onClick", 'deleteFromFav(' + JSON.stringify(pokemonObj) + ')');
    deleteButton.innerText = 'Delete';
    noteDiv.appendChild(deleteButton);

    // save button
    let saveNote = document.createElement("a");
    saveNote.setAttribute("href", '#');
    saveNote.setAttribute("class", 'border-2 rounded-lg mb-5 p-2 border-blue-400');
    saveNote.setAttribute("onClick", 'saveNoteButton(' + JSON.stringify(pokemonObj) + ')');
    saveNote.innerText = 'Save Note';
    noteDiv.appendChild(saveNote);

    // note input
    let note = document.createElement("input");
    note.setAttribute("type", 'textarea');
    note.setAttribute("class", 'flex-none border-2 w-full mb-5 p-2 focus:bg-red-100');
    note.setAttribute("id", 'note-' + pokemon.id);
    note.setAttribute("placeholder", 'insert your note');
    noteDiv.appendChild(note);

    // note show
    let noteShow = document.createElement("p");
    noteShow.setAttribute("class", 'flex-none w-full mb-5 p-2 focus:bg-red-100');
    noteShow.setAttribute("id", 'noteShow-' + pokemon.id);
    noteShow.innerText = pokemon.note ?? '';
    noteDiv.appendChild(noteShow);

    pokemonLi.appendChild(noteDiv);
    pokemonList.appendChild(pokemonLi);
}

function retrieveAllPokemons() {
    const pokemonfavoriten = localStorage.getItem('pokemonfavoriten');
    if (pokemonfavoriten !== null) {
        let retrievedPokemon = JSON.parse(pokemonfavoriten);
        return retrievedPokemon;
    }
    return null;
}

function deleteFromFav(pokemon) {
    let pokemonfavoriten = retrieveAllPokemons();
    const foundPokemon = pokemonfavoriten.find(p => p.id === pokemon.id);
    if (foundPokemon) {
        const index = pokemonfavoriten.indexOf(foundPokemon);
        pokemonfavoriten.splice(index, 1);
        localStorage.setItem('pokemonfavoriten', JSON.stringify(pokemonfavoriten));
        location.reload();
    }
}

function saveNoteButton(pokemon) {
    let pokemonfavoriten = retrieveAllPokemons();
    const foundPokemon = pokemonfavoriten.find(p => p.id === pokemon.id);
    if (foundPokemon) {
        const index = pokemonfavoriten.indexOf(foundPokemon);
        const note = document.getElementById('note-' + pokemon.id).value;
        pokemonfavoriten[index].note = note;
