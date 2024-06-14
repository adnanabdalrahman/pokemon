
    // Abrufen und Parsen des Arrays
    const pokemonfavoriten = localStorage.getItem('pokemonfavoriten')
    if(pokemonfavoriten !== null){
        let retrievedPokemon = JSON.parse(pokemonfavoriten);
        retrievedPokemon.forEach(setPokemonToList);
    }


    //Darstellung der Favoriten 
    function setPokemonToList(pokemon){
        const pokemonName = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1);
        const pokemonObj = {
            id: pokemon.id,
            name:pokemonName,
            weight:pokemon.weight,
            height:pokemon.height,
        } 

        const pokemonList = document.getElementById('pokemonfavoriten');
        const pokemonDiv = document.createElement("li");
        pokemonDiv.setAttribute('class','flex-col relative border-2 p-4 rounded-lg border-blue-400 flex flex-row>')
        
        let deleteButton = document.createElement("a");
        deleteButton.setAttribute("href", '#');
        deleteButton.setAttribute("class", 'w-24 border-2 rounded-lg mb-5 p-2 border-blue-400');

        deleteButton.setAttribute("onClick", 'deleteFromFav('+JSON.stringify(pokemonObj) + ')');
        deleteButton.innerText = 'Delete';
    
        pokemonDiv.innerHTML = 
            '<div class="w-full">' +
                '<img class="w-40 h-auto mr-4 ml-0" src="' + pokemon.picture + '"alt="Pokemonbild">' + 
                '<div class="discrption">' + 
                    '<p class="id text-center">'+ pokemon.id +  '</p>'+
                    '<p class="name text-center">' +  pokemonName + '</p>' +
                    '<p class="height text-center">' + pokemon.height +' ft</p>'+
                    '<p class="weight text-center mb-5">' + pokemon.weight + ' lbs</p>'+
                '</div>';
                pokemonDiv.appendChild(deleteButton);  
                pokemonDiv.innerHTML +=
                '</div>'+
                '<div class="w-full">' +
                '<button class="border-2 rounded-lg mb-5 p-2 border-blue-400"> Save notes' + 
                '</button>'+ 
                '<input class="border-2 w-full mb-5 p-2 focus:bg-red-100" type="text"' + 
                    'placeholder="Fill in your notes"/>' +
                '</div>';

                    ;
        pokemonList.appendChild(pokemonDiv);
    }






    
    
    
 