"use client";

import styles from "./styles.module.css";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiMail } from "react-icons/fi";
import { mockLeads } from "@components/mock/leads";


export default function AllLeads() {
  const router = useRouter();

  const handleClickAdd = () => {
    console.log("Add Lead");
    router.push("/dashboard/leads/add_lead");
  };

  return (
    <>
      <div className={styles.leadContainer}>
        <div className={styles.leadSection1}>
          <h1>Lead Overview</h1>
          <button
            type="submit"
            className={styles.newTask}
            onClick={handleClickAdd}
          >
            + <span>Add New Lead</span>
          </button>
        </div>
        <div className={styles.leadSection2}>
          {mockLeads.map((lead) => (
            <div className={styles.leadTabs} key={lead.id}>
              <div className={styles.leadItem1}>
                <h3>{lead.name}</h3>
                <button>New</button>
              </div>
              <div className={styles.leadItem2}>
                <FiMail size={15} />
                <div>
                  <p>{lead.email}</p>
                  <p>{lead.phone}</p>
                </div>
              </div>
              <div className={styles.leadItem3}>
                <p>
                  Last Interaction:
                  <span>{lead.lastInteraction}</span>
                </p>
              </div>
              <div className={styles.leadItem4}>
                <p>
                  FollowUpX Suggestion:
                  <span>{lead.followUpSuggestion}</span>
                </p>
              </div>
              <div className={styles.leadItem5}>
                <Link
                  href={`/dashboard/leads/${lead.id}/lead_details`}
                  className={styles.leadButton1}
                >
                  View Details
                </Link>
                <Link
                  href="/dashboard/leads/scheduleFollowUps"
                  className={styles.leadButton2}
                >
                  Schedule Follow-up
                </Link>
                <Link 
                href={`/dashboard/leads/`}
                className={styles.leadButton3}
                >
                  Mark as Contacted
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
