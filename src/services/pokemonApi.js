const API_URL = "https://pokeapi.co/api/v2/pokemon";
export async function getPokemon(name) {
    const response = await fetch(`${API_URL}?limit=12`);
    
    if(!response.ok){
        throw new Error("Failed to Fetch Pokemon");

    }
    const data = await response.json();
    
    const pokemonPromises = data.results.map(async (pokemon) => {
        const response = await fetch(pokemon.url);

        if(!response.ok){
            throw new Error(`Failed to Fetch ${pokemon.name}`);
        }
        return response.json();
    });


    const pokemonDetails = await Promise.all(pokemonPromises);

    return pokemonDetails.map((pokemon) => (
        {
            id:pokemon.id,
            name:pokemon.name,
            image:pokemon.sprites.other["official-artwork"].front_default,
        }
    ));
}