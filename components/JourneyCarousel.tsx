"use client";

import { useState } from "react";
import Link from "next/link";

interface Journey {
  name: string;
  slug: string;
  location: string;
  description: string;
  type: string;
  image: string;
}

interface JourneyCarouselProps {
  journeys: Journey[];
}

export default function JourneyCarousel({ journeys }: JourneyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? journeys.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === journeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentJourney = journeys[currentIndex];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Carousel Container */}
      <div className="relative w-[90%] md:w-[80%] mx-auto">
        {/* Main Image and Content */}
        <Link
          href={`/journeys/${currentJourney.slug}`}
          className="group block relative"
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl carousel-height">
            <img
              src={currentJourney.image}
              alt={currentJourney.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1.5 bg-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase rounded-full border border-amber-500/40">
                  {currentJourney.type}
                </span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-zinc-100 mb-4 group-hover:text-amber-400 transition-colors">
                {currentJourney.name}
              </h3>
              <p className="text-lg md:text-xl text-amber-400 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {currentJourney.location}
              </p>
              <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-3xl">
                {currentJourney.description}
              </p>
            </div>
          </div>
        </Link>

        {/* Previous/Next Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Previous journey"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 hover:border-amber-500 rounded-full flex items-center justify-center transition-all hover:scale-110 z-10"
          aria-label="Next journey"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-3 mt-8 flex-wrap justify-center max-w-4xl">
        {journeys.map((journey, index) => (
          <button
            key={journey.slug}
            onClick={() => goToSlide(index)}
            className={`group flex flex-col items-center transition-all ${
              index === currentIndex ? "scale-110" : ""
            }`}
            aria-label={`Go to ${journey.name}`}
          >
            <div
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-amber-400 scale-125"
                  : "bg-zinc-700 hover:bg-amber-500/50"
              }`}
            />
            <span
              className={`text-xs mt-2 transition-all duration-300 ${
                index === currentIndex
                  ? "text-amber-400 font-semibold"
                  : "text-zinc-500 group-hover:text-amber-500/70"
              }`}
            >
              {journey.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
