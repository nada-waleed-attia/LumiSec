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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CampaignComparisonChart() {
  const data = {
    labels: ['O365 Reset', 'HR Salary', 'Netflix', 'VPN Login', 'AWS Alert'],
    datasets: [
      {
        label: 'Sent',
        data: [420, 310, 280, 190, 90],
        backgroundColor: '#3b82f6',
        borderRadius: 4,
      },
      {
        label: 'Clicked',
        data: [130, 140, 80, 40, 30],
        backgroundColor: '#f59e0b',
        borderRadius: 4,
      },
      {
        label: 'Submitted',
        data: [50, 70, 30, 15, 10],
        backgroundColor: '#ef4444',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', align: 'end', labels: { color: '#94a3b8' } },
    },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#64748b' } },
      y: { 
        min: 0, max: 600, 
        ticks: { stepSize: 150, color: '#475569' }, 
        grid: { color: '#1e293b' } 
      },
    },
  };

  return (
    <div style={{ height: '400px', backgroundColor: '#0f172a', padding: '20px', marginBottom: "50px", borderRadius: '12px' }}>
      <div style={{ color: '#fff', fontSize: '18px', fontWeight: 'bold' }}>Campaign Performance Comparison</div>
      <div style={{ color: '#64748b', fontSize: '12px', marginBottom: '20px' }}>Sent vs Clicked vs Submitted per campaign</div>
      <Bar data={data} options={options} />
    </div>
  );
}