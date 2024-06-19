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
    pokemonLi.setAttribute('class', 'flex flex-col md:w-[25vw] relative border-2 p-4 rounded-lg border-blue-400');

    pokemonLi.innerHTML = 
        '<div class="w-full flex flex-wrap">' +
            '<img class="w-40 h-auto ml-0" src="' + pokemon.picture + '"alt="Pokemonbild">' + 
            '<div class="discrption content-center p-3">' + 
                '<p class="id text-left">ID: '+ pokemon.id +  '</p>'+
                '<p class="name text-left">' +  pokemonName + '</p>' +
                '<p class="height text-left">Height: ' + pokemon.height +' ft</p>'+
                '<p class="weight text-left mb-5">Weight: ' + pokemon.weight + ' lbs</p>'+
            '</div>'+
        '</div>';
        

    let noteDiv = document.createElement("div");
    noteDiv.setAttribute("class", 'w-full flex-wrap flex gap-2 p-3');

    // delete button
    let deleteButton = document.createElement("a");
    deleteButton.setAttribute("href", '#');
    deleteButton.setAttribute("class", 'border-2 rounded-lg mb-5 p-2 border-blue-400');
    deleteButton.setAttribute("onClick", 'deleteFromFav(' + JSON.stringify(pokemonObj) + ')');
    deleteButton.innerText = 'Delete from list';
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
    note.setAttribute("class", 'flex-none border-2 w-[78%] mb-5 p-2 focus:bg-red-100');
    note.setAttribute("id", 'note-' + pokemon.id);
    note.setAttribute("placeholder", 'insert your note');
    noteDiv.appendChild(note);

    // note show
    let noteShow = document.createElement("p");
    noteShow.setAttribute("class", 'flex-none w-full mb-5 p-2 focus:bg-red-100');
    noteShow.setAttribute("id", 'noteShow-' + pokemon.id);
    noteShow.innerText ='Notes: ' + pokemon.note ?? '';
    noteDiv.appendChild(noteShow);

    pokemonLi.appendChild(noteDiv);
    pokemonList.appendChild(pokemonLi);
}

function retrieveAllPokemons() {
    const pokemonfavoriten = localStorage.getItem('pokemonfavoriten');
    if (pokemonfavoriten !== null) {
        let retrievedPokemon = JSON.parse(pokemonfavoriten);
        // Ensure each Pokémon has a note property, defaulting to an empty string if not present
        retrievedPokemon = retrievedPokemon.map(pokemon => ({
            ...pokemon,
            note: pokemon.note || ''
        }));
        return retrievedPokemon;
    }
    return [];
}

function deleteFromFav(pokemon) {
    let pokemonfavoriten = retrieveAllPokemons();
    const foundPokemon = pokemonfavoriten.find(p => p.id === pokemon.id);
    if (foundPokemon) {
        const index = pokemonfavoriten.indexOf(foundPokemon);
        pokemonfavoriten.splice(index, 1);
        localStorage.setItem('pokemonfavoriten', JSON.stringify(pokemonfavoriten));

        // Notify the user that the Pokémon has been removed
        alert('Pokémon removed successfully!');
        window.location.reload();
    }
}

function saveNoteButton(pokemon) {
    let pokemonfavoriten = retrieveAllPokemons();
    const foundPokemon = pokemonfavoriten.find(p => p.id === pokemon.id);
    if (foundPokemon) {
        const index = pokemonfavoriten.indexOf(foundPokemon);
        const note = document.getElementById('note-' + pokemon.id).value;
        pokemonfavoriten[index].note = note;
        localStorage.setItem('pokemonfavoriten', JSON.stringify(pokemonfavoriten));

        // Notify the user that the note has been saved
        alert('Note saved successfully!');

        // Dynamically update the note in the DOM
        const noteShow = document.getElementById('noteShow-' + pokemon.id);
        if (noteShow) {
            noteShow.innerText = note;
        }

        // Clear the input field after saving the note
        let noteInputField = document.getElementById('note-' + pokemon.id);
        if (noteInputField) {
            noteInputField.value = '';
        }
    }
}
