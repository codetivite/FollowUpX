"use client";

import { useState } from "react";
import styles from "@components/styles/FormStyles.module.css";
import InputField from "@components/components/Form/InputField";
import SelectField from "@components/components/Form/SelectField";
import TextAreaField from "@components/components/Form/TestAreaField";

export default function AddEvent() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    time: "",
    targetAudience: "all_leads",
    location: "online_(zoom)",
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
    if (!formData.time) validationErrors.time = "Time is required.";
    if (!formData.location) validationErrors.location = "Location is required.";
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
    console.log("Event data submitted:", formData);
    // You can add API call here
  }

  function handleCancel() {
    setFormData({
      name: "",
      description: "",
      startDate: "",
      time: "",
      targetAudience: "all_leads",
      location: "online_(zoom)",
      note: "",
    });
    setErrors({});
  }

  return (
    <>

          <div className={styles.editNewEvent}>
        <div className={styles.editNewEventHeader}>
          <h1>Create New Event</h1>
        </div>

        <div className={styles.addEventDetails}>
          <h2>Event Details</h2>
          <form onSubmit={handleSubmit} className={styles.EventForm}>
            <div className={styles.EventFormTab}>
              <InputField
                label="Event Name"
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
                label="Time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                error={errors.time}
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
              <SelectField
                label="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                options={[
                  { value: "online_(zoom)", label: "Online (Zoom)" },
                  { value: "in_person", label: "In Person" },
                  { value: "phone", label: "Phone" },
                ]}
                error={errors.location}
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
              <button type="submit">Save Event</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
