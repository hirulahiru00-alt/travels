import React from 'react';
import { ScreenType } from '../types';

interface NavigationProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  savedCount: number;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  onNavigate,
  savedCount,
}) => {
  const tabs = [
    {
      id: 'voyages' as ScreenType,
      label: 'Voyages',
      icon: 'explore',
    },
    {
      id: 'sanctuaries' as ScreenType,
      label: 'Sanctuaries',
      icon: 'hotel',
    },
    {
      id: 'expeditions' as ScreenType,
      label: 'Expeditions',
      icon: 'landscape',
    },
    {
      id: 'concierge' as ScreenType,
      label: 'Concierge',
      icon: 'tune',
    },
    {
      id: 'journal' as ScreenType,
      label: 'Journal',
      icon: 'videocam',
    },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-[#090f0f]/90 backdrop-blur-xl border-t border-[#242b2a]/80 shadow-[0_-1px_12px_rgba(0,0,0,0.4)]">
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-2">
        {tabs.map((tab) => {
          const isActive = currentScreen === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center gap-0.5 min-w-[54px] min-h-[46px] rounded-lg transition-all cursor-pointer relative ${
                isActive
                  ? 'text-[#f9bb60] font-semibold'
                  : 'text-[#8b928f] hover:text-[#dde4e2]'
              }`}
            >
              <span
                className={`material-symbols-outlined text-[23px] transition-transform ${
                  isActive ? 'scale-110' : ''
                }`}
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {tab.icon}
              </span>
              <span className="font-label-sm text-[10px] tracking-wider uppercase">
                {tab.label}
              </span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#f9bb60] absolute bottom-1"></span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
