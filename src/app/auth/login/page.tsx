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

export default function LoginPage() {
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    if (!agree) newErrors.agree = "You must agree to continue";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        showCustomToast("Login successful!", "success");

        // Optionally store token or user data
        localStorage.setItem("token", response.data.token);

        // Redirect to dashboard
        router.push("/dashboard");
      } else {
        showCustomToast("Login failed. Please try again.", "error");
      }
    } catch (error: unknown) {
      console.error("Login error:", error);
      let message = "An unexpected error occurred";
      if (axios.isAxiosError(error) && error.response) {
        message =
          error.response.data?.msg ||
          error.response.data?.error ||
          "An unexpected error occurred";
      } else if (error instanceof Error) {
        message = error.message;
      }
      showCustomToast(`Login failed: ${message}`, "error");
      setIsLoading(false);
    }
  };

  const isFormValid = email && password;

  return (
    <>
      <div className={styles.loginContainer}>
        <div className={styles.loginSection1}>
          <div className={styles.loginHeader}>
            <h2>Welcome Back!</h2>
            <p>Please enter your credentials to access your account.</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <div className={styles.formFields}>
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
              <div className={styles.passwordField}>
                <Link
                  href="/forgot-password"
                  className={styles.forgotPasswordLink}
                >
                  Forgot Password?
                </Link>
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
              </div>
            </div>
            <div className={styles.checkboxContainer}>
              <CheckboxField
                name="agree"
                label="I agree to the terms and conditions"
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
              {isLoading ? (
                <>
                  <span className={styles.spinner}></span> Logging in...
                </>
              ) : (
                "Login"
              )}
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
              Don&apos;t have an account?
              <Link href="/auth/signUp" className={styles.registerLink}>
                Sign Up
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
