import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CampaignTrendChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      { label: 'Sent', data: [1200, 1400, 1100, 1600, 1900, 2100, 1800, 2400], borderColor: '#3b82f6', tension: 0.4, fill: false },
      { label: 'Clicked', data: [500, 550, 400, 550, 600, 620, 500, 620], borderColor: '#f59e0b', tension: 0.4, fill: false },
      { label: 'Submitted', data: [120, 150, 100, 150, 150, 150, 100, 120], borderColor: '#ef4444', tension: 0.4, fill: false },
      { label: 'Reported', data: [100, 150, 120, 200, 300, 350, 300, 450], borderColor: '#10b981', tension: 0.4, fill: false },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { intersect: false, mode: 'index' },
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
        labels: {
          color: '#e2e8f0',
          usePointStyle: true,
          pointStyle: 'line',
          boxWidth: 20,
          padding: 20
        }
      },
    },
    scales: {
      y: {
        min: 0,
        max: 2400,
        ticks: { stepSize: 600, color: '#475569' },
        grid: { color: '#1e293b' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#475569' }
      },
    },
    elements: { point: { radius: 0 } }
  };

  return (
    <div style={{ height: '400px', backgroundColor: '#0f172a', padding: '24px', borderRadius: '12px' }}>
      {/* قسم العنوان منفصل تماماً عن الرسم */}
      <div style={{ marginBottom: '16px' }}>
        <h2 style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold', margin: '0' }}>Campaign Trend</h2>
        <p style={{ color: '#64748b', fontSize: '12px', margin: '4px 0 0' }}>Monthly email activity & threat indicators</p>
      </div>
      
      {/* الرسم البياني فقط */}
      <div style={{ height: '300px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}