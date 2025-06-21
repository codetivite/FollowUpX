'use client'; // Required for interactivity

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav>
        <Link href="/dashboard">Home</Link>
        <Link href="/dashboard/analytics">Analytics</Link>
        <Link href="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  );
}