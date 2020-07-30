import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import PokemonCard from './components/PokemonCard';

function App() {
    const [pokemon, setPokemon] = useState({});
    const [input, setInput] = useState('');

    function fetchPokemon() {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`;
        axios.get(apiUrl).then((result) => {
            setPokemon(result.data);
        });
    }

    function handleChange(event) {
        setInput(event.target.value);
    }

    function handleClick() {
        fetchPokemon();
        setInput('');
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <div className="text-center mt-4 mb-4">
                    <input
                        className="border border-black rounded mr-2 p-2"
                        type="text"
                        onChange={handleChange}
                        value={input}
                    />
                    <button
                        className="bg-red-600 font-bold text-white p-2 rounded-lg"
                        type="button"
                        onClick={handleClick}
                        value={input}>
                        Search
                    </button>
                </div>
                {pokemon.moves && <PokemonCard pokemon={pokemon} />}
            </div>
        </>
    );
}

export default App;
