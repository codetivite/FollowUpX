"use client"; // Required for interactivity

import React, { useState } from "react";
import styles from "../styles.module.css";
import Link from "next/link";
import AppImage from "@components/components/AppImage/AppImagee";
import InputField from "@components/components/Form/InputField";
import CheckboxField from "@components/components/Form/CheckboxField";
import { useRouter } from "next/navigation";
import axios from "axios";
import { showCustomToast } from "@components/components/ui/CustomToast";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUpPage() {
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    if (!agree) newErrors.agree = "You must agree to continue";
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Check password rules individually
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[^A-Za-z\d]/.test(password);
    const hasMinLength = password.length >= 8;

    if (password && !hasUpperCase) {
      showCustomToast(
        "Signup failed. Please try again: your password must include at least one uppercase letter.",
        "error"
      );
      return;
    }
    if (password && !hasLowerCase) {
      showCustomToast(
        "Signup failed. Please try again: your password must include at least one lowercase letter.",
        "error"
      );
      return;
    }
    if (password && !hasNumber) {
      showCustomToast(
        "Signup failed. Please try again: your password must include at least one number.",
        "error"
      );
      return;
    }
    if (password && !hasSpecialChar) {
      showCustomToast(
        "Signup failed. Please try again: your password must include at least one special character.",
        "error"
      );
      return;
    }
    if (password && !hasMinLength) {
      showCustomToast(
        "Signup failed. Please try again: your password must be at least 8 characters long.",
        "error"
      );
      return;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Auto-capitalize names
    const formattedFirstName =
      firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    const formattedLastName =
      lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/register`,
        {
          first_name: formattedFirstName,
          last_name: formattedLastName,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        showCustomToast(
          "Account created successfully. Please verify your email.",
          "success"
        );
        router.push("/auth/login");
      } else {
        showCustomToast("Signup failed. Please try again.", "error");
      }
    } catch (error: unknown) {
      let msg = "An unexpected error occurred.";
      if (axios.isAxiosError(error) && error.response) {
        msg =
          error.response.data?.error ||
          error.response.data?.details ||
          "An unexpected error occurred.";
      }
      showCustomToast(msg, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    firstName && lastName && email && password && confirmPassword;

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginSection1}>
          <div className={styles.loginHeader}>
            <h2>Get Started Now</h2>
          </div>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formFields}>
              <InputField
                type="text"
                name="firstName"
                label="First Name"
                placeholder="Enter your first name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={errors.firstName}
              />

              <InputField
                type="text"
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={errors.lastName}
              />

              <InputField
                type="email"
                name="email"
                label="Email Address"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
              />

              {/* Password Field */}
              <div className={styles.passwordWrapper}>
                <InputField
                  type={showPassword ? "text" : "password"}
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={errors.password}
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Confirm Password */}
              <div className={styles.passwordWrapper}>
                <InputField
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  error={errors.confirmPassword}
                />
                <button
                  type="button"
                  className={styles.eyeButton}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className={styles.checkboxContainer}>
              <CheckboxField
                name="agree"
                label="I agree to the terms & policy"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                error={errors.agree}
              />
            </div>
            <button
              type="submit"
              className={styles.loginButton}
              disabled={!isFormValid || isLoading}
            >
              {isLoading ? "Signing up..." : "Sign Up"}
            </button>
          </form>
          <div className={styles.registerLinks}>
            <div className={styles.socialButtons}>
              <button onClick={() => console.log("Google sign-in clicked")}>
                <AppImage
                  src="/googgle.svg"
                  alt="Google logo"
                  width={20}
                  height={20}
                />
                Sign in with Google
              </button>
              <button onClick={() => console.log("Microsoft sign-in clicked")}>
                <AppImage
                  src="/microsoft.svg"
                  alt="Microsoft logo"
                  width={20}
                  height={20}
                />
                Sign in with Microsoft
              </button>
            </div>
            <p>
              Have an account?{" "}
              <Link href="/auth/login" className={styles.registerLink}>
                Sign In
              </Link>
            </p>
          </div>
        </div>
        <div className={styles.loginSection2}>
          <AppImage
            src="/auth_image.svg"
            alt="Login illustration"
            width={300}
            height={300}
            className={styles.authImage}
          />
        </div>
      </div>
    </>
  );
}
