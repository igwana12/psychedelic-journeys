import JourneyCarousel from "@/components/JourneyCarousel";

const journeys = [
  {
    name: "Kasol",
    slug: "kasol",
    location: "Himachal Pradesh, India",
    description: "Mountain village paradise and spiritual haven in the Parvati Valley",
    type: "Cannabis Culture",
    image: "/images/journeys/kasol/hero.jpg",
  },
  {
    name: "Kumbh Mela",
    slug: "kumbh-mela",
    location: "Various, India",
    description: "World's largest spiritual gathering with 100+ million pilgrims",
    type: "Mass Pilgrimage",
    image: "/images/journeys/kumbh-mela/hero.jpg",
  },
  {
    name: "Goa",
    slug: "goa",
    location: "Goa, India",
    description: "Beach paradise and birthplace of psytrance culture",
    type: "Festival Scene",
    image: "/images/journeys/goa/HERO_GOA.jpg",
  },
  {
    name: "Ayahuasca",
    slug: "ayahuasca",
    location: "Amazon Basin, Peru",
    description: "Sacred plant medicine ceremony with Shipibo shamans",
    type: "Plant Medicine",
    image: "/images/journeys/ayahuasca/hero.jpg",
  },
  {
    name: "San Pedro",
    slug: "san-pedro",
    location: "Sacred Valley, Peru",
    description: "Ancient Andean cactus ceremony and heart-opening journey",
    type: "Plant Medicine",
    image: "/images/journeys/san-pedro/hero.jpg",
  },
  {
    name: "Iboga",
    slug: "iboga",
    location: "Gabon, Central Africa",
    description: "Powerful root medicine and Bwiti initiation ritual",
    type: "Plant Medicine",
    image: "/images/journeys/iboga/hero.jpg",
  },
  {
    name: "Burning Man",
    slug: "burning-man",
    location: "Black Rock Desert, Nevada",
    description: "Radical self-expression in a temporary city of 70,000",
    type: "Festival",
    image: "/images/journeys/burning-man/hero.jpg",
  },
  {
    name: "Qoyllur Riti",
    slug: "qoyllur-riti",
    location: "Sinakara Valley, Peru",
    description: "Sacred Inca pilgrimage to 19,000-foot glacier sanctuary",
    type: "Mountain Pilgrimage",
    image: "/images/journeys/qoyllur-riti/hero.jpg",
  },
  {
    name: "Palenque",
    slug: "palenque",
    location: "Chiapas, Mexico",
    description: "Ancient Mayan pyramids wrapped in jungle mist and mysticism",
    type: "Ancient Ruins",
    image: "/images/journeys/palenque/hero.jpg",
  },
  {
    name: "Bagan",
    slug: "bagan",
    location: "Mandalay, Myanmar",
    description: "Over 2,000 Buddhist temples across sacred plains",
    type: "Buddhist Pilgrimage",
    image: "/images/journeys/bagan/hero.jpg",
  },
  {
    name: "Sacred Valley",
    slug: "sacred-valley",
    location: "Cusco Region, Peru",
    description: "Inca heartland of terraced mountains and living Quechua culture",
    type: "Sacred Site",
    image: "/images/journeys/sacred-valley/hero.jpg",
  },
  {
    name: "Eclipse Festival",
    slug: "eclipse-festival",
    location: "Quebec, Canada",
    description: "Psytrance communion in the Quebec forest with 10,000 souls",
    type: "Festival",
    image: "/images/journeys/eclipse-festival/hero.jpg",
  },
  {
    name: "Havana",
    slug: "havana",
    location: "Havana, Cuba",
    description: "Colonial architecture, Afro-Cuban spirituality, and timeless rhythms",
    type: "Cultural Immersion",
    image: "/images/journeys/havana/hero.jpg",
  },
];

export default function JourneysPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Journey Carousel */}
      <section id="journeys" className="px-4" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-amber-400 text-center">
            The Journeys
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed text-center max-w-4xl" style={{ marginBottom: "20px" }}>
            Fourteen transformative experiences spanning five continents.
            From Amazonian ceremonies to Himalayan havens, Mayan temples to Buddhist stupas, desert gatherings to Caribbean rhythms.
          </p>
        </div>

        <JourneyCarousel journeys={journeys} style={{ marginTop: "20px" }} />
      </section>
    </div>
  );
}
