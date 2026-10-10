import React from 'react';
import { TourPackage, CustomTourQuote, CurrencyType } from '../types';
import { CURRENCY_RATES, CURRENCY_SYMBOLS } from '../data/travelData';

interface SavedJourneysScreenProps {
  savedPackages: TourPackage[];
  savedQuotes: CustomTourQuote[];
  onRemovePackage: (pkgId: string) => void;
  onRemoveQuote: (ref: string) => void;
  onSelectPackage: (pkg: TourPackage) => void;
  currency: CurrencyType;
  onNavigateToVoyages: () => void;
}

export const SavedJourneysScreen: React.FC<SavedJourneysScreenProps> = ({
  savedPackages,
  savedQuotes,
  onRemovePackage,
  onRemoveQuote,
  onSelectPackage,
  currency,
  onNavigateToVoyages,
}) => {
  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];

  const hasItems = savedPackages.length > 0 || savedQuotes.length > 0;

  return (
    <div className="flex flex-col w-full text-[#dde4e2] max-w-4xl mx-auto px-4 sm:px-6 py-4 gap-6 pb-24">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#f9bb60] text-[22px]">bookmark</span>
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Personal Expedition Journal
          </span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl text-white">
          My Saved Expeditions &amp; Quotes
        </h2>
        <p className="font-body text-xs sm:text-sm text-[#c1c8c4] leading-relaxed max-w-2xl">
          Review your bookmarked signature packages or customized tour proposals before dispatching to our private concierge team.
        </p>
      </div>

      {!hasItems ? (
        <div className="p-10 rounded-xl bg-[#161d1c] border border-[#242b2a] flex flex-col items-center justify-center text-center gap-4 my-8">
          <div className="w-16 h-16 rounded-full bg-[#090f0f] flex items-center justify-center text-[#8b928f]">
            <span className="material-symbols-outlined text-[32px]">bookmark_border</span>
          </div>
          <div>
            <h3 className="font-headline text-lg text-white">Your Journal is Empty</h3>
            <p className="text-xs text-[#8b928f] max-w-xs mt-1">
              Tap the bookmark icon on any itinerary or generate a custom tour plan to save it here.
            </p>
          </div>
          <button
            onClick={onNavigateToVoyages}
            className="px-6 h-10 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider transition-colors cursor-pointer"
          >
            Explore Curated Voyages
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {/* Saved Packages */}
          {savedPackages.length > 0 && (
            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-xl text-white">
                Bookmarked Curated Voyages ({savedPackages.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {savedPackages.map((pkg) => {
                  const converted = Math.round(pkg.basePriceUSD * rate);
                  return (
                    <div
                      key={pkg.id}
                      className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-md flex flex-col justify-between"
                    >
                      <div className="relative h-44">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={() => onRemovePackage(pkg.id)}
                          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 text-white hover:text-red-400 flex items-center justify-center transition-colors cursor-pointer"
                          title="Remove"
                        >
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                        <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded bg-black/60 text-[#f9bb60] font-mono text-[10px] font-bold">
                          {pkg.badge}
                        </span>
                      </div>

                      <div className="p-4 flex flex-col gap-2">
                        <h4 className="font-headline text-lg text-white">{pkg.title}</h4>
                        <span className="font-mono text-xs text-[#abcec2]">
                          Est: {symbol}{converted.toLocaleString()} / person
                        </span>
                        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#242b2a]">
                          <button
                            onClick={() => onSelectPackage(pkg)}
                            className="h-9 rounded-lg bg-[#242b2a] hover:bg-[#2f3635] text-white font-mono text-xs uppercase cursor-pointer"
                          >
                            Details
                          </button>
                          <a
                            href={`https://wa.me/94778084913?text=${encodeURIComponent(
                              `Hello Unknown Travels, I have saved the "${pkg.title}" package. Let's arrange dates.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-9 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold flex items-center justify-center gap-1 cursor-pointer"
                          >
                            <span className="material-symbols-outlined text-[15px]">chat</span> Book
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Saved Custom Quotes */}
          {savedQuotes.length > 0 && (
            <div className="flex flex-col gap-4">
              <h3 className="font-headline text-xl text-white">
                Saved Custom Tour Proposals ({savedQuotes.length})
              </h3>
              <div className="flex flex-col gap-3 font-mono text-xs">
                {savedQuotes.map((q) => {
                  const converted = Math.round(q.estimatedPriceUSD * rate);
                  return (
                    <div
                      key={q.referenceNumber}
                      className="p-4 rounded-xl bg-[#161d1c] border border-[#242b2a] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-md"
                    >
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[#f9bb60] font-bold">
                            #{q.referenceNumber}
                          </span>
                          <span className="text-[10px] text-[#8b928f]">
                            Created {q.createdAt}
                          </span>
                        </div>
                        <span className="font-bold text-white text-sm">
                          {q.duration} Tour for {q.travelers} ({q.origin})
                        </span>
                        <span className="text-[11px] text-[#c1c8c4]">
                          Stay: {q.accommodation} • Pace: {q.pace}
                        </span>
                        <span className="text-[#abcec2] text-xs font-bold pt-1">
                          Est: {symbol}{converted.toLocaleString()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onRemoveQuote(q.referenceNumber)}
                          className="px-3 h-9 rounded-lg bg-[#242b2a] hover:bg-red-950 text-[#8b928f] hover:text-red-300 transition-colors cursor-pointer"
                          title="Delete quote"
                        >
                          <span className="material-symbols-outlined text-[16px]">delete</span>
                        </button>
                        <a
                          href={`https://wa.me/94778084913?text=${encodeURIComponent(
                            `Hello Unknown Travels, I have saved quote #${q.referenceNumber} for ${q.duration} (${q.travelers}). Please verify my travel dates.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 h-9 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-bold uppercase flex items-center gap-1.5 cursor-pointer shadow-md"
                        >
                          <span className="material-symbols-outlined text-[16px]">chat</span>
                          Send on WhatsApp
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
