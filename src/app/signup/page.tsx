"use client"; // Required for interactivity

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Goes to previous page in history
    // OR use router.push('/') to always go home
  };

  // this is the data that will be sent to the backend
  const [user, setUser] = React.useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  return (
    <div className={styles.formSection}>
      <img
        src="/arrow_back.svg"
        alt=""
        className={styles.arrowBack}
        onClick={handleGoBack}
      />
      <div className={styles.logo}>
        <img src="/logo.svg" alt="" />
      </div>
      <div className={styles.formPage}>
        <h1>Sign Up</h1>
        <p className={styles.formSpan}>
          Join us today! Fill in the details below to get started.
        </p>

        <form action="" method="post">
          {/* fullname */}
          <input
            id="fullname"
            type="text"
            placeholder="Full Name"
            value={user.fullname}
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
            className={styles.formText}
          />

          {/* email */}
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className={styles.formText}
          />

          {/* phone */}
          <input
            id="phone"
            type="text"
            placeholder="Phone Number"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            className={styles.formText}
          />

          {/* password */}
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className={styles.formText}
          />

          {/* confirm_password */}
          <input
            id="confirm_password"
            type="text"
            placeholder="Confirm password"
            value={user.confirm_password}
            onChange={(e) =>
              setUser({ ...user, confirm_password: e.target.value })
            }
            className={styles.formText}
          />

          <div className="">
            <p>
              By creating an account, you agree to our
              <Link href="/terms" className={styles.link}>
                Terms of Services
              </Link>
              and
              <Link href="/policy" className={styles.link}>
                Privacy policy
              </Link>
            </p>
          </div>

          <div className={styles.but}>
            <Link href="/login" className={styles.button}>
              <span className={styles.btn}>Signup</span>
            </Link>

            <p className={styles.p}>or</p>

            <Link href="" className={styles.button1}>
              <img src="/google.svg" alt="" />
              <span className={styles.btn}>Signup with Google</span>
            </Link>
          </div>

          <p className={styles.p}>
            Already have an account?{" "}
            <Link href="/login" className={styles.link}>
              Login
            </Link>
          </p>
        </form>
      </div>
      <div className={styles.img}>
        <img src="/signup.svg" alt="" />
      </div>
    </div>
  );
}
