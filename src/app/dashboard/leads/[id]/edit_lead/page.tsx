"use client";

import React from "react";
import { useState } from "react";
import InputField from "@components/components/Form/InputField";
import BackArrow from "@components/components/BackArrow/BackArrow";
import styles from "@components/styles/FormStyles.module.css";

export default function AddLeads() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "new",
    creationDate: "",
    note: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate() {
    const validationErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (!formData.email.includes("@")) validationErrors.email = "Valid email is required.";
    if (!formData.phone.trim()) validationErrors.phone = "Phone is required.";
    if (!formData.status) validationErrors.status = "Status is required.";
    return validationErrors;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("Lead data submitted:", formData);
    // You can add API call here
  }

  function handleCancel() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      status: "new",
      creationDate: "",
      note: "",
    });
    setErrors({});
  }

  return (
    <>
    <div className={styles.editNewEvent}>
      <div className={styles.editNewEventHeader}>
        <BackArrow />
        <h1>Edit Lead</h1>
      </div>


      <div className={styles.addEventDetails}>
        <h2>Lead Details</h2>
        <form onSubmit={handleSubmit} className={styles.EventForm}>
          <div className={styles.EventFormTab}>
            <InputField
              label="Lead Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
          </div>
          <div className={styles.EventFormTab}>
            <InputField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
          </div>
          <div className={styles.EventFormTab}>
            <InputField
              label="Number"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
            />
          </div>
          <div className={styles.EventFormTab}>
            <InputField
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              error={errors.status}
            />
          </div>
          <div className={styles.EventFormTab}>
            <InputField
              label="Creation Date"
              name="creationDate"
              type="date"
              value={formData.creationDate}
              onChange={handleChange}
            />
          </div>
          <div className={styles.EventFormTab}>
            <InputField
              label="Company"
              name="note"
              value={formData.note}
              onChange={handleChange}
            />
          </div>
          <div className={styles.EventFormButton}>
            <button
              type="button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
