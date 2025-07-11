// app/leads/[id]/page.tsx
"use client";

import styles from "./styles.module.css";
import React from "react";
import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { mockLeads } from "@components/mock/leads"; 
import { notFound } from "next/navigation";

export default function LeadDetailsPage({ params }: {  params: Promise<{ id: string }> }) {
    const { id } = React.use(params); 
  const leadId = parseInt(id, 10);
  const lead = mockLeads.find((l) => l.id === leadId);

  if (!lead) {
    notFound();
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
          <h2>{lead.name}</h2>
        </div>
        <div className={styles.leadDetails2}>
          <h3>Contact Info</h3>
          <div className={styles.leadDetails2A}>
            <MdOutlineEmail size={20} />
            <div>
              <p>{lead.email}</p>
              <p>{lead.phone}</p>
            </div>
          </div>
        </div>
        <div className={styles.leadDetails3}>
          <h3>Overview</h3>
        </div>
        <div className={styles.leadDetails4}>
          <p>Last Interaction:</p>
          <div>
            <p>Follow-Up Suggestion: {lead.followUpSuggestion}</p>
          </div>
        </div>
        <div className={styles.leadDetails5}>
          <h3>Interaction History</h3>
        </div>
        <div className={styles.leadDetails6}>
          <div>
            <p> {lead.lastInteraction}</p>
            <p>Initial Enquiry about a product</p>
          </div>
          <div>
            <p>2022-10-16</p>
            <p>Automated welcome email</p>
          </div>
          <div>
            <p>2022-10-16</p>
            <p>Manual followup email sent</p>
          </div>
        </div>
        <div className={styles.leadDetails7}>
          <Link
          href={`/dashboard/leads/${lead.id}/edit_lead`}
          className={styles.button1}>
            Edit Lead
          </Link>
          <Link
          href="/dashboard/leads/schedule_followups"
          className={styles.button2}>
            Scheduled Follow-Up
          </Link>
          <Link
          href=""
          className={styles.button3}>
            Mark as Contacted
          </Link>
          <Link
          href=""
          className={styles.button4} onClick={handleDelete}>
            Delete Lead
          </Link>
        </div>
      </div>
    </div>
  );
}