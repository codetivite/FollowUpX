"use client";

import styles from "./styles.module.css";
import { useState } from "react";
import React from "react";
import { mockLeads } from "@components/mock/leads";
import { notFound } from "next/navigation";

export default function ScheduleFollowUps({
  params,
}: {
  params: { id: string };
}) {
  const leadId = parseInt(params.id, 10);
  const lead = mockLeads.find((l) => l.id === leadId);

  if (!lead) {
    notFound();
  }

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    type: "",
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
    if (!formData.date.trim()) validationErrors.date = "Date is required.";
    if (!formData.time.trim()) validationErrors.time = "Time is required.";
    if (!formData.type.trim()) validationErrors.type = "Type is required.";
    if (!formData.note.trim()) validationErrors.note = "Note is required.";
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
      date: "",
      time: "",
      type: "",
      note: "",
    });
    setErrors({});
  }

  return (
    <>
      <div className={styles.addNewLead}>
        <div className={styles.addNewLeadHeader}>
          <h1>Schdule FollowUp For {lead.name}</h1>
        </div>

        <div className={styles.addLeadDetails}>
          <h2>Lead Details</h2>
          <form onSubmit={handleSubmit} className={styles.leadForm}>
            <div className={styles.leadFormTab}>
              <label> Date:</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>

            <div className={styles.leadFormTab}>
              <label>Time:</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.leadFormTab}>
              <label>Type:</label>
              <div>
                <input
                  type="radio"
                  name="type"
                  value="call"
                  checked={formData.type === "call"}
                  onChange={handleChange}
                  required
                />
                <p>Email</p>
              </div>
              <div>
                <input
                  type="radio"
                  name="type"
                  value="call"
                  checked={formData.type === "call"}
                  onChange={handleChange}
                  required
                />
                <p>Whatsapp</p>
              </div>
            </div>

            <div className={styles.leadFormTab}>
              <label>Note:</label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                rows={4}
              />
            </div>
            <div className={styles.leadFormButton}>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit">Schedule FollowUp</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
