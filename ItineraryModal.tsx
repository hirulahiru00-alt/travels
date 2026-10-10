import React from 'react';
import { TourPackage, CurrencyType } from '../../types';
import { CURRENCY_RATES, CURRENCY_SYMBOLS } from '../../data/travelData';

interface ItineraryModalProps {
  packageData: TourPackage | null;
  onClose: () => void;
  currency: CurrencyType;
  isSaved: boolean;
  onToggleSave: (pkg: TourPackage) => void;
}

export const ItineraryModal: React.FC<ItineraryModalProps> = ({
  packageData,
  onClose,
  currency,
  isSaved,
  onToggleSave,
}) => {
  if (!packageData) return null;

  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];
  const convertedPrice = Math.round(packageData.basePriceUSD * rate);

  const whatsAppUrl = `https://wa.me/94778084913?text=${encodeURIComponent(
    `Hello Unknown Travels & Tours, I am interested in booking the "${packageData.title}" (${packageData.durationDays} Days) package. Please share availability and current quotation.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#0e1514] border border-[#242b2a] rounded-xl shadow-2xl z-10 max-h-[90vh] flex flex-col overflow-hidden text-[#dde4e2]">
        {/* Cover Header */}
        <div className="relative h-56 sm:h-64 w-full shrink-0 overflow-hidden bg-[#161d1c]">
          <img
            src={packageData.image}
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1514] via-[#0e1514]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-[#dde4e2] hover:text-[#f9bb60] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Bookmark Button */}
          <button
            onClick={() => onToggleSave(packageData)}
            className={`absolute top-3 right-14 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer ${
              isSaved
                ? 'bg-[#f9bb60] text-[#452b00]'
                : 'bg-black/60 text-[#dde4e2] hover:text-[#f9bb60]'
            }`}
            title={isSaved ? 'Saved to Journal' : 'Save Itinerary'}
          >
            <span
              className="material-symbols-outlined text-[19px]"
              style={isSaved ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              bookmark
            </span>
          </button>

          {/* Header Title Info */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
            <span className="px-2.5 py-0.5 rounded-full bg-[#161d1c]/80 backdrop-blur-md text-[#f9bb60] font-mono text-[10px] uppercase font-bold tracking-wider self-start">
              {packageData.badge}
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl text-white font-medium">
              {packageData.title}
            </h3>
            <p className="font-mono text-xs text-[#abcec2]">
              {packageData.highlightRoute}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-sm">
          {/* Price & Inclusions Overview */}
          <div className="p-4 rounded-lg bg-[#161d1c] border border-[#242b2a] flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#8b928f] block">
                Estimated Private Expedition
              </span>
              <span className="font-headline text-2xl text-[#f9bb60] font-bold">
                {symbol}{convertedPrice.toLocaleString()}{' '}
                <span className="text-xs font-mono font-normal text-[#c1c8c4]">
                  / person (approx)
                </span>
              </span>
            </div>
            <span className="text-xs text-[#abcec2] font-mono">
              ✓ Private Chauffeur • VIP Entries Included
            </span>
          </div>

          <p className="text-[#c1c8c4] leading-relaxed font-body">
            {packageData.description}
          </p>

          {/* Highlights checklist */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs text-[#f9bb60] uppercase tracking-wider font-bold">
              Key Expedition Privileges
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {packageData.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#dde4e2]">
                  <span className="material-symbols-outlined text-[#f9bb60] text-[16px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Day by Day Itinerary Breakdown */}
          <div className="space-y-3 pt-2">
            <h4 className="font-mono text-xs text-[#f9bb60] uppercase tracking-wider font-bold">
              Day-by-Day Journey Protocol
            </h4>
            <div className="space-y-3 border-l-2 border-[#242b2a] pl-4 ml-1">
              {packageData.detailedDays.map((d) => (
                <div key={d.day} className="relative pb-2">
                  {/* Timeline dot */}
                  <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-[#f9bb60] ring-4 ring-[#0e1514]" />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] text-[#f9bb60] font-bold uppercase">
                        Day {d.day}: {d.title}
                      </span>
                      {d.elevation && (
                        <span className="text-[10px] font-mono text-[#8b928f]">
                          {d.elevation}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#c1c8c4] leading-relaxed">
                      {d.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {d.activities.map((act, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded bg-[#161d1c] border border-[#242b2a] text-[10px] text-[#abcec2] font-mono"
                        >
                          {act}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-mono text-[#8b928f] pt-0.5">
                      Sanctuary: <span className="text-[#dde4e2]">{d.stayType}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 border-t border-[#242b2a] bg-[#090f0f] flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={() => onToggleSave(packageData)}
            className="w-full sm:w-auto px-4 h-11 rounded-lg bg-[#161d1c] hover:bg-[#242b2a] text-[#dde4e2] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            <span
              className="material-symbols-outlined text-[18px]"
              style={isSaved ? { fontVariationSettings: "'FILL' 1" } : {}}
            >
              bookmark
            </span>
            {isSaved ? 'Saved in Journal' : 'Save to Journal'}
          </button>

          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 h-11 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            Book / Inquire on WhatsApp (+94 77 808 4913)
          </a>
        </div>
      </div>
    </div>
  );
};
