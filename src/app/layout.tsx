import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AITP - Turn Ideas into AI Systems That Work",
  description:
    "We co-build automation and training solutions that save time and scale impact.",
  keywords:
    "AI automation, training solutions, process automation, AI consulting, no-code systems",
  authors: [{ name: "AITP" }],
  creator: "AITP",
  publisher: "AITP",
  metadataBase: new URL("https://aitp.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aitp.ai",
    title: "AITP - Turn Ideas into AI Systems That Work",
    description:
      "We co-build automation and training solutions that save time and scale impact.",
    siteName: "AITP",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AITP - AI Training & Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AITP - Turn Ideas into AI Systems That Work",
    description:
      "We co-build automation and training solutions that save time and scale impact.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
