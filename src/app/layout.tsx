import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://princemahmud.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prince Mahmud — Full-Stack Developer",
    template: "%s — Prince Mahmud",
  },
  description:
    "Full-stack developer building scalable web applications, SaaS platforms, and real-time systems with React, Next.js, and Node.js. Based in Bangladesh.",
  keywords: [
    "Prince Mahmud",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Prince Mahmud", url: siteUrl }],
  creator: "Prince Mahmud",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Prince Mahmud",
    title: "Prince Mahmud — Full-Stack Developer",
    description:
      "Building durable web systems — SaaS, payments, real-time, and OTT infrastructure with React, Next.js, and Node.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Mahmud — Full-Stack Developer",
    description:
      "Building durable web systems — SaaS, payments, real-time, and OTT infrastructure with React, Next.js, and Node.js.",
    creator: "@princevip1",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (function(){try{
      var t=localStorage.getItem('theme');
      if(!t){t='dark';}
      if(t==='dark'){document.documentElement.classList.add('dark');}
    }catch(e){document.documentElement.classList.add('dark');}})();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Prince Mahmud — Writing"
          href="/rss.xml"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}
      >
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-medium"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
