import React from 'react';

const SearchFilter = ({ types, selectedType, setSelectedType, search, setSearch }) => {
  return (
    <div className="flex flex-col mb-6">
      <select
        className="border p-2 rounded w-full md:w-1/3"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type.name} value={type.name}>
            {type.name}
          </option>
        ))}
      </select>
      <br/>
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="border p-2 rounded w-full md:w-2/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchFilter;
