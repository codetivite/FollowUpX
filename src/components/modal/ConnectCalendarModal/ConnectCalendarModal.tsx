"use client";
import React, { useEffect } from "react";
import styles from "./../ChangePasswordModal/styles.module.css";

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
                <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
