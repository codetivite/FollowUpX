import type { Metadata } from "next";
import Sidebar from "@components/components/dashboard/sidebar";
import Header from "@components/components/dashboard/header";
// import "@/styles/dashboard.css";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
