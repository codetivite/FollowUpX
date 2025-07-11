"use client";
import React, { useState } from "react";
import styles from "./styles.module.css"; // Adjust naming if
import Modal from "@components/components/modal/ChangePasswordModal/ChangePasswordModal";
import InputField from "@components/components/Form/InputField";
import { showCustomToast } from "@components/components/ui/CustomToast";

export default function SecuritySettings() {
  const [factorAuthenticationEnabled, setFactorAuthenticationEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleSaveChanges = () => {
    // Example validation
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      showCustomToast("Please fill in all fields.", "error");
      setIsModalOpen(false);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      showCustomToast("New passwords do not match.", "error");
      setIsModalOpen(false);
      return;
    }

    // TODO: API call here to change password

    showCustomToast("Password changed successfully!", "success");
    setIsModalOpen(false);
  };

  return (
    <section className={styles.securitySection}>
      <h2 className={styles.title}>Security</h2>
      <div className={styles.securityList}>
        {/* Change Password */}
        <div className={styles.securityItem}>
          <div>
            <h2 className={styles.itemTitle}>Change your password</h2>
            <p className={styles.itemDescription}>
              Update your account password
            </p>
          </div>
          <button
            className={styles.passwordButton}
            onClick={() => setIsModalOpen(true)}
          >
            Change
          </button>
        </div>

        <div className={styles.divider} />

        {/* Two-factor authentication */}
        <div className={styles.securityItem}>
          <div>
            <h2 className={styles.itemTitle}>Two-factor authentication (2FA)</h2>
            <p className={styles.itemDescription}>
              Add an extra layer of security to your account
            </p>
          </div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={factorAuthenticationEnabled}
              onChange={() =>
                setFactorAuthenticationEnabled(!factorAuthenticationEnabled)
              }
            />
            <span className={styles.slider} />
          </label>
        </div>

        <div className={styles.divider} />

        {/* Delete Account */}
        <div className={styles.securityItem}>
          <div>
            <h2 className={styles.itemTitle}>Delete Account</h2>
            <p className={styles.itemDescription}>
              Permanently delete your account and all associated data. This
              action CANNOT be undone.
            </p>
          </div>
          <button className={styles.deleteButton}>Delete</button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Change Password</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveChanges();
          }}
          className={styles.form}
        >
          <div className={styles.formGroup}>
            <InputField
              label="Current Password"
              name="currentPassword"
              type="password"
              placeholder="current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <InputField
              label="New Password"
              name="newPassword"
              type="password"
              placeholder="new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className={styles.formGroup}>
            <InputField
              label="Confirm New Password"
              name="confirmNewPassword"
              type="password"
              placeholder="Confirm new password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.saveButton}>
            Save Changes
          </button>
        </form>
      </Modal>


    </section>
  );
}
