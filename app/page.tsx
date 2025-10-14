import Link from "next/link";
import Image from "next/image";
import HeroSlideshow from "@/components/HeroSlideshow";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-cosmic.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-zinc-900/40 to-zinc-950 z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
            Oddysseys
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8 leading-relaxed">
            Sacred stories from the edge of consciousness. Ancient ceremonies, modern festivals,
            and transformative experiences from around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center" style={{ marginTop: "40px" }}>
            <a
              href="/journeys"
              className="bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold text-base rounded-lg transition-colors shadow-lg shadow-amber-500/20"
              style={{ padding: "2rem 5.2rem" }}
            >
              Explore Journeys
            </a>
            <a
              href="/escape"
              className="border-2 border-amber-500 hover:bg-amber-500/10 text-amber-400 font-semibold text-base rounded-lg transition-colors"
              style={{ padding: "2rem 5.2rem" }}
            >
              Escape the System
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
