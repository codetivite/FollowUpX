"use client"; // Required for interactivity

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import commonStyles from "@components/app/styles/common.module.css";
import styles from "./styles.module.css";
import BackArrow from "@components/components/backArrow/BackArrow";
// import Link from "next/link";

export default function ContactPage() {
  const router = useRouter();

  // this is the data that will be sent to the backend
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  return (
    <div className={styles.contact_us}>
      <BackArrow />

      <div className={styles.contact_section}>
        <div className={styles.contact_form}>
          <div className={styles.contact_text}>
            <h3>Contact Us</h3>
            <p>
              We’d love to hear from you! Fill out the form below, and we’ll get
              back to you as soon as possible.
            </p>
          </div>
          <form action="" method="post">
            <div className={styles.contact_details}>
              {/* first_name */}
              <div>
                <label htmlFor="first_name">First Name</label>
                <input
                  id="first_name"
                  type="text"
                  placeholder="First Name"
                  value={user.firstName}
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                  className={styles.formText}
                />
              </div>

              {/* last_name */}
              <div>
                <label htmlFor="last_name">Last Name</label>
                <input
                  id="last_name"
                  type="text"
                  placeholder="Last Name"
                  value={user.lastName}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                  className={styles.formText}
                />
              </div>
            </div>

            <div className={styles.contact_details}>
              {/* email */}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  className={styles.formText}
                />
              </div>

              {/* phone */}
              <div>
                <label htmlFor="phone">Phone number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  className={styles.formText}
                />
              </div>
            </div>

            {/* contact message */}
            <div className={styles.contact}>
              <label htmlFor="message">What can we help you with?</label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                cols={30}
                rows={5}
                value={user.message}
                onChange={(e) => setUser({ ...user, message: e.target.value })}
                className={styles.contact_message}
              ></textarea>
            </div>

            {/* button */}
            <button className={commonStyles.button}
            type="submit">
              <span>Submit</span>
            </button>
          </form>
        </div>
        <div>
          <Image
            src="/contact.svg"
            alt="Contact Illustration"
            width={700}
            height={400}
            className={styles.contact_img}
          />
        </div>
      </div>
    </div>
  );
}
