import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import FooterModule from "./components/footer";
import NavBar from "./components/navBar";
import MotionObserver from "./components/MotionObserver";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duyestanley.netlify.app"),
  title: { default: "Stanley Duye | Frontend Engineer", template: "%s | Stanley Duye" },
  description: "Stanley Duye is a frontend engineer building thoughtful, accessible websites and applications with React, Next.js, and TypeScript.",
  icons: "/favicon.ico",
  openGraph: {
    title: "Stanley Duye | Frontend Engineer",
    description: "Thoughtful interfaces, built with care. Explore selected work by Stanley Duye.",
    url: "https://duyestanley.netlify.app",
    siteName: "Stanley Duye’s Portfolio",
    images: [{ url: "/meta-image.jpg", width: 1200, height: 630, alt: "Stanley Duye" }],
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Stanley Duye | Frontend Engineer", description: "Thoughtful interfaces, built with care.", images: ["/meta-image.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={geist.variable}>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <NavBar />
        <main id="main-content" className="container" tabIndex={-1}>{children}</main>
        <FooterModule />
        <MotionObserver />
      </body>
    </html>
  );
}
