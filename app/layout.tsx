import type { Metadata } from "next";
import { Inter, Poppins, Space_Mono } from "next/font/google";
// Poster system (handoff §1). Loaded through next/font rather than the spec's
// <link> so they are self-hosted and not render-blocking; the CSS variables are
// the ones --font-display/head/body/stamp resolve to.
import { Alfa_Slab_One, Archivo, Archivo_Black, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const alfa = Alfa_Slab_One({
  variable: "--font-alfa",
  weight: ["400"],
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  weight: ["400"],
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Psychedelic Journeys | Sacred Stories & Transformative Experiences",
  description: "Explore transformative psychedelic journeys from around the world - from Ayahuasca ceremonies to Burning Man, Kumbh Mela to sacred mountain pilgrimages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${poppins.variable} ${spaceMono.variable} ${alfa.variable} ${archivo.variable} ${archivoBlack.variable} ${plexMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
