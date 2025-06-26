"use client";

import styles from "./styles.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="/integrations">Integration</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="">Careers</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy</a></li>
          <li><a href="">Terms</a></li>
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
