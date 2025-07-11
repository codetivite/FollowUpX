"use client";

import React from "react";

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

import { Line } from "react-chartjs-2";
import styles from "./styles.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function FollowUpPerformanceGraph() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Leads",
        data: [12, 19, 8, 15, 22, 30],
        borderColor: "#4F46E5", // Indigo
        backgroundColor: "rgba(79,70,229,0.1)", // Indigo transparent fill
        tension: 0.4, // Curved lines
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Follow-up Performance",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className={styles.chartWrapper}>
      <Line data={data} options={options} />
    </div>
  );
}
