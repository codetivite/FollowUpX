"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { FaChevronDown } from "react-icons/fa6";
import { faqData } from "@components/utils/constants";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
      <div className={styles.faqContainer}>
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleAnswer(index)}
          />
        ))}
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqHeader} onClick={onClick}>
        <h3>{question}</h3>
        <FaChevronDown
          className={`${styles.icon} ${isOpen ? styles.rotate : ""}`}
        />
      </div>
      <div
        ref={contentRef}
        className={styles.faqAnswer}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
}
