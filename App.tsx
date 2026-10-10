/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  ScreenType,
  CurrencyType,
  LanguageType,
  TourPackage,
  Sanctuary,
  VideoStory,
  GalleryPhoto,
  CustomTourQuote,
} from './types';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { SidebarDrawer } from './components/SidebarDrawer';
import { WhatsAppFab } from './components/WhatsAppFab';

// Screens
import { VoyagesScreen } from './screens/VoyagesScreen';
import { SanctuariesScreen } from './screens/SanctuariesScreen';
import { ExpeditionsScreen } from './screens/ExpeditionsScreen';
import { ConciergeScreen } from './screens/ConciergeScreen';
import { JournalScreen } from './screens/JournalScreen';
import { SavedJourneysScreen } from './screens/SavedJourneysScreen';

// Modals
import { ItineraryModal } from './components/Modals/ItineraryModal';
import { VideoModal } from './components/Modals/VideoModal';
import { LightboxModal } from './components/Modals/LightboxModal';
import { SanctuaryModal } from './components/Modals/SanctuaryModal';
import { BookingConfirmationModal } from './components/Modals/BookingConfirmationModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('voyages');
  const [currency, setCurrency] = useState<CurrencyType>('USD');
  const [language, setLanguage] = useState<LanguageType>('EN');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Modals state
  const [activePackageModal, setActivePackageModal] = useState<TourPackage | null>(null);
  const [activeSanctuaryModal, setActiveSanctuaryModal] = useState<Sanctuary | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<VideoStory | null>(null);
  const [activePhotoModal, setActivePhotoModal] = useState<GalleryPhoto | null>(null);
  const [activeQuoteModal, setActiveQuoteModal] = useState<CustomTourQuote | null>(null);

  // Saved / Bookmarked state
  const [savedPackages, setSavedPackages] = useState<TourPackage[]>(() => {
    try {
      const stored = localStorage.getItem('utt_saved_packages');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [savedQuotes, setSavedQuotes] = useState<CustomTourQuote[]>(() => {
    try {
      const stored = localStorage.getItem('utt_saved_quotes');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('utt_saved_packages', JSON.stringify(savedPackages));
    } catch {
      // ignore
    }
  }, [savedPackages]);

  useEffect(() => {
    try {
      localStorage.setItem('utt_saved_quotes', JSON.stringify(savedQuotes));
    } catch {
      // ignore
    }
  }, [savedQuotes]);

  // Screen change scroll to top
  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle package bookmark
  const handleToggleSavePackage = (pkg: TourPackage) => {
    if (savedPackages.some((p) => p.id === pkg.id)) {
      setSavedPackages(savedPackages.filter((p) => p.id !== pkg.id));
    } else {
      setSavedPackages([...savedPackages, pkg]);
    }
  };

  const handleRemovePackage = (pkgId: string) => {
    setSavedPackages(savedPackages.filter((p) => p.id !== pkgId));
  };

  const handleSaveCustomQuote = (quote: CustomTourQuote) => {
    setSavedQuotes([quote, ...savedQuotes]);
    setActiveQuoteModal(quote);
  };

  const handleRemoveQuote = (refNumber: string) => {
    setSavedQuotes(savedQuotes.filter((q) => q.referenceNumber !== refNumber));
  };

  const totalSavedCount = savedPackages.length + savedQuotes.length;

  return (
    <div className="bg-[#0e1514] text-[#dde4e2] min-h-screen flex flex-col antialiased selection:bg-[#f9bb60] selection:text-[#452b00]">
      {/* Top Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenMenu={() => setIsSidebarOpen(true)}
        currency={currency}
        onChangeCurrency={setCurrency}
        language={language}
        onChangeLanguage={setLanguage}
        savedCount={totalSavedCount}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-[#0e1514] min-h-screen">
        {currentScreen === 'voyages' && (
          <VoyagesScreen
            onSelectPackage={(pkg) => setActivePackageModal(pkg)}
            onPlayVideo={(vid) => setActiveVideoModal(vid)}
            onOpenPhoto={(photo) => setActivePhotoModal(photo)}
            onNavigateToBuilder={() => handleNavigate('concierge')}
            currency={currency}
            onSaveCustomQuote={handleSaveCustomQuote}
          />
        )}

        {currentScreen === 'sanctuaries' && (
          <SanctuariesScreen
            onSelectSanctuary={(sanc) => setActiveSanctuaryModal(sanc)}
            currency={currency}
          />
        )}

        {currentScreen === 'expeditions' && <ExpeditionsScreen />}

        {currentScreen === 'concierge' && (
          <ConciergeScreen
            currency={currency}
            onSaveCustomQuote={handleSaveCustomQuote}
          />
        )}

        {currentScreen === 'journal' && (
          <JournalScreen
            onPlayVideo={(vid) => setActiveVideoModal(vid)}
            onOpenPhoto={(photo) => setActivePhotoModal(photo)}
          />
        )}

        {currentScreen === 'saved' && (
          <SavedJourneysScreen
            savedPackages={savedPackages}
            savedQuotes={savedQuotes}
            onRemovePackage={handleRemovePackage}
            onRemoveQuote={handleRemoveQuote}
            onSelectPackage={(pkg) => setActivePackageModal(pkg)}
            currency={currency}
            onNavigateToVoyages={() => handleNavigate('voyages')}
          />
        )}
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFab />

      {/* Bottom Nav Bar */}
      <Navigation
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        savedCount={totalSavedCount}
      />

      {/* Slide-out Menu Drawer */}
      <SidebarDrawer
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onNavigate={handleNavigate}
        currentScreen={currentScreen}
      />

      {/* Modals */}
      <ItineraryModal
        packageData={activePackageModal}
        onClose={() => setActivePackageModal(null)}
        currency={currency}
        isSaved={
          activePackageModal
            ? savedPackages.some((p) => p.id === activePackageModal.id)
            : false
        }
        onToggleSave={handleToggleSavePackage}
      />

      <VideoModal
        video={activeVideoModal}
        onClose={() => setActiveVideoModal(null)}
      />

      <LightboxModal
        photo={activePhotoModal}
        onClose={() => setActivePhotoModal(null)}
      />

      <SanctuaryModal
        sanctuary={activeSanctuaryModal}
        onClose={() => setActiveSanctuaryModal(null)}
        currency={currency}
      />

      <BookingConfirmationModal
        quote={activeQuoteModal}
        onClose={() => setActiveQuoteModal(null)}
        currency={currency}
      />
    </div>
  );
}
