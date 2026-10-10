import React, { useState } from 'react';
import { CurrencyType, CustomTourQuote } from '../types';
import { CURRENCY_RATES, CURRENCY_SYMBOLS } from '../data/travelData';

interface ConciergeScreenProps {
  currency: CurrencyType;
  onSaveCustomQuote: (quote: CustomTourQuote) => void;
}

export const ConciergeScreen: React.FC<ConciergeScreenProps> = ({
  currency,
  onSaveCustomQuote,
}) => {
  const [originCountry, setOriginCountry] = useState('');
  const [travelers, setTravelers] = useState('2 Travelers (Couple)');
  const [dates, setDates] = useState('');
  const [days, setDays] = useState(7);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([
    '🌴 Beach & Coast',
    '🐘 Wildlife Safaris',
    '🏔 Misty Highlands',
    '🏛 Ancient Culture',
  ]);
  const [accommodation, setAccommodation] = useState('Boutique Luxury & Tea Bungalows');
  const [pace, setPace] = useState('Balanced Highlights');
  const [vehicle, setVehicle] = useState('Chauffeured Hybrid Cruiser');
  const [needAirportPickup, setNeedAirportPickup] = useState(true);
  const [notes, setNotes] = useState('');
  const [submittedQuote, setSubmittedQuote] = useState<CustomTourQuote | null>(null);

  const styleChips = [
    '🌴 Beach & Coast',
    '🐘 Wildlife Safaris',
    '🏛 Ancient Culture',
    '🏔 Misty Highlands',
    '📸 Photography',
    '🚁 Drone Video',
    '🥾 Hiking & Trails',
    '💍 Honeymoon',
    '🏄 Surfing',
    '🍛 Culinary & Spice',
    '🧘 Ayurvedic Wellness',
  ];

  const toggleChip = (c: string) => {
    if (selectedStyles.includes(c)) {
      setSelectedStyles(selectedStyles.filter((item) => item !== c));
    } else {
      setSelectedStyles([...selectedStyles, c]);
    }
  };

  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];

  // Dynamic cost estimator
  const multiplier = travelers.includes('1')
    ? 1
    : travelers.includes('2')
    ? 1.8
    : travelers.includes('3-4')
    ? 3.1
    : 4.8;
  const tierCostPerDay = accommodation.includes('Boutique')
    ? 240
    : accommodation.includes('4-Star')
    ? 180
    : 140;
  const estimatedUSD = Math.round(days * tierCostPerDay * multiplier);
  const estimatedConverted = Math.round(estimatedUSD * rate);

  const handleBuildSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `UTT-EST-${Math.floor(100000 + Math.random() * 900000)}`;

    const quote: CustomTourQuote = {
      origin: originCountry || 'International Traveler',
      travelers,
      dates: dates || 'Flexible Upcoming',
      duration: `${days} Days`,
      preferences: selectedStyles,
      accommodation,
      pace,
      notes: `${notes}${needAirportPickup ? ' • Airport Pickup Requested' : ''} • Vehicle: ${vehicle}`,
      estimatedPriceUSD: estimatedUSD,
      referenceNumber: ref,
      createdAt: new Date().toLocaleDateString(),
    };

    setSubmittedQuote(quote);
    onSaveCustomQuote(quote);
  };

  const sendToWhatsApp = () => {
    const ref = submittedQuote?.referenceNumber || `UTT-${Math.floor(1000 + Math.random() * 9000)}`;
    const msg = `Hello Unknown Travels Concierge! I configured a bespoke Sri Lanka tour (Ref #${ref}):%0A` +
      `- Country of Origin: ${encodeURIComponent(originCountry || 'International')}%0A` +
      `- Party: ${encodeURIComponent(travelers)}%0A` +
      `- Length: ${encodeURIComponent(`${days} Days`)}%0A` +
      `- Dates: ${encodeURIComponent(dates || 'Flexible')}%0A` +
      `- Interests: ${encodeURIComponent(selectedStyles.join(', '))}%0A` +
      `- Stay Tier: ${encodeURIComponent(accommodation)}%0A` +
      `- Pace: ${encodeURIComponent(pace)}%0A` +
      `- Vehicle: ${encodeURIComponent(vehicle)}%0A` +
      `- Airport Pickup: ${needAirportPickup ? 'Yes (CMB)' : 'No'}%0A` +
      `- Est Budget: ${symbol}${estimatedConverted.toLocaleString()}%0A` +
      `- Special Requests: ${encodeURIComponent(notes || 'None')}`;

    window.open(`https://wa.me/94778084913?text=${msg}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full text-[#dde4e2] max-w-4xl mx-auto px-4 sm:px-6 py-4 gap-6 pb-24">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#f9bb60] text-[22px]">tune</span>
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Concierge Atelier
          </span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl text-white">
          Custom Itinerary Architect
        </h2>
        <p className="font-body text-xs sm:text-sm text-[#c1c8c4] leading-relaxed max-w-2xl">
          Configure your bespoke expedition across ancient kingdoms, private tea estates, and wild southern shores. Real-time cost estimates and direct WhatsApp pairing with local tour architects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Form */}
        <div className="lg:col-span-2 bg-[#161d1c] border border-[#242b2a] rounded-xl p-5 sm:p-6 shadow-xl flex flex-col gap-4 font-mono text-xs">
          <form onSubmit={handleBuildSubmit} className="flex flex-col gap-4">
            {/* 1. Basics */}
            <div className="space-y-2">
              <span className="text-xs uppercase text-[#f9bb60] font-bold tracking-wider block border-b border-[#242b2a] pb-1">
                1. Traveler Basics
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-[#8b928f]">Where are you traveling from?</label>
                  <input
                    type="text"
                    value={originCountry}
                    onChange={(e) => setOriginCountry(e.target.value)}
                    placeholder="e.g. UK, Germany, USA, Singapore"
                    className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body outline-none focus:border-[#f9bb60]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-[#8b928f]">Party Size</label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body outline-none focus:border-[#f9bb60]"
                  >
                    <option value="1 Traveler (Solo)">1 Traveler (Solo)</option>
                    <option value="2 Travelers (Couple)">2 Travelers (Couple)</option>
                    <option value="3-4 Travelers (Family / Friends)">3-4 Travelers (Family / Friends)</option>
                    <option value="5+ Travelers (Group)">5+ Travelers (Group)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 2. Timeline & Duration */}
            <div className="space-y-2">
              <span className="text-xs uppercase text-[#f9bb60] font-bold tracking-wider block border-b border-[#242b2a] pb-1">
                2. Timing &amp; Duration
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-[#8b928f]">Target Dates / Month</label>
                  <input
                    type="text"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder="e.g. December 2025, or Nov 10 - Nov 20"
                    className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body outline-none focus:border-[#f9bb60]"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-center text-[11px] text-[#8b928f]">
                    <span>Duration:</span>
                    <span className="text-[#f9bb60] font-bold">{days} Days</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="18"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="h-11 accent-[#f9bb60] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* 3. Experiences & Styles */}
            <div className="space-y-2">
              <span className="text-xs uppercase text-[#f9bb60] font-bold tracking-wider block border-b border-[#242b2a] pb-1">
                3. Highlights &amp; Interests
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {styleChips.map((chip) => {
                  const isSel = selectedStyles.includes(chip);
                  return (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => toggleChip(chip)}
                      className={`px-3 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                        isSel
                          ? 'bg-[#f9bb60] text-[#452b00] border border-[#f9bb60]'
                          : 'bg-[#242b2a] text-[#c1c8c4] border border-[#414845] hover:text-white'
                      }`}
                    >
                      {chip}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Stay & Logistics */}
            <div className="space-y-2">
              <span className="text-xs uppercase text-[#f9bb60] font-bold tracking-wider block border-b border-[#242b2a] pb-1">
                4. Luxury Tier &amp; Fleet
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-[#8b928f]">Accommodation Tier</label>
                  <select
                    value={accommodation}
                    onChange={(e) => setAccommodation(e.target.value)}
                    className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body outline-none focus:border-[#f9bb60]"
                  >
                    <option value="Boutique Luxury & Tea Bungalows">Boutique Luxury &amp; Tea Bungalows</option>
                    <option value="4-Star Comfort & Eco Resorts">4-Star Comfort &amp; Eco Resorts</option>
                    <option value="Curated Heritage & Homestays">Curated Heritage &amp; Homestays</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-[11px] text-[#8b928f]">Vehicle Preference</label>
                  <select
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="h-11 px-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body outline-none focus:border-[#f9bb60]"
                  >
                    <option value="Chauffeured Hybrid Cruiser">Chauffeured Hybrid Cruiser (Vezel / Prius)</option>
                    <option value="Executive Luxury Van (KDH)">Executive Luxury Van (Toyota KDH)</option>
                    <option value="Land Cruiser Prado 4x4">Land Cruiser Prado 4x4</option>
                  </select>
                </div>
              </div>

              {/* Airport Checkbox */}
              <label className="flex items-center gap-2 p-2.5 rounded bg-[#090f0f] border border-[#242b2a] cursor-pointer mt-1">
                <input
                  type="checkbox"
                  checked={needAirportPickup}
                  onChange={(e) => setNeedAirportPickup(e.target.checked)}
                  className="accent-[#f9bb60] w-4 h-4 cursor-pointer"
                />
                <span className="text-xs text-[#dde4e2]">
                  Include Bandaranaike International Airport (CMB) VIP Meet &amp; Transfer
                </span>
              </label>
            </div>

            {/* 5. Special Notes */}
            <div className="flex flex-col gap-1">
              <label className="text-[11px] text-[#8b928f]">Special Requests (Optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Dietary preferences, anniversary celebration, surf coaching, drone video add-on..."
                rows={2}
                className="p-3 rounded-lg bg-[#090f0f] border border-[#242b2a] text-[#dde4e2] font-body text-xs outline-none focus:border-[#f9bb60]"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="h-12 w-full rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">calculate</span>
                Generate Custom Itinerary Summary
              </button>
            </div>
          </form>
        </div>

        {/* Right Col: Live Summary Card */}
        <div className="bg-[#161d1c] border border-[#242b2a] rounded-xl p-5 shadow-xl flex flex-col justify-between gap-4 font-mono">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between border-b border-[#242b2a] pb-2">
              <span className="text-xs uppercase text-[#f9bb60] font-bold">
                Expedition Summary
              </span>
              <span className="text-[10px] text-[#abcec2]">
                Instant Calculation
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase text-[#8b928f]">Estimated Investment</span>
              <span className="font-headline text-3xl text-[#f9bb60] font-bold">
                {symbol}{estimatedConverted.toLocaleString()}
              </span>
              <span className="text-[10px] text-[#8b928f]">
                Includes private vehicle, fuel, driver-guide, highway tolls, accommodation &amp; taxes
              </span>
            </div>

            <div className="space-y-2 pt-2 text-xs border-t border-[#242b2a]">
              <div className="flex justify-between">
                <span className="text-[#8b928f]">Duration:</span>
                <span className="text-white">{days} Days / {days - 1} Nights</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b928f]">Party:</span>
                <span className="text-white">{travelers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b928f]">Stay Level:</span>
                <span className="text-white truncate max-w-[150px]">{accommodation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8b928f]">Vehicle:</span>
                <span className="text-white truncate max-w-[150px]">{vehicle}</span>
              </div>
            </div>

            {/* Highlights Selected List */}
            <div className="pt-2 border-t border-[#242b2a]">
              <span className="text-[10px] uppercase text-[#8b928f] block mb-1">
                Active Themes ({selectedStyles.length}):
              </span>
              <div className="flex flex-wrap gap-1">
                {selectedStyles.map((s, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-[#090f0f] text-[10px] text-[#abcec2]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-4 border-t border-[#242b2a]">
            <button
              onClick={sendToWhatsApp}
              className="h-12 w-full rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              Send Plan to WhatsApp
            </button>
            <span className="text-[10px] text-[#8b928f] text-center">
              Direct response within 15 mins via +94 77 808 4913
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
