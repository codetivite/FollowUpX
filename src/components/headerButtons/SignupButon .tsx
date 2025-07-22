"use client";

import { useRouter } from "next/navigation";
import styles from "../../styles/common.module.css";

export default function SignupButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/signUp");
  };

  return (
    <button onClick={handleClick} className={styles.primaryButton}>
      Get Started
    </button>
  );
}
