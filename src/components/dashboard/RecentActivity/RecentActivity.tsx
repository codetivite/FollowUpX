// components/dashboard/RecentActivity.tsx
"use client";
import React from "react";
import { FiArrowUpRight, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import styles from "./styles.module.css";

const activities = [
  { icon: <FiArrowUpRight />, text: "Follow‑up sent to Sarah Johnson", meta: "2h ago", sub: "Contract renewal discussion" },
  { icon: <FiCheckCircle />, text: "Response received from David Rodriguez", meta: "5h ago", sub: "Quarterly review meeting" },
  { icon: <FiAlertCircle />, text: "Follow‑up to Emily Thompson is overdue", meta: "1d ago", sub: "Service feedback request" },
];

export default function RecentActivity() {
  return (
    <div className={styles.activityWrapper}>
      <h3>Recent Activity</h3>
      <ul className={styles.list}>
        {activities.map((a, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.icon}>{a.icon}</span>
            <div>
              <p className={styles.text}>{a.text} </p>
              <p className={styles.sub}>{a.sub}</p>
            </div>
            <span className={styles.meta}>{a.meta}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
