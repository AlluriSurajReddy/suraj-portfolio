import type { Metadata } from "next";
import './globals.css';
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Suraj Reddy | Portfolio",
  description: "Java Full Stack Developer focused on Spring Boot, AWS, and scalable web applications.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}