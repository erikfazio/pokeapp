import React from 'react';
import { RadarChart, ResponsiveContainer, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

function PokemonStatsChart({ data }) {
    return (
        <div className="md:w-full p-6 mr-6 mt-4 md:mr-0 bg-white shadow-lg rounded-lg text-center">
            <h1 className="text-4xl font-bold text-center">Statistics</h1>
            <ResponsiveContainer width="100%" aspect={2}>
                <RadarChart data={data} scaleToFit={true}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <Radar name="Pikachu" dataKey="A" stroke="red" fill="red" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PokemonStatsChart;
