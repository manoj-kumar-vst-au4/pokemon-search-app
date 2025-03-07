'use client'
import React, { useEffect, useState } from 'react';
import SearchFilter from '../components/SearchFilter';
import PokemonCard from '../components/PokemonCard';
import { fetchPokemonData, fetchTypes } from '../utils/fetchPokemon';
import '../globals.css';

export default function HomeComp() {
  const [pokemonList, setPokemonList] = useState([]);
  const [types, setTypes] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    async function fetchData() {
      setPokemonList(await fetchPokemonData());
      setTypes(await fetchTypes());
    }
    fetchData();
  }, []);

  const filteredPokemon = pokemonList.filter((pokemon) => {
    return (
      (selectedType === '' || pokemon.types.some((t) => t.type.name === selectedType)) &&
      (search === '' || pokemon.name.includes(search.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">Pokémon Search App</h1>
      <SearchFilter types={types} selectedType={selectedType} setSelectedType={setSelectedType} search={search} setSearch={setSearch} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}