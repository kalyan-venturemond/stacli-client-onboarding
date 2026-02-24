import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Client Pre Onboarding | Stacli',
  description: 'Welcome to Stacli. Please fill out the form to get started.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
