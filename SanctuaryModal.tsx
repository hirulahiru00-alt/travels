import React, { useState } from 'react';
import { Sanctuary, CurrencyType } from '../../types';
import { CURRENCY_RATES, CURRENCY_SYMBOLS } from '../../data/travelData';

interface SanctuaryModalProps {
  sanctuary: Sanctuary | null;
  onClose: () => void;
  currency: CurrencyType;
}

export const SanctuaryModal: React.FC<SanctuaryModalProps> = ({
  sanctuary,
  onClose,
  currency,
}) => {
  const [nights, setNights] = useState(2);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!sanctuary) return null;

  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];
  const nightlyConverted = Math.round(sanctuary.pricePerNightUSD * rate);
  const totalConverted = nightlyConverted * nights;

  const images = sanctuary.gallery && sanctuary.gallery.length > 0
    ? sanctuary.gallery
    : [sanctuary.image];

  const whatsAppUrl = `https://wa.me/94778084913?text=${encodeURIComponent(
    `Hello Unknown Travels Concierge, I would like to reserve/inquire for "${sanctuary.name}" (${sanctuary.region}) for ${nights} nights. Estimated: ${symbol}${totalConverted}. Please check villa availability.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-[#0e1514] border border-[#242b2a] rounded-xl shadow-2xl z-10 max-h-[92vh] flex flex-col overflow-hidden text-[#dde4e2]">
        {/* Cover Photo & Gallery */}
        <div className="relative h-60 sm:h-72 w-full shrink-0 overflow-hidden bg-[#161d1c]">
          <img
            src={images[activeImageIndex] || sanctuary.image}
            alt={sanctuary.name}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1514] via-[#0e1514]/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-[#dde4e2] hover:text-[#f9bb60] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Image thumbnails selector */}
          {images.length > 1 && (
            <div className="absolute top-3 left-3 flex gap-1.5 z-20">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-6 h-6 rounded border text-[10px] font-mono flex items-center justify-center cursor-pointer transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#f9bb60] bg-[#f9bb60] text-[#452b00] font-bold'
                      : 'border-white/40 bg-black/50 text-white'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}

          {/* Title Info */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#161d1c]/80 backdrop-blur-md text-[#f9bb60] font-mono text-[10px] uppercase font-bold tracking-wider">
                {sanctuary.category}
              </span>
              {sanctuary.elevation && (
                <span className="px-2 py-0.5 rounded bg-black/50 text-[#abcec2] font-mono text-[10px]">
                  {sanctuary.elevation}
                </span>
              )}
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl text-white font-medium">
              {sanctuary.name}
            </h3>
            <span className="font-mono text-xs text-[#c1c8c4]">
              {sanctuary.region}
            </span>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-sm">
          {/* Rate & Calculator Card */}
          <div className="p-4 rounded-lg bg-[#161d1c] border border-[#242b2a] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#8b928f] block">
                Exclusive Direct Villa Rate
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-2xl text-[#f9bb60] font-bold">
                  {symbol}{nightlyConverted.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-[#8b928f]">/ night</span>
              </div>
            </div>

            {/* Night Selector */}
            <div className="flex items-center gap-3 bg-[#090f0f] px-3 py-1.5 rounded-lg border border-[#242b2a]">
              <span className="text-xs font-mono text-[#8b928f]">Duration:</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setNights(Math.max(1, nights - 1))}
                  className="w-6 h-6 rounded bg-[#161d1c] text-[#dde4e2] hover:text-[#f9bb60] flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  -
                </button>
                <span className="font-mono font-bold text-[#f9bb60] min-w-[36px] text-center">
                  {nights} {nights === 1 ? 'nt' : 'nts'}
                </span>
                <button
                  onClick={() => setNights(nights + 1)}
                  className="w-6 h-6 rounded bg-[#161d1c] text-[#dde4e2] hover:text-[#f9bb60] flex items-center justify-center font-bold text-sm cursor-pointer"
                >
                  +
                </button>
              </div>
              <span className="text-xs font-mono text-[#abcec2] border-l border-[#242b2a] pl-2 font-semibold">
                Total: {symbol}{totalConverted.toLocaleString()}
              </span>
            </div>
          </div>

          <p className="text-[#c1c8c4] leading-relaxed font-body">
            {sanctuary.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs text-[#f9bb60] uppercase tracking-wider font-bold">
              Bespoke Touches
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sanctuary.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#dde4e2]">
                  <span className="material-symbols-outlined text-[#abcec2] text-[16px]">
                    star
                  </span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs text-[#f9bb60] uppercase tracking-wider font-bold">
              Sanctuary Amenities
            </h4>
            <div className="flex flex-wrap gap-2">
              {sanctuary.amenities.map((a, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded bg-[#161d1c] border border-[#242b2a] text-xs font-mono text-[#dde4e2]"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#242b2a] bg-[#090f0f] flex items-center justify-between gap-3">
          <span className="text-xs font-mono text-[#8b928f] hidden sm:block">
            VIP Chauffeur Transfer Available
          </span>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto sm:px-6 h-11 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            Inquire Sanctuary Dates (+94 77 808 4913)
          </a>
        </div>
      </div>
    </div>
  );
};
