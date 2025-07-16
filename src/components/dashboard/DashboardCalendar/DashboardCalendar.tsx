// components/dashboard/DashboardCalendar.tsx
"use client";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./styles.module.css";

export default function DashboardCalendar() {

  return (
    <div className={styles.calendarWrapper}>
      <Calendar
        // onChange={setDate}
        value={new Date()}
      />
    </div>
  );
}
