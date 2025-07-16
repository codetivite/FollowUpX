"use client"; // Required for interactivity

import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

import React from "react";
import DashboardCalendar from "@components/components/dashboard/DashboardCalendar/DashboardCalendar";
import RecentActivity from "@components/components/dashboard/RecentActivity/RecentActivity";
import styles from "./styles.module.css";
import UpdateFollowUps from "@components/components/dashboard/UpcomingFollowUps/UpcomingFollowUps";
import FollowUpPerformanceGraph from "@components/components/dashboard/FollowUpPerformanceGraph/FollowUpPerformanceGraph";

export default function DashboardHome() {
  
  return (
    <>
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardSection1}>
          <div className={styles.urgentInfo}>
            <p>Total Follow-ups</p>
            <h2>248</h2>
            <p>
              <FiChevronUp />
              <span>12% from last week</span>
            </p>
          </div>
          <div className={styles.urgentInfo}>
            <p>Pending Tasks</p>
            <h2>42</h2>
            <p>
              <FiChevronDown />
              <span>8% from last week</span>
            </p>
          </div>
          <div className={styles.urgentInfo}>
            <p>Response Rate</p>
            <h2>68%</h2>
            <p>
              <FiChevronUp />
              <span>5% from last week</span>
            </p>
          </div>
          <div className={styles.urgentInfo}>
            <p>Avg. Response Time</p>
            <h2>1.4 days</h2>
            <p>
              <FiChevronUp />
              <span>0.3 days improvement</span>
            </p>
          </div>
        </div>
        <div className={styles.dashboardSection2}>
          <UpdateFollowUps />
          <div className={styles.dateActivity}>
            <DashboardCalendar />
            <RecentActivity />
          </div>
        </div>
        <div className={styles.dashboardSection3}>
          <FollowUpPerformanceGraph />
        </div>
      </div>
    </>
  );
}
