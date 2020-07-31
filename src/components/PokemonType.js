import React from 'react';

const typeList = {
    normal: 'bg-gray-400',
    fire: 'bg-red-500',
    water: 'bg-blue-400',
    grass: 'bg-green-400',
    electric: 'bg-yellow-400',
    ice: 'bg-blue-200',
    fighting: 'bg-red-800 text-white',
    poison: 'bg-purple-400',
    ground: 'bg-orange-700',
    flying: 'bg-teal-200',
    psychic: 'bg-pink-400',
    bug: 'bg-green-700 text-white',
    rock: 'bg-orange-900 text-white',
    ghost: 'bg-purple-900 text-white',
    dragon: 'bg-red-400',
    dark: 'bg-black-400 border border-black',
    steel: 'bg-gray-400',
    fairy: 'bg-pink-400'
};

function PokemonType({ type }) {
    return (
        <div className={`${typeList[type]} inline-block mr-2 p-1 rounded font-bold uppercase`}>
            {type}
        </div>
    );
}

export default PokemonType;
