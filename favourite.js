    // Speichern eines Objekts
    var pokemonfavoriten = [
        { ID: '1', Name: 'Bulbasaur', height: '7 ft', weight: '1000 lbs', Picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
        { ID: '2', Name: 'Ivysaur', height: '11 ft', weight: '130 lbs', Picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'},
        { ID: '3', Name: 'Charmander', height: '10 ft', weight: '190 lbs', Picture: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'}
    ];
    
    localStorage.setItem('pokemonfavoriten', JSON.stringify(pokemonfavoriten));
    


    // Abrufen und Parsen des Arrays
    var retrievedPokemon = JSON.parse(localStorage.getItem('pokemonfavoriten'));

// Durchlaufen des Arrays und Ausgabe der Daten
    retrievedPokemon.forEach(function(pokemon) {
        console.log('ID:', pokemon.ID);
        console.log('Name:', pokemon.Name);
        console.log('Höhe:', pokemon.height);
        console.log('Gewicht:', pokemon.weight);
        console.log('Bild:', pokemon.Picture);
        console.log('---');
    });

    //Darstellung der Favoriten 

    function setPokemonToList(pokemon) {
        console.log(pokemon);
    
        const pokemonList = document.getElementById('pokemonfavoriten');
        if (!pokemonList) {
            console.error('Element mit der ID "pokemonfavoriten" wurde nicht gefunden.');
            return;
        }
    
        const pokemonDiv = document.createElement("div");
        pokemonDiv.innerHTML = 
            '<div class="relative border-2 p-4 rounded-lg border-blue-400 flex flex-row">' + 
                '<img class="w-44 h-auto mr-4 ml-0" src="' + 
                pokemon.Picture + 
                '" alt="Pokemonbild">' +
                '<div class="description">' + 
                    '<p class="text-center">ID: ' + pokemon.ID + '</p>' +
                    '<p class="text-center">Name: ' + pokemon.Name + '</p>' +
                    '<p class="text-center mb-5">Height: ' + pokemon.height + '</p>' +
                    '<p class="text-center mb-5">Weight: ' + pokemon.weight + '</p>' +
                '</div>' + 
                '<a class="border-2 rounded-lg mb-5 p-2 border-blue-400" href="#" onclick="saveToFAv('+
                pokemon.notizen +
                ')">Notizen</a>' +         
                '</div>';
                
                
                    '</div>' +
            '</div>';
    
        pokemonList.appendChild(pokemonDiv);
    }
    
    retrievedPokemon.forEach(setPokemonToList);

    
    
 