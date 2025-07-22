"use client";

import styles from "./styles.module.css";
import React from "react";
import { useRouter } from "next/navigation";
import EventAll  from "@components/components/dashboard/EventTable/Eventtable";

export default function AllEvent() {
  const router = useRouter();

  const handleClickAdd = () => {
    console.log("Add Event");
    router.push("/dashboard/events/add_events");
  };

  return (
    <>
      <div className={styles.EventContainer}>
        <div className={styles.EventSection1}>
          <h1>Event Overview</h1>
          <button className={styles.newTask} onClick={handleClickAdd}>
            + <span>Add New Event</span>
          </button>
        </div>
        <EventAll />
      </div>
    </>
  );
}
