"use client";

import styles from "./styles.module.css";
import Image from "next/image";

// components/Footer/AuthFooter.tsx
export default function AuthFooter() {
  return (
    <footer className={styles.authFooter}>
      <div className={styles.authFooterLinks}>
        <div className={styles.authFooterText}>
          <p>© 2025 Buildtivite</p>
          <p>
            <a href="">Terms of service</a>
          </p>
          <p>
            <a href="/privacy">Privacy Policy</a>
          </p>
          <p>Hello@mentors.co</p>
        </div>
        <div className={styles.authFooterSocials}>
          <Image
            src="/twitter1.svg"
            alt="Twitter Symbol"
            width={24}
            height={20}
            className={styles.mainImg}
          />
          <Image
            src="/linkedIn1.svg"
            alt="Linkedin Symbol"
            width={26}
            height={24}
            className={styles.mainImg}
          />
          <Image
            src="/facebook.svg"
            alt="Facebook Symbol"
            width={26}
            height={24}
            className={styles.mainImg}
          />
          <Image
            src="/instagram.svg"
            alt="Instagram symbol"
            width={26}
            height={24}
            className={styles.mainImg}
          />
        </div>
      </div>
      <div className={styles.authFooterChat}>
        <Image
          src="/chat.svg"
          alt=""
          width={70}
          height={70}
          className={styles.mainImg}
        />
      </div>
    </footer>
  );
}
