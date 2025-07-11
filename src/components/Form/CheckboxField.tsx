"use client";

import React from "react";
import styles from "./styles.module.css";

interface CheckboxFieldProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
    required?: boolean;
}

export default function CheckboxField({
  name,
  label,
  checked,
  onChange,
  required,
  error,
}: CheckboxFieldProps) {
  return (
    <div className={styles.checkboxWrapper}>
      <label className={styles.label}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className={styles.input}
          required={required}
        />
        {label}
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
