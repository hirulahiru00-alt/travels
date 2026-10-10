import React, { useState } from 'react';
import { TourPackage, VideoStory, GalleryPhoto, CurrencyType, CustomTourQuote } from '../types';
import { TOUR_PACKAGES, VIDEO_STORIES, GALLERY_PHOTOS, CURRENCY_RATES, CURRENCY_SYMBOLS } from '../data/travelData';

interface VoyagesScreenProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onPlayVideo: (vid: VideoStory) => void;
  onOpenPhoto: (photo: GalleryPhoto) => void;
  onNavigateToBuilder: () => void;
  currency: CurrencyType;
  onSaveCustomQuote: (quote: CustomTourQuote) => void;
}

export const VoyagesScreen: React.FC<VoyagesScreenProps> = ({
  onSelectPackage,
  onPlayVideo,
  onOpenPhoto,
  onNavigateToBuilder,
  currency,
  onSaveCustomQuote,
}) => {
  // Gallery filter state
  const [activeGalleryFilter, setActiveGalleryFilter] = useState<string>('all');

  // Interactive Builder state inside Voyages
  const [originCountry, setOriginCountry] = useState('');
  const [travelers, setTravelers] = useState('2 Travelers (Couple)');
  const [dates, setDates] = useState('');
  const [duration, setDuration] = useState('6-8 Days');
  const [selectedStyles, setSelectedStyles] = useState<string[]>([
    '🌴 Beach & Coast',
    '🐘 Wildlife Safaris',
    '🏛 Ancient Culture',
  ]);
  const [accommodation, setAccommodation] = useState('Boutique Luxury & Tea Bungalows');
  const [pace, setPace] = useState('Balanced Highlights');
  const [notes, setNotes] = useState('');

  const styleOptions = [
    '🌴 Beach & Coast',
    '🐘 Wildlife Safaris',
    '🏛 Ancient Culture',
    '🏔 Misty Highlands',
    '📸 Photography',
    '🚁 Drone Video',
    '🥾 Hiking & Trails',
    '💍 Honeymoon',
    '🏄 Surfing',
  ];

  const toggleStyle = (style: string) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const rate = CURRENCY_RATES[currency];
    const symbol = CURRENCY_SYMBOLS[currency];

    // Estimated price calculation
    const baseDays = duration.includes('3-5') ? 4 : duration.includes('6-8') ? 7 : duration.includes('9-12') ? 10 : 14;
    const estUSD = baseDays * 195 * (travelers.includes('1') ? 1 : travelers.includes('2') ? 1.8 : 3.2);

    const ref = `UTT-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    const newQuote: CustomTourQuote = {
      origin: originCountry || 'International',
      travelers,
      dates: dates || 'Flexible / Upcoming',
      duration,
      preferences: selectedStyles.length > 0 ? selectedStyles : ['Highlights & Nature'],
      accommodation,
      pace,
      notes,
      estimatedPriceUSD: estUSD,
      referenceNumber: ref,
      createdAt: new Date().toLocaleDateString(),
    };

    onSaveCustomQuote(newQuote);

    // Also trigger WhatsApp
    const msg = `Hello Unknown Travels & Tours, I would like to create a custom Sri Lanka tour (Ref #${ref}):%0A` +
      `- Origin: ${encodeURIComponent(originCountry || 'International')}%0A` +
      `- Travelers: ${encodeURIComponent(travelers)}%0A` +
      `- Dates: ${encodeURIComponent(dates || 'Upcoming')} (${encodeURIComponent(duration)})%0A` +
      `- Interests: ${encodeURIComponent(selectedStyles.join(', '))}%0A` +
      `- Stay Level: ${encodeURIComponent(accommodation)}%0A` +
      `- Pace: ${encodeURIComponent(pace)}%0A` +
      `- Special Requests: ${encodeURIComponent(notes || 'None')}%0A` +
      `- Est Quote: ${symbol}${Math.round(estUSD * rate).toLocaleString()}`;

    window.open(`https://wa.me/94778084913?text=${msg}`, '_blank');
  };

  // Filtered gallery photos
  const filteredPhotos = activeGalleryFilter === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeGalleryFilter);

  return (
    <div className="flex flex-col w-full text-[#dde4e2] max-w-4xl mx-auto">
      {/* 1. HERO SECTION */}
      <section className="relative w-full px-4 sm:px-6 pt-4 pb-6 flex flex-col gap-4">
        <div className="relative w-full rounded-xl overflow-hidden bg-[#161d1c] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_25px_-5px_rgba(216,158,70,0.15)] border border-[#242b2a]">
          <div
            className="bg-cover bg-center w-full min-h-[460px] sm:min-h-[500px] flex flex-col justify-end p-5 sm:p-8 relative"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQWqb9lLs5wfWAWfNvSeaNXtF0M8xxOM8c59xrGmuHR79mB2TMYHiTmESCK9UuoQUw7yC_37oxCTBHwVSjle_m35qtBAQDDrb_Is8z_3jrkx8PPE2Gn-GWK0BtY-Nduz1WPe-S9FBpFB18MSJP9xuO5jX59EN3AOkQZAJL9bRDMPCbhtSuXUigi9GotCknpeCowfCk8cv_UfPr9f8zPNKMGTRabco-2c9FXLM9scgNX1jSVeMjRiv8ew')",
            }}
          >
            {/* Gradient Scrim for deep cinematic contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090f0f] via-[#090f0f]/60 to-transparent" />

            <div className="relative z-10 flex flex-col gap-3">
              {/* Tag Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#2f3635]/80 backdrop-blur-md text-[#f9bb60] font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold border border-[#f9bb60]/20">
                  🇱🇰 Curated Local Guides
                </span>
                <span className="px-3 py-1 rounded-full bg-[#2f3635]/80 backdrop-blur-md text-[#a0d1c1] font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold border border-[#a0d1c1]/20">
                  🚁 4K Drone Footage
                </span>
                <span className="px-3 py-1 rounded-full bg-[#2f3635]/80 backdrop-blur-md text-[#abcec2] font-mono text-[10px] sm:text-xs uppercase tracking-wider font-semibold border border-[#abcec2]/20">
                  ✈️ Bespoke Itineraries
                </span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl text-white leading-tight font-normal">
                Discover Sri Lanka{' '}
                <span className="italic text-[#f9bb60] font-serif">Beyond the Ordinary.</span>
              </h2>

              <p className="font-body text-sm sm:text-base text-[#c1c8c4] leading-relaxed max-w-2xl">
                Explore iconic destinations, secluded highland sanctuaries, and untamed coastlines with Unknown Travels &amp; Tours.
              </p>

              {/* Primary CTAs */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href="#destinations"
                    className="h-12 flex items-center justify-center rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs sm:text-sm uppercase font-bold tracking-wider transition-all text-center shadow-lg cursor-pointer"
                  >
                    Explore Island
                  </a>
                  <a
                    href="#custom-builder"
                    className="h-12 flex items-center justify-center rounded-lg bg-[#242b2a] hover:bg-[#2f3635] text-[#dde4e2] font-mono text-xs sm:text-sm uppercase tracking-wider transition-colors text-center border border-[#414845] cursor-pointer"
                  >
                    Plan My Trip
                  </a>
                </div>

                <a
                  href="https://wa.me/94778084913?text=Hello%20Unknown%20Travels%20%26%20Tours,%20I%20want%20to%20explore%20Sri%20Lanka%20tours."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 w-full flex items-center justify-center gap-2 rounded-lg bg-[#0d2e26] hover:bg-[#16362e] text-[#abcec2] font-mono text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md border border-[#abcec2]/20 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  Chat Directly With Local Concierge
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE SRI LANKA: KEY DESTINATIONS */}
      <section className="w-full px-4 sm:px-6 py-4 flex flex-col gap-4" id="destinations">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Iconic Sanctuary Coordinates
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl text-white">Explore Sri Lanka</h3>
          <p className="font-body text-xs sm:text-sm text-[#c1c8c4]">
            From mist-laden highland tea ridges to wild leopard sanctuaries and ancient kingdoms.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="flex flex-col gap-5">
          {/* Sigiriya */}
          <div className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-md flex flex-col">
            <div
              className="bg-cover bg-center w-full h-48 sm:h-56 relative"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC9j-4sJ1dm5tNyR7HzSeT6-hLaGSeCz7wYdZDFVuFU2VHkGZ6yEo38T74TpZp541c4jnmrccGj6madf0rLW4zHPf78BN-UX16Vj05Yl8tOPtOuYuckrE_71qE24N2SW3FxPV9UVWn3xWApizYbANe_WlGVGl4n-V_fu8eSMK1IolsAi5bW4W3gDfsl6KuzHMDu26wefHKqUiWwgEQSFPjjrr6_KOnKtkwDIO-niipUv9oTf9Y5vExj1Q')",
              }}
            >
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#090f0f]/80 backdrop-blur-md text-[#f9bb60] font-mono text-[10px] uppercase font-bold border border-[#f9bb60]/30">
                Central Province
              </span>
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="font-headline text-lg sm:text-xl text-white">Sigiriya &amp; Lion Rock</h4>
                <span className="font-mono text-[11px] text-[#abcec2] uppercase font-bold">
                  UNESCO Site
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#c1c8c4] leading-relaxed">
                5th-century palace citadel balanced atop a 200m vertical monolith surrounded by landscaped water gardens.
              </p>
              <div className="flex flex-wrap gap-1.5 py-1">
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Pidurangala Sunrise
                </span>
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Water Gardens
                </span>
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Royal Frescoes
                </span>
              </div>
              <div className="pt-2 border-t border-[#242b2a] flex items-center justify-between">
                <button
                  onClick={() => onSelectPackage(TOUR_PACKAGES[0])}
                  className="text-[#f9bb60] hover:text-[#ffddb2] font-mono text-xs uppercase tracking-wider flex items-center gap-1 font-bold cursor-pointer"
                >
                  Explore Route <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <span className="font-mono text-[10px] text-[#8b928f]">Elevation 349m</span>
              </div>
            </div>
          </div>

          {/* Ella */}
          <div className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-md flex flex-col">
            <div
              className="bg-cover bg-center w-full h-48 sm:h-56 relative"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAinRpQgrDijfZlSOAN-gpNwPDe_Uywn_gVL-uSp5sGfRmjU9U6kcYggPFfk7dh9sVDBpqEWJRu2qRP-_Lb8u5F6TjXxT_WixHt4BlxC4NQQ7pjRtV9DYop_hmPs2UmGGnvfeNe1HeYO01vF_uXd-aa1Z5_poSTbZQNPIMVG5Xf9xH7lqlMRw6ZFmHrMJgcEDE78QL6kDcmnkGYIwnuwlAdzUcepuQK5r6cfMraVshr5hEtb6ScApokGQ')",
              }}
            >
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#090f0f]/80 backdrop-blur-md text-[#f9bb60] font-mono text-[10px] uppercase font-bold border border-[#f9bb60]/30">
                Highlands
              </span>
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="font-headline text-lg sm:text-xl text-white">Ella Peaks &amp; Nine Arch</h4>
                <span className="font-mono text-[11px] text-[#a0d1c1] uppercase font-bold">
                  Cloud Forests
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#c1c8c4] leading-relaxed">
                Verdant highland passes, mist-draped colonial stone viaducts, cascading waterfalls, and quiet tea walks.
              </p>
              <div className="flex flex-wrap gap-1.5 py-1">
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Little Adam's Peak
                </span>
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Nine Arch Viaduct
                </span>
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Ravana Falls
                </span>
              </div>
              <div className="pt-2 border-t border-[#242b2a] flex items-center justify-between">
                <button
                  onClick={() => onSelectPackage(TOUR_PACKAGES[1])}
                  className="text-[#f9bb60] hover:text-[#ffddb2] font-mono text-xs uppercase tracking-wider flex items-center gap-1 font-bold cursor-pointer"
                >
                  Explore Route <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <span className="font-mono text-[10px] text-[#8b928f]">Elevation 1,041m</span>
              </div>
            </div>
          </div>

          {/* Yala Safari */}
          <div className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-md flex flex-col">
            <div
              className="bg-cover bg-center w-full h-48 sm:h-56 relative"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_8n75lj8OGglKdhcKGKfTbLf4FMGv1-ALUNMzyqRKFGohksAnERYptT6cAqVtRZtlxEJ83wAHxKeQRFuvEbtKCZVckSe-FmnHdKeRogNi38B8TON9mDlYpDbgVxuyUCNBv780DLFdh4Ig9-aPXVuCuUWBDxVDtBk-MZVAKWM_ODM9bZW6jv_2J4fIsH7YFdEg_VzEyHkyqVzjTKCUeWf0gEDC-irB8OFQ6rdhIp5pww9AVdN_RbHldg')",
              }}
            >
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#090f0f]/80 backdrop-blur-md text-[#f9bb60] font-mono text-[10px] uppercase font-bold border border-[#f9bb60]/30">
                Southern Wilds
              </span>
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="font-headline text-lg sm:text-xl text-white">Yala Wildlife Sanctuary</h4>
                <span className="font-mono text-[11px] text-[#f9bb60] uppercase font-bold">
                  Apex Leopards
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#c1c8c4] leading-relaxed">
                Highest leopard density in the world, roaming alongside Asian elephants, sloth bears, and lagoon birdlife.
              </p>
              <div className="flex flex-wrap gap-1.5 py-1">
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Private 4x4 Game Drives
                </span>
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Leopard Tracking
                </span>
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Tuskers
                </span>
              </div>
              <div className="pt-2 border-t border-[#242b2a] flex items-center justify-between">
                <button
                  onClick={() => onSelectPackage(TOUR_PACKAGES[2])}
                  className="text-[#f9bb60] hover:text-[#ffddb2] font-mono text-xs uppercase tracking-wider flex items-center gap-1 font-bold cursor-pointer"
                >
                  Explore Route <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <span className="font-mono text-[10px] text-[#8b928f]">Coastal Scrub</span>
              </div>
            </div>
          </div>

          {/* Galle Fort & Mirissa */}
          <div className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-md flex flex-col">
            <div
              className="bg-cover bg-center w-full h-48 sm:h-56 relative"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCbyrqNUdlmP37KD8PbwfPPvc4gPjKtrGrLzWis0TjV2ymfK8r68MDYuf9OxI7mnzmD8cGYYRSQ0_CZzfQBNfvKgBNatsrLHqTyVnS-cA0LjBfH74FPyfIL5wXE9hNpcOJP3M7hJ3Aa3-qFcoEB32FnHHC08gA4nWqlLDyq8F0qmuuiXr4XKgXadGX5w8KHccePNbUzPs9SHa7D7KzDXMX8kHHCuaTzxipQKmnazj_a8-DHr3ckzSkXQ')",
              }}
            >
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#090f0f]/80 backdrop-blur-md text-[#f9bb60] font-mono text-[10px] uppercase font-bold border border-[#f9bb60]/30">
                South Coast
              </span>
            </div>
            <div className="p-4 sm:p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h4 className="font-headline text-lg sm:text-xl text-white">Galle Fort &amp; Mirissa</h4>
                <span className="font-mono text-[11px] text-[#abcec2] uppercase font-bold">
                  Ocean &amp; Heritage
                </span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#c1c8c4] leading-relaxed">
                17th-century cobblestone ramparts, boutique colonial villas, and pelagic blue whale expeditions in Mirissa.
              </p>
              <div className="flex flex-wrap gap-1.5 py-1">
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Dutch Bastions
                </span>
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Blue Whales
                </span>
                <span className="px-2 py-0.5 rounded bg-[#242b2a] text-[#c1c8c4] font-mono text-[10px]">
                  Sunset Bastion Walk
                </span>
              </div>
              <div className="pt-2 border-t border-[#242b2a] flex items-center justify-between">
                <button
                  onClick={() => onSelectPackage(TOUR_PACKAGES[3])}
                  className="text-[#f9bb60] hover:text-[#ffddb2] font-mono text-xs uppercase tracking-wider flex items-center gap-1 font-bold cursor-pointer"
                >
                  Explore Route <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
                <span className="font-mono text-[10px] text-[#8b928f]">Ocean Waypoint</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Curated Regions Grid */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#090f0f] border border-[#242b2a] flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-wider text-[#8b928f]">
            Additional Curated Regions
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono text-xs text-[#dde4e2]">
            <div className="p-2.5 rounded bg-[#161d1c] border border-[#242b2a] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f9bb60] text-[18px]">temple_hindu</span>
              <span>Kandy &amp; Temple</span>
            </div>
            <div className="p-2.5 rounded bg-[#161d1c] border border-[#242b2a] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f9bb60] text-[18px]">coffee</span>
              <span>Nuwara Eliya Tea</span>
            </div>
            <div className="p-2.5 rounded bg-[#161d1c] border border-[#242b2a] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f9bb60] text-[18px]">surfing</span>
              <span>Arugam Bay Surf</span>
            </div>
            <div className="p-2.5 rounded bg-[#161d1c] border border-[#242b2a] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f9bb60] text-[18px]">account_balance</span>
              <span>Anuradhapura</span>
            </div>
            <div className="p-2.5 rounded bg-[#161d1c] border border-[#242b2a] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f9bb60] text-[18px]">sailing</span>
              <span>Trincomalee Coast</span>
            </div>
            <div className="p-2.5 rounded bg-[#161d1c] border border-[#242b2a] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#f9bb60] text-[18px]">beach_access</span>
              <span>Bentota Lagoons</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DISCOVER SRI LANKA’S HIDDEN GEMS */}
      <section className="w-full px-4 sm:px-6 py-4 flex flex-col gap-4">
        <div className="p-5 sm:p-6 rounded-xl bg-[#0d2e26] border border-[#abcec2]/30 text-[#dde4e2] shadow-xl flex flex-col gap-3 relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-[#f9bb60]/10 blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f9bb60] text-[22px]">auto_awesome</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#f9bb60] font-bold">
              Off-Grid Ceylon
            </span>
          </div>

          <h3 className="font-headline text-2xl sm:text-3xl text-white">
            Sri Lanka’s Untamed Hidden Gems
          </h3>

          <p className="font-body text-xs sm:text-sm text-[#abcec2] leading-relaxed">
            Private natural waterfalls untouched by bus tours, secret golden sand bays flanked by coconut palms, and remote Knuckles mountain ranges accessible only through our bespoke local network.
          </p>

          <div className="grid grid-cols-2 gap-2 pt-1 font-mono">
            <div className="p-2.5 rounded bg-[#161d1c]/80 border border-[#242b2a] flex flex-col gap-0.5">
              <span className="text-[11px] text-[#f9bb60] uppercase font-bold">Knuckles Range</span>
              <span className="text-xs text-[#dde4e2]">Misty cloud forest treks</span>
            </div>
            <div className="p-2.5 rounded bg-[#161d1c]/80 border border-[#242b2a] flex flex-col gap-0.5">
              <span className="text-[11px] text-[#f9bb60] uppercase font-bold">Tangalle Cove</span>
              <span className="text-xs text-[#dde4e2]">Secluded secret ocean bays</span>
            </div>
            <div className="p-2.5 rounded bg-[#161d1c]/80 border border-[#242b2a] flex flex-col gap-0.5">
              <span className="text-[11px] text-[#f9bb60] uppercase font-bold">Diyaluma Pools</span>
              <span className="text-xs text-[#dde4e2]">Natural cliffside plunge baths</span>
            </div>
            <div className="p-2.5 rounded bg-[#161d1c]/80 border border-[#242b2a] flex flex-col gap-0.5">
              <span className="text-[11px] text-[#f9bb60] uppercase font-bold">Ritigala Ruins</span>
              <span className="text-xs text-[#dde4e2]">Forest monastic sanctuaries</span>
            </div>
          </div>

          <a
            href="https://wa.me/94778084913?text=Hello%20Unknown%20Travels%20%26%20Tours,%20I%20want%20to%20discover%20Sri%20Lanka%27s%20hidden%20gems."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 h-12 w-full flex items-center justify-center gap-2 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs sm:text-sm uppercase tracking-wider font-bold shadow-md transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">explore</span>
            Discover Hidden Gems on WhatsApp
          </a>
        </div>
      </section>

      {/* 4. CHOOSE YOUR SRI LANKAN JOURNEY (Tour Packages) */}
      <section className="w-full px-4 sm:px-6 py-4 flex flex-col gap-4" id="tour-packages">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Signature Itineraries
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl text-white">Curated Tour Packages</h3>
          <p className="font-body text-xs sm:text-sm text-[#c1c8c4]">
            Carefully paced by local specialists. Completely customizable to your travel desires.
          </p>
        </div>

        {/* 4 Packages List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOUR_PACKAGES.map((pkg) => {
            const rate = CURRENCY_RATES[currency];
            const symbol = CURRENCY_SYMBOLS[currency];
            const convertedPrice = Math.round(pkg.basePriceUSD * rate);

            return (
              <div
                key={pkg.id}
                className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-md p-4 sm:p-5 flex flex-col justify-between gap-3 hover:border-[#f9bb60]/40 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#242b2a] text-[#f9bb60] font-mono text-[10px] uppercase font-bold">
                      {pkg.badge}
                    </span>
                    <span className="font-mono text-xs text-[#abcec2] font-semibold">
                      From {symbol}{convertedPrice.toLocaleString()}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-headline text-lg sm:text-xl text-white">
                      {pkg.title}
                    </h4>
                    <span className="font-mono text-[11px] text-[#8b928f] block">
                      {pkg.highlightRoute}
                    </span>
                  </div>

                  <p className="font-body text-xs text-[#c1c8c4] leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="flex flex-col gap-1 pt-1">
                    {pkg.keyFeatures.slice(0, 2).map((kf, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[#dde4e2]">
                        <span className="material-symbols-outlined text-[#f9bb60] text-[15px] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span className="truncate">{kf}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#242b2a]">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="h-10 flex items-center justify-center rounded-lg bg-[#242b2a] hover:bg-[#2f3635] text-[#dde4e2] font-mono text-xs uppercase tracking-wider text-center cursor-pointer transition-colors"
                  >
                    View Details
                  </button>
                  <a
                    href={`https://wa.me/94778084913?text=${encodeURIComponent(
                      `Hello Unknown Travels & Tours, I am interested in booking the "${pkg.title}" (${pkg.durationDays} Days) package.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 flex items-center justify-center gap-1 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider text-center transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">chat</span> WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. INTERACTIVE CUSTOM TOUR BUILDER */}
      <section className="w-full px-4 sm:px-6 py-4 flex flex-col gap-4" id="custom-builder">
        <div className="p-5 sm:p-6 rounded-xl bg-[#161d1c] border border-[#242b2a] shadow-xl flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
              Interactive Itinerary Studio
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl text-white">
              Build Your Own Adventure
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#c1c8c4]">
              Customize every detail of your dream trip. Our local tour designers craft it in real-time.
            </p>
          </div>

          <form onSubmit={handleCustomSubmit} className="flex flex-col gap-3 font-mono text-xs">
            {/* Country & Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase text-[#8b928f]">Country of Origin</label>
                <input
                  type="text"
                  value={originCountry}
                  onChange={(e) => setOriginCountry(e.target.value)}
                  placeholder="e.g. UK, Germany, USA, Australia"
                  className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body text-xs outline-none focus:border-[#f9bb60] placeholder:text-[#8b928f]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase text-[#8b928f]">Travelers</label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body text-xs outline-none focus:border-[#f9bb60]"
                >
                  <option value="1 Traveler (Solo)">1 Traveler (Solo)</option>
                  <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                  <option value="3-4 Travelers (Family / Friends)">3-4 Travelers (Family / Friends)</option>
                  <option value="5+ Travelers (Group)">5+ Travelers (Group)</option>
                </select>
              </div>
            </div>

            {/* Dates & Duration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase text-[#8b928f]">Dates / Month</label>
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  placeholder="e.g. November 2025, or Dec 15-28"
                  className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body text-xs outline-none focus:border-[#f9bb60] placeholder:text-[#8b928f]"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase text-[#8b928f]">Duration (Days)</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body text-xs outline-none focus:border-[#f9bb60]"
                >
                  <option value="3-5 Days">3 - 5 Days</option>
                  <option value="6-8 Days">6 - 8 Days</option>
                  <option value="9-12 Days">9 - 12 Days</option>
                  <option value="14+ Days">14+ Days (Grand Expedition)</option>
                </select>
              </div>
            </div>

            {/* Preference Chips */}
            <div className="flex flex-col gap-1.5 pt-1">
              <label className="text-[11px] uppercase text-[#8b928f]">
                Preferred Travel Styles &amp; Highlights (Multi-select)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {styleOptions.map((st) => {
                  const isSelected = selectedStyles.includes(st);
                  return (
                    <button
                      key={st}
                      type="button"
                      onClick={() => toggleStyle(st)}
                      className={`px-3 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#f9bb60] text-[#452b00] border border-[#f9bb60] shadow-sm'
                          : 'bg-[#242b2a] text-[#c1c8c4] border border-[#414845] hover:text-white'
                      }`}
                    >
                      {st}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accommodation Tier & Trip Pace */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase text-[#8b928f]">Accommodation Level</label>
                <select
                  value={accommodation}
                  onChange={(e) => setAccommodation(e.target.value)}
                  className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body text-xs outline-none focus:border-[#f9bb60]"
                >
                  <option value="Boutique Luxury & Tea Bungalows">Boutique Luxury &amp; Tea Bungalows</option>
                  <option value="4-Star Comfort & Eco Resorts">4-Star Comfort &amp; Eco Resorts</option>
                  <option value="Curated Heritage & Homestays">Curated Heritage &amp; Homestays</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[11px] uppercase text-[#8b928f]">Trip Pace</label>
                <select
                  value={pace}
                  onChange={(e) => setPace(e.target.value)}
                  className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body text-xs outline-none focus:border-[#f9bb60]"
                >
                  <option value="Relaxed & Immersive">Relaxed &amp; Immersive</option>
                  <option value="Balanced Highlights">Balanced Highlights</option>
                  <option value="High Adventure & Active">High Adventure &amp; Active</option>
                </select>
              </div>
            </div>

            {/* Special Requests */}
            <div className="flex flex-col gap-1 pt-1">
              <label className="text-[11px] uppercase text-[#8b928f]">Special Requests or Interests</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Specific interests like tea plucking, vegan food, quiet beaches, surf coach..."
                rows={2}
                className="p-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body text-xs outline-none focus:border-[#f9bb60] placeholder:text-[#8b928f]"
              />
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-2 pt-2">
              <button
                type="submit"
                className="h-12 w-full rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs sm:text-sm uppercase font-bold tracking-wider shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">tune</span>
                Request My Custom Tour Quote
              </button>
              <button
                type="button"
                onClick={handleCustomSubmit}
                className="h-12 w-full rounded-lg bg-[#0d2e26] hover:bg-[#16362e] text-[#abcec2] font-mono text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 border border-[#abcec2]/20 transition-all cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Send Itinerary Directly to WhatsApp
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 6. TOURIST BOOKING & INQUIRY SYSTEM */}
      <section className="w-full px-4 sm:px-6 py-4 flex flex-col gap-4">
        <div className="p-5 sm:p-6 rounded-xl bg-[#090f0f] border border-[#242b2a] flex flex-col gap-3 shadow-md">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f9bb60] text-[22px]">verified_user</span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#f9bb60] font-bold">
              Direct Inquiry Protocol
            </span>
          </div>
          <h3 className="font-headline text-xl text-white">Bookings &amp; Personalized Quotes</h3>
          <p className="font-body text-xs sm:text-sm text-[#c1c8c4] leading-relaxed">
            Every expedition across Sri Lanka is managed with private transport and individualized itinerary coordination. No automatic credit card charges: all confirmations are finalized directly with our concierge team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3.5 rounded-lg bg-[#161d1c] border border-[#242b2a] flex items-center gap-3">
              <span className="material-symbols-outlined text-[#abcec2] text-[26px] shrink-0">
                flight_land
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-white uppercase font-bold">
                  Airport Pickup Included
                </span>
                <span className="font-body text-[11px] text-[#8b928f]">
                  Bandaranaike Intl (CMB) or Mattala (HRI) with air-conditioned private vehicle.
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-[#161d1c] border border-[#242b2a] flex items-center gap-3">
              <span className="material-symbols-outlined text-[#abcec2] text-[26px] shrink-0">
                support_agent
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-white uppercase font-bold">
                  24/7 Dedicated Concierge
                </span>
                <span className="font-body text-[11px] text-[#8b928f]">
                  Direct live WhatsApp coordination with your private driver-guide throughout the trip.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SPECIALTY CINEMATIC MEDIA SERVICES */}
      <section className="w-full px-4 sm:px-6 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Unknown Studio Exclusives
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl text-white">Cinematic Media Services</h3>
          <p className="font-body text-xs sm:text-sm text-[#c1c8c4]">
            Sri Lanka provides the backdrop; our film crew crafts your unforgettable cinematic keepsake.
          </p>
        </div>

        {/* Media Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-md flex flex-col justify-between">
            <div>
              <div
                className="bg-cover bg-center w-full h-44 relative"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBw2B4R42v_7KgW_A969XHk4KwhLhoedjCrOEC-Y73uu92c4isz1M_h62GzNv7nuEyjcAxI1bR5myzywsJCPE-7Kb862eUobZ0q1vFwkzjeN-A-Lb-1W7yYSsbKShLa68KjdQyOc0GlQkYfFTzkS2iBGu39DxTQ90cm4A19O0-dinHA0kgOrSl2rEGv20901L6fHpu-6lRDTtvT2MH_q3_58ib4wmD-RGvE9CWnecDJ6QYPschUznbJDQ')",
                }}
              >
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#090f0f]/80 backdrop-blur-md text-[#f9bb60] font-mono text-[10px] uppercase font-bold">
                  4K Cinema Edit
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1.5">
                <h4 className="font-headline text-lg text-white">Turn Journey Into a Movie</h4>
                <p className="font-body text-xs text-[#c1c8c4] leading-relaxed">
                  Professional filmmaker accompanying you on select segments. Includes a 3-minute 4K cinematic film &amp; reels.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <a
                href="https://wa.me/94778084913?text=Hello,%20I%E2%80%99m%20interested%20in%20your%20cinematic%20travel%20video%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-full rounded-lg bg-[#242b2a] hover:bg-[#2f3635] text-[#f9bb60] font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">movie</span> Inquire Cinema Film
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-md flex flex-col justify-between">
            <div>
              <div
                className="bg-cover bg-center w-full h-44 relative"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBw8PPK-UShSFmW8d_CepY4zW-oZdxWu9Wv2uQA7SNhnBbaD0sOGcxIbgRSjQF7znqfvl7eqTtBy5_b8O_951MXfqefui4TE5rFLkD4ijB3DLp5-pZdCMFZjhjDlJEip1plPmfM7kbVhnEj-v0zNXRJxBhcBxgTTd5sE7BC1LGHhxEdEKkPAu0Fpl8OdAMq2Pfjj_GAeIfkD4kU9ysnVRuxLvz7spYHNYtqOcnqnmp0zaLPn7nQCTUMYw')",
                }}
              >
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#090f0f]/80 backdrop-blur-md text-[#abcec2] font-mono text-[10px] uppercase font-bold">
                  Fine-Art Photography
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1.5">
                <h4 className="font-headline text-lg text-white">Capture Ceylon Memories</h4>
                <p className="font-body text-xs text-[#c1c8c4] leading-relaxed">
                  Couple, honeymoon, and solo portraits shot across scenic backdrops by experienced island artists. 50+ master edits.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <a
                href="https://wa.me/94778084913?text=Hello,%20I%E2%80%99m%20interested%20in%20photography%20services%20for%20my%20Sri%20Lanka%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-full rounded-lg bg-[#242b2a] hover:bg-[#2f3635] text-[#abcec2] font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span> Inquire Photo Session
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-md flex flex-col justify-between">
            <div>
              <div
                className="bg-cover bg-center w-full h-44 relative"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbLPYPIuoOY_mr9biowzq72veHfMTBAStAHnWXPIfUSJ_iizm-6mmTmGKkPHCIsJSxBCtgrn59FHUGzrYCTmi1uBEpn3QwgOvxuq6IowUnQksc9h3gyHYXDInVG4IkvdOOL5E9Xu7v5nFO-FaS59ixqF3gtvQ4Z5SSXgTqPhLNgjhvj4P7O7HN720qJZV8M5wDdPMEltn1LMO2zbswQXSTh33x855WdOXB4iYwCDuCvtc3EHcoRUH5yQ')",
                }}
              >
                <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-[#090f0f]/80 backdrop-blur-md text-[#a0d1c1] font-mono text-[10px] uppercase font-bold">
                  Certified Aerials
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1.5">
                <h4 className="font-headline text-lg text-white">See Sri Lanka From Above</h4>
                <p className="font-body text-xs text-[#c1c8c4] leading-relaxed">
                  Sweeping aerial perspectives of tea carpet mountains, winding railway tracks, and private ocean headlands.
                </p>
                <div className="p-2 rounded bg-[#090f0f] text-[#8b928f] font-mono text-[10px] flex items-start gap-1.5">
                  <span className="material-symbols-outlined text-[#f9bb60] text-[14px] shrink-0 mt-0.5">policy</span>
                  <span>CAA Sri Lanka &amp; DWC statutory eco-permits handled.</span>
                </div>
              </div>
            </div>
            <div className="p-4 pt-0">
              <a
                href="https://wa.me/94778084913?text=Hello,%20I%E2%80%99m%20interested%20in%20drone%20cinematography%20for%20my%20Sri%20Lanka%20trip."
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-full rounded-lg bg-[#242b2a] hover:bg-[#2f3635] text-[#a0d1c1] font-mono text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">flight</span> Inquire Aerial Drone Film
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 'MORE THAN A TOUR' EXPERIENCES GRID */}
      <section className="w-full px-4 sm:px-6 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Island Dimensions
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl text-white">More Than a Tour</h3>
          <p className="font-body text-xs sm:text-sm text-[#c1c8c4]">
            Sensory encounters across the land, coast, and wildlife reserves.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {[
            { emoji: '🌴', title: 'Pristine Beaches', sub: 'Mirissa, Bentota' },
            { emoji: '🏔', title: 'Misty Mountains', sub: 'Knuckles, Peak' },
            { emoji: '🐘', title: 'Wild Safaris', sub: 'Yala, Udawalawe' },
            { emoji: '🏛', title: 'Sacred Culture', sub: 'Polonnaruwa' },
            { emoji: '🍛', title: 'Ceylon Flavors', sub: 'Spices & Seafood' },
            { emoji: '🚂', title: 'Highland Trains', sub: 'Kandy-Ella Rail' },
            { emoji: '🌿', title: 'Pure Rainforest', sub: 'Sinharaja Jungle' },
            { emoji: '🏄', title: 'Ocean Surf', sub: 'Arugam Bay' },
            { emoji: '📸', title: 'Story Portraits', sub: 'Golden Hour' },
            { emoji: '🎥', title: 'Cinematic Films', sub: 'Your Island Movie' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-[#161d1c] border border-[#242b2a] flex flex-col gap-1 hover:border-[#f9bb60]/30 transition-colors"
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="font-mono text-xs text-white uppercase font-bold">
                {item.title}
              </span>
              <span className="font-body text-[11px] text-[#8b928f]">
                {item.sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 9. WHY TRAVEL WITH UNKNOWN */}
      <section className="w-full px-4 sm:px-6 py-4 flex flex-col gap-4">
        <div className="p-5 sm:p-6 rounded-xl bg-[#161d1c] border border-[#242b2a] shadow-md flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
              Our Craft
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl text-white">Why Travel With Unknown</h3>
            <p className="font-body text-xs sm:text-sm text-[#c1c8c4]">
              We don't manufacture arbitrary ratings. We focus strictly on hospitality, integrity, and cinematic storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#242b2a] flex items-center justify-center shrink-0 text-[#f9bb60]">
                <span className="material-symbols-outlined text-[20px]">explore</span>
              </div>
              <div className="flex flex-col">
                <h5 className="font-mono text-xs uppercase font-bold text-white">
                  Deep Local Intimacy
                </h5>
                <p className="font-body text-xs text-[#c1c8c4] leading-relaxed">
                  Native guides born in the hills and coasts who unlock secluded paths beyond typical tourist buses.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#242b2a] flex items-center justify-center shrink-0 text-[#abcec2]">
                <span className="material-symbols-outlined text-[20px]">edit_road</span>
              </div>
              <div className="flex flex-col">
                <h5 className="font-mono text-xs uppercase font-bold text-white">
                  Uncompromised Flexibility
                </h5>
                <p className="font-body text-xs text-[#c1c8c4] leading-relaxed">
                  Want to stay another hour watching elephants bathe or change your sunrise peak? We adapt in real-time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#242b2a] flex items-center justify-center shrink-0 text-[#a0d1c1]">
                <span className="material-symbols-outlined text-[20px]">videocam</span>
              </div>
              <div className="flex flex-col">
                <h5 className="font-mono text-xs uppercase font-bold text-white">
                  Cinematic Filmmaking Team
                </h5>
                <p className="font-body text-xs text-[#c1c8c4] leading-relaxed">
                  We are visual storytellers; our dedicated studio documents your voyage with cinema-grade craft.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#242b2a] flex items-center justify-center shrink-0 text-[#f9bb60]">
                <span className="material-symbols-outlined text-[20px]">forum</span>
              </div>
              <div className="flex flex-col">
                <h5 className="font-mono text-xs uppercase font-bold text-white">
                  Direct WhatsApp Concierge
                </h5>
                <p className="font-body text-xs text-[#c1c8c4] leading-relaxed">
                  No call centers. Direct link with your assigned travel architect from arrival to departure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. TRAVEL INSPIRATION & WATCH SRI LANKA VIDEO SECTION */}
      <section className="w-full px-4 sm:px-6 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Visual Chronicles
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl text-white">Watch Sri Lanka</h3>
          <p className="font-body text-xs sm:text-sm text-[#c1c8c4]">
            Preview the atmosphere before setting foot on the island.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VIDEO_STORIES.slice(0, 2).map((vid) => (
            <div
              key={vid.id}
              className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-md flex flex-col group"
            >
              <div
                className="bg-cover bg-center w-full h-52 relative flex items-center justify-center"
                style={{ backgroundImage: `url('${vid.thumbnail}')` }}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <button
                  onClick={() => onPlayVideo(vid)}
                  className="w-14 h-14 rounded-full bg-[#f9bb60] text-[#452b00] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform z-10 cursor-pointer"
                >
                  <span
                    className="material-symbols-outlined text-[32px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </button>
                <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-[#090f0f]/80 text-[#f9bb60] font-mono text-[10px]">
                  {vid.duration}
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <span className="font-mono text-[10px] text-[#f9bb60] uppercase font-bold">
                  {vid.tag}
                </span>
                <h4 className="font-headline text-lg text-white">
                  {vid.title}
                </h4>
                <p className="font-body text-xs text-[#c1c8c4] leading-relaxed">
                  {vid.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. FULL-SCREEN CINEMATIC PHOTO GALLERY */}
      <section className="w-full px-4 sm:px-6 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Gallery Archive
          </span>
          <h3 className="font-headline text-2xl sm:text-3xl text-white">Cinematic Moments</h3>
          <p className="font-body text-xs sm:text-sm text-[#c1c8c4]">
            Tap filters to view photographic glimpses captured by our team.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {['all', 'beaches', 'mountains', 'wildlife', 'culture', 'drone'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveGalleryFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                activeGalleryFilter === cat
                  ? 'bg-[#f9bb60] text-[#452b00] font-bold shadow-md'
                  : 'bg-[#242b2a] text-[#c1c8c4] hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenPhoto(photo)}
              className="rounded-lg overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-sm relative group cursor-pointer aspect-square"
            >
              <img
                src={photo.imageUrl}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                <span className="font-mono text-[10px] text-[#f9bb60] font-bold truncate">
                  {photo.title}
                </span>
                <span className="font-mono text-[9px] text-[#8b928f]">
                  {photo.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. INTEGRATED PRE-FOOTER CONCIERGE & BRANDING NOTE */}
      <section className="w-full px-4 sm:px-6 pt-4 pb-8 flex flex-col gap-4">
        <div className="p-6 rounded-xl bg-[#242b2a]/60 border border-[#242b2a] backdrop-blur-md flex flex-col gap-3 text-center items-center">
          <div className="w-16 h-16 rounded-xl bg-[#090f0f] border border-[#f9bb60]/30 flex items-center justify-center p-2 shadow-inner">
            <span className="material-symbols-outlined text-[#f9bb60] text-[34px]">
              travel_explore
            </span>
          </div>

          <div className="flex flex-col gap-0.5">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#f9bb60] font-bold">
              Unknown Travels &amp; Tours
            </span>
            <span className="font-mono text-[11px] text-[#8b928f]">
              Bespoke Ceylon Expeditions • Unknown Studio Film Unit
            </span>
          </div>

          <p className="font-body text-xs sm:text-sm text-[#c1c8c4] max-w-md leading-relaxed">
            Crafted in Sri Lanka. Direct 24/7 travel planning via WhatsApp with licensed island chauffeurs and local creators.
          </p>

          <a
            href="https://wa.me/94778084913?text=Hello%20Unknown%20Travels%20%26%20Tours,%20I%20want%20to%20plan%20my%20Sri%20Lanka%20trip."
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 px-6 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider shadow-md flex items-center justify-center gap-2 mt-1 cursor-pointer transition-all"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            Plan Directly With Us (+94 77 808 4913)
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-8 bg-[#090f0f] border-t border-[#242b2a] px-4 sm:px-6 pt-8 pb-20 sm:pb-12 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-headline text-xl text-white tracking-tight">
              Unknown Travels &amp; Tours
            </span>
            <span className="font-mono text-xs text-[#f9bb60] uppercase tracking-[0.15em] font-semibold">
              Sri Lanka
            </span>
          </div>
          <p className="font-body text-xs text-[#8b928f] max-w-lg">
            Curated sanctuary escapes, Ceylon tea estates, private wildlife voyages, and untamed coastal expeditions across Sri Lanka.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#161d1c]/80 border border-[#242b2a] flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-[#242b2a] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[#f9bb60] text-[24px]">explore</span>
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-xs uppercase tracking-[0.12em] text-white font-bold">
              Unknown Traveler
            </span>
            <span className="font-body text-xs text-[#8b928f]">
              Official Expedition Member Suite (Coming Soon)
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2 font-mono text-xs">
            <span className="uppercase tracking-[0.12em] text-[#f9bb60] font-bold">
              Tourist Links
            </span>
            <a href="#custom-builder" className="text-[#8b928f] hover:text-white transition-colors">ETA Visa Protocol</a>
            <a href="#custom-builder" className="text-[#8b928f] hover:text-white transition-colors">Seaplane Transfers</a>
            <a href="#destinations" className="text-[#8b928f] hover:text-white transition-colors">Private Safaris</a>
            <a href="#destinations" className="text-[#8b928f] hover:text-white transition-colors">Highlands Charter</a>
          </div>

          <div className="flex flex-col gap-2 font-mono text-xs">
            <span className="uppercase tracking-[0.12em] text-[#f9bb60] font-bold">
              Direct Line
            </span>
            <a
              href="https://wa.me/94778084913"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#abcec2] hover:text-[#f9bb60] transition-colors"
            >
              +94 77 808 4913
            </a>
            <span className="text-[#8b928f]">Colombo GMT +5:30</span>
            <span className="text-[#8b928f]">24/7 Bespoke Concierge</span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 bg-[#161d1c]/60 p-3.5 rounded-lg border border-[#242b2a]">
          <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8b928f] flex items-center gap-1.5 font-bold">
            <span className="material-symbols-outlined text-[15px]">gavel</span> Drone &amp; Eco Compliance
          </span>
          <p className="font-body text-xs text-[#8b928f]">
            All aerial cinematography subject to Civil Aviation Authority Sri Lanka (CAA) &amp; Department of Wildlife Conservation (DWC) strict eco-permits.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between pt-2 border-t border-[#242b2a] font-mono text-[10px] text-[#8b928f] gap-2">
          <span>© 2025 Unknown Travels &amp; Tours</span>
          <span className="uppercase tracking-[0.15em] text-[#c1c8c4]">
            Crafted by Unknown Studio
          </span>
        </div>
      </footer>
    </div>
  );
};
