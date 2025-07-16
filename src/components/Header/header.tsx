"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Logo from "../logo/Logo";
//import WaitlistButton from "../headerButtons/WaitlistButton";
//import LoginButton from "../headerButtons/LoginButton";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {
  onJoinClick?: () => void;
  variant?: "default" | "minimal";
};

//export default function Header({ onJoinClick, variant = "default" }: Props) {
export default function Header({ variant = "default" }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close mobile drawer on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Logo />
        {variant === "default" && (
          <div className={styles.navLinks}>
            {/* <li><Link href="">Products</Link></li> */}
            {/* <li><Link href="/#features">Features</Link></li> */}
            {/* <li><Link href="">Demo</Link></li> */}
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/#about">About</Link></li>
          </div>
        )}
      </div>

      {variant === "default" && (
        <>
          <div className={styles.headerButtons}>
            {/* <WaitlistButton onClick={onJoinClick} /> */}
            {/* <LoginButton /> */}
          </div>

          <button className={styles.menuBtn} onClick={() => setIsOpen(true)}>
            <FaBars />
          </button>

          {isOpen && (
            <div className={styles.mobileBackdrop}>
              <div
                className={`${styles.mobileDrawer} ${isOpen ? styles.open : ""}`}
                ref={drawerRef}
              >
                <button
                  className={styles.closeBtn}
                  onClick={() => setIsOpen(false)}
                >
                  <FaTimes />
                </button>
                <ul className={styles.drawerLinks}>
                  {/* <li><Link href="">Products</Link></li>
                  <li><Link href="/#features">Features</Link></li> */}
                  <li><Link href="/contact">Contact</Link></li>
                  <li><Link href="/#about">About</Link></li>
                  {/* <li><WaitlistButton onClick={onJoinClick} /></li> */}
                  {/* <li><LoginButton /></li> */}
                </ul>
              </div>
            </div>
          )}
        </>
      )}
    </header>
  );
}

