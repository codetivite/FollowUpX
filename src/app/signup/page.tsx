"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import commonStyles from "@components/app/styles/common.module.css";
import styles from "./styles.module.css";
import Link from "next/link";
import BackArrow from "@components/components/backArrow/BackArrow";
import Logo from "@components/components/logo/Logo";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (user.password !== user.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/register`,
        {
          first_name: user.fullname,
          last_name: "", // You can split fullname if needed
          email: user.email,
          password: user.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registration successful:", res.data);
      alert("Registration successful!");
      router.push("/login");
    } catch (error: any) {
      console.error("Registration failed:", error.response?.data || error.message);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className={styles.formSection}>
      <BackArrow />
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.formPage}>
        <h1>Sign Up</h1>
        <p className={styles.formSpan}>
          Join us today! Fill in the details below to get started.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={user.fullname}
            onChange={(e) => setUser({ ...user, fullname: e.target.value })}
            className={styles.formText}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className={styles.formText}
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            className={styles.formText}
          />

          <div className={styles.formText}>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <Image src="/Eye.svg" alt="visible_eye" width={24} height={24} />
          </div>

          <div className={styles.formText}>
            <input
              type="password"
              placeholder="Confirm Password"
              value={user.confirm_password}
              onChange={(e) =>
                setUser({ ...user, confirm_password: e.target.value })
              }
              required
            />
            <Image src="/Eye.svg" alt="visible_eye" width={24} height={24} />
          </div>

          <p>
            By creating an account, you agree to our{" "}
            <Link href="/terms" className={styles.link}>
              Terms of Services
            </Link>{" "}
            and{" "}
            <Link href="/policy" className={styles.link}>
              Privacy Policy
            </Link>
          </p>

          <div className={styles.but}>
            <button type="submit" className={commonStyles.button}>
              <span className={commonStyles.btn}>Signup</span>
            </button>

            <p className={styles.p}>or</p>

            <button type="button" className={commonStyles.button1}>
              <Image src="/google.svg" alt="Google" width={30} height={30} />
              <span className={commonStyles.btn}>Signup with Google</span>
            </button>
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
        <Image src="/reg_image.svg" alt="Signup" width={650} height={650} />
      </div>
    </div>
  );
}
