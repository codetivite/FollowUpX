"use client";

import React, { useState } from "react";
import styles from "@components/styles/FormStyles.module.css";
import { mockLeads } from "@components/mock/leads";
import InputField from "@components/components/Form/InputField";
import RadioField from "@components/components/Form/RadioField";
import TextAreaField from "@components/components/Form/TestAreaField";

export default function ScheduleFollowUps({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = React.use(params); // ✅ Use React.use() on the whole promise
  const id = resolvedParams.id;
  const leadId = parseInt(id, 10);
  const lead = mockLeads.find((l) => l.id === leadId);


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
    // Add API call here if needed
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
    <div className={styles.editNewEvent}>
      <div className={styles.editNewEventHeader}>
        <h1>Schedule Follow-Up for {lead?.name}</h1>
      </div>

      <div className={styles.addEventDetails}>
        <h2>Lead Details</h2>

        <form onSubmit={handleSubmit} className={styles.EventForm}>
          <div className={styles.EventFormTab}>
            <InputField
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              error={errors.date}
            />
          </div>

          <div className={styles.EventFormTab}>
            <InputField
              label="Time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              error={errors.time}
            />
          </div>

          <div className={styles.EventFormTab}>
            <RadioField
              name="type"
              label="Type"
              value={formData.type}
              options={[
                { value: "Email", label: "Email" },
                { value: "Whatsapp", label: "Whatsapp" },
              ]}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, type: e.target.value }))
              }
              error={errors.type}
            />
          </div>

          <div className={styles.EventFormTab}>
            <TextAreaField
              label="Note "
              name="note"
              placeholder="Add details about the FollowUp"
              value={formData.note}
              onChange={handleChange}
              error={errors.note}
            />
          </div>

          <div className={styles.EventFormButton}>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit">Save Follow-Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
