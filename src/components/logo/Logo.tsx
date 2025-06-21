"use client";

import Image from "next/image";
import styles from "./styles.module.css";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <Image 
      src="/follow-upLogo.svg" 
      alt="Logo" width={35} 
      height={39}
      className={styles.logo} 
      />
      <Image
        src="/follow-upText.svg"
        alt="Follow Up Text"
        width={159}
        height={39}
        className={styles.logoText}
      />
    </div>
  );
}
