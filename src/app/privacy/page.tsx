"use client"; // Required for interactivity

import styles from "./styles.module.css";

export default function PrivacyPolicy() {
  return (
    <>
      <div className={styles.privacyContainer}>
        <div className={styles.policy1}>
          <h1>Privacy Policy</h1>
          <p>
            We care about your privacy and are committed to protecting your
            personal data. This Privacy Policy explains how we collect, use, and
            safeguard your information when you use FollowUpX.
          </p>
        </div>
        <div className={styles.policies}>
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, such as when
            you create an account or communicate with us. We also collect
            information automatically as you use our services.
          </p>
        </div>
        <div className={styles.policies}>
          <h2>How We Use Your Information</h2>
          <p>
            We use your information to provide maintain, and improve our
            services to communicate with you and to personalize your experience
            with FollowUpX.
          </p>
        </div>
        <div className={styles.policies}>
          <h2>Data Sharing and Disclosure</h2>
          <p>
            We do not share your personal information with third parties, except
            as necessary to provide our services required by a user.
          </p>
        </div>
        <div className={styles.policies}>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access and use.
          </p>
        </div>
        <div className={styles.policies}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us!
          </p>
        </div>
      </div>
    </>
  );
}
