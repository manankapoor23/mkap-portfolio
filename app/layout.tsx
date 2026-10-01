import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Newsreader, IBM_Plex_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profile } from "@/lib/site";

const serif = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-newsreader",
  display: "swap",
});
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://mkap.vercel.app"),
  title: { default: "Manan Kapoor", template: "%s — Manan Kapoor" },
  description: profile.intro,
  openGraph: { title: "Manan Kapoor", description: profile.intro, url: "https://mkap.vercel.app", type: "website" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>
        <div className="mx-auto max-w-[640px] px-5">
          <Navbar />
          <main className="pt-16 pb-6">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
