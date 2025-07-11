"use client";
import styles from "./styles.module.css";
import { FiArrowLeft } from "react-icons/fi";
import React from "react";
import { useRouter } from "next/navigation";

export default function BackArrow() {
    const router = useRouter();

  return (
    <button className={styles.backButton} onClick={() => router.back()}>
      <FiArrowLeft />
    </button>
  );
}
