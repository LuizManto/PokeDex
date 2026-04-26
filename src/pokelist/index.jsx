import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Pokelist() {
  const [pokemons, setPokemons] = useState([]);
  // Limite de pokémons a serem carregados inicialmente com variável de estado para controle
  const [limit, setLimit] = useState(20);
  // Const para obter a imagem do Pokémon a partir da URL da API
  const getImage = (url) => {
  const id = url.split("/")[6];
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
};

  
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then(res => res.json())
      .then(data => setPokemons(data.results));
  }, [limit]);

  return (
    <div>
      <h1>Pokédex</h1>
      <div className="pokelist">
          {pokemons.map(p => (
          <Link to={`/pokemon/${p.name}`} key={p.name}>
          <div className="card">
      
          <img src={getImage(p.url)} alt={p.name} />

          <div className="card-nome">
          {p.name}
      </div>

    </div>
  </Link>
))}

      </div>
      <button className="btnestilo" onClick={() => setLimit(limit + 20)}>
        Carregar mais
      </button>
    </div>
  );
}

export default Pokelist;
