"use client";

import styles from "./styles.module.css";
import React from "react";
import { useRouter } from "next/navigation";
import CampaignAll  from "@components/components/dashboard/campaignTable/campaignTable";

export default function AllCampaign() {
  const router = useRouter();

  const handleClickAdd = () => {
    console.log("Add Campaign");
    router.push("/dashboard/campaign/add_campaign");
  };

  // function handleDelete(id: number): void {
  //   // For now, just log the id. In a real app, you'd call an API and update state.
  //   console.log(`Delete campaign with id: ${id}`);
  //   // Example: show a confirmation dialog before deleting
  //   // if (window.confirm("Are you sure you want to delete this campaign?")) {
  //   //   // Call API to delete, then update UI
  //   // }
  // }

  return (
    <>
      <div className={styles.campaignContainer}>
        <div className={styles.campaignSection1}>
          <h1>Campaign Overview</h1>
          <button className={styles.newTask} onClick={handleClickAdd}>
            + <span>Add New Campaign</span>
          </button>
        </div>
        <CampaignAll />
      </div>
    </>
  );
}
