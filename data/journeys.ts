import { JourneyData } from "@/types/journey";

export const journeysData: Record<string, JourneyData> = {
  kasol: {
    name: "Kasol",
    slug: "kasol",
    location: "Himachal Pradesh, India",
    coordinates: { lat: 32.0102, lng: 77.3147 },
    type: "Cannabis Culture",
    heroImage: "/images/journeys/kasol/hero.jpg",
    stats: {
      duration: "1-4 weeks",
      season: "March-June, Sept-Nov",
      intensity: "Mild to Moderate",
      cost: "$10-30/day",
    },
    introduction:
      "Nestled in the Parvati Valley, Kasol is a backpacker's paradise where Israeli food meets Himalayan spirituality. A haven for those seeking connection with nature, freedom, and the legendary Malana cream.",
    story: [
      {
        title: "Arrival in the Valley",
        content:
          "The journey begins with a winding bus ride from Bhuntar, each turn revealing deeper mountain valleys and rushing rivers. Kasol emerges like a hidden gem - wooden guesthouses, prayer flags, and the constant sound of the Parvati River. The air is thin and clean, carrying whispers of pine and hashish smoke.",
      },
      {
        title: "Days by the River",
        content:
          "Mornings start slow. Chai and fresh Israeli breakfast at one of the many cafes. The days melt into riverside meditations, mountain treks to nearby villages like Malana and Tosh, and evenings spent in circles sharing stories with travelers from around the world. The pace here is dictated by nature, not clocks.",
      },
      {
        title: "Trekking to Kheerganga",
        content:
          "The pilgrimage to Kheerganga hot springs is a rite of passage. A 5-hour trek through forests and waterfalls leads to natural hot springs at 9,600 feet. Bathing under the stars while mountain winds howl around you is a baptism in nature's raw power.",
      },
      {
        title: "Village Wisdom",
        content:
          "The local Himachali people and the Malana villagers hold ancient knowledge. They speak of the mountains as living beings, the river as mother. Their connection to the land runs deeper than any high - it's a spiritual umbilical cord to something timeless.",
      },
    ],
    microRituals: [
      {
        title: "Morning River Bath",
        description:
          "Brave the ice-cold Parvati River at dawn. The shock to the system is immediately grounding and awakening.",
      },
      {
        title: "Sunset Smoke Circle",
        description:
          "Gather with fellow travelers at sunset viewpoints. Share a chillum while watching the sun paint the mountains gold.",
      },
      {
        title: "Moonlight Meditation",
        description:
          "Find a quiet spot by the river during full moon. Let the water sounds and moonlight guide you inward.",
      },
      {
        title: "Trail Offerings",
        description:
          "Leave small offerings at mountain shrines during treks - flowers, incense, or simply your gratitude.",
      },
    ],
    gallery: [
      "/images/journeys/kasol/gallery/1.jpg",
      "/images/journeys/kasol/gallery/4.jpg",
      "/images/journeys/kasol/gallery/5.jpg",
      "/images/journeys/kasol/gallery/6.jpg",
      "/images/journeys/kasol/gallery/_igwana_Remote_Himalayan_village_of_Kasol_nestled_in_deep_Par_6728d018-8329-4ecc-bdc0-31e09953570f_0.png",
      "/images/journeys/kasol/gallery/_igwana_Natural_hot_springs_at_Kheerganga_steaming_in_high_Hi_1e67f6f7-1238-4821-bb97-805a10bf5002_3.png",
      "/images/journeys/kasol/gallery/_igwana_Ancient_village_of_Malana_perched_precariously_on_ste_708ed557-7478-4483-9795-68711bd1cd86_0.png",
      "/images/journeys/kasol/gallery/_igwana_Panoramic_view_of_Malanas_cannabis_fields_cascading_d_3004ba45-0532-47d5-87f8-cf8884fc3d1f_0.png",
      "/images/journeys/kasol/gallery/_igwana_Traditional_hash-making_process_in_Malana_fields_figu_c3e077f6-e33c-474d-82a3-a2de2ca4e753_0.png",
      "/images/journeys/kasol/gallery/_igwana_Close-up_of_weathered_hands_holding_traditional_chill_50441c42-d7a8-4f96-a69d-0b4bc9123a32_1.png",
      "/images/journeys/kasol/gallery/_igwana_Hands_covered_in_dark_green_cannabis_resin_after_day__e311bc6b-9698-4853-a83c-e8104e24cd37_2.png",
    ],
    tips: [
      "Best visited during shoulder seasons (March-April, Sept-Oct) to avoid monsoons and heavy tourist crowds",
      "Respect local customs in villages, especially Malana which has strict rules about touching buildings",
      "Carry enough cash - ATMs are unreliable and many places don't accept cards",
      "Start treks early to avoid afternoon weather changes",
      "The hash is potent - start slow if you're not experienced",
      "Learn some basic Hindi phrases - locals appreciate the effort",
    ],
  },

  "kumbh-mela": {
    name: "Kumbh Mela",
    slug: "kumbh-mela",
    location: "Allahabad/Haridwar/Nashik/Ujjain, India",
    coordinates: { lat: 25.4358, lng: 81.8463 },
    type: "Mass Pilgrimage",
    heroImage: "/images/journeys/kumbh-mela/gallery/_igwana_Aerial_view_of_Sangam_confluence_where_Ganges_and_Yam_f21307ec-d1fe-40dd-99a2-b1ff01e85ea5_0.png",
    stats: {
      duration: "1-7 days",
      season: "Every 12 years (rotates)",
      intensity: "High (crowds)",
      cost: "$20-100/day",
    },
    introduction:
      "The largest human gathering on Earth. Over 100 million souls converging where holy rivers meet, seeking purification and spiritual rebirth. A kaleidoscope of humanity, devotion, and ancient tradition.",
    story: [
      {
        title: "The Ocean of Humanity",
        content:
          "Nothing prepares you for the scale. Millions of pilgrims, sadhus with matted hair and ash-covered bodies, families camping by the riverside, loudspeakers blaring mantras. The air vibrates with collective devotion. You're not just witnessing history - you're a drop in an ocean of faith spanning millennia.",
      },
      {
        title: "The Sacred Dip",
        content:
          "Dawn on the most auspicious day. The crowd surges toward the Sangam - the confluence of three rivers. Bodies pressing from all sides, yet there's no panic, only purpose. The moment you submerge in the holy waters, surrounded by chanting millions, something shifts. Baptism by mass consciousness.",
      },
      {
        title: "Sadhu Encounters",
        content:
          "The Naga Sadhus - naked, dreadlocked holy men who've renounced everything - are the stars of Kumbh. Some haven't spoken in years. Others hold their arms raised for decades until the limb withers. You sit with a sadhu who smokes from a chillum taller than your arm and speaks of enlightenment and illusion.",
      },
      {
        title: "Nights in the Tent City",
        content:
          "A temporary megacity springs up - thousands of tents, stages for religious discourse, food stalls, medical camps. At night, fires dot the landscape like stars. Conversations with pilgrims who traveled for days by train and foot. Everyone has a story of devotion.",
      },
    ],
    microRituals: [
      {
        title: "Pre-dawn Bath",
        description:
          "Take the ritual dip before sunrise on an auspicious day. Let the cold water wash away your past.",
      },
      {
        title: "Sadhu Blessings",
        description:
          "Approach holy men with humility. Receive their blessing - a touch of ash to the forehead, a moment of transmission.",
      },
      {
        title: "Floating Lamps",
        description:
          "At dusk, float a small leaf boat with a candle on the river. Watch it join thousands of other lights drifting downstream.",
      },
      {
        title: "Collective Prayer",
        description:
          "Join the evening aarti ceremony. Thousands of voices chanting in unison creates a vibrational field beyond description.",
      },
    ],
    gallery: [
      "/images/journeys/kumbh-mela/gallery/2.jpg",
      "/images/journeys/kumbh-mela/gallery/3.jpg",
      "/images/journeys/kumbh-mela/gallery/4.jpg",
      "/images/journeys/kumbh-mela/gallery/5.jpg",
      "/images/journeys/kumbh-mela/gallery/_igwana_Massive_gathering_of_millions_at_Kumbh_Mela_pilgrimag_b109b33c-b89d-4af0-a3c1-3e14577a42ba_0.png",
      "/images/journeys/kumbh-mela/gallery/_igwana_Circle_of_naked_Naga_babas_smoking_chillum_in_sacred__dc59075c-c97c-4de1-bb11-7e5c25d81d98_1.png",
      "/images/journeys/kumbh-mela/gallery/_igwana_Aerial_view_of_Sangam_confluence_where_Ganges_and_Yam_f21307ec-d1fe-40dd-99a2-b1ff01e85ea5_0.png",
    ],
    tips: [
      "Book accommodation months in advance - tent cities fill up quickly",
      "Keep your belongings secure in the crowds - petty theft happens",
      "Dress modestly and respect religious customs",
      "Stay hydrated and protect yourself from sun/cold depending on season",
      "Consider hiring a local guide to navigate and translate",
      "The most auspicious bathing days have the largest (and most intense) crowds",
    ],
  },

  goa: {
    name: "Goa",
    slug: "goa",
    location: "Goa, India",
    coordinates: { lat: 15.2993, lng: 74.1240 },
    type: "Festival Scene",
    heroImage: "/images/journeys/goa/HERO_GOA.jpg",
    stats: {
      duration: "1 week - 6 months",
      season: "November - February",
      intensity: "Moderate to High",
      cost: "$15-50/day",
    },
    introduction:
      "Where psytrance was born. A former Portuguese colony turned beach paradise and electronic music mecca. Full moon parties, jungle raves, and a community of spiritual seekers and party nomads.",
    story: [
      {
        title: "Landing in Paradise",
        content:
          "Touchdown in Dabolim and immediately you feel it - the warm humid air, the smell of spices and sea. Rent a scooter and head north to Anjuna or Arambol. The beaches stretch golden, backed by coconut palms and shacks serving fresh fish and cold Kingfisher beer.",
      },
      {
        title: "The Jungle Party",
        content:
          "Deep in the jungle near Vagator, the bass starts at sunset. Massive sound systems hidden between trees, UV-reactive decorations, and hundreds of dancers entering the trance state. Psytrance here isn't just music - it's a technology for collective consciousness expansion. You dance until dawn, surrounded by travelers from every corner of the globe.",
      },
      {
        title: "Beach Culture",
        content:
          "Daytime is for recovery and integration. Beach shacks serve breakfast until 2pm. Yoga classes, Ayurvedic massages, and fire dancing lessons fill the afternoons. Long conversations about sacred geometry, DMT breakthroughs, and the meaning of reality become normal.",
      },
      {
        title: "The Market Scene",
        content:
          "Wednesday's Anjuna Flea Market is a circus of handicrafts, clothing, and characters. You bargain for Rajasthani textiles while a dreadlocked German plays didgeridoo. Saturday night in Arpora brings a different market - food, music, and hundreds of travelers reconnecting.",
      },
    ],
    microRituals: [
      {
        title: "Sunrise Swim",
        description:
          "After an all-night party, welcome the sun with a cleansing swim. The ocean resets everything.",
      },
      {
        title: "Chai Philosophy",
        description:
          "Find a beach shack, order masala chai, and engage in deep conversation with whoever sits nearby. This is where ideas cross-pollinate.",
      },
      {
        title: "Dance Meditation",
        description:
          "On the dancefloor, close your eyes and let the music move you. Surrender to the rhythm until the DJ, the dancers, and you become one.",
      },
      {
        title: "Sunset Gratitude",
        description:
          "Watch the sun sink into the Arabian Sea. Feel gratitude for the journey, the music, the freedom.",
      },
    ],
    gallery: [
      "/images/journeys/goa/gallery/1999-Goa-99_Lindsay-Kirk.jpg",
      "/images/journeys/goa/gallery/Dawn-after-Full-Moon-party-Anjuna-Beach-late-1970s-Photo-Tarot-Ray.png",
      "/images/journeys/goa/gallery/Goa-party.jpg",
      "/images/journeys/goa/gallery/goabeach-online.jpg",
      "/images/journeys/goa/gallery/intro-1671790845.jpg",
      "/images/journeys/goa/gallery/Untitled-design-11.jpg",
    ],
    tips: [
      "Rent a scooter for the season - it's the only way to truly explore",
      "North Goa (Anjuna, Vagator, Arambol) has the party scene. South Goa is quieter and more family-oriented",
      "Be cautious with substances - police do set up checkpoints, especially during peak season",
      "Respect the locals and the land - Goa has been too loved by tourists in some ways",
      "Check out Hilltop and Shiva Valley for legendary parties",
      "The party scene has changed since the 90s golden era, but the magic is still there if you look",
    ],
  },

  ayahuasca: {
    name: "Ayahuasca",
    slug: "ayahuasca",
    location: "Amazon Basin, Peru",
    coordinates: { lat: -3.7437, lng: -73.2516 },
    type: "Plant Medicine",
    heroImage: "/images/journeys/ayahuasca/gallery/4.jpg",
    stats: {
      duration: "7-14 days",
      season: "Year-round (dry season best)",
      intensity: "Very High",
      cost: "$800-2000",
    },
    introduction:
      "The grandmother medicine of the Amazon. A brew that shows you everything you need to see - beautiful and terrifying. A direct encounter with consciousness itself, guided by Shipibo maestros carrying ancient lineage.",
    story: [
      {
        title: "Journey to the Jungle",
        content:
          "From Iquitos or Pucallpa, you take a boat upriver. The modern world literally disappears behind you as the jungle closes in. Your retreat center is a collection of thatched malocas surrounded by infinite green. The sounds of howler monkeys and exotic birds replace traffic. Already you feel the medicine working - slowing you down, opening you up.",
      },
      {
        title: "The First Ceremony",
        content:
          "Night falls thick and absolute. Twenty people sit in a circle inside the maloca. The shaman begins his icaro - the medicine song. When your turn comes, you drink the bitter brew. Thirty minutes later, reality begins to dissolve. Geometric patterns, emotional purging, visions of serpents and jaguars. You're shown the traumas you carry, the lies you tell yourself. The medicine is relentless and compassionate in equal measure.",
      },
      {
        title: "The Deep Work",
        content:
          "Over multiple ceremonies, the medicine digs deeper. You relive childhood wounds. You experience death and rebirth. You meet entities that seem more real than reality. One night you're shown the interconnection of all life. Another night you vomit out years of accumulated pain. The shaman's songs guide you through realms you didn't know existed.",
      },
      {
        title: "Integration and Return",
        content:
          "The final days are for processing. Group sharing circles. Walks in the jungle feeling newly born. The challenge isn't the ceremony - it's bringing these lessons back to the modern world. You're different now. The question is: can you stay true to what you've seen?",
      },
    ],
    microRituals: [
      {
        title: "Dieta Preparation",
        description:
          "Before ceremony, follow the restricted diet. No salt, sugar, sex, or alcohol. This prepares your vessel for the medicine.",
      },
      {
        title: "Setting Intention",
        description:
          "Before drinking, speak your intention aloud or hold it in your heart. The medicine responds to sincere questions.",
      },
      {
        title: "Tobacco Prayer",
        description:
          "The shaman may blow mapacho (jungle tobacco) smoke over you. Receive it as a blessing and protection.",
      },
      {
        title: "Morning Gratitude",
        description:
          "After ceremony, greet the sunrise. Thank the medicine, the shamans, the jungle, and your own courage.",
      },
    ],
    gallery: [
      "/images/journeys/ayahuasca/gallery/1.jpg",
      "/images/journeys/ayahuasca/gallery/2.jpg",
      "/images/journeys/ayahuasca/gallery/3.jpg",
      "/images/journeys/ayahuasca/gallery/4.jpg",
      "/images/journeys/ayahuasca/gallery/5.jpg",
      "/images/journeys/ayahuasca/gallery/_igwana_Mystical_portrait_of_consciousness_transformation_dur_a7cc4d7c-decd-4b02-b469-135e9d05ce86_0.png",
    ],
    tips: [
      "Research your shaman and center carefully - there are both authentic healers and charlatans",
      "Follow the dietary restrictions seriously - they're not suggestions",
      "Bring a journal - you'll want to record insights before they fade",
      "The medicine may be physically challenging (purging is common) - that's part of the healing",
      "Set aside time after returning home for integration - the real work begins after ceremony",
      "Not everyone has visions - sometimes the medicine works in other ways",
      "This is not recreational - approach with respect and genuine intention",
    ],
  },

  "san-pedro": {
    name: "San Pedro",
    slug: "san-pedro",
    location: "Sacred Valley, Peru",
    coordinates: { lat: -13.3167, lng: -71.9833 },
    type: "Plant Medicine",
    heroImage: "/images/journeys/san-pedro/hero.jpg",
    stats: {
      duration: "1-3 days",
      season: "Year-round (dry season best)",
      intensity: "Moderate to High",
      cost: "$100-300",
    },
    introduction:
      "The grandfather cactus of the Andes. Where Ayahuasca takes you into the underworld, San Pedro lifts you to the mountains. A heart-opening journey with eyes wide open, walking in nature with expanded awareness.",
    story: [
      {
        title: "Preparation in the Sacred Valley",
        content:
          "The ceremony site is in the hills above Pisac or Urubamba. Snow-capped peaks surround you. The curandero (healer) prepares the cactus, slicing and boiling for hours. The medicine is green and bitter, but gentler than Ayahuasca. You drink with the rising sun.",
      },
      {
        title: "The Opening",
        content:
          "An hour after drinking, the world becomes more vivid. Colors brighten. The mountains seem alive, breathing. You feel a warmth spreading from your heart outward - this is San Pedro's signature. Everything becomes infused with love and beauty. You want to cry and laugh at the same time.",
      },
      {
        title: "Walking with Apu",
        content:
          "The curandero leads you on a walk into the mountains. Each step is a meditation. You understand why the Incas worshipped the Apus (mountain spirits) - you can feel their presence. The medicine allows direct communication with nature. A waterfall speaks to you. A stone holds ancient memory. This isn't hallucination - it's remembering how to listen.",
      },
      {
        title: "Integration and Descent",
        content:
          "As the sun begins to set, you return to the ceremony space. The medicine's peak has passed but you're still glowing. Sharing circle around the fire. Others speak of similar experiences - heart openings, nature connection, profound peace. You sleep deeply and wake renewed.",
      },
    ],
    microRituals: [
      {
        title: "Sunrise Drinking",
        description:
          "Take the medicine as the sun rises. Let the growing light mirror your expanding consciousness.",
      },
      {
        title: "Mountain Offering",
        description:
          "Create a small offering to the Apu (mountain spirit) - coca leaves, flowers, your intentions. Leave it at a sacred site.",
      },
      {
        title: "Heart Meditation",
        description:
          "When the medicine peaks, place your hand on your heart. Feel the warmth and opening. Breathe into it.",
      },
      {
        title: "Stone Connection",
        description:
          "Find a stone that calls to you. Hold it, feel its story. These stones have witnessed millennia. Listen to what they share.",
      },
    ],
    gallery: [
      "/images/journeys/san-pedro/gallery/_igwana_A_stylized_San_Pedro_cactus_with_an_open_third_eye_at_1189d46a-4b8b-4c66-9515-433ed8de2661_3.png",
      "/images/journeys/san-pedro/gallery/_igwana_Ancient_Incan_healer_with_obsidian-dark_eyes_holding__383a121b-5e5b-450e-857e-77037d94be06_0.png",
      "/images/journeys/san-pedro/gallery/_igwana_Close-up_of_weathered_hands_holding_ancient_ceramic_c_a0f4a443-7635-43f2-8bd7-55e08298e201_2.png",
      "/images/journeys/san-pedro/gallery/_igwana_Transcendent_moment_of_spiritual_awakening_at_Machu_P_1895deea-0be6-4f32-914b-a1ef8e6451e0_1.png",
      "/images/journeys/san-pedro/gallery/_igwana_Transcendent_moment_of_spiritual_awakening_at_Machu_P_1895deea-0be6-4f32-914b-a1ef8e6451e0_2.png",
      "/images/journeys/san-pedro/gallery/_igwana_A_stylized_San_Pedro_cactus_with_an_open_third_eye_at_c543b1d2-2ef9-4594-a708-9b6980b5af17_2.png",
    ],
    tips: [
      "San Pedro is generally gentler than Ayahuasca but still demands respect",
      "The experience is best in nature - not indoors",
      "The medicine lasts 8-12 hours, so start early",
      "Bring warm clothes - high altitude can be cold even when sunny",
      "Unlike Ayahuasca, you can eat lightly during San Pedro if needed",
      "The heart-opening effect can bring up buried emotions - let them flow",
      "Integration is easier than with Ayahuasca but still important",
    ],
  },

  iboga: {
    name: "Iboga",
    slug: "iboga",
    location: "Gabon, Central Africa",
    coordinates: { lat: -0.8037, lng: 11.6094 },
    type: "Plant Medicine",
    heroImage: "/images/journeys/iboga/hero.jpg",
    stats: {
      duration: "3-7 days",
      season: "Year-round",
      intensity: "Extreme",
      cost: "$2000-5000",
    },
    introduction:
      "The most intense plant medicine on Earth. Used by the Bwiti tribe for initiation rites, Iboga takes you through death and rebirth. A full flood dose is not a trip - it's a spiritual emergency that rewires your entire being.",
    story: [
      {
        title: "Entering the Bwiti Temple",
        content:
          "You arrive at the sanctuary - medical support on standby (Iboga is serious). The Bwiti practitioner explains: you will die tonight and be reborn tomorrow. He's not speaking metaphorically. The root bark is consumed in massive doses. The taste is overwhelmingly bitter. You lie down, knowing you won't move for many hours.",
      },
      {
        title: "The Long Night",
        content:
          "Unlike other psychedelics, Iboga doesn't play. Within an hour, you're immobilized and thrust into your own life story. Not just memories - you re-live every significant moment from a new perspective. Childhood traumas you'd forgotten. Times you hurt others. Times you were hurt. The medicine forces you to witness and take accountability. No escape. No distraction. Just you and the truth.",
      },
      {
        title: "Meeting the Ancestors",
        content:
          "Deep in the journey, you encounter what the Bwiti call the ancestors. Whether real entities or deep psyche, they speak with authority. They show you your patterns, your purpose, the ways you've betrayed yourself. Some describe a library where all knowledge resides. Others meet deceased loved ones. The common thread: these encounters feel more real than waking life.",
      },
      {
        title: "Rebirth",
        content:
          "After 24-48 hours, the intensity begins to lift. You can move again, though you're shaky and fragile. The world looks different. Colors are muted. Your old personality patterns feel like clothes that no longer fit. The real work is integrating what you've seen into who you'll become. Iboga doesn't give you the option to remain unchanged.",
      },
    ],
    microRituals: [
      {
        title: "Pre-Journey Fast",
        description:
          "Fast for at least 24 hours before Iboga. The medicine needs an empty vessel to work properly.",
      },
      {
        title: "Ancestor Invocation",
        description:
          "Before consuming, speak to your ancestors (blood or spiritual). Ask for their guidance and protection.",
      },
      {
        title: "Surrender Practice",
        description:
          "When the medicine comes on strong, consciously practice surrendering. Fighting it only makes it harder.",
      },
      {
        title: "Silence Integration",
        description:
          "After the journey, maintain silence for at least 24 hours. Let the lessons settle before speaking.",
      },
    ],
    gallery: [
      "/images/journeys/iboga/gallery/_igwana_Intense_iboga_root_vision_showing_ancestral_spirits_i_1dfd5ff2-b4cf-4178-b597-1f877c541533_2.png",
      "/images/journeys/iboga/gallery/_igwana_Transformative_portrait_of_consciousness_during_iboga_ed3795ad-45bb-4df5-a414-6e346b25e7b9_1.png",
      "/images/journeys/iboga/gallery/_igwana_Transformative_portrait_of_consciousness_during_iboga_ed3795ad-45bb-4df5-a414-6e346b25e7b9_3.png",
      "/images/journeys/iboga/gallery/_igwana_Panoramic_view_of_Pai_valley_in_northern_Thailand_fro_bd20c2c3-5468-46e6-8ca2-a9fb05e85343_3.png",
    ],
    tips: [
      "Get full medical screening before - Iboga can be dangerous with certain heart conditions",
      "Only work with experienced providers - this is not medicine for amateurs",
      "Clear your schedule for at least a week after - you'll need time to process",
      "Iboga has been used successfully for addiction treatment, but that requires specific protocols",
      "The experience can be psychologically overwhelming - consider your mental health carefully",
      "Unlike other medicines, Iboga shows you yourself with brutal honesty - be ready",
      "Many report single Iboga sessions as more transformative than years of therapy",
      "This is not recreational and should not be taken lightly",
    ],
  },

  "burning-man": {
    name: "Burning Man",
    slug: "burning-man",
    location: "Black Rock Desert, Nevada",
    coordinates: { lat: 40.7864, lng: -119.2065 },
    type: "Festival",
    heroImage: "/images/journeys/burning-man/hero.jpg",
    stats: {
      duration: "7-9 days",
      season: "Late August - Early September",
      intensity: "High",
      cost: "$500-5000+",
    },
    introduction:
      "A temporary city of 70,000 emerges in the Nevada desert for one week each year. Radical self-expression, radical self-reliance, and radical inclusion create a social experiment unlike anything else on Earth. Art, music, and consciousness exploration at scale.",
    story: [
      {
        title: "Arrival on the Playa",
        content:
          "You drive through the gate and volunteers welcome you home. Immediately you understand - this isn't a festival, it's a city. Streets laid out in concentric circles. Massive art installations dot the empty playa. Your camp becomes home for the week. The dust gets everywhere instantly. You're told: you're responsible for yourself here. And so it begins.",
      },
      {
        title: "The Gift Economy",
        content:
          "Nothing is for sale except ice and coffee (to stay legal). Everything else is gifted. Your neighbor offers you grilled cheese at 3am. A camp gives away frozen margaritas. Someone you just met invites you to their wedding ceremony. The currency is generosity and participation. In a week, you unlearn a lifetime of transactional thinking.",
      },
      {
        title: "Art and Transformation",
        content:
          "You climb inside a 50-foot wooden temple and find hundreds of notes from people releasing grief. You dance inside a giant lotus flower that pulses with LED lights. You watch the sun rise from inside a geodesic dome while a jazz band improvises. The art here isn't behind velvet ropes - it's interactive, immersive, often burnable. Art as experience, not commodity.",
      },
      {
        title: "The Burn",
        content:
          "Saturday night, 70,000 people surround the Man. When it ignites, the crowd erupts. Fire dancers spin. The heat is intense even from 100 feet back. When the structure collapses, something releases collectively. Sunday they burn the Temple - this one is silent, reverential. People cry openly. All impermanence is made visible.",
      },
    ],
    microRituals: [
      {
        title: "Sunrise on the Playa",
        description:
          "At least once, stay out all night and watch the sun rise over the empty desert. The silence and scale are profound.",
      },
      {
        title: "Temple Letter",
        description:
          "Write a letter in the Temple - to someone you've lost, to your past self, to what you're releasing. Leave it to burn.",
      },
      {
        title: "Random Gifting",
        description:
          "Carry something to give away - art, food, compliments, hugs. Experience giving without expectation of return.",
      },
      {
        title: "Dust Storm Meditation",
        description:
          "When a whiteout dust storm hits (and it will), don't just hide. Sit with it. Let it scour you clean.",
      },
    ],
    gallery: [
      "/images/journeys/burning-man/gallery/3.jpg",
      "/images/journeys/burning-man/gallery/4.jpg",
      "/images/journeys/burning-man/gallery/_igwana_Massive_art_installation_at_Burning_Man_festival_in_N_328d21ab-2068-430a-a13d-53c95701acbc_0.png",
      "/images/journeys/burning-man/gallery/_igwana_Massive_art_installation_at_Burning_Man_festival_in_N_328d21ab-2068-430a-a13d-53c95701acbc_3.png",
      "/images/journeys/burning-man/gallery/_igwana_Ecstatic_dancing_around_massive_burning_effigy_during_9451a4c9-5e71-483f-b259-9e3a5ba04c0e_1.png",
      "/images/journeys/burning-man/gallery/_igwana_Panoramic_aerial_view_of_Black_Rock_City_during_Burni_e9b0a4fb-1a94-41df-9edb-8251268706a3_1.png",
      "/images/journeys/burning-man/gallery/_igwana_at_Burning_Man_festival_in_Nevada_desert__colorful_LE_d7d0f1de-bb23-455f-9257-6c1068269834_1.png",
    ],
    tips: [
      "Tickets sell out fast and are expensive - plan many months ahead",
      "The desert is harsh - bring way more water than you think you need",
      "Dust-proof everything. EVERYTHING. It's alkaline and gets everywhere",
      "Bring a bike - walking the entire city is exhausting",
      "Camp with a group if possible - solo camping is tough for first-timers",
      "MOOP (matter out of place) is serious - pack out everything you bring in",
      "The exodus can take 6-8 hours - prepare or leave early Monday",
      "Read the Survival Guide multiple times before going",
      "Bring gifts to share - participation is the point",
      "The burn has commercialized significantly, but the core principles remain powerful",
    ],
  },

  "qoyllur-riti": {
    name: "Qoyllur Riti",
    slug: "qoyllur-riti",
    location: "Sinakara Valley, Peru",
    coordinates: { lat: -13.7167, lng: -71.1667 },
    type: "Mountain Pilgrimage",
    heroImage: "/images/journeys/qoyllur-riti/hero.jpg",
    stats: {
      duration: "3-5 days",
      season: "May-June (varies yearly)",
      intensity: "Extreme",
      cost: "$50-200",
    },
    introduction:
      "The most important pilgrimage in the Andes. Tens of thousands trek to 19,000 feet to honor the glacier-dwelling Christ and the ancient Apu spirits. Catholic and indigenous traditions blend in a ceremony that predates the Spanish conquest.",
    story: [
      {
        title: "The Ascent Begins",
        content:
          "You start from the village of Mawallani at 12,000 feet. Already the air is thin. Peruvian families, indigenous communities, and a handful of outsiders begin the trek together. The trail winds through high-altitude grasslands where alpacas graze. Every step is an offering. Pilgrims carry stones representing sins or burdens - they'll leave them at the sanctuary.",
      },
      {
        title: "Arrival at the Sanctuary",
        content:
          "The Sinakara Valley appears like something from another world - a glacial sanctuary surrounded by jagged peaks reaching 20,000 feet. Thousands have arrived before you. Tents dot the valley. The church sits at the base of the glacier. At this altitude, simply breathing is work. Every movement is slowed, intentional, prayer-like.",
      },
      {
        title: "The Night of the Ukukus",
        content:
          "The ukukus - ritual dancers dressed as bear-men - prepare for their climb. At night, they'll ascend to the glacier itself (now forbidden due to climate change, but the ritual continues in modified form). These men bridge the worlds - half human, half mythical creature. Their dance tells the story of the Apu protecting the people. Watching them is witnessing a tradition thousands of years old.",
      },
      {
        title: "Mass Under the Stars",
        content:
          "At 4am, thousands gather for mass at 19,000 feet. The cold is brutal. Your breath crystallizes. When the sun finally rises over the peaks, illuminating the glacier, the entire valley erupts in prayer and song. It's impossible not to be moved. The boundaries between indigenous and Catholic, ancient and modern, dissolve. Only devotion remains.",
      },
    ],
    microRituals: [
      {
        title: "Stone Offering",
        description:
          "Carry a stone from home representing what you wish to release. Leave it at the sanctuary as an offering to the Apu.",
      },
      {
        title: "Coca Leaf Prayer",
        description:
          "Chew coca leaves (legal and traditional in Peru) while ascending. Offer some to Pachamama (Earth Mother) before using.",
      },
      {
        title: "Sunrise Prayer",
        description:
          "Wake before dawn on the main festival day. Face the glacier and pray as the sun illuminates the peaks.",
      },
      {
        title: "Water Blessing",
        description:
          "Collect a small bottle of glacial meltwater. Many believe it carries healing properties and mountain blessings.",
      },
    ],
    gallery: [
      "/images/journeys/qoyllur-riti/gallery/_igwana_Ancient_Quechua_festival_dancers_with_faces_painted_i_1991ed61-8e41-4d8e-bee3-e1d0166728be_2.png",
      "/images/journeys/qoyllur-riti/gallery/_igwana_Mystical_night_scene_of_sacred_glacier_at_Qoyllur_Rit_592e6113-0841-45b5-86e8-54096fc4aa43_1.png",
      "/images/journeys/qoyllur-riti/gallery/_igwana_Exhausted_native_incan_festival_dancer_collapsed_in_v_6763be8b-0e39-4066-88d9-8d91a643e4ad_1.png",
      "/images/journeys/qoyllur-riti/gallery/_igwana_Ancient_Quechua_festival_dancers_with_faces_painted_i_1991ed61-8e41-4d8e-bee3-e1d0166728be_3.png",
      "/images/journeys/qoyllur-riti/gallery/_igwana_Close-up_of_dust-covered_hands_holding_small_wrapped__57c59d92-1d9a-490b-81f6-93d181280887_2.png",
    ],
    tips: [
      "Acclimatize in Cusco (11,000 ft) for at least 2-3 days before attempting this",
      "Altitude sickness is a real danger - bring medication and descend if symptoms are severe",
      "Bring extreme cold weather gear - it can drop below freezing at night",
      "Rent or buy a sleeping bag rated for below zero temperatures",
      "Coca tea and leaves help with altitude - they're legal and traditional in Peru",
      "The exact dates vary each year based on the Catholic calendar (58 days after Easter)",
      "This is an active religious pilgrimage - respect the ceremonies and the people",
      "Very few tourists attend - you'll be one of the only foreigners present",
    ],
  },

  palenque: {
    name: "\tPalenque",
    slug: "palenque",
    location: "Chiapas, Mexico",
    coordinates: { lat: 17.4843, lng: -92.0464 },
    type: "Ancient Ruins",
    heroImage: "/images/journeys/palenque/hero.jpg",
    stats: {
      duration: "2-5 days",
      season: "November - March",
      intensity: "Moderate",
      cost: "$30-80/day",
    },
    introduction:
      "\tDeep in the Chiapas jungle, Palenque rises from the mist like a vision from another era. Ancient Mayan pyramids wrapped in rainforest, howler monkeys overhead, and an energy that defies rational explanation. This is where archaeology meets mysticism.",
    story: [
      {
        title: "Entering the Jungle Temple",
        content:
          "You arrive at dawn when the mist still clings to the pyramids. The ruins emerge gradually from the jungle - limestone structures that have stood for over 1,500 years. The Temple of Inscriptions towers above, containing hieroglyphs that took decades to decode. Walking these plazas, you're not just seeing history - you're feeling it. The Mayans understood something about cosmology and consciousness that modern science is only beginning to grasp.",
      },
      {
        title: "The Palace of Pacal",
        content:
          "Inside the Temple of Inscriptions lies the tomb of K'inich Janaab Pakal, one of the greatest Mayan rulers. His jade death mask and elaborate sarcophagus lid depict him descending into Xibalba - the underworld - only to be reborn as a god. Standing here, you understand that the Mayans didn't fear death. They saw it as transformation, as passage to another dimension. The jungle around you vibrates with life and death in constant cycle.",
      },
      {
        title: "Jungle Medicine",
        content:
          "The surrounding Lacandon jungle is one of the most biodiverse places on Earth. Local guides - descendants of the ancient Mayans - know every plant, every medicine. They speak of the jungle as a living library. Copal resin for cleansing, tobacco for protection, various leaves and roots for healing. In the evenings, they share stories of their ancestors who built these temples without metal tools or wheels. How? They say the answer lies in consciousness, not technology.",
      },
      {
        title: "Roberto Barrios Waterfall",
        content:
          "A short trip from the ruins brings you to cascading turquoise pools hidden in the jungle. Roberto Barrios waterfall is sacred to the Maya - natural pools for bathing and purification. You swim in water that's been flowing here since long before Palenque was built. Fish nibble your feet. The sound of falling water becomes a meditation. This is the baptism the jungle offers freely.",
      },
    ],
    microRituals: [
      {
        title: "Dawn Temple Visit",
        description:
          "Arrive at the ruins at opening time (8am). Watch the mist burn off the pyramids as the jungle wakes. The early light is magical.",
      },
      {
        title: "Copal Offering",
        description:
          "Purchase copal resin from local vendors. Burn it as an offering at the base of a temple. The Mayans have done this for millennia.",
      },
      {
        title: "Howler Monkey Meditation",
        description:
          "Find a quiet spot in the ruins. Listen to the howler monkeys calling. Their roar echoes through the jungle like ancient voices.",
      },
      {
        title: "Waterfall Cleansing",
        description:
          "Visit Roberto Barrios or Misol-Ha waterfall. Bathe in the sacred waters. Let the cascade wash away what no longer serves you.",
      },
    ],
    gallery: [
      "/images/journeys/palenque/gallery/_igwana_Ancient_Mayan_Temple_of_Inscriptions_at_Palenque_emer_a4082b92-342f-4367-b997-163f86e61769_1.png",
      "/images/journeys/palenque/gallery/_igwana_Solitary_figure_in_meditation_pose_at_base_of_towerin_eac4f03b-1370-42f0-af11-5d0e4bcd3f85_1.png",
      "/images/journeys/palenque/gallery/_igwana_Panoramic_view_from_top_of_Mayan_temple_looking_acros_5e99262f-495a-47ac-9952-9abf3ff33352_3.png",
      "/images/journeys/palenque/gallery/_igwana_Mystical_vision_of_Mayan_cosmic_calendar_geometry_ove_1c4e4db8-0dbe-4e7e-8c27-676379a14e0e_2.png",
      "/images/journeys/palenque/gallery/_igwana_Night_scene_under_star-filled_sky_outside_Mayan_ruins_75372819-2cbf-4f0f-a8ae-fbce8fd164c1_1.png",
      "/images/journeys/palenque/gallery/_igwana_Whimsical_portrait_of_consciousness_during_mushroom_j_b1382022-248e-459a-87ed-bebea9579905_0.png",
      "/images/journeys/palenque/gallery/_igwana_Ancient_Mayan_Temple_of_Inscriptions_at_Palenque_emer_a4082b92-342f-4367-b997-163f86e61769_2.png",
      "/images/journeys/palenque/gallery/_igwana_Solitary_figure_in_meditation_pose_at_base_of_towerin_eac4f03b-1370-42f0-af11-5d0e4bcd3f85_2.png",
      "/images/journeys/palenque/gallery/_igwana_Surreal_mushroom_vision_in_Thai_jungle_with_reality_w_3e69fc20-a743-4005-b78b-7262886e04e6_2.png",
    ],
    tips: [
      "Stay in Palenque town (5km from ruins) - much cheaper than hotels near the site",
      "Hire a local guide - they bring the ruins to life with stories and knowledge",
      "Bring mosquito repellent - the jungle is humid and buggy",
      "Visit the ruins early morning or late afternoon to avoid heat and crowds",
      "The site museum is excellent - don't skip it",
      "Bring water and snacks - limited food options inside the archaeological zone",
      "Wear good walking shoes - the ruins involve climbing steep steps",
      "Respect the site - no climbing on restricted pyramids or touching carvings",
    ],
  },

  bagan: {
    name: "Bagan",
    slug: "bagan",
    location: "Mandalay Region, Myanmar",
    coordinates: { lat: 21.1717, lng: 94.8586 },
    type: "Buddhist Pilgrimage",
    heroImage: "/images/journeys/bagan/hero.jpg",
    stats: {
      duration: "3-7 days",
      season: "November - February",
      intensity: "Moderate",
      cost: "$25-60/day",
    },
    introduction:
      "Over 2,000 Buddhist temples and pagodas dot the plains of Bagan, Myanmar. Built between the 11th and 13th centuries, this archaeological wonder offers a glimpse into a civilization devoted entirely to spiritual awakening. Sunrise here is a meditation in itself.",
    story: [
      {
        title: "The Plain of Ten Thousand Temples",
        content:
          "Your first view of Bagan stops you cold. Thousands of brick temples stretch to the horizon across an arid plain. Red brick stupas of every size, from massive complexes to tiny shrines. You rent an e-bike and begin exploring - there's no tour that can do justice to this place. You must wander, get lost, discover your own sacred spots. Each temple holds Buddha images, frescoes, and the prayers of millions who came before.",
      },
      {
        title: "Sunrise from Shwesandaw",
        content:
          "You wake at 4:30am and ride through darkness to Shwesandaw Pagoda. By 5am, you're climbing the steep steps. At the top, you're surrounded by dozens of other pilgrims and travelers, all waiting in silence. Then the sun breaks the horizon. Hot air balloons lift off, drifting between temples. Golden light illuminates 2,000 stupas simultaneously. For twenty minutes, no one speaks. There's nothing to say.",
      },
      {
        title: "Buddhist Meditation Retreat",
        content:
          "Several temples offer meditation courses - some for beginners, others intensive. You spend three days at a monastery learning Vipassana. Noble silence. Four hours of sitting meditation daily. Walking meditation in the gardens. The monks teach with kindness and precision. By day three, your mind has quieted enough to actually hear yourself think. Or rather, to notice that most thoughts aren't worth thinking.",
      },
      {
        title: "Meeting the Monks",
        content:
          "Young monks in saffron robes are everywhere - studying, sweeping temples, collecting alms at dawn. They're curious about foreigners and eager to practice English. You're invited to share tea at a monastery. They ask about your country, your spiritual practice. You realize these teenagers have dedicated their lives to something you're only visiting. Their humility is both inspiring and humbling.",
      },
    ],
    microRituals: [
      {
        title: "Temple Sunrise",
        description:
          "Wake early for sunrise at one of the pagodas. The light transforming the plains is worth the early alarm. Bring a headlamp for the stairs.",
      },
      {
        title: "Monk Alms Giving",
        description:
          "Wake at 5:30am and offer food to monks making their morning rounds. It's a quiet act of generosity that connects you to daily Buddhist practice.",
      },
      {
        title: "Sunset Temple Meditation",
        description:
          "Find a quiet temple at sunset. Sit with the Buddha statues as the day ends. Watch the light fade through ancient archways.",
      },
      {
        title: "Water Offering",
        description:
          "Pour water at the base of a Buddha statue as an offering. It's a simple gesture of respect practiced throughout Myanmar.",
      },
    ],
    gallery: [
      "/images/journeys/bagan/gallery/_igwana_Ancient_Buddhist_stupas_of_Bagan_emerging_from_golden_f5c76c24-09e5-466b-8754-bd196b81184c_2.png",
      "/images/journeys/bagan/gallery/_igwana_Mystical_DMT_vision_overlaying_Bagan_temple_complex_a_1e80fba7-9326-4c57-9cdd-77d7f8f417f0_3.png",
      "/images/journeys/bagan/gallery/_igwana_Solitary_figure_sitting_cross-legged_in_meditation_po_0986e929-c96d-4469-9572-10cc9d25c4e4_0.png",
      "/images/journeys/bagan/gallery/_igwana_Panoramic_aerial_view_of_Bagans_two_thousand_temples__8542ea04-3b70-4a4e-b4f5-c81e0d22ec3e_2.png",
      "/images/journeys/bagan/gallery/_igwana_Ethereal_portrait_of_consciousness_transformation_dur_a610fc66-1986-4a6a-a9dc-49521e5750b4_0.png",
      "/images/journeys/bagan/gallery/_igwana_Mystical_DMT_vision_overlaying_Bagan_temple_complex_a_1e80fba7-9326-4c57-9cdd-77d7f8f417f0_0.png",
    ],
    tips: [
      "Rent an e-bike to explore - it's the best way to see multiple temples at your own pace",
      "Check current Myanmar travel restrictions - political situation can affect tourism",
      "Dress modestly - shoulders and knees covered when entering temples",
      "Remove shoes before entering any pagoda - bring socks as ground gets hot",
      "Bring cash (USD or Kyat) - ATMs can be unreliable",
      "Download maps offline - internet can be spotty",
      "Sunrise spots get crowded - arrive early or find less-known templates",
      "Respect meditation spaces - maintain silence in active temples",
      "Support local guides and businesses - tourism helps preserve the temples",
      "The dry season (Nov-Feb) is best - hot season (March-May) is brutal",
    ],
  },

  "sacred-valley": {
    name: "Sacred Valley",
    slug: "sacred-valley",
    location: "Cusco Region, Peru",
    coordinates: { lat: -13.3167, lng: -71.9833 },
    type: "Sacred Site",
    heroImage: "/images/journeys/sacred-valley/hero.jpg",
    stats: {
      duration: "5-14 days",
      season: "April - October",
      intensity: "Moderate",
      cost: "$40-120/day",
    },
    introduction:
      "The heartland of the Inca Empire. Terraced mountains, ancient fortresses, living Quechua culture, and an energy that draws spiritual seekers from around the world. More than ruins - this is a landscape that still pulses with sacred power.",
    story: [
      {
        title: "Entering the Valley of the Incas",
        content:
          "From Cusco, the road winds down into the Urubamba Valley. Mountains tower on both sides, their slopes carved into agricultural terraces that have been continuously farmed for 800 years. Villages like Pisac, Ollantaytambo, and Urubamba dot the valley floor. The air here is easier to breathe than Cusco - around 9,000 feet instead of 11,000. You immediately feel why the Incas chose this place as the heart of their empire. Every mountain is an Apu (spirit), every spring is sacred, every stone potentially placed with intention.",
      },
      {
        title: "Ollantaytambo: The Living Inca Town",
        content:
          "Ollantaytambo is the only Inca town still inhabited as it was 500 years ago. Narrow stone streets with water channels running down the center. Massive fortress walls where the Incas actually defeated the Spanish conquistadors in battle. You climb the terraces at sunset and understand the genius of Inca engineering - perfect stonework without mortar, astronomical alignments, and water management that still works today. Local Quechua families still live in the original Inca houses. Their children play in courtyards that have echoed with life for half a millennium.",
      },
      {
        title: "Ceremony with a Q'ero Shaman",
        content:
          "You're invited to a despacho ceremony with Don Alberto, a Q'ero paqo (shaman). The Q'ero are considered the last direct descendants of the Incas, living in villages above 14,000 feet. The ceremony involves creating an offering to Pachamama (Earth Mother) and the Apus. Flower petals, coca leaves, llama fat, candies - each element has meaning. Don Alberto speaks in Quechua, occasionally translating. He talks about ayni - sacred reciprocity. Everything is relationship. The mountains are not resources to extract from - they are relatives to honor. When the offering is complete, he burns it, sending prayers to the spirits. You feel something shift.",
      },
      {
        title: "Machu Picchu: The Dream Made Stone",
        content:
          "You wake at 4am and hike from Aguas Calientes. By dawn you're entering Machu Picchu with the first group, before the crowds. Mist swirls between the mountains. The citadel emerges gradually - perfect walls, temples, and terraces clinging to a mountain ridge. Despite the tourists and commercialization, the power of this place is undeniable. The Incas built here not just for defense or agriculture, but for spiritual purposes we're still trying to understand. You sit at the Intihuatana (hitching post of the sun) and meditate. Time becomes fluid. You understand why people call this the navel of the world.",
      },
    ],
    microRituals: [
      {
        title: "Coca Leaf Reading",
        description:
          "Find a local paqo to read coca leaves for you. It's an ancient divination practice that can offer surprising insights. Approach with respect, not curiosity.",
      },
      {
        title: "Mountain Meditation",
        description:
          "Choose an Apu (sacred mountain) visible from your location. Sit facing it daily. Over time, you may feel a relationship develop.",
      },
      {
        title: "Water Ceremony",
        description:
          "Visit a sacred spring (like Tambomachay). Make an offering of coca leaves and give thanks before drinking. The water here is considered healing.",
      },
      {
        title: "Sunrise at Ruins",
        description:
          "Visit any of the major sites at sunrise - Pisac, Ollantaytambo, Moray. The early light transforms the stones and the tourist crowds haven't arrived.",
      },
    ],
    gallery: [
      "/images/journeys/sacred-valley/gallery/_igwana_Massive_torchlight_procession_snaking_up_steep_Andean_e5ec0ae6-f68a-4dd8-9b33-20f9a2469591_3.png",
      "/images/journeys/sacred-valley/gallery/_igwana_Massive_torchlight_procession_snaking_up_steep_Andean_e5ec0ae6-f68a-4dd8-9b33-20f9a2469591_1.png",
      "/images/journeys/sacred-valley/gallery/_igwana_Massive_torchlight_procession_snaking_up_steep_Andean_e5ec0ae6-f68a-4dd8-9b33-20f9a2469591_0.png",
      "/images/journeys/sacred-valley/gallery/_igwana_Intense_close-up_of_weathered_hands_tying_traditional_b3652ec0-237c-455f-ad90-113fcdbfb3f5_0.png",
    ],
    tips: [
      "Acclimatize in Cusco before diving into activities - altitude sickness is real",
      "Stay in Ollantaytambo or Urubamba for a more authentic experience than touristy Aguas Calientes",
      "Book Machu Picchu tickets months in advance - they sell out quickly",
      "Learn basic Quechua greetings - locals deeply appreciate it",
      "Avoid rainy season (December-March) unless you like mud",
      "Support local Q'ero artisans - their textiles are masterworks and they need the income",
      "Take time to simply be - the valley isn't just about checking off ruins",
      "Coca tea and leaves are legal and essential for altitude - use them",
      "Many ceremonies are offered to tourists - seek authentic practitioners, not performers",
    ],
  },

  "eclipse-festival": {
    name: "Eclipse Festival",
    slug: "eclipse-festival",
    location: "Quebec, Canada",
    coordinates: { lat: 45.5236, lng: -72.2997 },
    type: "Festival",
    heroImage: "/images/journeys/eclipse-festival/hero.jpg",
    stats: {
      duration: "4-5 days",
      season: "Late June",
      intensity: "High",
      cost: "$300-800",
    },
    introduction:
      "Deep in the forests of Quebec, Eclipse Festival brings together 10,000 souls for a communion of psytrance, sacred geometry, and consciousness exploration. One of the world's most respected transformational festivals, where the music is ceremony and the dancefloor is temple.",
    story: [
      {
        title: "Arrival in the Forest",
        content:
          "You drive through Quebec farmland until suddenly you're in dense forest. The festival site appears like a secret city - multiple stages, art installations, camping areas spreading through the trees. The main stage is a cathedral of sound with speaker stacks three stories high. Flags from every nation flutter in the breeze. You set up camp among fellow travelers who've come from Australia, Brazil, Israel, Japan. Already you feel it - that festival energy where normal rules dissolve and anything becomes possible.",
      },
      {
        title: "The Dancefloor as Ritual",
        content:
          "When the bass drops on the first night, something shifts. This isn't just a party - it's a mass meditation with a 150 BPM heartbeat. Progressive psytrance rolls into full-on, then darkpsy as the night deepens. The crowd moves as one organism. Eyes closed, arms raised, bodies undulating to frequencies designed to induce trance states. The stage visuals pulse with fractals and sacred geometry. Around 4am, you understand: the DJ is a shaman, the music is medicine, and you're in ceremony with 5,000 others who get it.",
      },
      {
        title: "The Healing Area",
        content:
          "During the day, you explore beyond the main stage. The healing area offers sound baths, Reiki, acupuncture, and integration circles. You sit in a sharing circle where strangers become soul family in minutes. One woman talks about healing childhood trauma. A man shares about his ayahuasca journey. Another person simply cries and is held by the group. No one judges. This is the other side of the festival - not just the celebration, but the deep work of healing and connection.",
      },
      {
        title: "Sunrise on the Hill",
        content:
          "After dancing all night, you hike to the hill overlooking the festival at dawn. Hundreds of others have the same idea. The sun rises over the forest, illuminating the smoke and haze from the valley below. Bass still thumps from the stages. Someone starts playing handpan. Others join with didgeridoo and guitar. For an hour, you're part of an impromptu ceremony welcoming the day. These are your people. This is your tribe.",
      },
    ],
    microRituals: [
      {
        title: "Pre-Festival Intention",
        description:
          "Before entering the festival, sit quietly and set an intention. What do you seek? What do you want to release? Let this guide your experience.",
      },
      {
        title: "Sacred Dance",
        description:
          "On the dancefloor, dedicate one full night to dancing as meditation. No phones, no talking, just movement and music for hours. Let it take you somewhere.",
      },
      {
        title: "Sunrise Gratitude",
        description:
          "Stay out for at least one sunrise. As the light comes, feel gratitude for the music, the people, the experience. This moment won't come again.",
      },
      {
        title: "Connection Ritual",
        description:
          "Make real connections - not just surface. Sit with new friends and share your real story. Ask about theirs. Festival bonds can be profound.",
      },
    ],
    gallery: [
      "/images/journeys/eclipse-festival/gallery/5cac2138-8b14-4b46-8cf1-9d234817ba4a.JPG",
      "/images/journeys/eclipse-festival/gallery/6f27e213-cb3a-4a4a-b805-09a71aa323d2.JPG",
      "/images/journeys/eclipse-festival/gallery/IMG_1012.JPG",
      "/images/journeys/eclipse-festival/gallery/IMG_1107.JPG",
      "/images/journeys/eclipse-festival/gallery/IMG_1111.jpeg",
      "/images/journeys/eclipse-festival/gallery/IMG_1112.jpeg",
      "/images/journeys/eclipse-festival/gallery/IMG_1115.JPG",
      "/images/journeys/eclipse-festival/gallery/IMG_1116.JPG",
    ],
    tips: [
      "Tickets sell out fast - usually within days of release. Join the mailing list.",
      "Bring serious camping gear - nights can be cold even in summer",
      "Ear plugs for sleeping - the music is 24/7",
      "The festival is cashless after entry - load your wristband with credits",
      "Pace yourself - it's a marathon, not a sprint. You can't dance for 96 hours straight.",
      "The workshops and healing areas are as valuable as the music - explore everything",
      "Make friends with your campsite neighbors - they're your festival family",
      "Respect consent and boundaries - this community takes that seriously",
      "Stay hydrated and fed - losing yourself in the music is fun, but take care of your body",
      "Sunday closing ceremony is powerful - don't miss it",
    ],
  },

  havana: {
    name: "Havana",
    slug: "havana",
    location: "Havana, Cuba",
    coordinates: { lat: 23.1136, lng: -82.3666 },
    type: "Cultural Immersion",
    heroImage: "/images/journeys/havana/hero.jpg",
    stats: {
      duration: "5-14 days",
      season: "November - April",
      intensity: "Moderate",
      cost: "$40-100/day",
    },
    introduction:
      "A city frozen in time yet vibrantly alive. Havana is crumbling colonial architecture, vintage American cars, Afro-Cuban spirituality, son music pouring from doorways, and a people who've mastered the art of living rich while having little. More than nostalgia - Havana is a portal to another way of being.",
    story: [
      {
        title: "Landing in the Time Capsule",
        content:
          "You step off the plane and immediately feel it - thick Caribbean air, the smell of cigars and diesel. The drive from the airport is your first glimpse: 1950s Chevys and Buicks everywhere, pastel colonial buildings in various states of decay, people sitting on stoops watching life pass by. Check into a casa particular (family home) in Habana Vieja. Your host, Yolanda, serves you café cubano so strong your heart races. She warns you: Havana will confuse you, frustrate you, and change you. She's right.",
      },
      {
        title: "The Rhythm of the Streets",
        content:
          "Havana operates on its own logic. Nothing works efficiently, everything takes longer than expected, and somehow it all comes together. You wander the Malecón at sunset - couples dancing, fishermen casting lines, friends sharing bottles of rum. Music is everywhere. Not from speakers, but live - a tres guitar in a doorway, percussion on upturned buckets, a full salsa band in a neighborhood bar. Everyone dances. Watching is not an option. An old man pulls you into the circle and suddenly you're spinning, laughing, part of something ancient.",
      },
      {
        title: "Santería: The Hidden Religion",
        content:
          "Cuba is officially atheist, but Santería (Afro-Cuban religion mixing Yoruba deities with Catholic saints) thrives in the shadows. Your casa host's daughter wears all white - she's completing her year as an initiate of Obatalá. She invites you to a tambor (drum ceremony). In a small apartment, twenty people crowd around three massive drums. The drummers begin. The rhythm is intoxicating, hypnotic. People dance into trance states. One woman begins moving differently - eyes rolled back, speaking in a voice not her own. The orisha (deity) has mounted her. Whether you believe or not, the power is undeniable. You feel it in your bones.",
      },
      {
        title: "Conversations That Matter",
        content:
          "What strikes you most isn't the architecture or the music - it's the quality of human connection. Without internet distractions, without consumerism as religion, Cubans have retained something precious: the art of conversation. You spend an evening on a rooftop with new friends. A doctor who earns $40/month but loves his work. A physicist who drives a taxi. A young artist dreaming of travel. They debate philosophy, recite poetry, tell jokes until your sides hurt. You realize: they're poor in money but rich in things that actually matter. And you, from the wealthy world, might have it backwards.",
      },
    ],
    microRituals: [
      {
        title: "Malecón Sunset Walk",
        description:
          "Every evening, walk the Malecón seawall at sunset. Watch the waves crash, observe the city's social life unfold. This is Havana's living room.",
      },
      {
        title: "Casa de la Música",
        description:
          "Go to a live music venue - Casa de la Música, Fábrica de Arte Cubano, or any neighborhood spot. Dance. Even if you think you can't, you can in Havana.",
      },
      {
        title: "Coffee with Locals",
        description:
          "Buy coffee at a peso window (not tourist cafe). Stand with Cubans having their morning shot. Strike up conversation. This is how you learn.",
      },
      {
        title: "Offering to the Sea",
        description:
          "Santería practitioners often make offerings to Yemayá (goddess of the ocean). Bring flowers to the Malecón and toss them in the water with a prayer or wish.",
      },
    ],
    gallery: [
      "/images/journeys/havana/gallery/_igwana_Crumbling_Soviet-era_apartment_in_Havana_with_chipped_c0c43377-3bc6-4833-a78d-e872e47aa1f3_0.png",
      "/images/journeys/havana/gallery/_igwana_Four_strangers_holding_hands_in_emotional_circle_duri_6a16036b-cc9e-4665-af99-df24fd527db7_1.png",
      "/images/journeys/havana/gallery/_igwana_Close-up_of_weathered_hands_holding_small_MDMA_capsul_b4cdaf77-39b9-4cdf-8eef-69afa2724cab_3.png",
      "/images/journeys/havana/gallery/_igwana_Empty_Havana_streets_at_dawn_with_crumbling_colonial__29d21666-6224-4b1c-afdc-25960caa7982_1.png",
      "/images/journeys/havana/gallery/_igwana_Transformative_portrait_of_consciousness_during_MDMA__0b556795-e90d-4994-9307-066d6f25ff8a_3.png",
      "/images/journeys/havana/gallery/_igwana_Close-up_of_weathered_hands_holding_small_MDMA_capsul_b4cdaf77-39b9-4cdf-8eef-69afa2724cab_2.png",
    ],
    tips: [
      "Bring cash (Euros or USD) - credit cards from US banks don't work, ATMs are unreliable",
      "Stay in casas particulares, not hotels - you'll experience real Cuban life",
      "There are two currencies - CUC (tourist) and CUP (local peso). Learn the difference.",
      "Internet is limited and expensive - embrace the digital detox",
      "Food in restaurants can be mediocre - eat where locals eat, or ask your casa host to cook",
      "The people are incredibly warm, but hustlers exist - be friendly but aware",
      "Learn some Spanish - English is less common than in other Caribbean destinations",
      "Bring gifts from home (medicine, toiletries, clothes) to share with Cuban friends",
      "Travel beyond Havana if possible - Viñales, Trinidad, Santiago offer different perspectives",
      "Go soon - Cuba is changing rapidly as it opens up to tourism and capitalism",
    ],
  },

};
