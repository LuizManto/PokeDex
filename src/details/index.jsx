import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [generation, setGeneration] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then(res => res.json())
      .then(data => setGeneration(data.generation.name));
  }, [name]);


  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => setPokemon(data));
  }, [name]);

  if (!pokemon) return <p>Carregando...</p>;

  return (
    <div className="details-container">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} />

      <p>ID: {pokemon.id}</p>
      <p>Geração: {generation.replace("generation-", "Gen ").toUpperCase()}</p>
      <p>Habilidades: {pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
      <p>Tipos: {pokemon.types.map(t => t.type.name).join(", ")}</p>

      <button className="btnestilo"><Link className="links" to="/list">Voltar</Link></button>

    </div>
  );
}

export default Details;
