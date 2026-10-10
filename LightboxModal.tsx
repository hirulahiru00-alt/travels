import React from 'react';
import { GalleryPhoto } from '../../types';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  onClose,
  onNext,
  onPrev,
}) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/95 backdrop-blur-md" onClick={onClose} />

      {/* Lightbox Frame */}
      <div className="relative w-full max-w-4xl bg-[#090f0f] border border-[#242b2a] rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[95vh] text-[#dde4e2]">
        {/* Header bar */}
        <div className="p-3 sm:p-4 bg-[#0e1514] border-b border-[#242b2a] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f9bb60] text-[20px]">
              photo_camera
            </span>
            <div>
              <h4 className="font-mono text-xs sm:text-sm text-white font-bold truncate max-w-[200px] sm:max-w-md">
                {photo.title}
              </h4>
              <span className="text-[10px] text-[#8b928f] font-mono">
                {photo.location}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#161d1c] text-[#8b928f] hover:text-[#dde4e2] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Image Preview Container */}
        <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden group">
          <img
            src={photo.imageUrl}
            alt={photo.alt}
            className="w-full h-full object-contain max-h-[65vh]"
          />

          {/* Navigation Arrows */}
          {onPrev && (
            <button
              onClick={onPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-[#dde4e2] hover:text-[#f9bb60] hover:bg-black/80 flex items-center justify-center transition-all cursor-pointer opacity-80 group-hover:opacity-100"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_left</span>
            </button>
          )}

          {onNext && (
            <button
              onClick={onNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-[#dde4e2] hover:text-[#f9bb60] hover:bg-black/80 flex items-center justify-center transition-all cursor-pointer opacity-80 group-hover:opacity-100"
            >
              <span className="material-symbols-outlined text-[24px]">chevron_right</span>
            </button>
          )}
        </div>

        {/* Footer with EXIF details & WhatsApp inquire */}
        <div className="p-4 bg-[#0e1514] border-t border-[#242b2a] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3 text-[#c1c8c4] font-mono text-[11px]">
            {photo.cameraInfo && (
              <span className="px-2 py-1 rounded bg-[#161d1c] border border-[#242b2a] text-[#f9bb60]">
                📷 {photo.cameraInfo}
              </span>
            )}
            <span className="uppercase text-[#8b928f]">
              Category: <span className="text-[#abcec2]">{photo.category}</span>
            </span>
          </div>

          <a
            href={`https://wa.me/94778084913?text=${encodeURIComponent(
              `Hello Unknown Travels, I saw the photo "${photo.title}" in ${photo.location}. Can we include this location in our private custom tour?`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-4 h-9 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[16px]">chat</span>
            Include In My Route
          </a>
        </div>
      </div>
    </div>
  );
};
