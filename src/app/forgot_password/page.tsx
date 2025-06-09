"use client"; // Required for interactivity

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import commonStyles from "@components/app/styles/common.module.css";
import styles from "./styles.module.css";
import BackArrow from "@components/components/backArrow/BackArrow";
// import Link from "next/link";

export default function ForgotPassword() {
  const router = useRouter();

  // this is the data that will be sent to the backend
  const [user, setUser] = React.useState({
    email: "",
    code: "",
  });

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Send code to:", user.email);
    // TODO: Trigger code sending backend call
  };

  const handleCodeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Verify code:", user.code);
    // TODO: Verify code before redirecting
    router.push("/create_password");
  };

  return (
    <div className={styles.forgot_password}>
      <BackArrow />
      <div className={styles.forgot_section}>
        <Image
          src="/padlock.svg"
          alt="Padlock Icon"
          width={300}
          height={300}
          className={styles.padlock}
        />
        <div className={styles.forgot_text}>
          <h3>Forgot your Password</h3>
          <p>
            Enter your email and we will send you a code to reset your password
          </p>
        </div>
        <form action="" className={styles.forgot_email} onSubmit={handleEmailSubmit}>
          <label htmlFor="email">Enter Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className={styles.formText}
          />
          <button className={commonStyles.button} type="submit">
            <span>Get the 4 digit code</span>
          </button>
        </form>
        <form action="" className={styles.enter_code} onSubmit={handleCodeSubmit}>
          <label htmlFor="code">Enter Verification code</label>
          <input
            id="code"
            type="text"
            placeholder="Code"
            value={user.code}
            onChange={(e) => setUser({ ...user, code: e.target.value })}
            className={styles.formText}
          />
          <button type="submit" className={commonStyles.button}>
            <span>Continue</span>
          </button>
        </form>
      </div>
    </div>
  );
}
