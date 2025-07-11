"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import Logo from "@components/components/logo/Logo";
import React from "react";
import AppImage from "@components/components/AppImage/AppImagee";

import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FiBell } from "react-icons/fi";

export default function DashboardHeader({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  return (
    <header className={styles.header}>
              <div className={styles.logoWrapper}>
          <Logo />
        </div>
      {/* Show menu button only on small screens */}
      <button className={styles.menuBtn} onClick={onMenuClick}>
        <FaBars />
      </button>
      {/*header content */}
      <div className={styles.headerSection}>
        <div className={styles.searchBar}>
          <div className={styles.searchIcon}>
            <FiSearch />
          </div>
          <input type="text" placeholder="Search...." className={styles.search} />
        </div>
        <div className={styles.userProfile}>
          <div className={styles.notification}>
            <FiBell />
          </div>
          <div className={styles.profile}>
            <AppImage
              src="/profile_photo.svg"
              alt="User profile"
              width={50}
              height={50}
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
