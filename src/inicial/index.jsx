import { useEffect, useState } from "react";

function Inicial() {
    const [pokemon, setPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);

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
            <p>{pokemon.name}</p>
            
          </div>
        ))}
      </div>

            {selectedPokemon && (
                <p>Você escolheu {selectedPokemon}!</p>
            )}
        </div>  
    );
}

export default Inicial;