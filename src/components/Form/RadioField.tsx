"use client";

import React from "react";
import styles from "./styles.module.css";

type Option = { value: string; label: string };

type Props = {
  label: string;
  name: string;
  value: string;
  options: Option[];
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RadioField({
  label,
  name,
  value,
  options,
  onChange,
  error,
}: Props) {
  return (
    <div className={styles.formGroup1}>
      <label>{label}</label>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {options.map((o) => (
          <label key={o.value} style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={value === o.value}
              onChange={onChange}
            />
            {o.label}
          </label>
        ))}
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
// This component is a reusable radio button field for forms.
// It accepts props for label, name, value, options (array of objects with value and