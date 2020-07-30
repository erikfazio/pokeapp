import React from 'react';
import PokemonType from './PokemonType';
import PokemonStatsChart from './PokemonStatsChart';

function PokemonCard({ pokemon }) {
    const data = pokemon.stats.map((stat) => {
        return {
            subject: stat.stat.name.toUpperCase(),
            A: stat.base_stat,
            B: 30,
            fullMark: 150
        };
    });

    return (
        <div className="flex flex-col md:flex-row justify-around md:bg-gray-200 p-6 rounded">
            <div className="bg-white shadow-lg rounded-lg  p-6 text-center">
                <span className="text-6xl font-bold text-gray-400">#{pokemon.order}</span>
                <img className="mx-auto" src={pokemon.sprites.front_default} />
                <span className="font-bold uppercase">{pokemon.name}</span>
                <div className="p-4">
                    <span>
                        <span className="font-bold">Weight:</span> {pokemon.weight} kg,{' '}
                        <span className="font-bold">Height: </span> {pokemon.height}'
                    </span>
                </div>
                <div className="p-4">
                    <div className="flex capitalize justify-center">
                        {pokemon.types.map((type) => (
                            <PokemonType type={type.type.name} />
                        ))}
                    </div>
                </div>
                <div className="p-4">
                    <span className="capitalize">
                        {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
                    </span>
                </div>
            </div>
            <PokemonStatsChart data={data} />
        </div>
    );
}

export default PokemonCard;
