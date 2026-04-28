import { useEffect, useState } from "react";

function MyPokemon() {
    const [pokemon, setPokemon] = useState(null);
    const [msg, setMsg] = useState("");
    const [generation, setGeneration] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
      .then(res => res.json())
      .then(data => setGeneration(data.generation.name));
  }, [name]);

  const starter = localStorage.getItem("starter");

  useEffect(() => {
    if (starter) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${starter}`)
        .then(res => res.json())
        .then(data => setPokemon(data));
    }
  }, []);

  if (!starter) {
    return <p>Você ainda não escolheu um Pokémon inicial!</p>;
  }

  return (
    <div className="mypokemon-container">
      <h1>Meu Pokémon</h1>

      {pokemon && (
        <>
          <h2>{pokemon.name}</h2>

          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
          />

            <p>ID: {pokemon.id}</p>
            <p>Geração: {generation.replace("generation-", "Gen ").     toUpperCase()}</p>
            <p>Habilidades: {pokemon.abilities.map(a => a.ability.name).    join(", ")}</p>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <p>Tipos: {pokemon.types.map(t => t.type.name).join(", ")}</    p>        

          {/* 🔥 Interações */}
          <div className="acoes">
            <button className="btnestilo" onClick={() => setMsg("Seu Pokémon está feliz! 😊")}>Alimentar</button>

            <button className="btnestilo" onClick={() => setMsg("Treinou e ficou mais forte! 💪")}>Treinar</button>

            <button className="btnestilo" onClick={() => {localStorage.removeItem("starter"); window.location.href = "/inicial";}}>Trocar</button>
          </div>

          <p>{msg}</p>
        </>
      )}
    </div>
  );
}

export default MyPokemon;
