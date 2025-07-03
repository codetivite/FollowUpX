"use client"; // Required for interactivity

import React, { useEffect, useState } from "react";
import styles from "../styles.module.css";
import Link from "next/link";
import AppImage from "@components/components/AppImage/AppImagee";
import InputField from "@components/components/Form/InputField";
import CheckboxField from "@components/components/Form/CheckboxField";
import { useRouter } from "next/navigation";
import axios from "axios";
import { showCustomToast } from "@components/components/ui/CustomToast";

export default function LoginPage() {
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};

    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    if (!agree) newErrors.agree = "You must agree to continue";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // You could show a toast here
    showCustomToast("Logged in successfully", "success");

    // Navigate to login
    router.push("/dashboard");
  };

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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <div className={styles.passwordField}>
                <Link
                  href="/forgot-password"
                  className={styles.forgotPasswordLink}
                >
                  Forgot Password?
                </Link>
                <InputField
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
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
            <button type="submit" className={styles.loginButton}>
              Login
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
              Don't have an account? <Link href="/auth/signUp" className={styles.registerLink}>Sign Up</Link>
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
