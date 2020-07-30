import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';

function App() {
    const [pokemon, setPokemon] = useState({});
    const [input, setInput] = useState('');

    useEffect(() => {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon/${}`;
        axios.get(apiUrl).then((result) => {
            setPokemon(result.data);
        });
    }, [pokemon]);

    function handleClick(event) {
        setInput(event.target.value);
    }

    return (
        <div className="container mx-auto">
            <div className="text-center mt-4">
                <input className="border rounded mr-2 p-2" type="text" />
                <button
                    className="bg-gray-400 p-2 rounded-lg"
                    type="button"
                    onClick={handleClick}
                    value={input}>
                    Search
                </button>
            </div>
            <PokemonCard pokemon={pokemon} />
        </div>
    );
}

export default App;
