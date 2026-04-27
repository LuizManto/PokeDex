import { useState } from "react";

function Search() {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [erro, setErro] = useState("");

  const buscar = () => {
    setErro("");
    setPokemon(null);

    if (!name.trim()) {
      setErro("Digite um nome!");
      return;
    }


    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Pokemon não encontrado!");
        }
        return res.json();
    })
    .then(data => setPokemon(data))
    .catch(() => {
      setErro("Pokemon não encontrado, digitou corretamente?")
    });
  };

  return (
    <div className="search-container">
      <h1>Buscar Pokémon</h1>

      <input className="busca" onChange={(e) => setName(e.target.value)} />
      <button className="btnbusca" onClick={buscar}>Buscar</button>

      {erro && <p>{erro}</p>}

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
