"use client";

import styles from "./styles.module.css";
import Link from "next/link";
import Logo from "@components/components/logo/Logo";

import { FaTimes } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FiFlag } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

export default function DashboardSidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Overlay backdrop for mobile */}
      {isOpen && <div className={styles.backdrop} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        {/* Close button for mobile */}
        <button className={styles.closeBtn} onClick={onClose}>
          <FaTimes />
        </button>

        {/* Your sidebar content */}
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/dashboard" className={styles.sideLink}>
                <MdDashboard size={20} />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/leads/all_leads" className={styles.sideLink}>
                <HiOutlineUserGroup size={20} />
                <span>Leads</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/campaign/all_campaign" className={styles.sideLink}>
                <FiFlag size={20} />
                <span>Campaigns</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/events/all_events" className={styles.sideLink}>
                <AiOutlineCalendar size={20} />
                <span>Events</span>
              </Link>
            </li>
            <li>
              <Link href="/dashboard/settings" className={styles.sideLink}>
                <FiSettings size={20} />
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
