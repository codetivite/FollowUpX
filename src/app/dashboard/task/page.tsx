"use client";
import { useState } from "react";
import InputField from "@components/components/Form/InputField";
import TextAreaField from "@components/components/Form/TestAreaField";
import styles from "@components/styles/FormStyles.module.css";

export default function AddNewTask() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    time: "",
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
    if (!formData.description)validationErrors.description = "Description is required.";
    if (!formData.startDate.trim()) validationErrors.startDate = "Start Date is required.";
    if (!formData.time) validationErrors.time = "Time is required.";
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
      description: "",
      startDate: "",
      time: "",
    });
    setErrors({});
  }

  return (
    <div className={styles.editNewEvent}>
      <div className={styles.editNewEventHeader}>
        <h1>Add New Task</h1>
      </div>

      <div className={styles.addEventDetails}>
        <h2>Task Details</h2>
        <form onSubmit={handleSubmit} className={styles.EventForm}>
          <div className={styles.EventFormTab}>
            <InputField
              label="Task Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
          </div>

          <div className={styles.EventFormTab}>
            <TextAreaField
              label="Task Description"
              name="description"
              placeholder="Provide a brief description of the task"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className={styles.EventFormTab}>
            <InputField
              label="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
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
