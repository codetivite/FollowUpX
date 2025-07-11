"use client";

import styles from "./styles.module.css";
import React from "react";
import Link from "next/link";
import { mockEvents } from "@components/mock/event";

import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";

export default function AllEvent() {
  function handleDelete(id: number): void {
    // For now, just log the id. In a real app, you'd call an API and update state.
    console.log(`Delete Event with id: ${id}`);
    // Example: show a confirmation dialog before deleting
    // if (window.confirm("Are you sure you want to delete this Event?")) {
    //   // Call API to delete, then update UI
    // }
  }

  return (
    <>
      <div className={styles.EventSection2}>
        {/* Event items would be mapped here */}
        <table className={styles.EventTable}>
          <thead className={styles.EventTableHead}>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className={styles.EventTableBody}>
            {mockEvents.map((f, i) => (
              <tr key={i}>
                <td>{f.EventName}</td>
                <td>{f.startDate}</td>
                <td>{f.time}</td>
                <td>{f.location}</td>
                <td className={styles.EventActions}>
                  <Link href={`/dashboard/events/${f.id}/event_details`}>
                    <AiOutlineEye />
                  </Link>
                  <Link href={`/dashboard/events/${f.id}/edit_events`}>
                    <FiEdit />
                  </Link>
                  <button onClick={() => handleDelete(f.id)}>
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
