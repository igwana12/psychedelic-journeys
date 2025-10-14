export interface JourneyData {
  name: string;
  slug: string;
  location: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  type: string;
  heroImage: string;
  stats: {
    duration: string;
    season: string;
    intensity: string;
    cost: string;
  };
  introduction: string;
  story: {
    title: string;
    content: string;
  }[];
  microRituals: {
    title: string;
    description: string;
  }[];
  gallery: string[];
  tips: string[];
}
