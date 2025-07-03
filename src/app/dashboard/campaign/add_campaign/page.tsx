"use client";

import React from "react";
import { useState } from "react";
import styles from "@components/styles/FormStyles.module.css";
import InputField from "@components/components/Form/InputField";
import SelectField from "@components/components/Form/SelectField";
import TextAreaField from "@components/components/Form/TestAreaField";

export default function AddCampaign() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    targetAudience: "all_leads",
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
    if (!formData.description.trim()) validationErrors.description = "Description is required.";
    if (!formData.startDate) validationErrors.startDate = "Start Date is required.";
    if (!formData.endDate) validationErrors.endDate = "End Date is required.";
    if (!formData.targetAudience) validationErrors.targetAudience = "Target Audience is required.";
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
    console.log("Campaign data submitted:", formData);
    // You can add API call here
  }

  function handleCancel() {
    setFormData({
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      targetAudience: "all_leads",
      note: "",
    });
    setErrors({});
  }

  return (
    <>
      <div className={styles.editNewEvent}>
        <div className={styles.editNewEventHeader}>
          <h1>Add New Campaign</h1>
        </div>

        <div className={styles.addEventDetails}>
          <h2>Campaign Details</h2>
          <form onSubmit={handleSubmit} className={styles.EventForm}>
            <div className={styles.EventFormTab}>
              <InputField
                label="Campaign Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
            </div>

            <div className={styles.EventFormTab}>
              <TextAreaField
                label="Description"
                name="description"
                value={formData.description || ""}
                onChange={handleChange}
                error={errors.description}
              />
            </div>

            <div className={styles.EventFormTab}>
              <InputField
                label="Start Date"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                error={errors.startDate}
              />
            </div>

            <div className={styles.EventFormTab}>
              <InputField
                label="End Date"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                error={errors.endDate}
              />
            </div>

            <div className={styles.EventFormTab}>
              <SelectField
                label="Target Audience"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleChange}
                options={[
                  { value: "all_leads", label: "All Leads" },
                  { value: "contacted", label: "Contacted" },
                  { value: "followup_scheduled", label: "Follow-Up Scheduled" },
                ]}
                error={errors.targetAudience}
              />
            </div>

            <div className={styles.EventFormTab}>
              <TextAreaField
                label="Note / Follow-Up Suggestion"
                name="note"
                value={formData.note || ""}
                onChange={handleChange}
                error={errors.note}
              />
            </div>
            <div className={styles.EventFormButton}>
              <button type="button" onClick={handleCancel}>
                Cancel
              </button>
              <button type="submit">Save Campaign</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
