"use client";
import React, { useRef } from "react";
import styles from "./styles.module.css";

export default function JoinWaitlistModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  // This handles clicks on the backdrop
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>Join the Waitlist</h2>
        <p>Be among the first to experience FollowUpX when we launch</p>
        <form className={styles.form}>
          <input type="text" placeholder="Enter your First Name" required />
          <input type="email" placeholder="Enter your Email" required />
          <input type="text" placeholder="Enter your Whatsapp number" required />
          <p>We respect your privacy. Your email will only be used for product updates.</p>
          <button type="submit">Join Waitlist</button>
        </form>
      </div>
    </div>
  );
}
