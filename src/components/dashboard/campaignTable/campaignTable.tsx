"use client";

import styles from "./styles.module.css";
import React from "react";
import Link from "next/link";
import { mockCampaigns } from "@components/mock/campaign";

import { FiEdit } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";

export default function CampaignTable() {
  function handleDelete(id: number): void {
    // For now, just log the id. In a real app, you'd call an API and update state.
    console.log(`Delete campaign with id: ${id}`);
    // Example: show a confirmation dialog before deleting
    // if (window.confirm("Are you sure you want to delete this campaign?")) {
    //   // Call API to delete, then update UI
    // }
  }

  return (
    <>
      <div className={styles.campaignSection2}>
        {/* Campaign items would be mapped here */}
        <table className={styles.campaignTable}>
          <thead className={styles.campaignTableHead}>
            <tr>
              <th>Campaign Name</th>
              <th>Status</th>
              <th>Leads</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className={styles.campaignTableBody}>
            {mockCampaigns.map((f, i) => (
              <tr key={i}>
                <td>{f.campaignName}</td>
                <td>
                  <span className={styles[`status${f.status}`]}>
                    {f.status}
                  </span>
                </td>
                <td>{f.leads}</td>
                <td>{f.startDate}</td>
                <td>{f.endDate}</td>
                <td className={styles.campaignActions}>
                  <Link href="">
                    <AiOutlineEye />
                  </Link>
                  <Link href="">
                    <FiEdit />
                  </Link>
                  <button onClick={() => handleDelete(f.id)}>
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
