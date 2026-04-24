import { useState } from "react";

function Search() {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  const buscar = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  };

  return (
    <div>
      <h1>Buscar Pokémon</h1>

      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={buscar}>Buscar</button>

      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} />
        </div>
      )}
    </div>
  );
}

export default Search;
