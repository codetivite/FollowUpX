"use client"; // Required for interactivity

import styles from "./styles.module.css";
import Image from "next/image";

export default function Integrations() {
  return (
    <>
      <div className={styles.IntegrationSection}>
        <div className={styles.IntegrationText}>
          <h1>Integrations</h1>
          <p>Connect your favorite tools with FollowUpX for a seamless workflow</p>
        </div>
        <div className={styles.IntegrationContainer}>
          <div className={styles.IntegrationMail}>
            <div className={styles.integrate}>
              <Image
                src="/gmail_symbol.svg"
                alt="Gmail symbol"
                width={26}
                height={24}
                className={styles.mainImg}
                />
                <h2>Email</h2>
              </div>
              <p>Sync follow-up tasks with your Gmail account</p>
          </div>
          <div className={styles.IntegrationMail}>
            <div className={styles.integrate}>
              <Image
                src="/whatsapp_symbol.svg"
                alt="Whatsapp symbol"
                width={26}
                height={24}
                className={styles.mainImg}
                />
                <h2>Whatsapp</h2>
              </div>
              <p>Sync follow-up tasks with your Whatsapp account</p>
          </div>
        </div>
      </div>
    </>
  );
}