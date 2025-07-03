"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import AppImage from "@components/components/AppImage/AppImagee";

export default function Logo() {
  return (
    <Link href="/" className={styles.logoContainer}>
      <AppImage 
        src="/follow-upLogo.svg" 
        alt="Logo"
        width={35}
        height={39}
        className={styles.logo}
      />
      <AppImage
        src="/follow-upText.svg"
        alt="Follow Up Text"
        width={159}
        height={39}
        className={styles.logoText}
      />
    </Link>
  );
}
