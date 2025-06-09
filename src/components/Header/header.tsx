"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { getCookie } from "cookies-next";
import Logo from "../logo/Logo";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load and apply dark mode preference
  useEffect(() => {
    const savedTheme = getCookie("theme");
    const localPref = localStorage.getItem("darkMode");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const prefersDark = savedTheme
      ? savedTheme === "dark"
      : localPref
      ? JSON.parse(localPref)
      : systemPrefersDark;

    setDarkMode(prefersDark);
  }, []);

  // Apply dark class and persist preference
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.cookie = `theme=${darkMode ? "dark" : "light"}; path=/;`;
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={styles.header}>
      {/* Top Bar - Logo + Utilities */}
      <div className={styles.topBar}>
        <div className={styles.logo}>
        <Logo />
        </div>

        <div className={styles.utilities}>
          <button
            onClick={toggleDarkMode}
            className={styles.darkModeToggle}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? "☀️" : "🌙"}
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
          <a href="/about_us">About</a>
          <a href="/contact_us">Contact</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={styles.mobileNav}>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact_us">Contact</a>
          </div>
        )}
      </div>
    </header>
  );
}

