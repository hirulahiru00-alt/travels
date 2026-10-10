import React, { useState } from 'react';
import { VideoStory, GalleryPhoto } from '../types';
import { VIDEO_STORIES, GALLERY_PHOTOS } from '../data/travelData';

interface JournalScreenProps {
  onPlayVideo: (vid: VideoStory) => void;
  onOpenPhoto: (photo: GalleryPhoto) => void;
}

export const JournalScreen: React.FC<JournalScreenProps> = ({
  onPlayVideo,
  onOpenPhoto,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  const testimonials = [
    {
      name: 'Oliver & Sophie M.',
      country: 'London, United Kingdom',
      tour: '7-Day Complete Sri Lanka Experience + 4K Cinema Film',
      quote:
        'Unknown Travels gave us an experience that felt like living inside a luxury documentary. Our private chauffeur Nuwan was incredible, and the video film delivered by their studio brought tears to our eyes back in London.',
      rating: '★★★★★',
    },
    {
      name: 'Dr. Markus Weber',
      country: 'Munich, Germany',
      tour: 'Knuckles Cloud Forest & Tea Trails Expedition',
      quote:
        'Flawless organization. Hiking into Meemure village and watching leopards at dawn in Yala without the standard crowds. Outstanding local intimacy and genuine care.',
      rating: '★★★★★',
    },
    {
      name: 'Claire & Julien B.',
      country: 'Paris, France',
      tour: '10-Day Ultimate Ceylon Honeymoon',
      quote:
        'The villas in Cape Weligama and Sigiriya were breathtaking. The drone footage of our train journey over Nine Arch Bridge is something we will treasure forever.',
      rating: '★★★★★',
    },
  ];

  return (
    <div className="flex flex-col w-full text-[#dde4e2] max-w-4xl mx-auto px-4 sm:px-6 py-4 gap-8 pb-24">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#f9bb60] text-[22px]">videocam</span>
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Unknown Studio Film Unit
          </span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl text-white">
          Cinematic Chronicles &amp; Photo Archives
        </h2>
        <p className="font-body text-xs sm:text-sm text-[#c1c8c4] leading-relaxed max-w-2xl">
          Visual storytellers accompanying discerning expeditions. We turn your private Ceylon journey into a cinema-grade movie and heirloom photographic gallery.
        </p>
      </div>

      {/* Featured Video Story Cards */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-xl sm:text-2xl text-white">
            Cinematic Video Releases
          </h3>
          <span className="font-mono text-xs text-[#f9bb60]">
            4K UHD Portfolio
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {VIDEO_STORIES.map((vid) => (
            <div
              key={vid.id}
              className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div
                  className="bg-cover bg-center w-full h-44 relative flex items-center justify-center cursor-pointer"
                  style={{ backgroundImage: `url('${vid.thumbnail}')` }}
                  onClick={() => onPlayVideo(vid)}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <button className="w-12 h-12 rounded-full bg-[#f9bb60] text-[#452b00] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform z-10 cursor-pointer">
                    <span
                      className="material-symbols-outlined text-[26px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </button>
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/70 text-[#f9bb60] font-mono text-[10px]">
                    {vid.duration}
                  </span>
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[#abcec2] font-mono text-[10px] uppercase font-bold">
                    4K
                  </span>
                </div>

                <div className="p-4 flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] text-[#f9bb60] uppercase font-bold">
                    {vid.tag}
                  </span>
                  <h4 className="font-headline text-base text-white font-medium">
                    {vid.title}
                  </h4>
                  <p className="font-body text-xs text-[#c1c8c4] leading-relaxed line-clamp-2">
                    {vid.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => onPlayVideo(vid)}
                  className="w-full h-9 rounded-lg bg-[#242b2a] hover:bg-[#2f3635] text-[#dde4e2] font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">play_circle</span>
                  Watch Reel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drone Aerials & Camera Gear Specifications */}
      <div className="p-5 sm:p-6 rounded-xl bg-[#090f0f] border border-[#242b2a] flex flex-col gap-4 shadow-xl">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#f9bb60] text-[22px]">policy</span>
          <span className="font-mono text-xs uppercase text-[#f9bb60] font-bold tracking-wider">
            Unknown Studio Flight Protocol &amp; Gear
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div className="p-3.5 rounded-lg bg-[#161d1c] border border-[#242b2a] flex flex-col gap-1">
            <span className="text-[#abcec2] font-bold">Cinema Cameras</span>
            <span className="text-[#c1c8c4]">Sony FX3, FX6 &amp; Leica Q2</span>
            <span className="text-[10px] text-[#8b928f]">S-Cinetone 10-bit 4:2:2</span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#161d1c] border border-[#242b2a] flex flex-col gap-1">
            <span className="text-[#f9bb60] font-bold">Aerial Drones</span>
            <span className="text-[#c1c8c4]">DJI Mavic 3 Cine &amp; Inspire 3</span>
            <span className="text-[10px] text-[#8b928f]">Apple ProRes 422 HQ</span>
          </div>

          <div className="p-3.5 rounded-lg bg-[#161d1c] border border-[#242b2a] flex flex-col gap-1">
            <span className="text-[#a0d1c1] font-bold">Statutory Permits</span>
            <span className="text-[#c1c8c4]">CAA &amp; DWC Eco Certified</span>
            <span className="text-[10px] text-[#8b928f]">Legal wildlife safe buffers</span>
          </div>
        </div>
      </div>

      {/* Full Photo Archive Stream with Category filter */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="font-headline text-xl sm:text-2xl text-white">
            Fine Art Photographic Archive
          </h3>
          <span className="font-mono text-xs text-[#8b928f]">
            Tap photo to inspect EXIF
          </span>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {['all', 'beaches', 'mountains', 'wildlife', 'culture', 'drone'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#f9bb60] text-[#452b00] font-bold shadow-md'
                  : 'bg-[#242b2a] text-[#c1c8c4] hover:text-white'
              }`}
            >
              {cat === 'all' ? 'All Images' : cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onOpenPhoto(photo)}
              className="rounded-lg overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-sm relative group cursor-pointer aspect-square"
            >
              <img
                src={photo.imageUrl}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                <span className="font-mono text-[10px] text-[#f9bb60] font-bold truncate">
                  {photo.title}
                </span>
                <span className="font-mono text-[9px] text-[#8b928f]">
                  {photo.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Guest Chronicles & Testimonials */}
      <div className="flex flex-col gap-4">
        <h3 className="font-headline text-xl sm:text-2xl text-white">
          Traveler Chronicles &amp; Letters
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#161d1c] border border-[#242b2a] flex flex-col justify-between gap-3 shadow-md"
            >
              <div className="flex flex-col gap-2">
                <span className="text-[#f9bb60] tracking-widest text-sm">
                  {t.rating}
                </span>
                <p className="font-body text-xs text-[#c1c8c4] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-2 border-t border-[#242b2a] flex flex-col">
                <span className="font-bold text-white text-xs">{t.name}</span>
                <span className="text-[10px] text-[#8b928f]">{t.country}</span>
                <span className="text-[9px] text-[#abcec2] mt-0.5 truncate">{t.tour}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
