import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PokemonCard = ({ pokemon }) => {
  return (
    <Link key={pokemon.id} href={`/pokemon/${pokemon.name}`}>
      <div className="border p-4 rounded shadow-md hover:shadow-lg cursor-pointer text-center bg-white">
        <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
        <h2 className="text-xl capitalize font-semibold">{pokemon.name}</h2>
      </div>
    </Link>
  );
};

export default PokemonCard;