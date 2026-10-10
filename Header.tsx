import React from 'react';
import { ScreenType, CurrencyType, LanguageType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenMenu: () => void;
  currency: CurrencyType;
  onChangeCurrency: (curr: CurrencyType) => void;
  language: LanguageType;
  onChangeLanguage: (lang: LanguageType) => void;
  savedCount: number;
}

const SCREEN_TITLES: Record<ScreenType, { label: string; subtitle: string }> = {
  voyages: { label: 'Unknown Travels & Tours', subtitle: 'Curated Voyages' },
  sanctuaries: { label: 'Bespoke Sanctuaries', subtitle: 'Villas & Bungalows' },
  expeditions: { label: 'Wild Expeditions', subtitle: 'Off-Grid Ceylon' },
  concierge: { label: 'Concierge Studio', subtitle: 'Custom Tour Planner' },
  journal: { label: 'Unknown Studio', subtitle: 'Cinematic Chronicles' },
  saved: { label: 'Saved Itineraries', subtitle: 'My Expedition Journal' },
};

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenMenu,
  currency,
  onChangeCurrency,
  language,
  onChangeLanguage,
  savedCount,
}) => {
  const current = SCREEN_TITLES[currentScreen];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#090f0f]/85 backdrop-blur-xl border-b border-[#242b2a]/70 shadow-[0_1px_8px_rgba(0,0,0,0.3)] pt-safe transition-colors">
      <div className="max-w-6xl mx-auto h-16 px-4 md:px-8 flex items-center justify-between gap-2">
        {/* Left: Hamburger menu + Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenMenu}
            aria-label="Navigation Menu"
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#dde4e2] hover:text-[#f9bb60] hover:bg-[#161d1c] transition-all cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          <div
            onClick={() => onNavigate('voyages')}
            className="flex flex-col cursor-pointer select-none group"
          >
            <span className="font-label-sm text-[10px] md:text-[11px] text-[#f9bb60] uppercase tracking-[0.2em] font-semibold flex items-center gap-1.5">
              <span>🇱🇰</span>
              <span>{current.label}</span>
            </span>
            <h1 className="font-headline text-[18px] md:text-[22px] text-[#dde4e2] tracking-tight group-hover:text-[#f9bb60] transition-colors truncate max-w-[170px] sm:max-w-xs md:max-w-md">
              {current.subtitle}
            </h1>
          </div>
        </div>

        {/* Center Desktop Navigation Tabs */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#161d1c]/80 p-1 rounded-lg border border-[#242b2a]">
          <button
            onClick={() => onNavigate('voyages')}
            className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              currentScreen === 'voyages' ? 'bg-[#f9bb60] text-[#452b00]' : 'text-[#c1c8c4] hover:text-[#dde4e2]'
            }`}
          >
            Voyages
          </button>
          <button
            onClick={() => onNavigate('sanctuaries')}
            className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              currentScreen === 'sanctuaries' ? 'bg-[#f9bb60] text-[#452b00]' : 'text-[#c1c8c4] hover:text-[#dde4e2]'
            }`}
          >
            Sanctuaries
          </button>
          <button
            onClick={() => onNavigate('expeditions')}
            className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              currentScreen === 'expeditions' ? 'bg-[#f9bb60] text-[#452b00]' : 'text-[#c1c8c4] hover:text-[#dde4e2]'
            }`}
          >
            Expeditions
          </button>
          <button
            onClick={() => onNavigate('concierge')}
            className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              currentScreen === 'concierge' ? 'bg-[#f9bb60] text-[#452b00]' : 'text-[#c1c8c4] hover:text-[#dde4e2]'
            }`}
          >
            Custom Tour
          </button>
          <button
            onClick={() => onNavigate('journal')}
            className={`px-3 py-1.5 rounded text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
              currentScreen === 'journal' ? 'bg-[#f9bb60] text-[#452b00]' : 'text-[#c1c8c4] hover:text-[#dde4e2]'
            }`}
          >
            Cinematic Studio
          </button>
        </nav>

        {/* Right: Currency / Language and Profile */}
        <div className="flex items-center gap-2">
          {/* Currency Toggle */}
          <div className="flex items-center bg-[#161d1c] border border-[#242b2a] rounded-lg px-2 py-1 text-xs font-mono">
            <select
              value={currency}
              onChange={(e) => onChangeCurrency(e.target.value as CurrencyType)}
              className="bg-transparent text-[#f9bb60] font-semibold outline-none cursor-pointer pr-1"
              aria-label="Currency"
            >
              <option value="USD" className="bg-[#161d1c] text-[#dde4e2]">USD</option>
              <option value="EUR" className="bg-[#161d1c] text-[#dde4e2]">EUR</option>
              <option value="GBP" className="bg-[#161d1c] text-[#dde4e2]">GBP</option>
              <option value="AUD" className="bg-[#161d1c] text-[#dde4e2]">AUD</option>
              <option value="LKR" className="bg-[#161d1c] text-[#dde4e2]">LKR</option>
            </select>
            <span className="text-[#414845]">|</span>
            <select
              value={language}
              onChange={(e) => onChangeLanguage(e.target.value as LanguageType)}
              className="bg-transparent text-[#c1c8c4] font-medium outline-none cursor-pointer pl-1"
              aria-label="Language"
            >
              <option value="EN" className="bg-[#161d1c] text-[#dde4e2]">EN</option>
              <option value="DE" className="bg-[#161d1c] text-[#dde4e2]">DE</option>
              <option value="FR" className="bg-[#161d1c] text-[#dde4e2]">FR</option>
              <option value="RU" className="bg-[#161d1c] text-[#dde4e2]">RU</option>
            </select>
          </div>

          {/* Bookmarked / Saved Journeys Button */}
          <button
            onClick={() => onNavigate('saved')}
            aria-label="Saved Journeys"
            className="relative w-9 h-9 rounded-full bg-[#abcec2] hover:bg-[#c7eade] flex items-center justify-center text-[#16362e] transition-all cursor-pointer shadow-md"
            title="Saved Expeditions"
          >
            <span className="material-symbols-outlined text-[19px]">bookmark</span>
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#f9bb60] text-[#452b00] text-[10px] font-bold flex items-center justify-center font-mono animate-pulse">
                {savedCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
