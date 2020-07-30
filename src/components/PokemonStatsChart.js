import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

function PokemonStatsChart({ data }) {
    return (
        <div className="p-6 bg-white md:shadow-lg md:rounded-lg text-center">
            <h1 className="text-4xl font-bold text-center">Statistics</h1>
            <RadarChart outerRadius={90} width={700} height={400} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <Radar name="Pikachu" dataKey="A" stroke="red" fill="red" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
}

export default PokemonStatsChart;
