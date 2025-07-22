"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
} from "recharts";
import styles from "./styles.module.css";

const data = [
  { date: "Day 1", responseRate: 20, completionRate: 10 },
  { date: "Day 5", responseRate: 35, completionRate: 18 },
  { date: "Day 10", responseRate: 50, completionRate: 30 },
  { date: "Day 15", responseRate: 65, completionRate: 45 },
  { date: "Day 20", responseRate: 78, completionRate: 60 },
  { date: "Day 25", responseRate: 85, completionRate: 72 },
  { date: "Day 30", responseRate: 95, completionRate: 88 },
];

export default function FollowUpPerformanceChart() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>Follow-up Performance</h3>
        <button className={styles.filterButton}>Last 30 Days</button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="left"
            // margin="top: 20, right: 30, left: 0, bottom: 0"
            formatter={(value) =>
              value === "responseRate"
                ? "Response Rate"
                : value === "completionRate"
                ? "Completion Rate"
                : value
            }
            iconType="circle"
          />
          <Area
            type="monotone"
            dataKey="responseRate"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.1}
          />
          <Line
            type="monotone"
            dataKey="responseRate"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="completionRate"
            stroke="#22c55e"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
