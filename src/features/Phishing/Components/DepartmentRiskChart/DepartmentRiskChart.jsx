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

export default function DepartmentRiskChart() {
  const data = {
    labels: ['Finance', 'HR', 'IT', 'Sales', 'Marketing', 'Eng'],
    datasets: [
      {
        data: [75, 52, 38, 60, 29, 18],
        backgroundColor: ['#ef4444', '#f59e0b', '#f59e0b', '#ef4444', '#10b981', '#10b981'],
        borderRadius: 6,
        barThickness: 35,
      },
    ],
  };

  const options = {
    indexAxis: 'y', // هذا يجعل الأعمدة أفقية
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: {
        min: 0,
        max: 100,
        // هذه الإعدادات تضمن بدء المحور من 0% جهة اليسار إلى 100% جهة اليمين
        beginAtZero: true, 
        ticks: { 
            callback: (value) => value + '%',
            color: '#64748b' 
        },
        grid: { 
            color: '#1e293b', 
            borderDash: [5, 5],
            drawTicks: false // إخفاء علامات التجزئة الصغيرة على الخط
        },
      },
      y: {
        grid: { display: false },
        ticks: { color: '#94a3b8', font: { size: 14 } },
      },
    },
  };

  return (
    <div style={{ height: '400px', backgroundColor: '#0f172a', padding: '24px' , marginBottom: "50px" , borderRadius: '12px' }}>
      <h2 style={{ color: '#ffffff', fontSize: '20px', margin: '0' }}>Department Risk Score</h2>
      <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>Submission rate by department</p>
      <div style={{ height: '280px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}