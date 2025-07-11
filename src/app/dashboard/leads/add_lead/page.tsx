"use client";
import { useState } from "react";
import InputField from "@components/components/Form/InputField";
import SelectField from "@components/components/Form/SelectField";
import TextAreaField from "@components/components/Form/TestAreaField";
import styles from "@components/styles/FormStyles.module.css";

export default function AddLead() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    status: "new",
    lastInteraction: "",
    note: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const validationErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) validationErrors.name = "Name is required.";
    if (!formData.email.includes("@"))
      validationErrors.email = "Valid email is required.";
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
  }

  function handleCancel() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      status: "new",
      lastInteraction: "",
      note: "",
    });
    setErrors({});
  }

  return (
    <div className={styles.editNewEvent}>
      <div className={styles.editNewEventHeader}>
        <h1>Add New Lead</h1>
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
            <SelectField
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                { value: "new", label: "New" },
                { value: "contacted", label: "Contacted" },
                { value: "followup_scheduled", label: "Follow-Up Scheduled" },
              ]}
              error={errors.status}
            />
          </div>

          <div className={styles.EventFormTab}>
            <InputField
              label="Last Interaction Date"
              name="lastInteraction"
              type="date"
              value={formData.lastInteraction}
              onChange={handleChange}
            />
          </div>

          <div className={styles.EventFormTab}>
            <TextAreaField
              label="Note / Follow-Up Suggestion"
              name="note"
              value={formData.note}
              onChange={handleChange}
            />
          </div>

          <div className={styles.EventFormButton}>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit">Save Lead</button>
          </div>
        </form>
      </div>
    </div>
  );
}
