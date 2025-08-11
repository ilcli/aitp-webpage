import { Analytics } from '@vercel/analytics/react';

// Root layout - minimal wrapper for i18n routing
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