// app/leads/[id]/page.tsx
"use client";

import styles from "./styles.module.css";
import React from "react";
import Link from "next/link";
import { mockLeads } from "@components/mock/leads";
import AppImage from "@components/components/AppImage/AppImagee";

export default function LeadDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const leadId = parseInt(params.id, 10);
  const lead = mockLeads.find((l) => l.id === leadId);

  // Optional: prevent crash if lead not found
  if (!lead) {
    return <div className={styles.leadDetailsPage}>Lead not found</div>;
  }

  function handleDelete() {
    console.log(`Lead with ID ${leadId} deleted`);
  }

  return (
    <div className={styles.leadDetailsPage}>
      <div className={styles.leadDetailsHeader}>
        <h1>Leads Details</h1>
      </div>

      <div className={styles.leadDetailsContainer}>
        <div className={styles.leadDetails1}>
          <AppImage src="/leadImage.svg" alt="" height={150} width={150} />
          <h2>{lead.name}</h2>
        </div>

        <div className={styles.leadDetails2}>
          <h3>Contact Info</h3>
          <div className={styles.leadDetails2A}>
            <div>
              <p>Email:</p>
              <p>{lead.email}</p>
            </div>
            <div>
              <p>Phone Number:</p>
              <p>{lead.phone}</p>
            </div>
          </div>
        </div>

        <div className={styles.leadDetails3}>
          <h3>Overview</h3>
          <div className={styles.leadDetails4}>
            <p>Last Interaction:</p>
            <div>
              <p>Suggestion: {lead.followUpSuggestion}</p>
            </div>
          </div>
        </div>

        <div className={styles.leadDetails5}>
          <h3>Interaction History</h3>
          <div className={styles.leadDetails6}>
            <div>
              <p>Initial Enquiry about a product</p>
              <p>{lead.lastInteraction}</p>
            </div>
            <div>
              <p>Automated welcome email</p>
              <p>2022-10-16</p>
            </div>
            <div>
              <p>Manual followup email sent</p>
              <p>2022-10-16</p>
            </div>
            <div>
              <p>Scheduled followup email sent</p>
              <p>15-01-2025</p>
            </div>
          </div>
        </div>

        <div className={styles.leadDetails7}>
          <Link
            href={`/dashboard/leads/${lead.id}/edit_lead`}
            className={styles.button1}
          >
            Edit Lead
          </Link>
          <Link
            href={`/dashboard/leads/${lead.id}/schedule_followups`}
            className={styles.button2}
          >
            Scheduled Follow-Up
          </Link>
          <Link href="#" className={styles.button3}>
            Mark as Contacted
          </Link>
          <Link href="#" className={styles.button4} onClick={handleDelete}>
            Delete Lead
          </Link>
        </div>
      </div>
    </div>
  );
}
