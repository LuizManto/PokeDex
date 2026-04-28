import { useEffect, useState } from "react";

function Inicial() {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [generation, setGeneration] = useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            .then(res => res.json())
            .then(data => setGeneration(data.generation.name));
    }, [name]);

    useEffect(() => {
        const nomes = ["bulbasaur", "charmander", "squirtle"];

        Promise.all(nomes.map(nome => 
            fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
                .then(res => res.json())
        )).then(data => setPokemon(data));
    }, []);

    const escolherPokemon = (nome) => {
        setSelectedPokemon(nome);
        localStorage.setItem("starter", nome);
    };

    return (
        <div className="inicial-container">
            <h1>Escolha seu Pokémon Inicial</h1>

            <div className="opcoes">
                {pokemon.map(pokemon => (
            <div key={pokemon.name} onClick={() => escolherPokemon(pokemon.name)} className={`card ${selectedPokemon === pokemon.name ? "selecionado" : ""}`}>

            <img src={pokemon.sprites.front_default} />
            <h3>{pokemon.name}</h3>
            <p>ID: {pokemon.id}</p>
            <p>Geração: {generation.replace("generation-", "Gen ").     toUpperCase()}</p>
            <p>Habilidades: {pokemon.abilities.map(a => a.ability.name).    join(", ")}</p>
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            <p>Tipos: {pokemon.types.map(t => t.type.name).join(", ")}</    p>                    
            
          </div>
        ))}
      </div>

            {selectedPokemon && (
                <h2>Você escolheu {selectedPokemon}!</h2>
            )}
        </div>  
    );
}

export default Inicial;