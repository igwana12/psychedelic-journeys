"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const journeys = [
  { name: "Kasol", slug: "kasol" },
  { name: "Kumbh Mela", slug: "kumbh-mela" },
  { name: "Goa", slug: "goa" },
  { name: "Ayahuasca", slug: "ayahuasca" },
  { name: "San Pedro", slug: "san-pedro" },
  { name: "Iboga", slug: "iboga" },
  { name: "Burning Man", slug: "burning-man" },
  { name: "Qoyllur Riti", slug: "qoyllur-riti" },
  { name: "Tulum", slug: "tulum" },
  { name: "Palenque", slug: "palenque" },
  { name: "Bagan", slug: "bagan" },
  { name: "Sacred Valley", slug: "sacred-valley" },
  { name: "Eclipse Festival", slug: "eclipse-festival" },
  { name: "Havana", slug: "havana" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold text-amber-400 hover:text-amber-300 transition-colors"
          >
            Psychedelic Journeys
          </Link>
        </div>
      </div>
    </nav>
  );
}
