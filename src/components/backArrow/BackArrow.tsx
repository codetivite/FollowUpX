"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./BackArrow.module.css"; // You can create a separate style or reuse

export default function BackArrow() {
  const router = useRouter();

  return (
    <Image
      src="/arrow_back.svg"
      alt="Go Back"
      width={24}
      height={24}
      className={styles.arrowBack}
      onClick={() => router.back()}
    />
  );
}
