"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.css";
import Logo from "../logo/Logo";
import WaitlistButton from "../headerButtons/WaitlistButton";
import LoginButton from "../headerButtons/LoginButton";
import { FaBars, FaTimes } from "react-icons/fa";

type Props = {
  onJoinClick: () => void;
};

export default function Header({ onJoinClick }: Props) {
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
        <div className={styles.navLinks}>
          <li>Products</li>
          <li>Features</li>
          <li>Demo</li>
          <li>About</li>
        </div>
      </div>
      <div className={styles.headerButtons}>
        <WaitlistButton onClick={onJoinClick} />
        <LoginButton />
      </div>

      {/* Mobile Menu Button */}
      <button className={styles.menuBtn} onClick={() => setIsOpen(true)}>
        <FaBars />
      </button>

      {/* Mobile Side Drawer */}
      {isOpen && (
        <div className={styles.mobileBackdrop}>
          <div
            className={`${styles.mobileDrawer} ${isOpen ? styles.open : ""}`}
            ref={drawerRef}
          >
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
            <ul className={styles.drawerLinks}>
              <li>Products</li>
              <li>Features</li>
              <li>Demo</li>
              <li>About</li>
              <li>
                <WaitlistButton onClick={onJoinClick} />
              </li>
              <li>
                <LoginButton />
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
