import React, { useState } from 'react';

export const WhatsAppFab: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed right-4 md:right-8 bottom-20 md:bottom-8 z-40 flex items-center gap-3">
      {/* Popover helper */}
      {showTooltip && (
        <div className="hidden sm:flex bg-[#090f0f] border border-[#f9bb60]/40 text-[#dde4e2] px-3 py-2 rounded-lg text-xs font-mono shadow-2xl items-center gap-2 animate-fade-in max-w-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>Online Concierge: +94 77 808 4913</span>
        </div>
      )}

      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/94778084913?text=Hello%20Unknown%20Travels%20%26%20Tours,%20I%20would%20like%20to%20plan%20a%20private%20Sri%20Lanka%20voyage."
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 rounded-full bg-[#f9bb60] text-[#452b00] flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_25px_-5px_rgba(216,158,70,0.3)] transition-all hover:scale-110 active:scale-95 hover:bg-[#ffddb2] group cursor-pointer"
        title="Direct 24/7 WhatsApp Concierge"
      >
        <span className="material-symbols-outlined text-[28px] transition-transform group-hover:rotate-12">
          chat
        </span>
      </a>
    </div>
  );
};
