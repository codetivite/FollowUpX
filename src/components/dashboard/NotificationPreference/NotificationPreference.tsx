"use client";
import React, { useState } from "react";
import styles from "./styles.module.css"; // You can adjust naming

export default function NotificationPreferences() {
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [whatsappEnabled, setWhatsappEnabled] = useState(true);

  return (
    <section className={styles.notificationSection}>
      <h2 className={styles.title}>Notification Preference</h2>
      <div className={styles.preferenceList}>
        <PreferenceItem
          title="Email Notification"
          description="Receive updates and alerts via Email"
          enabled={emailEnabled}
          onToggle={() => setEmailEnabled(!emailEnabled)}
        />
        <div className={styles.divider} />
        <PreferenceItem
          title="WhatsApp Notification"
          description="Receive updates and alerts via WhatsApp"
          enabled={whatsappEnabled}
          onToggle={() => setWhatsappEnabled(!whatsappEnabled)}
        />
      </div>
    </section>
  );
}

function PreferenceItem({
  title,
  description,
  enabled,
  onToggle,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={styles.preferenceItem}>
      <div>
        <h3 className={styles.itemTitle}>{title}</h3>
        <p className={styles.itemDescription}>{description}</p>
      </div>
      <label className={styles.switch}>
        <input type="checkbox" checked={enabled} onChange={onToggle} />
        <span className={styles.slider} />
      </label>
    </div>
  );
}
