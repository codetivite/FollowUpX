"use client"; // Required for interactivity

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function create_password() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Goes to previous page in history
    // OR use router.push('/') to always go home
  };

  return (
    <div className={styles.create_password}>
      <img
        src="/arrow_back.svg"
        alt=""
        className={styles.arrowBack}
        onClick={handleGoBack}
      />
      <div className={styles.create_section}>
        <img src="" alt="" />
        <div className={styles.create_text}>
          <h3>Create New Password</h3>
          <p>Please use a password that has not been used before.</p>
          <p>Must be 8 characters long.</p>
        </div>

          <form action="" className={styles.create_email}>
            {/* new password */}
            <label htmlFor="new_password">New Password</label>
            <input
              id="new_password"
              type="number"
              placeholder="New Password"
              value=""
              className={styles.formText}
            />

            {/* confirm new password */}
            <label htmlFor="password_confirmation">Confirm New Password</label>
            <input
              id="password_confirmation"
              type="number"
              placeholder="Confirm New Password"
              value=""
              className={styles.formText}
            />

            <button className={styles.button}>
              <span>Reset Password</span>
            </button>
          </form>

      </div>
    </div>
  );
}
