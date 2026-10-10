import React from 'react';
import { CustomTourQuote, CurrencyType } from '../../types';
import { CURRENCY_RATES, CURRENCY_SYMBOLS } from '../../data/travelData';

interface BookingConfirmationModalProps {
  quote: CustomTourQuote | null;
  onClose: () => void;
  currency: CurrencyType;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  quote,
  onClose,
  currency,
}) => {
  if (!quote) return null;

  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];
  const convertedPrice = Math.round(quote.estimatedPriceUSD * rate);

  const whatsAppUrl = `https://wa.me/94778084913?text=${encodeURIComponent(
    `Hello Unknown Travels Concierge! Here is my custom expedition request #${quote.referenceNumber}:%0A` +
      `- Country: ${quote.origin}%0A` +
      `- Party: ${quote.travelers}%0A` +
      `- Dates/Duration: ${quote.dates} (${quote.duration})%0A` +
      `- Preferences: ${quote.preferences.join(', ')}%0A` +
      `- Stay Tier: ${quote.accommodation}%0A` +
      `- Pace: ${quote.pace}%0A` +
      `- Notes: ${quote.notes}%0A` +
      `- Est Budget: ${symbol}${convertedPrice}%0A` +
      `Please review and confirm vehicle & guide availability.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      {/* Dialog */}
      <div className="relative w-full max-w-lg bg-[#0e1514] border border-[#f9bb60]/30 rounded-xl shadow-2xl z-10 flex flex-col overflow-hidden text-[#dde4e2]">
        {/* Header */}
        <div className="p-5 bg-[#090f0f] border-b border-[#242b2a] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0d2e26] border border-[#abcec2]/30 flex items-center justify-center text-[#abcec2]">
              <span className="material-symbols-outlined text-[24px]">verified</span>
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-[#f9bb60] tracking-widest font-bold block">
                Itinerary Created
              </span>
              <h3 className="font-headline text-lg text-white">
                Reference #{quote.referenceNumber}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#161d1c] text-[#8b928f] hover:text-[#dde4e2] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4 text-xs font-mono">
          <div className="p-4 rounded-lg bg-[#161d1c] border border-[#242b2a] space-y-2">
            <div className="flex justify-between border-b border-[#242b2a] pb-2">
              <span className="text-[#8b928f]">Estimated Budget:</span>
              <span className="text-[#f9bb60] font-bold text-sm">
                {symbol}{convertedPrice.toLocaleString()} (approx)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b928f]">Travelers:</span>
              <span className="text-[#dde4e2]">{quote.travelers}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b928f]">Origin Country:</span>
              <span className="text-[#dde4e2]">{quote.origin}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b928f]">Dates & Length:</span>
              <span className="text-[#dde4e2]">{quote.dates} ({quote.duration})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b928f]">Accommodation:</span>
              <span className="text-[#dde4e2]">{quote.accommodation}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8b928f]">Trip Pace:</span>
              <span className="text-[#dde4e2]">{quote.pace}</span>
            </div>
            <div className="pt-1">
              <span className="text-[#8b928f] block mb-1">Highlights Selected:</span>
              <div className="flex flex-wrap gap-1">
                {quote.preferences.map((p, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-[#090f0f] border border-[#242b2a] text-[#abcec2]"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
            {quote.notes && (
              <div className="pt-1">
                <span className="text-[#8b928f] block">Special Notes:</span>
                <span className="text-[#c1c8c4] italic">{quote.notes}</span>
              </div>
            )}
          </div>

          <div className="p-3 rounded-lg bg-[#0d2e26]/50 border border-[#abcec2]/20 text-[#c1c8c4] leading-relaxed">
            <p>
              🌟 <strong>Next Step:</strong> Tap below to send this custom itinerary to our 24/7 Colombo concierge team on WhatsApp. We will pair you with a licensed private chauffeur-guide and finalize your date availability.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#090f0f] border-t border-[#242b2a] flex flex-col sm:flex-row gap-2">
          <button
            onClick={onClose}
            className="h-11 px-4 rounded-lg bg-[#161d1c] hover:bg-[#242b2a] text-[#c1c8c4] font-mono text-xs uppercase cursor-pointer transition-colors"
          >
            Close
          </button>
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-11 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            Send Itinerary to WhatsApp (+94 77 808 4913)
          </a>
        </div>
      </div>
    </div>
  );
};
