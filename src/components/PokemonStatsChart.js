import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

function PokemonStatsChart({ data }) {
    return (
        <div className="bg-white shadow-lg rounded-lg  p-6 text-center">
            <RadarChart outerRadius={90} width={700} height={400} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <Radar name="Pikachu" dataKey="A" stroke="red" fill="red" fillOpacity={0.6} />
            </RadarChart>
        </div>
    );
}

export default PokemonStatsChart;
