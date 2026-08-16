"use client";

import { useEffect, useRef } from "react";

/**
 * Real interactive map (MapLibre + free CARTO dark raster tiles, no API key),
 * tinted on-brand. maplibre-gl is imported dynamically so it never touches SSR.
 * Scroll-zoom disabled so it doesn't hijack the page scroll.
 */
export default function JourneyMap({ lat, lng }: { lat: number; lng: number }) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: any;
    let cancelled = false;
    (async () => {
      const mod: any = await import("maplibre-gl");
      const maplibregl = mod.default ?? mod;   // v4 exposes .default; v6 uses named exports
      const MapCtor = maplibregl.Map ?? mod.Map;
      const MarkerCtor = maplibregl.Marker ?? mod.Marker;
      await import("maplibre-gl/dist/maplibre-gl.css");
      if (cancelled || !el.current || !MapCtor) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      map = new MapCtor({
        container: el.current,
        style: {
          version: 8,
          sources: {
            carto: {
              type: "raster",
              tiles: [
                "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
                "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
                "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png",
              ],
              tileSize: 256,
              attribution: "© OpenStreetMap © CARTO",
            },
          },
          layers: [{ id: "carto", type: "raster", source: "carto" }],
        },
        center: [lng, lat],
        zoom: 7,
        attributionControl: { compact: true },
        interactive: true,
        dragRotate: false,
        pitchWithRotate: false,
      });
      map.scrollZoom.disable();
      map.on("load", () => {
        const marker = document.createElement("div");
        marker.className = "map__marker";
        new MarkerCtor({ element: marker }).setLngLat([lng, lat]).addTo(map);
        if (!reduce) map.easeTo({ center: [lng + 0.15, lat + 0.08], duration: 16000, easing: (t: number) => t });
      });
    })();
    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, [lat, lng]);

  return (
    <div className="map">
      <div ref={el} id="mapgl" />
      <div className="map__tintlayer" />
      <div className="map__overlay" />
      <div className="map__coords">{Math.abs(lat).toFixed(4)}° {lat >= 0 ? "N" : "S"}&nbsp;&nbsp;{Math.abs(lng).toFixed(4)}° {lng >= 0 ? "E" : "W"}</div>
    </div>
  );
}
