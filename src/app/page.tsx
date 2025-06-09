"use client"; // Required for interactivity

import React from "react";
import Image from "next/image";
import Link from "next/link";
import commonStyles from "@components/app/styles/common.module.css";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    console.log("Get Started clicked");
    router.push("/signup");
  };

  const handleWatchDemo = () => {
    console.log("Watch Demo clicked - No video linked yet.");
    // Future: open modal or show demo tooltip here
  };

  const handleRegister = () => {
    console.log("Register clicked");
    router.push("/signup");
  };

  // const handleLogin = () => {
  //   router.push("/login");
  // };

  return (
    <div className={styles.LandingMain}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <Image src="/logo.svg" alt="Logo" width={100} height={40} />
        </div>
        <Image
          src="/landing.svg"
          alt="welcome_image"
          width={560}
          height={539}
          className={styles.mainImg}
        />
        <div className={styles.mainText}>
          <h1 className={styles.mainTitle}>NEVER MISS A FOLLOW-UP AGAIN</h1>
          <h2>Let's Get started</h2>
          <p>
            Our intelligent follow-up assistant automatically tracks customer
            interactions, sends timely reminders, and crafts personalized
            messages—so you can focus on closing deals instead of chasing them.
          </p>
          <p>Let AI handle the follow-up—so you don’t have to.</p>

          <div className={styles.genBtn}>
            <button onClick={handleGetStarted} className={commonStyles.button}>
              <span className={commonStyles.btn}>Get Started</span>
            </button>

            <button onClick={handleWatchDemo} className={commonStyles.button}>
              <span className={commonStyles.btn}>Watch Demo</span>
            </button>
          </div>

          <button onClick={handleRegister} className={`${commonStyles.button} ${styles.button1}`}>
            <span className={styles.btn}>Register</span>
          </button>

          <p>
            Already have an account?{" "}
            <Link href="/login" className={styles.link1}>
              Login
            </Link>
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
