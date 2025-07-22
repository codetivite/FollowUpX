// components/dashboard/DashboardCalendar.tsx
"use client";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./styles.module.css";

export default function DashboardCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div className={styles.calendarWrapper}>
      <Calendar
        onChange={(value) => {
          if (value instanceof Date) {
            setDate(value);
          } else if (Array.isArray(value) && value[0] instanceof Date) {
            setDate(value[0]);
          }
        }}
        value={date}
      />
    </div>
  );
}
