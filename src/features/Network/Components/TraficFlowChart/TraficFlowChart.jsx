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
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function TrafficFlowChart() {
  const data = {
    // توزيع التوقيتات على المحور السيني
    labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
    datasets: [
      {
        label: 'Current PPS',
        // بيانات دقيقة تحاكي تقلبات الصورة
        data: [2500, 3200, 3500, 3400, 2500, 2800, 3500, 11000, 2700, 6000, 2500, 9000],
        borderColor: '#06b6d4',
        backgroundColor: 'rgba(6, 182, 212, 0.15)',
        fill: true,
        tension: 0.3,
        // إظهار النقاط الحمراء فقط عند القيم العالية (تجاوز الـ 8000)
        pointRadius: (ctx) => (ctx.raw > 8000 ? 6 : 0),
        pointBackgroundColor: '#ef4444',
        pointBorderColor: '#fff',
      },
      {
        label: '3σ Threshold',
        data: [8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000, 8000],
        borderColor: '#f97316',
        borderDash: [8, 4],
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top', align: 'end', labels: { color: '#94a3b8', usePointStyle: true } },
    },
    scales: {
      y: { 
        min: 0, 
        max: 12000, 
        ticks: { color: '#475569', stepSize: 3000 }, 
        grid: { color: '#1e293b' } 
      },
      x: { 
        ticks: { color: '#475569' }, 
        grid: { display: false } 
      },
    },
  };

  return (
    <div style={{ height: '400px', width: '100%', backgroundColor: '#0f172a', padding: '20px', borderRadius: '10px' }}>
      <Line data={data} options={options} />
    </div>
  );
}