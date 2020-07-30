import React from 'react';
import PokemonType from './PokemonType';

function PokemonCard({ pokemon }) {
    return (
        <div className="md:bg-gray-200 p-6 rounded">
            <div className="md:inline-block bg-white shadow-lg rounded-lg  p-6 text-center">
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
        </div>
    );
}

export default PokemonCard;
