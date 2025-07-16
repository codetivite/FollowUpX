"use client"; // Required for interactivity

import React, { useState } from "react";
import styles from "../styles.module.css";
import Link from "next/link";
import AppImage from "@components/components/AppImage/AppImagee";
import InputField from "@components/components/Form/InputField";
import CheckboxField from "@components/components/Form/CheckboxField";
import { useRouter } from "next/navigation";
import { showCustomToast } from "@components/components/ui/CustomToast";

export default function SignUpPage() {
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
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

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // You could show a toast here
    showCustomToast("Account created successfully", "success");

    // Navigate to login
    router.push("/auth/login");
  };

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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFirstName(e.target.value)
                }
              />

              <InputField
                type="text"
                name="lastName"
                label="Last Name"
                placeholder="Enter your last name"
                required
                value={lastName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
              />

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

              <InputField
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Re-enter your password"
                required
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setConfirmPassword(e.target.value)
                }
              />
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
            <button type="submit" className={styles.loginButton}>
              Sign Up
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
