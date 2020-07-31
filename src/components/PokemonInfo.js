import React from 'react';
import PokemonType from './PokemonType';

function PokemonInfo({ pokemon }) {
    return (
        <div className="p-6 bg-white shadow-lg mr-6 rounded-lg text-center">
            <span className="text-6xl font-bold text-gray-400">#{pokemon.order}</span>
            <img className="mx-auto" src={pokemon.sprites.front_default} alt={pokemon.name} />
            <span className="font-bold uppercase">{pokemon.name}</span>
            <div className="p-4">
                <span>
                    <span className="font-bold">Weight:</span> {pokemon.weight / 10} kg,{' '}
                    <span className="font-bold">Height: </span> {pokemon.height / 10} m
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
                    <span className="font-bold">Moves: </span>{' '}
                    {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
                </span>
            </div>
        </div>
    );
}

export default PokemonInfo;
