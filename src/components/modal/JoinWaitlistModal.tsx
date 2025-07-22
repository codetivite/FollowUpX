"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import countryCodes from "@components/data/countryCodes.json";
import { showCustomToast } from "@components/components/ui/CustomToast";

export default function JoinWaitlistModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [countryCode, setCountryCode] = useState("+234");
  const [isLoading, setIsLoading] = useState(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const formatPhoneNumber = () => {
    const formatted = phoneNumber.startsWith("0")
      ? phoneNumber.substring(1)
      : phoneNumber;
    return `${countryCode}${formatted}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/aspirants/`,
        {
          first_name: firstName,
          email,
          phone_number: formatPhoneNumber(),
          referral_code: referralCode || undefined,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data && res.data.success !== false) {
        showCustomToast(
          `${firstName} has joined waitlist successfully`,
          "success"
        );
        onClose();
        setFirstName("");
        setEmail("");
        setPhone("");
        setReferralCode("");
      } else {
        showCustomToast("Something went wrong. Please try again.", "error");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        showCustomToast(
          `Submission failed. ${
            error.response?.data?.message ?? error.message
          }`,
          "error"
        );
      } else {
        showCustomToast("Submission failed. Something went wrong.", "error");
      }
    }
  };

  const isFormValid = firstName && email && phoneNumber;

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        <h2>Join the Waitlist</h2>
        <p>Be among the first to experience FollowUpX when we launch</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.phoneInputGroup}>
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              {countryCodes.map((country) => (
                <option key={country.dial_code} value={country.dial_code}>
                  {country.name} ({country.dial_code})
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Enter your Whatsapp number"
              required
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Referral Code (optional)"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
          />
          <p>
            We respect your privacy. Your email will only be used for product
            updates.
          </p>
          <button type="submit" disabled={!isFormValid || isLoading}>
            {isLoading ? "Submitting..." : "Join Waitlist"}
          </button>
        </form>
      </div>
    </div>
  );
}
