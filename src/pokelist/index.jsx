import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pokelist() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then(res => res.json())
      .then(data => setPokemons(data.results));
  }, [limit]);

  return (
    <div>
      <div className="pokelist">
        <h1>Pokédex</h1>
        {pokemons.map(p => (
          <div key={p.name}>
            <Link to={`/pokemon/${p.name}`}>
              {p.name}
            </Link>
          </div>
        ))}
      </div>
      <button className="btnestilo" onClick={() => setLimit(limit + 20)}>
        Carregar mais
      </button>
    </div>
  );
}

export default Pokelist;
