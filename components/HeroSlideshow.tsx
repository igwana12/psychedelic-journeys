"use client";

import { useState, useEffect } from "react";

const heroImages = [
  "/images/journeys/kasol/hero.jpg",
  "/images/journeys/kumbh-mela/hero.jpg",
  "/images/journeys/ayahuasca/hero.jpg",
  "/images/journeys/san-pedro/hero.jpg",
  "/images/journeys/iboga/hero.jpg",
  "/images/journeys/burning-man/hero.jpg",
  "/images/journeys/qoyllur-riti/hero.jpg",
  "/images/journeys/palenque/hero.jpg",
  "/images/journeys/bagan/hero.jpg",
  "/images/journeys/sacred-valley/hero.jpg",
  "/images/journeys/eclipse-festival/hero.jpg",
  "/images/journeys/havana/hero.jpg",
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-30" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
