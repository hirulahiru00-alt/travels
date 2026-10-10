import React from 'react';
import { EXPEDITIONS } from '../data/travelData';

export const ExpeditionsScreen: React.FC = () => {
  return (
    <div className="flex flex-col w-full text-[#dde4e2] max-w-4xl mx-auto px-4 sm:px-6 py-4 gap-6 pb-24">
      {/* Screen Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#f9bb60] text-[22px]">landscape</span>
          <span className="font-mono text-xs uppercase text-[#f9bb60] tracking-[0.2em] font-bold">
            Untamed Ceylon
          </span>
        </div>
        <h2 className="font-headline text-3xl sm:text-4xl text-white">
          Active Expeditions &amp; Wild Trails
        </h2>
        <p className="font-body text-xs sm:text-sm text-[#c1c8c4] leading-relaxed max-w-2xl">
          Away from typical tourist buses. Traversed with licensed field naturalists, remote hill trackers, and private 4x4 vehicles.
        </p>
      </div>

      {/* Expeditions List */}
      <div className="flex flex-col gap-6">
        {EXPEDITIONS.map((exp) => (
          <div
            key={exp.id}
            className="rounded-xl overflow-hidden bg-[#161d1c] border border-[#242b2a] shadow-lg flex flex-col md:flex-row group hover:border-[#f9bb60]/40 transition-colors"
          >
            <div className="relative md:w-2/5 h-56 md:h-auto overflow-hidden shrink-0">
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#161d1c] via-transparent to-transparent" />
              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span
                  className={`px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase font-bold border ${
                    exp.difficulty === 'Challenging'
                      ? 'bg-red-950/80 text-red-300 border-red-800/40'
                      : exp.difficulty === 'Moderate'
                      ? 'bg-amber-950/80 text-[#f9bb60] border-amber-800/40'
                      : 'bg-emerald-950/80 text-[#abcec2] border-emerald-800/40'
                  }`}
                >
                  {exp.difficulty}
                </span>
                {exp.elevation && (
                  <span className="px-2 py-0.5 rounded bg-black/60 text-[#dde4e2] font-mono text-[10px]">
                    {exp.elevation}
                  </span>
                )}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between gap-3">
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-[#f9bb60] uppercase font-bold tracking-wider">
                    {exp.region}
                  </span>
                  <span className="font-mono text-[11px] text-[#8b928f]">
                    ⏱ {exp.duration}
                  </span>
                </div>

                <h3 className="font-headline text-xl sm:text-2xl text-white">
                  {exp.title}
                </h3>
                <span className="font-mono text-xs text-[#abcec2]">
                  {exp.subtitle}
                </span>

                <p className="font-body text-xs text-[#c1c8c4] leading-relaxed pt-1">
                  {exp.description}
                </p>

                {/* Highlights tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-[#242b2a] text-[10px] font-mono text-[#dde4e2]"
                    >
                      ★ {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#242b2a] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-[11px] font-mono text-[#8b928f]">
                  Season: <span className="text-[#f9bb60]">{exp.season}</span>
                </span>
                <a
                  href={`https://wa.me/94778084913?text=${encodeURIComponent(
                    `Hello Unknown Travels, I want to book the "${exp.title}" expedition with a private guide.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-5 rounded-lg bg-[#f9bb60] hover:bg-[#ffddb2] text-[#452b00] font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                >
                  <span className="material-symbols-outlined text-[16px]">chat</span>
                  Book With Naturalist
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
