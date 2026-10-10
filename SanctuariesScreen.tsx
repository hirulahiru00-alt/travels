import React, { useState } from 'react';
import { Sanctuary, CurrencyType } from '../types';
import { SANCTUARIES, CURRENCY_RATES, CURRENCY_SYMBOLS } from '../data/travelData';

interface SanctuariesScreenProps {
  onSelectSanctuary: (sanc: Sanctuary) => void;
  currency: CurrencyType;
}

export const SanctuariesScreen: React.FC<SanctuariesScreenProps> = ({
  onSelectSanctuary,
  currency,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [nights, setNights] = useState<number>(2);

  const categories = ['All', 'Tea Estate', 'Coastal Villa', 'Wildlife Camp', 'Wellness Resort'];

  const filteredSanctuaries = selectedCategory === 'All'
    ? SANCTUARIES
    : SANCTUARIES.filter((s) => s.category === selectedCategory);

  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];

  return (
    <div className="flex flex-col w-full text-[#dde4e2] max-w-4xl mx-auto px-4 sm:px-6 py-4 gap-6 pb-24">
      {/* Screen Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#f9bb60] text-[22px]">hotel</span>
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Curated Hideaways
          </span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl text-white">
          Sri Lankan Sanctuaries &amp; Estates
        </h2>
        <p className="font-body text-xs sm:text-sm text-[#c1c8c4] leading-relaxed max-w-2xl">
          Restored colonial planter bungalows perched above mist-shrouded lakes, architectural ocean villas, and luxurious tented safari suites bordered by wild leopard habitats.
        </p>
      </div>

      {/* Filter Tabs & Night Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-[#161d1c] p-3 rounded-xl border border-[#242b2a]">
        <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#f9bb60] text-[#452b00] font-bold'
                  : 'bg-[#242b2a] text-[#c1c8c4] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Global duration slider for pricing preview */}
        <div className="flex items-center gap-2 font-mono text-xs self-end sm:self-auto bg-[#090f0f] px-3 py-1.5 rounded-lg border border-[#242b2a]">
          <span className="text-[#8b928f]">Estimate:</span>
          <select
            value={nights}
            onChange={(e) => setNights(Number(e.target.value))}
            className="bg-transparent text-[#f9bb60] font-bold outline-none cursor-pointer"
          >
            <option value={1} className="bg-[#161d1c] text-[#dde4e2]">1 Night</option>
            <option value={2} className="bg-[#161d1c] text-[#dde4e2]">2 Nights</option>
            <option value={3} className="bg-[#161d1c] text-[#dde4e2]">3 Nights</option>
            <option value={5} className="bg-[#161d1c] text-[#dde4e2]">5 Nights</option>
          </select>
        </div>
      </div>

      {/* Sanctuaries Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredSanctuaries.map((sanc) => {
          const nightlyConverted = Math.round(sanc.pricePerNightUSD * rate);
          const totalConverted = nightlyConverted * nights;

          return (
            <div
              key={sanc.id}
              className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-lg flex flex-col justify-between hover:border-[#f9bb60]/40 transition-all group"
            >
              <div>
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={sanc.image}
                    alt={sanc.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161d1c] via-[#161d1c]/20 to-transparent" />

                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#090f0f]/80 backdrop-blur-md text-[#f9bb60] font-mono text-[10px] uppercase font-bold border border-[#f9bb60]/30">
                      {sanc.category}
                    </span>
                    {sanc.elevation && (
                      <span className="px-2 py-0.5 rounded bg-black/60 text-[#abcec2] font-mono text-[10px]">
                        {sanc.elevation}
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-baseline justify-between">
                    <div>
                      <h3 className="font-headline text-xl text-white font-medium">
                        {sanc.name}
                      </h3>
                      <span className="font-mono text-[11px] text-[#c1c8c4]">
                        {sanc.region}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 flex flex-col gap-2.5">
                  <span className="font-mono text-xs text-[#f9bb60] font-semibold italic">
                    "{sanc.tagline}"
                  </span>
                  <p className="font-body text-xs text-[#c1c8c4] leading-relaxed line-clamp-3">
                    {sanc.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {sanc.amenities.slice(0, 3).map((am, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#242b2a] text-[10px] font-mono text-[#dde4e2]"
                      >
                        ✓ {am}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 sm:p-5 pt-0 border-t border-[#242b2a] flex flex-col gap-2">
                <div className="flex items-center justify-between pt-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono uppercase text-[#8b928f]">
                      Estimated ({nights} {nights === 1 ? 'night' : 'nights'}):
                    </span>
                    <span className="font-headline text-lg text-[#f9bb60] font-bold">
                      {symbol}{totalConverted.toLocaleString()}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#8b928f]">
                    {symbol}{nightlyConverted.toLocaleString()} / nt
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onSelectSanctuary(sanc)}
                    className="h-10 rounded-lg bg-[#242b2a] hover:bg-[#2f3635] text-[#dde4e2] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    View Villa
                  </button>
                  <a
                    href={`https://wa.me/94778084913?text=${encodeURIComponent(
                      `Hello Unknown Travels, I would like to check availability for "${sanc.name}" in ${sanc.region} for ${nights} nights.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[15px]">chat</span> Reserve
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
