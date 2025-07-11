"use client";

import React from "react";
import { useState } from "react";
import styles from "@components/styles/FormStyles.module.css";
import InputField from "@components/components/Form/InputField";
import SelectField from "@components/components/Form/SelectField";
import languages from "@components/data/languages.json";
import NotificationPreferences from "@components/components/dashboard/NotificationPreference/NotificationPreference";
import Integrations from "@components/components/dashboard/IntegrationSetting/IntegrationSetting";
import SecuritySetting from "@components/components/dashboard/SecuritySetting/SecuritySetting";

export default function AddCampaign() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    timeZone: "",
    language: "",
    targetAudience: "all_leads",
    note: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedLanguage, setSelectedLanguage] = useState("");

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
    if (!formData.email.trim()) validationErrors.email = "Email is required.";
    if (!formData.language.trim())
      validationErrors.language = "Language is required.";
    if (!formData.timeZone)
      validationErrors.timeZone = "Time Zone is required.";
    if (!formData.targetAudience)
      validationErrors.targetAudience = "Target Audience is required.";
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
      email: "",
      timeZone: "",
      language: "",
      targetAudience: "all_leads",
      note: "",
    });
    setErrors({});
  }

  return (
    <>
      <div className={styles.editNewEvent}>
        <div className={styles.editNewEventHeader}>
          <h1>Settings</h1>
        </div>

        <div className={styles.addEventDetails}>
          <h2>General settings</h2>
          <div className={styles.EventForm}>
            <div className={styles.EventFormTab}>
              <InputField
                label="Your Name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                error={errors.name}
              />
            </div>

            <div className={styles.EventFormTab}>
              <InputField
                label="YourEmail"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <div className={styles.EventFormTab}>
              <InputField
                label="Time Zone"
                name="timeZone"
                type="text"
                placeholder="Enter your time zone"
                value={formData.timeZone}
                onChange={handleChange}
                error={errors.timeZone}
              />
            </div>

            <div className={styles.EventFormTab}>
              <SelectField
                label="Language"
                name="language"
                placeholder="Select a language"
                value={formData.language}
                onChange={handleChange}
                error={errors.language}
                options={[
                  { value: "", label: "Select a language" },
                  ...languages.map((language) => ({
                    value: language.code,
                    label: `${language.name} (${language.code})`
                  }))
                ]}
              />
            </div>
          </div>
        </div>

        <div className={styles.notificationPreferences}>
          <NotificationPreferences />
        </div>

        <div className={styles.integrationSetting}>
          <Integrations />
        </div>

        <div className={styles.securitySetting}>
          <SecuritySetting />
        </div>

        <div className={styles.EventFormButton} >
          <button onClick={handleCancel}>
            Cancel
          </button>
          <button onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
}
