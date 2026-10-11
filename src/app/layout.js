import "./globals.css";
import { siteContent } from "@/data/content";

export const metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: ["Srushti", "Chaitanya", "Love Story", "Memories", "Romantic Website"],
  authors: [{ name: siteContent.meta.author }],
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    type: "website",
    locale: "en_US",
    siteName: "Project Srushti",
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.meta.title,
    description: siteContent.meta.description,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffe4ea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Noto+Sans+Devanagari:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-[#fffbf5] text-[#3f2e3e] selection:bg-blush-200 selection:text-blush-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
