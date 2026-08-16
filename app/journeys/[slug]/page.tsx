import { notFound } from "next/navigation";
import Link from "next/link";
import { journeysData } from "@/data/journeys";
import ImageGallery from "@/components/ImageGallery";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";
import JourneyHero from "@/components/journey/JourneyHero";
import JourneyStory from "@/components/journey/JourneyStory";
import JourneyMap from "@/components/journey/JourneyMap";
import JourneyReveals from "@/components/journey/JourneyReveals";

export async function generateStaticParams() {
  return Object.keys(journeysData).map((slug) => ({ slug }));
}

export default async function JourneyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const journey = journeysData[slug];
  if (!journey) notFound();

  const slugs = Object.keys(journeysData);
  const nextSlug = slugs[(slugs.indexOf(slug) + 1) % slugs.length];
  const nextJourney = journeysData[nextSlug];
  const ctaImage = journey.gallery[2] || journey.gallery[0] || journey.heroImage;

  return (
    <SmoothScrollProvider>
      <div className="journey-page">
        {/* fixed atmosphere */}
        <div className="atmos" aria-hidden>
          <div className="atmos__canopy" style={{ backgroundImage: `url('${journey.heroImage}')` }} />
          <div className="atmos__rays" />
        </div>
        <div className="atmos__contour" aria-hidden />
        <div className="atmos__grain" aria-hidden />

        {/* HERO (client) */}
        <JourneyHero
          name={journey.name}
          type={journey.type}
          location={journey.location}
          heroImage={journey.heroImage}
          slug={slug}
          nextSlug={nextSlug}
        />

        {/* STATS */}
        <div className="stats">
          <div className="stats__grid">
            <div className="stat"><div className="k">Duration</div><div className="v">{journey.stats.duration}</div></div>
            <div className="stat"><div className="k">Best Season</div><div className="v">{journey.stats.season}</div></div>
            <div className="stat"><div className="k">Intensity</div><div className="v">{journey.stats.intensity}</div></div>
            <div className="stat"><div className="k">Est. Cost</div><div className="v">{journey.stats.cost}</div></div>
          </div>
        </div>

        <JourneyReveals>
          {/* INTRO + MAP */}
          <section className="intro">
            <div className="wrap">
              <div className="intro__grid">
                <p className="intro__quote reveal">{journey.introduction}</p>
                <div className="reveal">
                  <JourneyMap lat={journey.coordinates.lat} lng={journey.coordinates.lng} />
                </div>
              </div>
            </div>
          </section>

          {/* THE JOURNEY (client — chapters own their reveals) */}
          <section className="journey-sec">
            <div className="mood mood--green" />
            <div className="wrap">
              <div className="sec-head reveal"><h2>The Journey</h2></div>
              <JourneyStory story={journey.story} gallery={journey.gallery} />
            </div>
          </section>

          {/* MICRO-RITUALS */}
          <section className="rituals">
            <div className="mood mood--amber" />
            <div className="wrap">
              <div className="sec-head reveal"><h2>Sacred Micro-Rituals</h2><p>Small practices that deepen the experience and honor the tradition</p></div>
              <div className="rituals__grid">
                {journey.microRituals.map((r, i) => (
                  <div key={i} className="rcard reveal">
                    <div className="num">{String(i + 1).padStart(2, "0")}</div>
                    <h4>{r.title}</h4>
                    <p>{r.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* PRACTICAL WISDOM */}
          <section className="tips">
            <div className="mood mood--indigo" />
            <div className="wrap">
              <div className="sec-head reveal"><h2>Practical Wisdom</h2><p>Essential guidance for your journey</p></div>
              <div className="tips__list">
                {journey.tips.map((tip, i) => (
                  <div key={i} className="tip reveal"><div className="n">{i + 1}</div><p>{tip}</p></div>
                ))}
              </div>
            </div>
          </section>

          {/* VISUAL JOURNEY (reuse existing ImageGallery lightbox) */}
          <section className="gallery-sec">
            <div className="mood mood--green" />
            <div className="wrap">
              <div className="sec-head reveal"><h2>Visual Journey</h2></div>
              <ImageGallery images={journey.gallery} journeyName={journey.name} />
            </div>
          </section>

          {/* CTA / NEXT */}
          <section className="cta">
            <div className="cta__bg" data-depth="0.15" style={{ backgroundImage: `url('${ctaImage}')` }} />
            <div className="cta__grad" />
            <div className="cta__inner reveal">
              <div className="cta__eyebrow">The path continues</div>
              <h2>Next: {nextJourney.name}</h2>
              <Link href={`/journeys/${nextSlug}`} className="btn">Continue the Journey</Link>
            </div>
          </section>
        </JourneyReveals>
      </div>
    </SmoothScrollProvider>
  );
}
