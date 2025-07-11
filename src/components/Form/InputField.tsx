"use client";

import React from "react";
import styles from "./styles.module.css";

type Props = {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  type?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export default function InputField({
  label,
  name,
  value,
  placeholder,
  onChange,
  type = "text",
  error,
  required,
}: Props) {
  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} required={required} className={styles.formInput} />
      {error && <p style={{ color: "red", width: "100%" }}>{error}</p>}
    </div>
  );
}
// Usage example in a form component
