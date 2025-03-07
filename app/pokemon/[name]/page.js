import Image from "next/image";
import Link from "next/link";

// Fetch Pokémon data
async function getPokemonData(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error("Failed to fetch Pokémon data");
  }
  const data = await res.json();

  return {
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default,
    type: data.types.map((t) => t.type.name),
    stats: data.stats.map((s) => s.stat.name),
    abilities: data.abilities.map((a) => a.ability.name),
    moves: data.moves.slice(0, 5).map((m) => m.move.name),
  };
}

export default async function PokemonDetail({ params }) {
  const pokemon = await getPokemonData(params.name);

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      <Link href="/" className="text-teal-500 mb-4 text-lg">
        &lt; Back
      </Link>

      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <div className="bg-teal-300 p-6 rounded-t-xl flex justify-center">
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="bg-yellow-300 p-6 rounded-b-xl text-gray-800">
          <p className="text-lg font-bold">
            <span className="font-semibold">Name:</span> {pokemon.name}
          </p>
          <p className="text-lg font-bold">
            <span className="font-semibold">Type:</span> {pokemon.type.join(", ")}
          </p>
          <p className="text-lg font-bold">
            <span className="font-semibold">Stats:</span> {pokemon.stats.join(", ")}
          </p>
          <p className="text-lg font-bold">
            <span className="font-semibold">Abilities:</span> {pokemon.abilities.join(", ")}
          </p>
          <p className="text-lg font-bold">
            <span className="font-semibold">Some Moves:</span> {pokemon.moves.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}