export class Pokemon {
    id;
    name;
    photo;
    prefix = 'https://pokeapi.co/api/v2/pokemon?';
    allpokemons;

    fetchAllPokemons(limit = 6) {
        let url = this.prefix + "limit=" + limit;
        fetch(url)  
        .then(response => response.json())  
        .then(allpokemons => { return allpokemons })
        .catch((err) => 
            console.log(`Error: ${err}`)
        );
    }


    async asyncfetchAllPokemons(limit = 6) {
        let url = this.prefix + "limit=" + limit;
        const response = await fetch(url)
        const data = await response.json()
        this.allpokemons = data;
        return data;
    }

    sayHello (){
        return 'hello world';
    }
  }
  


export function hello (){
    console.log('hello');
}

export function hello2 (){
    console.log('hellosdsdasd');
}

