import React from 'react';

function PokemonCard({ pokemon }) {
    return (
        <div className="md:bg-gray-200 p-6 rounded">
            <div className="md:inline-block bg-white shadow-lg rounded-lg  p-6 text-center">
                <span className="text-6xl font-bold text-gray-400">#{pokemon.order}</span>
                {pokemon.sprites && <img className="mx-auto" src={pokemon.sprites.front_default} />}
                <span className="font-bold uppercase">{pokemon.name}</span>
                <div className="p-4">
                    <span>
                        Weight: {pokemon.weight} kg, Height: {pokemon.height}'
                    </span>
                </div>
                <div className="p-4">
                    <span className="capitalize">
                        {pokemon.types && pokemon.types.map((type) => type.type.name).join(', ')}
                    </span>
                </div>
                <div className="p-4">
                    <span className="capitalize">
                        {pokemon.abilities &&
                            pokemon.abilities.map((ability) => ability.ability.name).join(', ')}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
