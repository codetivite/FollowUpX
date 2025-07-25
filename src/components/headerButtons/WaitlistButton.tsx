"use client";
// import Link from "next/link";
import styles from "../../styles/common.module.css";


interface Props {
  variant?: "primary" | "secondary" | "small"; // you can define more
  isLive?: boolean; // whether to show "Join Waitlist" or "Signup"
  onClick?: () => void;
}

export default function WaitlistButton({ variant = "primary", isLive = false, onClick }: Props) {

  // const handleClick = () => {
  //   const target = isLive ? "/signup" : "/waitlist";
  //   router.push(target);
  // };

  return (
    <button type="button" onClick={onClick} className={styles[variant]}>
      {isLive ? "Sign Up" : "Join Waitlist"}
    </button>
  );
}
