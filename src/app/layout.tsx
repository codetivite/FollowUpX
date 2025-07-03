"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Plus_Jakarta_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Header from "@components/components/Header/header";
import Footer from "@components/components/Footer/footer";
import WaitlistModal from "@components/components/modal/JoinWaitlistModal";
import { Toaster } from "react-hot-toast";

import DashboardHeader from "@components/components/dashboard/DashboardHeader/DashboardHeader";
import DashboardSidebar from "@components/components/dashboard/DashboardSidebar/DashboardSidebar";

import "./globals.css";
import "@components/icons/fontawesome";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-jakarta",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const isAuthPage =
    pathname?.startsWith("/auth/login") ||
    pathname?.startsWith("/auth/signUp") ||
    pathname?.startsWith("/auth/forgot_password") ||
    pathname?.startsWith("/auth/create_password");

  const isDashboardPage = pathname?.startsWith("/dashboard");

  return (
    <html lang="en" className={plusJakarta.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position="top-right" />

        {isAuthPage && (
          <>
            {/* You could include a minimal header here */}
            {/* <Header variant="minimal" /> */}
            <main className="auth-content">{children}</main>
            {/* <AuthFooter /> */}
            {/* Optionally an Auth Footer */}
          </>
        )}

        {isDashboardPage && (
          <div className="dashboard-container">
              <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />
              <div className="dashboard-main">
                <DashboardSidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
                <main className="dashboard-content">{children}</main>
              </div>
            <Footer />
          </div>
        )}

        {!isAuthPage && !isDashboardPage && (
          <>
            <Header variant="default" onJoinClick={() => setModalOpen(true)} />
            <WaitlistModal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
            />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
