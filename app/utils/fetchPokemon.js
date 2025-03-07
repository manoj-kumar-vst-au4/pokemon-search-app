export async function fetchPokemonData() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await res.json();
    return Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return res.json();
      })
    );
  }
  
  export async function fetchTypes() {
    const res = await fetch('https://pokeapi.co/api/v2/type');
    const data = await res.json();
    return data.results;
  }