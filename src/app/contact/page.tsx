"use client"; // Required for interactivity

import styles from "./styles.module.css";

export default function ContactUs() {
  return (
    <>
      <div className={styles.contact}>
        <h1>Contact Us</h1>
        <div >
          <form action="" className={styles.contact_form}>
            <div className={styles.name}>
              <div className={styles.firstName}>
                <label htmlFor="first_name">First name</label>
                <input 
                type="text"
                placeholder="Enter your first name" 
                required
                />
              </div>
              <div className={styles.lastName}>
                <label htmlFor="last_name">Last name</label>
                <input 
                type="text" 
                placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className={styles.email}>
              <label htmlFor="email">Email Address</label>
              <input 
              type="email" 
              placeholder="Enter your email address"
              />
            </div>
            <div className={styles.message}>
              <label htmlFor="message">Your message</label>
              <textarea 
              name="message" 
              id=""
              placeholder="Enter your question or message">
              </textarea>
            </div>
            <button type="submit" className={styles.submit}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}