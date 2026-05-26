import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, RefreshCw, Layers, Shield, Eye, HelpCircle } from 'lucide-react';
import { CardTheme, CardThemeId, Player } from '../types';
import { StickerCard } from './StickerCard';

interface FullScreenViewerProps {
  player: Player;
  theme: CardTheme;
  isUnlocked: boolean;
  onClose: () => void;
  onChangeTheme: (themeId: CardThemeId) => void;
  themes: CardTheme[];
}

export function FullScreenViewer({
  player,
  theme,
  isUnlocked,
  onClose,
  onChangeTheme,
  themes,
}: FullScreenViewerProps) {
  const [activeTheme, setActiveTheme] = useState<CardTheme>(theme);

  // Sync internal active theme with passed Prop
  useEffect(() => {
    setActiveTheme(theme);
  }, [theme]);

  // Handle ESC key for immersive exit
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Disable body scroll when full screen is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  // Ambient backgrounds depending on the current active card theme
  const getAmbientBg = () => {
    switch (activeTheme.id) {
      case 'shiny':
        return 'from-pink-950/40 via-yellow-950/20 to-indigo-950/50 bg-[#05050c]';
      case 'retro':
        return 'from-amber-950/30 via-stone-950 to-[#0e0a05]';
      case 'cyber':
        return 'from-[#050d1a] via-[#02050c] to-[#0f000c]';
      case 'classic':
      default:
        return 'from-emerald-950/35 via-slate-950 to-[#06150b]';
    }
  };

  // Light flare glow styling behind card
  const getGlowStyle = () => {
    switch (activeTheme.id) {
      case 'shiny':
        return 'bg-gradient-to-r from-pink-500/10 via-yellow-500/10 to-indigo-500/10 shadow-[0_0_120px_rgba(250,204,21,0.25)]';
      case 'retro':
        return 'bg-amber-600/5 shadow-[0_0_100px_rgba(217,119,6,0.15)]';
      case 'cyber':
        return 'bg-cyan-500/5 shadow-[0_0_120px_rgba(0,240,255,0.3)]';
      case 'classic':
      default:
        return 'bg-[#009b3a]/5 shadow-[0_0_100px_rgba(0,155,58,0.2)]';
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto p-4 md:p-6 transition-all duration-500 bg-gradient-to-b ${getAmbientBg()}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* VINTAGE DUST PARTICLES MATCHING BRAZIL COLORS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-yellow-400 blur-xs animate-[ping_4s_infinite]" />
          <div className="absolute top-[40%] left-[80%] w-1.5 h-1.5 rounded-full bg-emerald-400 blur-xs animate-[bounce_5s_infinite]" />
          <div className="absolute top-[75%] left-[15%] w-2.5 h-2.5 rounded-full bg-blue-400 blur-xs animate-[pulse_3s_infinite]" />
          <div className="absolute top-[85%] left-[65%] w-1 h-1 rounded-full bg-white blur-none animate-[ping_6s_infinite]" />
          <div className="absolute top-[25%] left-[70%] w-2 h-2 rounded-full bg-yellow-500/60 blur-xs animate-[bounce_6s_infinite]" />
        </div>

        {/* TOP CONTROLS (TITLE & CLOSE) */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between z-10 py-2 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-mono font-black text-xs text-yellow-400">
              #{player.squadNumber.split(' (')[0]}
            </div>
            <div>
              <span className="text-[9px] text-[#009b3a] tracking-widest font-mono font-extrabold uppercase leading-none block mb-0.5">
                EXPOSICIÓN DE ARTE ESTELAR 2026
              </span>
              <h2 className="text-sm font-black text-white tracking-wider uppercase leading-none">
                {player.fullName}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs font-mono border border-white/10 group active:scale-95"
            title="Cerrar vista de pantalla completa"
          >
            <span>SALIR</span>
            <span className="text-[10px] opacity-50 px-1 bg-black/40 rounded">ESC</span>
            <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* CENTER INTERACTIVE CARD WITH GIANT AMBIENT GLOW */}
        <div className="flex-1 flex flex-col items-center justify-center my-6 py-4 relative z-10">
          
          {/* Backing Flare Ambient Glow */}
          <div className={`absolute w-72 h-96 rounded-full blur-3xl pointer-events-none -z-10 ${getGlowStyle()}`} />

          <motion.div
            className="transform transition-all"
            initial={{ scale: 0.9, y: 15 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          >
            {/* 1.25x - 1.35x Scale container mimicking museum showcase view */}
            <div className="transform scale-102 min-[450px]:scale-110 sm:scale-[1.2] md:scale-[1.28] origin-center py-4">
              <StickerCard
                theme={activeTheme}
                player={player}
                isUnlocked={isUnlocked}
              />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION: CATEGORY CUSTOMIZER & METRIC OVERVIEW */}
        <div className="w-full max-w-4xl mx-auto z-10 flex flex-col gap-4 py-4 border-t border-white/5">
          
          {/* Dynamic Theme Shift Pill Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-black/40 backdrop-blur-md p-3.5 rounded-2xl border border-white/5">
            
            <div className="flex items-center gap-2 select-none">
              <Layers className="w-4 h-4 text-yellow-400 shrink-0" />
              <div className="text-left">
                <span className="text-[10px] text-slate-500 font-mono block uppercase">ACABADO DEL CROMO</span>
                <p className="text-xs font-bold text-slate-200">{activeTheme.name}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 justify-center">
              {themes.map((t) => {
                const isActive = t.id === activeTheme.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      setActiveTheme(t);
                      onChangeTheme(t.id);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all uppercase ${
                      isActive
                        ? 'bg-yellow-500 text-slate-950 font-black shadow-lg shadow-yellow-500/20 scale-102'
                        : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/15'
                    }`}
                  >
                    {t.name.split(' ')[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Minimalist decorative foot details */}
          <p className="text-center text-[10px] text-slate-500 font-mono tracking-widest uppercase py-1 select-none">
            ⭐ {player.nickname} • Oprime en cualquier parte del cromo para mirar su dorso de datos históricos
          </p>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
