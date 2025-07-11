export type FollowUp = {
  contact: string;
  subject: string;
  dueDate: string;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "Overdue" | "Sent";
};

export const mockData: FollowUp[] = [
  {
    contact: "Sarah Johnson",
    subject: "Contract renewal discussion",
    dueDate: "Today",
    priority: "High",
    status: "Pending",
  },
  {
    contact: "Ebube Gideon",
    subject: "Product demo follow‑up",
    dueDate: "Tomorrow",
    priority: "Medium",
    status: "Pending",
  },
  {
    contact: "Somto Peace",
    subject: "Partnership proposal",
    dueDate: "Oct 15, 2023",
    priority: "High",
    status: "Pending",
  },
  {
    contact: "Dominic Aloysius",
    subject: "Quarterly reviews meetings",
    dueDate: "Oct 18, 2023",
    priority: "Low",
    status: "Pending",
  },
  {
    contact: "Emilia   Thompson",
    subject: "Service feedback request",
    dueDate: "Oct 12, 2023",
    priority: "Medium",
    status: "Overdue",
  },
];