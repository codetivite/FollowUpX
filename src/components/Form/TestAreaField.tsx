"use client";

import React from "react";
import styles from "./styles.module.css";

type Props = {
  label: string;
  name: string;
  value: string;
    placeholder?: string;
    required?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextAreaField({
  label,
  name,
  value,
  placeholder = "",
  onChange,
  error,
  required,
}: Props) {
  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      <textarea name={name} value={value} onChange={onChange} rows={4} placeholder={placeholder} required={required} />
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
// This component is a reusable text area field for forms.
// It accepts props for label, name, value, error message, and an onChange handler