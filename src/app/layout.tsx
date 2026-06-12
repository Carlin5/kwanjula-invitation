import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Rahman & Bushrah | Introduction Ceremony",
  description: "You are warmly invited to the introduction ceremony (Okwanjula) of Abdul Rahman and Bushrah at Bwebajja Gardens on 28th June, 2026.",
  openGraph: {
    title: "Abdul Rahman & Bushrah | Kwanjula Invitation",
    description: "Together with our families, we invite you to our introduction ceremony. Bwebajja Gardens, 28th June 2026.",
    images: ["/images/couple-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
