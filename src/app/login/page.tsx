"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import commonStyles from "@components/app/styles/common.module.css";
import styles from "./styles.module.css";
import BackArrow from "@components/components/backArrow/BackArrow";
import Logo from "@components/components/logo/Logo";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  // Temporary login handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate login success
    console.log("Login form submitted:", user);

    // Redirect to dashboard
    router.push("/dashboard");
  };

  return (
    <div className={styles.formSection}>
      <BackArrow />
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.formPage}>
        <h1>Login</h1>
        <p className={styles.formSpan}>
          Welcome back! Please enter your credentials to access your account
        </p>

        <form onSubmit={handleSubmit}>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className={styles.formText}
            required
          />

          <div className={styles.formText}>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Image
              src="/Eye.svg"
              alt="visible_eye"
              width={24}
              height={24}
              onClick={() => router.back()}
            />
          </div>

          <p>
            <Link href="/forgot_password" className={styles.link}>
              Forgot password?
            </Link>
          </p>

          <div className={styles.but}>
            {/* Submit instead of Link */}
            <button type="submit" className={commonStyles.button}>
              <span className={commonStyles.btn}>Login</span>
            </button>

            <p className={styles.p}>or</p>

            {/* Keep Google login link as placeholder */}
            <button type="button" className={commonStyles.button1}>
              <Image src="/google.svg" alt="" width={35} height={35} />
              <span className={commonStyles.btn}>Login with Google</span>
            </button>
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
        <Image
          src="/login.svg"
          alt="Login Illustration"
          width={650}
          height={650}
          className={styles.img}
        />
      </div>
    </div>
  );
}
