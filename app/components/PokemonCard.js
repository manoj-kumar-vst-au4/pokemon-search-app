
import Link from "next/link";

const PokemonCard = ({pokemon }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md w-48 text-center border border-gray-200">
      {/* Improved Image Rendering */}
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
        className="w-32 h-32 mx-auto object-contain"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold mt-4 capitalize">{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.name}`} className="text-blue-600 font-medium mt-4 inline-block">
        Details →
      </Link>
    </div>
  );
};

export default PokemonCard;