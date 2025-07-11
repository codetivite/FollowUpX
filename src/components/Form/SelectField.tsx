"use client";

import React from "react";
import styles from "./styles.module.css";

type Option = { value: string; label: string };

type Props = {
  label: string;
  name: string;
  value: string;
    placeholder?: string;
  options: Option[];
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
};

export default function SelectField({
  label,
  name,
  value,
  placeholder = "",
  options,
  onChange,
  error,
  required,
}: Props) {
  return (
    <div className={styles.formGroup}>
      <label>{label}</label>
      <select name={name} value={value} onChange={onChange} required={required} className={styles.formSelect}>
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
// This component is a reusable select field for forms.
// It accepts props for label, name, value, options (array of objects with value and