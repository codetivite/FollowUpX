"use client";
import React, { useRef, useState } from "react";
import styles from "./styles.module.css";
import { FaChevronDown } from "react-icons/fa6";

const faqData = [
  {
    question: "What is FollowUpX?",
    answer:
      "FollowUpX is an AI-powered assistant that automates and personalizes follow-up emails to leads, ensuring timely and relevant communication without manual effort.",
  },
  {
    question: "Can I customize the follow-up messages?",
    answer:
      "Our AI analyzes the tone of your emails and suggests personalized follow-up messages that resonate with your recipients.",
  },
  {
    question: "Is FollowUpX free to try?",
    answer:
      "Yes, FollowUpX allows you to connect multiple email accounts for seamless management of all your communications.",
  },
  {
    question: "Does FollowUpX integrate with my CRM?",
    answer:
      "Yes, we offer a free trial with limited features. You can upgrade to access premium features anytime.",
  },
  {
    question: "How does FollowUpX track replies?",
    answer:
      "Yes, we offer a free trial with limited features. You can upgrade to access premium features anytime.",
  },
  {
    question: "How secure is my data with FollowUpX?",
    answer:
      "Yes, we offer a free trial with limited features. You can upgrade to access premium features anytime.",
  },
  {
    question: "What kind of support does FollowUpX offer?",
    answer:
      "Yes, we offer a free trial with limited features. You can upgrade to access premium features anytime.",
  },
];

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
