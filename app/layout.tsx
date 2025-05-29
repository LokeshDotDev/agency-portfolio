import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Sora, Manrope } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/custom/NavbarDemo";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Daily Lance – Premium Digital Agency Portfolio",
    template: "%s | Daily Lance Agency",
  },
  description:
    "Daily Lance is a premium digital agency specializing in web development, UI/UX design, branding, cloud solutions, and digital strategy. Explore our portfolio, services, and client success stories.",
  keywords: [
    "digital agency",
    "web development",
    "UI/UX design",
    "branding",
    "portfolio",
    "case studies",
    "cloud",
    "devops",
    "nextjs",
    "react",
    "premium",
    "modern",
    "creative",
    "technology",
    "agency portfolio",
  ],
  metadataBase: new URL("https://dailylance.com"),
  openGraph: {
    title: "Daily Lance – Premium Digital Agency Portfolio",
    description:
      "Daily Lance is a premium digital agency specializing in web development, UI/UX design, branding, cloud solutions, and digital strategy. Explore our portfolio, services, and client success stories.",
    url: "https://dailylance.com",
    siteName: "Daily Lance Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daily Lance – Premium Digital Agency Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Lance – Premium Digital Agency Portfolio",
    description:
      "Daily Lance is a premium digital agency specializing in web development, UI/UX design, branding, cloud solutions, and digital strategy. Explore our portfolio, services, and client success stories.",
    images: ["/og-image.png"],
    site: "@dailylanceagency",
    creator: "@dailylanceagency",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  themeColor: "#0ea5e9",
  category: "technology",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${sora.variable} ${manrope.variable} antialiased font-sans`}
      >
        <NavbarDemo />
        {children}
      </body>
    </html>
  );
}
