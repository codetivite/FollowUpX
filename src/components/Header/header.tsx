"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { getCookie } from 'cookies-next';
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setDarkMode(savedMode ? JSON.parse(savedMode) : systemPrefersDark);
  }, []);

  // Apply dark mode class to document
  useEffect(() => {
    // Read from cookie first, then fallback to system preference
    const savedTheme = getCookie('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(savedTheme === 'dark' || (!savedTheme && systemDark));
  }, []);

  // Save dark mode preference to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <header className={styles.header}>
      {/* Top Bar - Logo + Utilities */}
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="" />
        </div>

        <div className={styles.utilities}>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={styles.darkModeToggle}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
          <select className={styles.languageSelector}>
            <option>EN</option>
            <option>FR</option>
          </select>
          <div className={styles.authLinks}>
            <a href="/login">Login</a>
            <span>|</span>
            <a href="/signup">Register</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={styles.nav}>

      <nav className={styles.mainNav}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact_us">Contact</a>
      </nav>

      {/* Mobile Menu (optional) */}
      <button
        className={styles.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        ☰
      </button>

      {/* Mobile Menu - Only shows when isMenuOpen is true */}
      {isMenuOpen && (
        <div className={styles.mobileNav}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      )}
      </div>
    </header>
  );
}
