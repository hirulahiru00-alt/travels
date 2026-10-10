import React from 'react';
import { ScreenType } from '../types';
import { TRAVEL_TIPS } from '../data/travelData';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (screen: ScreenType) => void;
  currentScreen: ScreenType;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  currentScreen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className="relative w-full max-w-sm bg-[#0e1514] border-r border-[#242b2a] text-[#dde4e2] h-full flex flex-col z-10 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="p-5 border-b border-[#242b2a] flex items-center justify-between bg-[#090f0f]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#161d1c] border border-[#f9bb60]/30 flex items-center justify-center text-[#f9bb60]">
              <span className="material-symbols-outlined text-[24px]">travel_explore</span>
            </div>
            <div>
              <span className="text-[10px] text-[#f9bb60] uppercase tracking-[0.2em] font-mono font-bold block">
                Unknown Travels
              </span>
              <h2 className="font-headline text-[17px] text-[#dde4e2] leading-tight">
                Serendib Atelier
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#161d1c] text-[#8b928f] hover:text-[#dde4e2] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Navigation list */}
        <div className="p-4 flex flex-col gap-1 border-b border-[#242b2a]">
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#8b928f] px-3 py-1">
            Explore Destination
          </span>
          {[
            { id: 'voyages' as ScreenType, label: 'Curated Voyages', icon: 'explore', desc: 'Island itineraries & highlights' },
            { id: 'sanctuaries' as ScreenType, label: 'Bespoke Sanctuaries', icon: 'hotel', desc: 'Luxury tea bungalows & ocean villas' },
            { id: 'expeditions' as ScreenType, label: 'Untamed Expeditions', icon: 'landscape', desc: 'Knuckles treks, safaris & surf' },
            { id: 'concierge' as ScreenType, label: 'Custom Tour Studio', icon: 'tune', desc: 'Interactive trip builder & estimator' },
            { id: 'journal' as ScreenType, label: 'Cinematic Studio & Film', icon: 'videocam', desc: '4K Drone, video reels & photography' },
            { id: 'saved' as ScreenType, label: 'My Saved Journeys', icon: 'bookmark', desc: 'Bookmarked expeditions & custom plans' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
              className={`w-full p-3 rounded-lg flex items-center gap-3 text-left transition-all cursor-pointer ${
                currentScreen === item.id
                  ? 'bg-[#161d1c] border border-[#f9bb60]/40 text-[#f9bb60]'
                  : 'hover:bg-[#161d1c] text-[#dde4e2]'
              }`}
            >
              <span className="material-symbols-outlined text-[22px] text-[#f9bb60]">
                {item.icon}
              </span>
              <div className="flex flex-col">
                <span className="font-medium text-sm">{item.label}</span>
                <span className="text-[11px] text-[#8b928f]">{item.desc}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="p-4 bg-[#0d2e26]/60 border-b border-[#242b2a] flex flex-col gap-2">
          <div className="flex items-center gap-2 text-[#f9bb60]">
            <span className="material-symbols-outlined text-[20px]">chat</span>
            <span className="text-xs uppercase font-mono font-bold tracking-wider">
              Direct Concierge
            </span>
          </div>
          <p className="text-xs text-[#c1c8c4] leading-relaxed">
            Connect immediately with our Colombo travel architects and private chauffeurs.
          </p>
          <a
            href="https://wa.me/94778084913?text=Hello%20Unknown%20Travels%20%26%20Tours,%20I%20would%20like%20to%20plan%20a%20private%20tour."
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 rounded-lg bg-[#f9bb60] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
          >
            WhatsApp +94 77 808 4913
          </a>
        </div>

        {/* Travel Information Accordion */}
        <div className="p-4 flex flex-col gap-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#8b928f] px-1">
            Essential Ceylon Travel Guide
          </span>
          <div className="space-y-2">
            {TRAVEL_TIPS.map((tip, idx) => (
              <details
                key={idx}
                className="group bg-[#161d1c] rounded-lg p-3 border border-[#242b2a] transition-colors"
              >
                <summary className="font-mono text-xs text-[#dde4e2] cursor-pointer flex items-center justify-between list-none font-medium">
                  <span>{tip.title}</span>
                  <span className="material-symbols-outlined text-[16px] text-[#f9bb60] group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="mt-2 text-xs text-[#c1c8c4] leading-relaxed font-body">
                  {tip.desc}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="mt-auto p-4 border-t border-[#242b2a] bg-[#090f0f] text-[11px] text-[#8b928f] flex flex-col gap-1">
          <span className="font-mono uppercase text-[#f9bb60]">Unknown Travels & Tours</span>
          <span>© 2025 Serendib Atelier • Colombo, Sri Lanka</span>
          <span className="text-[10px] text-[#414845]">CAA & DWC Compliant Drone Filming Unit</span>
        </div>
      </div>
    </div>
  );
};
