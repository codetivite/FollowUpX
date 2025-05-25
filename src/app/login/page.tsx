'use client'; // Required for interactivity

import React, { useEffect } from "react";
import { useRouter } from 'next/navigation';
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();

  const handleGoBack = () => {
    router.back(); // Goes to previous page in history
    // OR use router.push('/') to always go home
  };

      // this is the data that will be sent to the backend
    const [user, setUser] = React.useState({
      email: "",
      password: "",

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
        <img src="/logo.svg" alt=""  />
      </div>
      <div className={styles.formPage}>
        <h1>Login</h1>
        <p className={styles.formSpan}>
          Welcome back! Please enter your credentials to access your account
        </p>
        <form action="" method="post">
          {/* email */}
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

          {/* password */}
          <input
            id="password"
            type="password"
            placeholder="Password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
            className={styles.formText}
          />

          <p className="">
            <Link href="/forgot_password" className={styles.link}>
              Forgot password?
            </Link>
          </p>

          <div className={styles.but}>
            <Link href="/dashboard" className={styles.button}>
              <span className={styles.btn}>Login</span>
            </Link>

            <p className={styles.p}>or</p>

            <Link href="" className={styles.button1}>
              <img src="/google.svg" alt="" />
              <span className={styles.btn}>Login with Google</span>
            </Link>
          </div>

          <p className={styles.p}>
            Don't have an account?{" "}
            <Link href="/signup" className={styles.link}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div>
        <img src="/login.svg" alt="" className={styles.img} />
      </div>
    </div>
  );
}
