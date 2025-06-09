"use client"; // Required for interactivity

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import commonStyles from "@components/app/styles/common.module.css";
import styles from "./styles.module.css";
import BackArrow from "@components/components/backArrow/BackArrow";
// import Link from "next/link";

export default function CreatePassword() {
  const router = useRouter();

  // this is the data that will be sent to the backend
  const [user, setUser] = React.useState({
    new_password: "",
    new_password_confirmation: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup data:", user);
    router.push("/login"); // simulate success
  };

  return (
    <div className={styles.create_password}>
      <BackArrow />
      <div className={styles.create_section}>
        {/* <img src="null" alt="" /> */}
        <div className={styles.create_text}>
          <h3>Create New Password</h3>
          <p>Please use a password that has not been used before.</p>
          <p>Must be 8 characters long.</p>
        </div>

        <form action="" className={styles.create_email} onSubmit={handleSubmit}>
          {/* new password */}
          <div className={styles.joiners}>
            <label htmlFor="new_password">New Password</label>

            <div className={styles.formText}>
              <input
                type="password"
                placeholder="New Password"
                value={user.new_password}
                onChange={(e) =>
                  setUser({ ...user, new_password: e.target.value })
                }
              />
              <Image
                src="/Eye.svg"
                alt="visible_eye"
                width={24}
                height={24}
                onClick={() => router.back()}
              />
            </div>
          </div>

          {/* confirm new password */}
          <div className={styles.joiners}>
            <label htmlFor="new_password_confirmation">
              Confirm New Password
            </label>

            <div className={styles.formText}>
              <input
                type="password"
                placeholder="Confirm New Password"
                value={user.new_password_confirmation}
                onChange={(e) =>
                  setUser({
                    ...user,
                    new_password_confirmation: e.target.value,
                  })
                }
              />
              <Image
                src="/Eye.svg"
                alt="visible_eye"
                width={24}
                height={24}
                onClick={() => router.back()}
              />
            </div>
          </div>

          <button className={commonStyles.button} type="submit">
            <span>Reset Password</span>
          </button>
        </form>
      </div>
    </div>
  );
}
