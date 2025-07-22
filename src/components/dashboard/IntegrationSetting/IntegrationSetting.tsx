"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import Modal from "@components/components/modal/ConnectCalendarModal/ConnectCalendarModal";
import { AiOutlineCalendar } from "react-icons/ai";

export default function Integrations() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.integrations}>
      <h2 className={styles.title}>Integration</h2>
      <div className={styles.integrationsList}>
        <div className={styles.integrationItem}>
          <h3 className={styles.integrationTitle}>Connect Google Calendar</h3>
          <p className={styles.integrationDescription}>
            Connect your Google Calendar to sync events and appointments.
          </p>
        </div>
        <button className={styles.connectButton} onClick={() => setIsModalOpen(true)}>Connect</button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className={styles.modalHeader}>
          <AiOutlineCalendar className={styles.calendarIcon} />
          <h3>Connect Google Calendar</h3>
        </div>
        <div className={styles.modalContent}>
          <p>
            Integrate your google calendar to seamlessly sync events, schedule followups, and manage your leads availability directly from FollowUpX. This will allow the Assistant to create, view and manage events on your behalf
          </p>
          <button>
            Connect with Google
          </button>
          <button>
            Cancel
          </button>
        </div>
      </Modal>
    </section>
  );
}
