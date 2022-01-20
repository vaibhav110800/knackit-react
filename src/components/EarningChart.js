import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const EarningChart = () => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Earnings",
        data: [30, 33, 31, 36, 34, 30, 29],
        borderColor: "#4f46e5",
        backgroundColor: "#6366f1",
        lineTension: 0.4,
      },
      {
        label: "Subscribers",
        data: [20, 23, 21, 26, 24, 20, 19],
        borderColor: "#a5b4fc",
        backgroundColor: "#c7d2fe",
        lineTension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    bezierCurve: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="rounded-lg overflow-hidden">
      <div className="py-3 flex flex-col px-5 bg-white rounded-lg">
        <p className="my-3 ml-5 text-xl">Earnings</p>

        <Line data={data} style={{ maxHeight: "550px" }} options={options} />
      </div>
    </div>
  );
};

export default EarningChart;
