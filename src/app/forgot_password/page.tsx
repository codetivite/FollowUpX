"use client"; // Required for interactivity

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function forgot_password() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Goes to previous page in history
    // OR use router.push('/') to always go home
  };

    // this is the data that will be sent to the backend
    const [user, setUser] = React.useState({
      email: "",
      code: "",
    });

  return (
    <div className={styles.forgot_password}>
      <img
        src="/arrow_back.svg"
        alt=""
        className={styles.arrowBack}
        onClick={handleGoBack}
      />
      <div className={styles.forgot_section}>
        <img src="/padlock.svg" alt="" className={styles.padlock} />
        <div className={styles.forgot_text}>
          <h3>Forgot your Password</h3>
          <p>
            Enter your email and we will send you a code to reset your password
          </p>
        </div>
        <form action="" className={styles.forgot_email}>
          <label htmlFor="email">Enter Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
            className={styles.formText}
          />
          <button className={styles.button}>
            <span>Get the 4 digit code</span>
          </button>
        </form>
        <form action="" className={styles.enter_code}>
          <label htmlFor="code">Enter Verification code</label>
          <input
            id="code"
            type="number"
            placeholder="Code"
            value={user.code}
            onChange={(e) =>
              setUser({ ...user, code: e.target.value })
            }
            className={styles.formText}
          />
          <Link href="/create_password" className={styles.button}>
            <span>Continue</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
