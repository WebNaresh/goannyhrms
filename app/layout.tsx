import Navbar from "@/components/ui/navbar";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SmarTea🍵 HRMS",
    template: "%s | SmarTea🍵 HRMS",
  },
  description:
    "SmarTea HRMS: Tea time just got smarter – SMarTea gets things done! Manage your HR tasks efficiently with our comprehensive HR management system. From employee onboarding to payroll processing, SMarTea HRMS simplifies and automates your HR processes, allowing you to focus on what matters most - your people.",
  keywords: [
    "HRMS",
    "HR Management System",
    "HR Software",
    "Human Resource Management System",
    "HR System",
    "HR Software Solutions",
    "HR Management Software",
    "Goanny HRMS",
    "Goanny HRMS Software",
    "SmarTea HRMS",
    "smarteahrms",
    "smartea",
    "SMARTEA",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
