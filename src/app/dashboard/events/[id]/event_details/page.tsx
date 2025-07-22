"use client";

import React from "react";
import { use } from 'react';
import styles from "./styles.module.css";
import { mockEvents } from "@components/mock/event";
import { notFound, useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import BackArrow from "@components/components/BackArrow/BackArrow";

export default function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params); // ✅ unwrap the Promise
  const router = useRouter(); 

  const eventId = parseInt(id, 10);
  const event = mockEvents.find((l) => l.id === eventId);

  function handleDelete() {
    // Logic to delete the event
    console.log(`Event with ID ${eventId} deleted`);
    // Redirect or update state after deletion
  }

  // Function to handle edit action
  function handleEdit() {
    console.log(`Edit Event with ID ${eventId}`);
    router.push(`/dashboard/events/${eventId}/edit_events`);
  }

  // If event not found, redirect to 404 page
  if (!event) {
    notFound();
  }

  return (
    <div className={styles.eventDetailsPage}>
      <div className={styles.eventDetailsHeader}>
        <BackArrow />
        <div className={styles.eventDetailsHeaderContent}>
          <h1>Event Details</h1>
          <button className={styles.editButton} onClick={handleEdit}>
            <FiEdit />
            <span>
              Edit Event
            </span>
          </button>
          <button className={styles.deleteButton} onClick={handleDelete}>
            <FiTrash2 />
            <span>
              Delete Event
            </span>
          </button>
        </div>
      </div>

      <div className={styles.eventDetailsContainer}>
        <h2>Event Information</h2>
        <div className={styles.eventDetails1}>
          <h3>Event Name</h3>
          <p>{event.EventName}</p>
        </div>
        <div className={styles.eventDetails2}>
          <h3>Event Time</h3>
          <p>{event.time}</p>
        </div>
        <div className={styles.eventDetails3}>
          <h3>Date</h3>
          <p>{event.startDate}</p>
        </div>
        <div className={styles.eventDetails4}>
          <h3>Location:</h3>
          <p>{event.location}</p>
        </div>
        <div className={styles.eventDetails5}>
          <h3>Note:</h3>
          <p>{event.note || "No additional notes provided."}</p>
        </div>
      </div>
    </div>
  );
}
