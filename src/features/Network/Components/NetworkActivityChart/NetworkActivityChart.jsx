import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Title, Tooltip);

export default function NetworkActivityChart() {
    const data = {
        labels: ["00:00", "02:00", "04:00", "06:00", "08:00", "10:00", "12:00"],
        datasets: [
            {
                data: [1000, 600, 500, 800, 2000, 3000, 2800],
                borderColor: '#06b6d4',
                backgroundColor: 'rgba(6, 182, 212, 0.2)',
                fill: true,
                tension: 0.3, 
                pointRadius: 0,
                borderWidth: 2,
            },
            {
                data: [800, 400, 300, 500, 1500, 2000, 1800],
                borderColor: '#22c55e',
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                fill: true,
                tension: 0.3, 
                pointRadius: 0,
                borderWidth: 2,
            },
            {
                data: [600, 200, 150, 300, 1000, 1500, 1200],
                borderColor: '#eab308',
                backgroundColor: 'rgba(234, 179, 8, 0.2)',
                fill: true,
                tension: 0.3,
                pointRadius: 0,
                borderWidth: 2,
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            x: { grid: { display: false }, ticks: { color: '#6b7280' } },
            y: { grid: { color: '#1f2937' }, ticks: { color: '#6b7280' } }
        }
    };

    return (
        <div style={{ height: '400px', backgroundColor: 'transparent', padding: '20px' }}>
            <Line data={data} options={options} />
        </div>
    );
}