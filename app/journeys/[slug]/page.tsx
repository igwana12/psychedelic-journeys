import { notFound } from "next/navigation";
import Link from "next/link";
import { journeysData } from "@/data/journeys";
import ImageGallery from "@/components/ImageGallery";

export async function generateStaticParams() {
  return Object.keys(journeysData).map((slug) => ({
    slug: slug,
  }));
}

export default async function JourneyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journey = journeysData[slug];

  if (!journey) {
    notFound();
  }

  // Get all journey slugs and find next journey
  const journeySlugs = Object.keys(journeysData);
  const currentIndex = journeySlugs.indexOf(slug);
  const nextSlug = journeySlugs[(currentIndex + 1) % journeySlugs.length];
  const nextJourney = journeysData[nextSlug];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${journey.heroImage}')` }}
        />

        <div className="relative z-20 w-full px-6 md:px-12 pb-16 md:pb-24 max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/journeys"
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors font-mono text-sm tracking-wider"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              ALL JOURNEYS
            </Link>
            <Link
              href={`/journeys/${nextSlug}`}
              className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors font-mono text-sm tracking-wider"
            >
              NEXT
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1.5 bg-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase rounded-full border border-amber-500/40">
              {journey.type}
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-poppins)] text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent leading-tight tracking-tight">
            {journey.name}
          </h1>
          <p className="text-xl md:text-2xl text-amber-400/90 flex items-center font-light tracking-wide">
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {journey.location}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-zinc-900/80 border-y border-zinc-800/50 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" style={{ marginLeft: "20px" }}>
            <div className="text-center md:text-left">
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-3">Duration</p>
              <p className="text-zinc-100 font-semibold text-lg">{journey.stats.duration}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-3">Best Season</p>
              <p className="text-zinc-100 font-semibold text-lg">{journey.stats.season}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-3">Intensity</p>
              <p className="text-zinc-100 font-semibold text-lg">{journey.stats.intensity}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-3">Est. Cost</p>
              <p className="text-zinc-100 font-semibold text-lg">{journey.stats.cost}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction with Map */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="relative z-10 flex justify-center">
              <p className="text-2xl md:text-3xl text-zinc-200 leading-[2] italic border-l-4 border-amber-500 pl-8 md:pl-12 text-center" style={{ marginLeft: "40px" }}>
                {journey.introduction}
              </p>
            </div>

            {/* Map - Right Side */}
            <div className="relative h-[400px] lg:h-[500px]">
              {/* Gradient fade to black on the left */}
              <div className="absolute inset-y-0 left-0 w-32 lg:w-48 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent z-10" />

              {/* Map iframe */}
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${journey.coordinates.lng - 2},${journey.coordinates.lat - 1.5},${journey.coordinates.lng + 2},${journey.coordinates.lat + 1.5}&layer=mapnik&marker=${journey.coordinates.lat},${journey.coordinates.lng}`}
                className="w-full h-full rounded-xl border border-zinc-800/50"
                style={{
                  filter: 'grayscale(90%) invert(92%) contrast(0.9) brightness(0.85)',
                  mixBlendMode: 'luminosity'
                }}
              />

              {/* Overlay styling */}
              <div className="absolute inset-0 bg-amber-500/10 rounded-xl pointer-events-none mix-blend-overlay" />

              {/* Location label */}
              <div className="absolute bottom-4 right-4 bg-zinc-900/90 backdrop-blur-sm border border-amber-500/30 rounded-lg px-4 py-2 z-20" style={{ marginLeft: "20px" }}>
                <p className="text-amber-400 text-sm font-mono">{journey.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-poppins)] text-5xl md:text-6xl font-bold text-amber-400 text-center tracking-tight" style={{ marginTop: "40px", marginBottom: "calc(8rem - 60px)" }}>The Journey</h2>
          <div className="space-y-32">
            {journey.story.map((section, index) => (
              <div key={index} className="border-l-2 border-amber-500/30 pl-8 md:pl-12" style={{ marginBottom: "20px", marginLeft: "40px" }}>
                <h3 className="font-[family-name:var(--font-poppins)] text-3xl md:text-4xl font-bold text-zinc-100 mb-8 leading-tight tracking-tight">{section.title}</h3>
                <p className="text-zinc-300 leading-[2] text-lg md:text-xl">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro-Rituals */}
      <section className="py-32 px-6 md:px-12 bg-zinc-900/50" style={{ marginTop: "80px" }}>
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-5xl md:text-6xl font-bold text-amber-400 mb-8 text-center tracking-tight">Sacred Micro-Rituals</h2>
          <p className="text-center text-zinc-400 text-lg max-w-2xl leading-[2]" style={{ marginBottom: "3rem" }}>
            Small practices that deepen the experience and honor the tradition
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10" style={{ width: "70%" }}>
            {journey.microRituals.map((ritual, index) => (
              <div key={index} className="bg-zinc-900/80 border border-zinc-800/50 rounded-xl p-10 hover:border-amber-500/50 transition-all hover:shadow-lg hover:shadow-amber-500/5">
                <h3 className="font-[family-name:var(--font-poppins)] text-2xl font-bold text-amber-400 mb-5 tracking-tight text-center">{ritual.title}</h3>
                <p className="text-zinc-300 leading-[2] text-lg">{ritual.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="px-6 md:px-12 bg-zinc-900/50" style={{ paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-[family-name:var(--font-poppins)] text-5xl md:text-6xl font-bold text-amber-400 mb-8 text-center tracking-tight">Practical Wisdom</h2>
          <p className="text-center text-zinc-400 text-lg mb-20 max-w-2xl leading-[2]" style={{ marginBottom: "calc(5rem + 10px)" }}>
            Essential guidance for your journey
          </p>
          <div className="space-y-6 w-full flex flex-col items-start" style={{ maxWidth: "50rem", margin: "0 auto" }}>
            {journey.tips.map((tip, index) => (
              <div key={index} className="flex items-start bg-zinc-900/80 border border-zinc-800/50 rounded-xl p-6 hover:border-amber-500/30 transition-colors w-full">
                <svg className="w-6 h-6 text-amber-500 mr-5 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-zinc-300 text-lg leading-[2]">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto" style={{ marginTop: "80px" }}>
        <h2 className="font-[family-name:var(--font-poppins)] text-5xl md:text-6xl font-bold text-amber-400 text-center tracking-tight" style={{ marginBottom: "calc(5rem + 20px)" }}>Visual Journey</h2>
        <ImageGallery images={journey.gallery} journeyName={journey.name} />
      </section>

      {/* Navigation to Other Journeys */}
      <section className="px-6 md:px-12 border-t border-zinc-800/50" style={{ marginTop: "20px", paddingTop: "6rem", paddingBottom: "8rem" }}>
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-zinc-900 font-semibold text-lg rounded-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-500/20"
            style={{ padding: "2rem 5.2rem" }}
          >
            Explore More Journeys
          </Link>
        </div>
      </section>
    </div>
  );
}
