import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nomonthlyfee.ca — Free alternatives to paid subscriptions",
  description:
    "Free alternatives to the subscriptions Canadians pay for every month. Banking, streaming, design tools, and more — for no monthly fee.",
  metadataBase: new URL("https://nomonthlyfee.ca"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
