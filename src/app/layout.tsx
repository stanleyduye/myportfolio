import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";

import { Toaster } from "sonner";
import FooterModule from "./components/footer";
import NavBar from "./components/navBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Stanley Duye | Portfolio",
  description: "Software Engineer",
  icons: "/favicon.ico",
  openGraph: {
    title: "Stanley Duye | Portfolio",
    description: "Software Engineer",
    url: "https://duyestanley.netlify.app",
    siteName: "Stanley Duye's Portfolio",

    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-[#fff] min-h-screen flex flex-col`}
      >
        <Toaster position="top-right" richColors />
        <NavBar />
        <main className="flex-grow">
          <div className="m-auto max-w-6xl px-5 flex flex-col gap-10 my-20">
            {children}
          </div>
        </main>
        <FooterModule />
      </body>
    </html>
  );
}
