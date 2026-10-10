export type ScreenType = 'voyages' | 'sanctuaries' | 'expeditions' | 'concierge' | 'journal' | 'saved';

export type CurrencyType = 'USD' | 'EUR' | 'GBP' | 'AUD' | 'LKR';
export type LanguageType = 'EN' | 'DE' | 'FR' | 'RU';

export interface TourPackage {
  id: string;
  title: string;
  durationDays: number;
  badge: string;
  highlightRoute: string;
  description: string;
  keyFeatures: string[];
  basePriceUSD: number;
  image: string;
  detailedDays: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    elevation?: string;
    stayType: string;
  }[];
}

export interface Sanctuary {
  id: string;
  name: string;
  region: string;
  category: 'Tea Estate' | 'Coastal Villa' | 'Wildlife Camp' | 'Wellness Resort';
  tagline: string;
  pricePerNightUSD: number;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
  elevation?: string;
  highlights: string[];
}

export interface Expedition {
  id: string;
  title: string;
  subtitle: string;
  region: string;
  difficulty: 'Gentle' | 'Moderate' | 'Challenging' | 'Expert';
  duration: string;
  elevation?: string;
  image: string;
  description: string;
  highlights: string[];
  season: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  location: string;
  category: 'beaches' | 'mountains' | 'wildlife' | 'culture' | 'drone';
  imageUrl: string;
  alt: string;
  aspectRatio?: string;
  cameraInfo?: string;
}

export interface VideoStory {
  id: string;
  tag: string;
  title: string;
  duration: string;
  description: string;
  thumbnail: string;
  accentColor: string;
  embedDetails?: string;
}

export interface CustomTourQuote {
  origin: string;
  travelers: string;
  dates: string;
  duration: string;
  preferences: string[];
  accommodation: string;
  pace: string;
  notes: string;
  estimatedPriceUSD: number;
  referenceNumber: string;
  createdAt: string;
}
