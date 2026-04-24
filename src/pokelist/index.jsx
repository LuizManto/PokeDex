import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pokelist() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then(res => res.json())
      .then(data => setPokemons(data.results));
  }, []);

  return (
    <div>
      <h1>Pokédex</h1>

      {pokemons.map(p => (
        <div key={p.name}>
          <Link to={`/pokemon/${p.name}`}>
            {p.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Pokelist;
