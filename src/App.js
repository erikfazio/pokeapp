import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonCard from './components/PokemonCard';

function App() {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const apiUrl = 'https://pokeapi.co/api/v2/pokemon/ditto';
        axios.get(apiUrl).then((result) => {
            setPokemon(result.data);
        });
    }, [pokemon]);

    return <PokemonCard pokemon={pokemon} />;
}

export default App;
