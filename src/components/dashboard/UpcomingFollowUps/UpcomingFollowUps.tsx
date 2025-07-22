"use client";

import styles from "./styles.module.css";
import React from "react";
import Link from "next/link";
import { mockData } from "@components/mock/followUp";


export default function UpdateFollowUps() {
  return (
    <>
      <div className={styles.updateContainers}>
        <div className={styles.updateSection1}>
          <h2>Upcoming Follow-ups</h2>
          <Link href={`/dashboard/task`} className={styles.newTask}>
            + <span>New Task</span>
          </Link>
        </div>
        <div className={styles.updateSection2}>
          <table className={styles.updateTable}>
            <thead className={styles.head}>
              <tr>
                <th>Contact</th>
                <th>Subject</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className={styles.body}>
              {mockData.map((f, i) => (
                <tr key={i}>
                  <td>{f.contact}</td>
                  <td>
                    {f.subject}
                  </td>
                  <td>{f.dueDate}</td>
                  <td>
                    <span className={styles[`priority${f.priority}`]}>
                      {f.priority}
                    </span>
                  </td>
                  <td>
                    <span className={styles[`status${f.status}`]}>
                      {f.status}
                    </span>
                  </td>
                  <td>
                    <button className={styles.sendBtn}>Send</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
