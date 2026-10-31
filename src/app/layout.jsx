import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import RunningLights from "@/components/ui/RunningLights";
import { profile } from "@/data/profile";

// Self-hosted at build time by next/font: no layout shift, no request to Google
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const siteTitle = `${profile.name} — ${profile.title}`;

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  icons: { icon: "/profile.png" },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "mahmud.dev",
    title: siteTitle,
    description:
      "I build fast, type-safe web applications with Next.js, TypeScript and Node.js.",
    images: [{ url: profile.photo, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description:
      "I build fast, type-safe web applications with Next.js, TypeScript and Node.js.",
    images: [profile.photo],
  },
};

export const viewport = {
  themeColor: "#05070d",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Providers>
          {/* Grid with light pulses running behind every page */}
          <RunningLights />
          <NavBar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
