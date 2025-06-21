'use client'; // Required for interactivity

import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function DashboardHome() {
  return (
    <div>
      <h1>Dashboard Overview</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}