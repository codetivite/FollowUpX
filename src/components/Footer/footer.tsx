"use client";

import styles from "./styles.module.css";
import Link from "next/link";
import AppImage from "@components/components/AppImage/AppImagee";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <li><Link href="/#features">Features</Link></li>
          <li><Link href="/#pricing">Pricing</Link></li>
          <li><Link href="/integrations">Integration</Link></li>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="">Careers</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/privacy">Privacy</Link></li>
          <li><Link href="">Terms</Link></li>
        </div>
        <div className={styles.footerLogo}>
          <AppImage
            src="/linkedin.svg"
            alt="Linkedin"
            width={30}
            height={30}
            className="icons"
          />
          <AppImage
            src="/twitter.svg"
            alt="twitter"
            width={30}
            height={30}
            className={styles.icons}
          />
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} FollowUpX</p>
        </div>
      </div>
      
    </footer>
  );
}
