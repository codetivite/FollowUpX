"use client";

import styles from "./styles.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <li>Features</li>
          <li>Pricing</li>
          <li>Integration</li>
          <li>About</li>
          <li>Careers</li>
          <li>Contact</li>
          <li>Privacy</li>
          <li>Terms</li>
        </div>
        <div className={styles.footerLogo}>
          <Image 
            src="/linkedin.svg" 
            alt="Linkedin" 
            width={30} 
            height={30} 
            className="icons"
          />
          <Image
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
