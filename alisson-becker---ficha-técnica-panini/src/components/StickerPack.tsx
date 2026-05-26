import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Package, Sparkles, Flame } from 'lucide-react';

interface StickerPackProps {
  playerName: string;
  onOpen: () => void;
}

export function StickerPack({ playerName, onOpen }: StickerPackProps) {
  const [ripping, setRipping] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const startRip = () => {
    if (ripping || isOpened) return;
    setRipping(true);
    
    // Simulate packet ripping animation
    setTimeout(() => {
      setIsOpened(true);
      onOpen();
    }, 1200);
  };

  return (
    <div className="flex flex-col items-center justify-center select-none py-4">
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            className="relative"
            exit={{ scale: 0.8, opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-yellow-500/20 blur-2xl rounded-full scale-105 animate-pulse" />

            {/* STICKER BOOSTER FOIL PACK */}
            <motion.div
              className="relative w-[280px] h-[380px] bg-gradient-to-br from-[#009b3a] via-[#fec922] to-[#009b3a] border-4 border-yellow-300 rounded-3xl p-5 shadow-[0_25px_50px_-12px_rgba(0,155,58,0.5)] flex flex-col justify-between overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.04, rotate: [0, -1, 1, 0] }}
              whileTap={{ scale: 0.98 }}
              onClick={startRip}
              animate={ripping ? { 
                y: [0, -10, 10, -5, 5, 0],
                rotate: [0, -2, 2, -2, 2, 0]
              } : {}}
              transition={ripping ? { duration: 1, repeat: Infinity } : { duration: 0.2 }}
            >
              {/* Silver Metallic Foil Reflection Glares */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-y-full animate-[shimmer_3s_infinite_linear]" />
              
              {/* Jagged / Crimped Edges (Top & Bottom) of standard foil wrappers */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-slate-900 border-b border-yellow-300 flex justify-between px-1 bg-repeat-x overflow-hidden" 
                   style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}>
                {Array.from({ length: 45 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rotate-45 shrink-0 transform -translate-y-1" />
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-4 bg-slate-900 border-t border-yellow-300 flex justify-between px-1 bg-repeat-x overflow-hidden">
                {Array.from({ length: 45 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-yellow-400 rotate-45 shrink-0 transform translate-y-1" />
                ))}
              </div>

              {/* STICKER TEXTS & STARS */}
              <div className="z-10 flex justify-between items-center mt-3 select-none">
                <span className="text-[10px] bg-slate-900/80 backdrop-blur-xs text-yellow-400 px-2 py-0.5 rounded-full font-mono font-black border border-yellow-500/30">
                  EDICIÓN LIMITADA
                </span>
                <div className="flex gap-1 text-slate-900">
                  <Sparkles className="w-4 h-4 text-slate-950 animate-pulse" />
                </div>
              </div>

              {/* BOOSTER PACK CENTER BADGE */}
              <div className="z-10 flex flex-col items-center text-center my-auto py-4">
                {/* Brazil logo styled badge */}
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center p-2 border-2 border-yellow-400 shadow-lg text-yellow-400 relative mb-4">
                  <Package className="w-9 h-9" />
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-emerald-500 rounded-full text-white text-[9px] font-black flex items-center justify-center border border-white">
                    1
                  </div>
                </div>

                <h1 className="text-2xl font-black text-slate-950 tracking-tighter uppercase leading-none filter drop-shadow-[0_1.5px_0px_rgba(255,255,255,0.7)]">
                  Cromo Oficial
                </h1>
                <p className="text-slate-900 text-xs font-extrabold font-mono tracking-widest mt-1">
                  BRASIL • EXCLUSIVO
                </p>

                {/* Star player tag */}
                <span className="mt-4 px-3 py-1 bg-slate-900 text-yellow-400 font-extrabold text-[11px] rounded-lg tracking-wider border border-yellow-400 uppercase">
                  {playerName}
                </span>
              </div>

              {/* FOOTER */}
              <div className="z-10 flex justify-between items-end mb-3 text-slate-900 text-[9px] font-extrabold select-none">
                <div className="flex flex-col">
                  <span>ESTELAR COLLECTION</span>
                  <span className="text-[7px] text-slate-950/80">© 2026 LICENCIA OFICIAL CBF</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-950/20 px-2 py-1 rounded">
                  <Flame className="w-3.5 h-3.5 text-red-600 animate-bounce" />
                  <span>PREMIUM</span>
                </div>
              </div>

              {/* Tear physical tear effect line indicator */}
              {ripping && (
                <div className="absolute inset-x-0 top-1/4 h-2 bg-yellow-500/40 border-y border-dashed border-yellow-200 z-20 animate-pulse flex items-center justify-center">
                  <span className="text-[8px] text-white font-black uppercase font-mono tracking-wider">RASGANDO ENVOLTORIO...</span>
                </div>
              )}
            </motion.div>

            <div className="text-center mt-5">
              <span className="text-xs text-slate-400 font-semibold block mb-0.5">Para revivir la magia del coleccionista</span>
              <button 
                onClick={startRip}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase tracking-widest border-b-4 border-emerald-800 rounded-xl transition-all shadow-lg shadow-emerald-950/20"
              >
                Abrir Sobre de Cromos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
