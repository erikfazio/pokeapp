import React from 'react';
import PokemonType from './PokemonType';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

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
        <div className="md:flex justify-around md:bg-gray-200 p-6 rounded">
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
            <div className="bg-white shadow-lg rounded-lg  p-6 text-center">
                <RadarChart outerRadius={90} width={700} height={400} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <Radar name="Pikachu" dataKey="A" stroke="red" fill="red" fillOpacity={0.6} />
                </RadarChart>
            </div>
        </div>
    );
}

export default PokemonCard;
