import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';

export const metadata: Metadata = {
  title: "Synqer.ai - Smart Municipal Solutions",
  description: "Transform outdated municipal systems into smart, automated solutions. Reduce manual work by 80-90% and accelerate report generation.",
  keywords: "municipal automation, government AI, smart city, data processing, compliance, reporting",
  authors: [{ name: "Synqer.ai" }],
  openGraph: {
    title: "Synqer.ai - Smart Municipal Solutions",
    description: "Transform outdated municipal systems into smart, automated solutions.",
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
    description: "Transform outdated municipal systems into smart, automated solutions.",
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

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params
}: RootLayoutProps) {
  const { locale } = await params;
  // Validate that the incoming locale parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}