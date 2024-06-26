import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Dashboard for admin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en"> 
      <body className={inter.className}>
        <ToasterProider />
        <ModalProvider />
        {children}
        </body>
    </html>
    </ClerkProvider>
  );
}
