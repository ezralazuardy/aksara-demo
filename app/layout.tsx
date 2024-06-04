import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "@/app/globals.css";

const font = DM_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aksara Demo",
  description: "Demo App for Aksara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen bg-gray-50 ${font.className}`}
      >
        {children}
      </body>
    </html>
  );
}
