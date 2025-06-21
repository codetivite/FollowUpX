"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "../../styles/common.module.css";

export default function LoginButton() {
    const router = useRouter();

  return (
    <button onClick={() => router.push('/login')} className={styles.signUpButton}>
      Sign In
    </button>
  );
}