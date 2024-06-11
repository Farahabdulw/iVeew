"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';

const Line = dynamic(() => import('react-chartjs-2').then((mod) => mod.Line), {
  ssr: false,
});

const Chart = ({ x_axis, y_axis, labels }) => {
  const colors = ['#6a5acd','#1a3451', '#e76044', '#008080', '#4AFFE0', '#0A5757', '#BFEBAB', '#3E8C24', '#ffdead'];

  const data = {
    labels: x_axis,
    datasets: labels.map((label, index) => ({
      label: label,
      data: y_axis, 
      fill: false,
      borderColor: colors[index % colors.length], 
      tension: 0.1,
    })),
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y || '';
            return `${label}: ${value}`;
          },
          afterLabel: (context) => {
            return 'Click here for more info';
          }
        },
      },
    },
  };

  return (
    <div style={{ width: '800px', height: '800px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;

