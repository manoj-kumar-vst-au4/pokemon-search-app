import Image from "next/image";

async function getPokemonData(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }
  return res.json();
}

export default async function PokemonPage({ params }) {
  const { name } = params;
  const pokemon = await getPokemonData(name);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
      <Image
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
        width={300}
        height={300}
        className="mt-4"
      />
      <div className="mt-4">
        <p className="text-lg">Height: {pokemon.height}</p>
        <p className="text-lg">Weight: {pokemon.weight}</p>
        <p className="text-lg">
          Types: {pokemon.types.map((t) => t.type.name).join(", ")}
        </p>
      </div>
    </div>
  );
}