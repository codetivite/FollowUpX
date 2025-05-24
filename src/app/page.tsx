'use client'; // Required for interactivity

import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.LandingMain}>
      <div className={styles.main}>
      <div className={styles.logo}>
        <img src="/logo.svg" alt=""  />
      </div>
        <img src="/landing.svg" alt="" className={styles.mainImg} />
        <div className={styles.mainText}>
          <h1 className={styles.mainTitle}>
            NEVER MISS A FOLLOW-UP AGAIN
          </h1>
          <h2>Let's Get started</h2>
          <p>
            Our intelligent follow-up assistant automatically tracks customer
            interactions, sends timely reminders, and crafts personalized
            messages—so you can focus on closing deals instead of chasing them.
          </p>
          <p>Let AI handle the follow-up—so you don’t have to.</p>
          <div className={styles.genBtn}>
            <Link href="/signup" className={styles.button}>
              <span className={styles.btn}>Get Started</span>
            </Link>

            <Link href="/signup" className={styles.button}>
              <span className={styles.btn}>Watch Demo</span>
            </Link>
          </div>

          <Link href="/signup" className={styles.button1}>
            <span className={styles.btn}>Register</span>
          </Link>

          <p>
            Already have an account? <Link href="/login" className={styles.link1}>Login</Link>
          </p>
        </div>
      </div>
      <div className={styles.landingQuote}>
        <div className={styles.quote}>
          <h3>SMART FOLLOW-UP</h3>
          <p>Detects unanswered emails and auto suggest follow-ups.</p>
        </div>
        <div className={styles.quote}>
          <h3>Multi-Channel</h3>
          <p>Works with Gmail, Whatsapp.</p>
        </div>
        <div className={styles.quote}>
          <h3>Customizeable Sequence</h3>
          <p>Make adjustment for user preference anytime.</p>
        </div>
        <div className={styles.quote}>
          <h3>Who is this for?</h3>
          <p>
            Anyone who needs to manage and maintain ongoing communication with
            leads.
          </p>
        </div>
      </div>
    </div>
  );
}
