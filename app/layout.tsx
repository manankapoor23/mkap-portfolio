import "./globals.css";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Enhance from "@/components/Enhance";
import { profile } from "@/lib/site";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mkap.vercel.app"),
  title: { default: "Manan Kapoor — AI / ML Engineer", template: "%s — Manan Kapoor" },
  description: profile.intro,
  openGraph: { title: "Manan Kapoor", description: profile.intro, url: "https://mkap.vercel.app", type: "website" },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}document.documentElement.classList.add('js');})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <Navbar />
        <main className="mx-auto max-w-[1180px] px-6">{children}</main>
        <Footer />
        <Enhance />
      </body>
    </html>
  );
}
