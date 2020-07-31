import React from 'react';
import PokemonInfo from './PokemonInfo';
import PokemonStatsChart from './PokemonStatsChart';

function PokemonCard({ pokemon }) {
    const data = pokemon.stats.map((stat) => {
        return {
            subject: stat.stat.name.includes('special-')
                ? stat.stat.name.toUpperCase().replace('SPECIAL-', 'SP-')
                : stat.stat.name.toUpperCase(),
            A: stat.base_stat
        };
    });

    return (
        <div className="container flex flex-col lg:flex-row p-6 justify-between text-center">
            <PokemonInfo pokemon={pokemon} />
            <PokemonStatsChart data={data} />
        </div>
    );
}

export default PokemonCard;
