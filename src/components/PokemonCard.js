import React from 'react';

function PokemonCard({ pokemon }) {
    return (
        <div className="md:bg-gray-200 p-6 rounded">
            <div className="md:inline-block bg-white shadow-lg rounded-lg  p-6 text-center">
                <span className="text-6xl font-bold text-gray-400">#{pokemon.order}</span>
                {pokemon.sprites && <img className="mx-auto" src={pokemon.sprites.front_default} />}
                <span className="font-bold uppercase">{pokemon.name}</span>
                <ul>
                    {pokemon.types &&
                        pokemon.types.map((type) => {
                            return <li>{type.type.name}</li>;
                        })}
                </ul>
            </div>
        </div>
    );
}

export default PokemonCard;
