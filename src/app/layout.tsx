import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Synqer.ai - Smart Municipal Solutions",
  description:
    "Transform outdated organizational systems into smart, automated solutions. Significantly reduce manual work and accelerate report generation.",
  keywords:
    "municipal automation, government AI, smart city, data processing, compliance, reporting",
  authors: [{ name: "Synqer.ai" }],
  icons: {
    icon: "/synqr-ai-favicon-v1.svg",
    shortcut: "/synqr-ai-favicon-v1.svg",
    apple: "/synqr-ai-favicon-v1.svg",
  },
  openGraph: {
    title: "Synqer.ai - Smart Municipal Solutions",
    description:
      "Transform outdated municipal systems into smart, automated solutions.",
    url: "https://synqer.ai",
    siteName: "Synqer.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Synqer.ai - Municipal Automation Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synqer.ai - Smart Municipal Solutions",
    description:
      "Transform outdated municipal systems into smart, automated solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
