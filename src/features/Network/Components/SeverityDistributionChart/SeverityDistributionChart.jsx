import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function SeverityDistributionChart() {
    const data = {
        labels: ["Critical", "High", "Medium", "Low"],
        datasets: [
            {
                data: [4, 3, 0, 0],
                backgroundColor: ["#ef4444", "#f97316", "#eab308", "#22c55e"],
                borderRadius: 8, // لتدوير الحواف
                barThickness: 40,
            },
        ],
    };

    const options = {
        indexAxis: 'y', // تحويل الرسم لأفقي
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                min: 0,
                max: 4,
                grid: { display: false },
            },
            y: {
                grid: { display: false },
            },
        },
        plugins: {
            legend: { display: false }, // إخفاء العنوان الجانبي
        },
    };

    return (
        <div className='w-100' style={{ height: '300px' }}>
            <Bar data={data} options={options} />
        </div>
    );
}