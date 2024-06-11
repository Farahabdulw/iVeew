"use client";

import React, { useEffect, useRef } from "react";
import { Chart, registerables } from 'chart.js';

// Register the necessary chart components
Chart.register(...registerables);

export default function ChartDetails({ x_axis, y_axis, labels }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const config = {
      type: "line",
      data: {
        labels: x_axis,
        datasets: [
          {
            label: labels[0],
            backgroundColor: "rgba(49, 130, 206, 0.2)",
            borderColor: "#3182ce",
            data: y_axis,
            fill: true,
            pointBackgroundColor: "#3182ce",
          },
          {
            label: labels[1],
            backgroundColor: "rgba(65, 89, 119, 0.2)",
            borderColor: "#1a3451",
            data: y_axis.map(y => y * 0.8), // Example second dataset with different values
            fill: true,
            pointBackgroundColor: "#1a3451",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              fontColor: "#ed9255",
            },
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
        scales: {
          x: {
            ticks: {
              color: "#1a3451",
            },
            grid: {
              display: false,
              color: "rgba(33, 37, 41, 0.3)",
            },
          },
          y: {
            ticks: {
              color: "#1a3451",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.15)",
            },
          },
        },
      },
    };

    const myChart = new Chart(ctx, config);

    return () => {
      myChart.destroy();
    };
  }, [x_axis, y_axis, labels]);

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded" style={{ background: "#e9ecef"}}>
      <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full max-w-full flex-grow flex-1">
            <h6 className="uppercase mb-1 text-xs font-semibold" style={{ color: "#ed9255" }}>
              Overview
            </h6>
            <h2 className="text-xl font-semibold" style={{ color: "#1a3451" }}>Hotel Statistics</h2>
          </div>
        </div>
      </div>
      <div className="p-4 flex-auto">
        <div className="relative" style={{ height: '245px' }}>
          <canvas ref={chartRef} id="line-chart" style={{ height: '240px', width: '100%' }}></canvas>
        </div>
      </div>
    </div>
  );
}
