import React, { useState } from 'react';
import { VideoStory } from '../../types';

interface VideoModalProps {
  video: VideoStory | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />

      {/* Video Container */}
      <div className="relative w-full max-w-3xl bg-[#090f0f] border border-[#242b2a] rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col text-[#dde4e2]">
        {/* Top Header */}
        <div className="p-4 bg-[#0e1514] border-b border-[#242b2a] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#f9bb60] font-bold">
              Unknown Studio 4K Cinema Reel
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#161d1c] text-[#8b928f] hover:text-[#dde4e2] flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Video Canvas / Player Area */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden group">
          <img
            src={video.thumbnail}
            alt={video.title}
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              isPlaying ? 'scale-105' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-black/30 backdrop-brightness-95" />

          {/* Cinematic overlay letterbox bars */}
          <div className="absolute top-0 inset-x-0 h-6 bg-black/90" />
          <div className="absolute bottom-0 inset-x-0 h-6 bg-black/90" />

          {/* Playing animation simulation */}
          {isPlaying && (
            <div className="absolute top-8 left-4 flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md font-mono text-[10px] text-[#abcec2]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>4K UHD • 24 FPS • S-Log3</span>
            </div>
          )}

          {/* Center Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 rounded-full bg-[#f9bb60] text-[#452b00] flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer z-20"
          >
            <span
              className="material-symbols-outlined text-[36px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          {/* Bottom Video Progress bar */}
          <div className="absolute bottom-7 inset-x-4 flex flex-col gap-1 z-20">
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className={`h-full bg-[#f9bb60] transition-all duration-300 ${
                  isPlaying ? 'w-2/3 animate-pulse' : 'w-1/3'
                }`}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-white/80">
              <span>01:24</span>
              <span>{video.duration}</span>
            </div>
          </div>
        </div>

        {/* Video Info & Controls */}
        <div className="p-5 flex flex-col gap-3 bg-[#0e1514]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[11px] font-mono text-[#f9bb60] uppercase tracking-wider font-semibold">
                {video.tag}
              </span>
              <h3 className="font-headline text-xl text-white font-medium">
                {video.title}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="px-3 py-1.5 rounded-lg bg-[#161d1c] hover:bg-[#242b2a] text-[#dde4e2] font-mono text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px]">
                  {isMuted ? 'volume_off' : 'volume_up'}
                </span>
                <span>{isMuted ? 'Unmute' : 'Ambient Audio'}</span>
              </button>
            </div>
          </div>

          <p className="text-xs text-[#c1c8c4] leading-relaxed font-body">
            {video.description}
          </p>

          <div className="pt-2 border-t border-[#242b2a] flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[11px] font-mono text-[#8b928f]">
              Want our film unit to accompany your voyage?
            </span>
            <a
              href={`https://wa.me/94778084913?text=${encodeURIComponent(
                `Hello Unknown Studio, I loved the video "${video.title}". How can I book cinematic media coverage for my Sri Lanka journey?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 h-10 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">movie</span>
              Inquire Film Unit on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
