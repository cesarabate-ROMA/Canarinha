import React, { useState, useEffect } from 'react';
import { CARD_THEMES, PLAYERS, INITIAL_ACHIEVEMENTS } from './data';
import { CardThemeId, Achievement, Player } from './types';
import { StickerCard } from './components/StickerCard';
import { StatsPanel } from './components/StatsPanel';
import { TriviaPanel } from './components/TriviaPanel';
import { StickerPack } from './components/StickerPack';
import { FullScreenViewer } from './components/FullScreenViewer';
import { 
  Sparkles, Trophy, Award, Star, ListCollapse,
  Layers, PackageOpen, LayoutGrid, CheckCircle2, 
  HelpCircle, ShieldAlert, Heart, RefreshCw, PenTool, Dribbble, Maximize2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>('alisson');
  const [selectedThemeId, setSelectedThemeId] = useState<CardThemeId>('classic');
  const [unlockedIds, setUnlockedIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'ficha' | 'trivia' | 'logros'>('ficha');
  const [userName, setUserName] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState('');
  const [isFullScreenActive, setIsFullScreenActive] = useState(false);
  
  // Track achievements
  const [achievements, setAchievements] = useState<Achievement[]>(INITIAL_ACHIEVEMENTS);
  const [viewedThemes, setViewedThemes] = useState<Set<string>>(new Set(['classic']));
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState('');

  // Active player selection
  const currentPlayer = PLAYERS.find(p => p.id === selectedPlayerId) || PLAYERS[0];
  const isCurrentUnlocked = unlockedIds.includes(currentPlayer.id);
  const currentTheme = CARD_THEMES.find(t => t.id === selectedThemeId) || CARD_THEMES[0];

  // Helper to unlock achievements
  const unlockAchievement = (id: string, message: string) => {
    setAchievements(prev => {
      const idx = prev.findIndex(a => a.id === id);
      if (idx !== -1 && !prev[idx].unlocked) {
        const updated = [...prev];
        updated[idx] = { ...updated[idx], unlocked: true };
        
        // Trigger celebratory notification
        setCelebrationMessage(message);
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 4500);
        
        return updated;
      }
      return prev;
    });
  };

  // Trigger achievement upon pack opening
  const handleOpenPack = () => {
    if (!unlockedIds.includes(currentPlayer.id)) {
      setUnlockedIds(prev => [...prev, currentPlayer.id]);
    }
    unlockAchievement('open_pack', `¡Coleccionista Novato desbloqueado! Has abierto tu paquete del cromo oficial de ${currentPlayer.name}.`);
  };

  // Trigger achievement when choosing the holographic theme
  useEffect(() => {
    if (isCurrentUnlocked && selectedThemeId === 'shiny') {
      unlockAchievement('shiny_alisson', `¡Cromo Brillante desbloqueado! Has descubierto la versión de oro holográfica de ${currentPlayer.name}.`);
    }
    
    // Track viewed themes 
    setViewedThemes(prev => {
      const updated = new Set(prev);
      updated.add(selectedThemeId);
      if (updated.size === CARD_THEMES.length && isCurrentUnlocked) {
        unlockAchievement('all_themes', '¡Multiverso Colección desbloqueado! Has explorado todos los estilos de cromos disponibles.');
      }
      return updated;
    });
  }, [selectedThemeId, isCurrentUnlocked, selectedPlayerId]);

  // Trigger achievement for perfect trivia quiz score
  const handlePerfectTrivia = () => {
    unlockAchievement('perfect_trivia', '¡Especialista de Oro desbloqueado! Trivia de Brasil superada con puntaje perfecto.');
  };

  const handleSaveName = () => {
    setUserName(tempName.trim());
    setIsEditingName(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans selection:bg-yellow-500 selection:text-slate-950">
      
      {/* GLOWING AMBIENCE OVERLAYS */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER SECTION */}
      <header className="border-b border-slate-800/80 bg-slate-900/45 backdrop-blur-md sticky top-0 z-40 select-none">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-3">
          
          <div className="flex items-center gap-3">
            {/* Custom stylized Shield embodying Brazil GK/Forward colors */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-green-600 via-yellow-400 to-green-600 p-0.5 shadow-lg">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                <Trophy className="w-5 h-5 text-yellow-500 animate-pulse" />
              </div>
            </div>
            <div>
              <span className="text-[10px] font-bold text-yellow-400 tracking-widest block uppercase font-mono leading-none mb-1">
                COLECCIÓN SELEÇÃO BRASILEIRA 2026
              </span>
              <h1 className="text-xl font-black text-slate-100 tracking-tight leading-none uppercase">
                Álbum Estelar: <span className="text-yellow-400">{currentPlayer.name}</span>
              </h1>
            </div>
          </div>

          {/* User customized Album Title Field */}
          <div className="flex items-center gap-2 bg-slate-950/60 border border-slate-800 rounded-xl px-3 py-1.5 shrink-0 max-w-full">
            <LayoutGrid className="w-4 h-4 text-[#009b3a]" />
            <div className="text-xs">
              {isEditingName ? (
                <div className="flex items-center gap-1.5">
                  <input
                    type="text"
                    maxLength={18}
                    value={tempName}
                    onChange={(e) => setTempName(e.target.value)}
                    placeholder="Tu nombre..."
                    className="bg-slate-900/90 text-white rounded px-2 py-0.5 text-xs font-mono focus:outline-none focus:ring-1 focus:ring-yellow-500 max-w-[130px]"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveName();
                    }}
                  />
                  <button 
                    onClick={handleSaveName}
                    className="px-2 py-0.5 bg-yellow-500 text-slate-950 font-extrabold rounded hover:bg-yellow-400"
                  >
                    OK
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-300">
                    Álbum de: <span className="text-yellow-400 font-extrabold">{userName || 'Coleccionista'}</span>
                  </span>
                  <button 
                    onClick={() => {
                      setTempName(userName);
                      setIsEditingName(true);
                    }}
                    className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-white transition-all"
                    title="Editar nombre"
                  >
                    <PenTool className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </header>

      {/* DYNAMIC PLAYER SWITCHER SELECTOR */}
      <div className="bg-slate-900/30 border-b border-slate-900/80 py-4 select-none">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[10px] text-slate-500 font-mono font-bold uppercase text-center mb-2.5 tracking-widest">
            SELECCIONA TÚ ESTRELLA DE BRASIL
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-xl mx-auto">
            {PLAYERS.map(player => {
              const isSelected = player.id === selectedPlayerId;
              const isPlayerUnlocked = unlockedIds.includes(player.id);
              return (
                <button
                  key={player.id}
                  onClick={() => {
                    setSelectedPlayerId(player.id);
                    // Reset tab to avoid weird offset and lock states
                    setActiveTab('ficha');
                  }}
                  className={`flex-1 flex items-center justify-between gap-3 px-5 py-3 rounded-2xl transition-all ${isSelected ? 'bg-gradient-to-r from-green-600 to-emerald-600 border-2 border-emerald-400 text-white font-extrabold shadow-lg shadow-emerald-950/50 scale-102' : 'bg-slate-900 border border-slate-800/80 text-slate-400 hover:text-slate-100 hover:bg-slate-850/80'}`}
                >
                  <div className="text-left flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-xs shrink-0 ${isSelected ? 'bg-white text-emerald-800' : 'bg-slate-800 text-slate-400'}`}>
                      #{player.squadNumber.split(' (')[0]}
                    </div>
                    <div className="leading-tight">
                      <p className="text-xs font-black uppercase tracking-tight block">{player.name}</p>
                      <p className={`text-[9px] uppercase ${isSelected ? 'text-yellow-300' : 'text-slate-550'}`}>
                        {(player.id === 'alisson' || player.id === 'weverton' || player.id === 'edersonfener') ? 'Portero' : (player.id === 'marquinhos' || player.id === 'gabriel' || player.id === 'danilo' || player.id === 'alexsandro' || player.id === 'leopereira' || player.id === 'bremer' || player.id === 'douglassantos' || player.id === 'ibanez' || player.id === 'wesley') ? 'Defensa' : (player.id === 'danilobotafogo' || player.id === 'casemiro' || player.id === 'brunoguimaraes' || player.id === 'fabinho' || player.id === 'lucaspaqueta') ? 'Mediocampista' : 'Delantero'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {isPlayerUnlocked ? (
                      <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/10 text-white' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>REVELADO</span>
                    ) : (
                      <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-yellow-500/10 text-yellow-400 border border-yellow-500/20`}>CERRADO</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* BODY MAIN DASHBOARD */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        
        {/* TOAST ACHIEVEMENT UNLOCKED REVELATION */}
        <AnimatePresence>
          {showCelebration && (
            <motion.div 
              className="fixed top-20 right-4 z-50 max-w-md bg-gradient-to-r from-slate-900 via-[#102d1d] to-slate-900 border-2 border-emerald-500/80 p-4 rounded-2xl shadow-[0_20px_40px_rgba(16,185,129,0.25)] flex gap-3 text-white backdrop-blur-md"
              initial={{ opacity: 0, x: 250, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 200, scale: 0.9 }}
            >
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 font-bold">
                ⭐
              </div>
              <div>
                <span className="text-[10px] text-emerald-400 font-extrabold uppercase font-mono tracking-wider block">¡LOGRO DESBLOQUEADO!</span>
                <p className="text-xs font-bold text-slate-100 leading-normal mt-0.5">{celebrationMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* REVEAL WRAPPER (PACK OPENER VS ALBUM GRID) */}
        {!isCurrentUnlocked ? (
          <div className="max-w-2xl mx-auto py-8 flex flex-col items-center">
            <div className="text-center mb-8 max-w-md select-none">
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 border border-yellow-500/25 text-xs font-black rounded-full uppercase tracking-widest font-mono">
                SOBRE ESTELAR ORIGINAL • BRASIL
              </span>
              <h2 className="text-3xl font-black tracking-tight text-white mt-3 leading-tight uppercase">
                Destapar sobre de {currentPlayer.name}
              </h2>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Abre el paquete de aluminio dorado para revelar el cromo coleccionable oficial de <span className="text-white font-extrabold">{currentPlayer.fullName}</span>, consulta sus estadísticas de la temporada y entrena tu intelecto con su trivia personalizada.
              </p>
            </div>
            
            <StickerPack playerName={currentPlayer.name} onOpen={handleOpenPack} />
          </div>
        ) : (
          /* ACTUAL UNLOCKED GRID VIEW */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: INTERACTIVE STICKER PORTRAIT */}
            <div className="lg:col-span-5 flex flex-col items-center gap-6">
              
              {/* Sticker Page Base Container */}
              <div className="w-full bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
                
                {/* Vintage Album corner paper effects resembling paper tabs */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-slate-800" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-slate-800" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-slate-800" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-slate-800" />

                {/* Subtitle / Numbering layout with cinematic toggle */}
                <div className="flex justify-between items-center mb-4 select-none border-b border-slate-900 pb-3">
                  <span className="text-[10px] text-slate-500 font-mono font-bold uppercase tracking-widest">
                    INTELECTO • ROTACIÓN 3D
                  </span>
                  <button
                    onClick={() => setIsFullScreenActive(true)}
                    className="flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase font-mono font-extrabold text-yellow-400 hover:text-white bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-lg transition-all"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
                    <span>PANTALLA COMPLETA</span>
                  </button>
                </div>

                <StickerCard 
                  theme={currentTheme} 
                  player={currentPlayer}
                  isUnlocked={isCurrentUnlocked}
                  onReveal={handleOpenPack}
                />

                {/* Theme Customizer buttons */}
                <div className="mt-8 border-t border-slate-800/80 pt-5">
                  <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 text-center mb-3.5 flex items-center justify-center gap-1.5 select-none font-mono">
                    <Layers className="w-3.5 h-3.5 text-yellow-500" />
                    Seleccionar Categoría del Cromo
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5">
                    {CARD_THEMES.map((theme) => {
                      const isActive = theme.id === selectedThemeId;
                      return (
                        <button
                          key={theme.id}
                          onClick={() => setSelectedThemeId(theme.id)}
                          className={`flex flex-col items-center py-2 px-3 border rounded-xl text-center transition-all ${isActive ? 'bg-slate-800 border-yellow-500 text-yellow-400 shadow-md shadow-yellow-500/5 font-extrabold' : 'border-slate-800 bg-slate-950/30 text-slate-400 font-semibold hover:border-slate-800'}`}
                        >
                          <span className="text-xs tracking-tight">{theme.name.split(' ')[0]}</span>
                          <span className="text-[9px] uppercase tracking-wider text-slate-500 mt-0.5">{theme.name.split(' ').slice(1).join(' ')}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Reset to Pack state button for continuous replay factor */}
              <button
                onClick={() => {
                  setUnlockedIds(prev => prev.filter(id => id !== currentPlayer.id));
                  setSelectedThemeId('classic');
                  setActiveTab('ficha');
                  setViewedThemes(new Set(['classic']));
                }}
                className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-all font-mono font-bold py-1.5 px-3 bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-800/80"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Volver a envolver cromo de {currentPlayer.name}
              </button>

            </div>

            {/* RIGHT COLUMN: TABS PANEL (STATS/VALLAS VS TRIVIA QUIZ VS ACHIEVEMENTS) */}
            <div className="lg:col-span-7 flex flex-col gap-6 w-full">
              
              {/* TAB SELECTORS */}
              <div className="flex bg-slate-900 border border-slate-800 p-1.5 rounded-2xl select-none">
                <button
                  onClick={() => setActiveTab('ficha')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTab === 'ficha' ? 'bg-slate-820 font-extrabold text-white border border-slate-700/50 shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  <Award className="w-4 h-4 text-emerald-400" />
                  La Ficha Técnica
                </button>
                
                <button
                  onClick={() => setActiveTab('trivia')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTab === 'trivia' ? 'bg-slate-820 font-extrabold text-white border border-slate-700/50 shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  <HelpCircle className="w-4 h-4 text-indigo-400" />
                  Trivia Histórica
                </button>

                <button
                  onClick={() => setActiveTab('logros')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${activeTab === 'logros' ? 'bg-slate-820 font-extrabold text-white border border-slate-700/50 shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                  Logros ({achievements.filter(a => a.unlocked).length}/4)
                </button>
              </div>

              {/* MAIN CONTENT AREA */}
              <div className="transition-all duration-300">
                {activeTab === 'ficha' && (
                  <StatsPanel player={currentPlayer} />
                )}

                {activeTab === 'trivia' && (
                  <TriviaPanel questions={currentPlayer.trivia} onUnlockPerfectScore={handlePerfectTrivia} />
                )}

                {activeTab === 'logros' && (
                  <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl text-white select-none">
                    <div className="border-b border-slate-800 pb-4 mb-4">
                      <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-500" />
                        Logros de Colección Estelar
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">Completa tareas interactivas en la aplicación para desbloquear todos los estandartes especiales oficiales de Brasil.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {achievements.map((ach) => (
                        <div 
                          key={ach.id}
                          className={`p-4 border rounded-2xl flex items-start gap-3.5 transition-all ${ach.unlocked ? 'bg-slate-900/80 border-emerald-500/20 shadow-lg shadow-emerald-900/5' : 'bg-slate-950/25 border-slate-800 opacity-60'}`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${ach.unlocked ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' : 'bg-slate-850 border-slate-700 text-slate-500'}`}>
                            {ach.id === 'open_pack' && <PackageOpen className="w-5 h-5" />}
                            {ach.id === 'shiny_alisson' && <Sparkles className="w-5 h-5" />}
                            {ach.id === 'perfect_trivia' && <Trophy className="w-5 h-5" />}
                            {ach.id === 'all_themes' && <Layers className="w-5 h-5" />}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className={`text-sm font-extrabold ${ach.unlocked ? 'text-white' : 'text-slate-400'}`}>
                                {ach.title}
                              </h4>
                              {ach.unlocked && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                            </div>
                            <p className="text-[11px] text-slate-400 mt-1 leading-normal">{ach.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {achievements.every(a => a.unlocked) && (
                      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-500/10 via-amber-500/20 to-yellow-500/10 border border-yellow-500/30 rounded-2xl text-center">
                        <span className="text-[10px] text-yellow-500 font-extrabold uppercase font-mono tracking-widest block mb-1">👑 MÁXIMO PRESTIGIO</span>
                        <h4 className="font-extrabold text-sm text-slate-100">¡Coleccionista Leyenda de Brasil!</h4>
                        <p className="text-[11px] text-slate-400 mt-0.5">Has desbloqueado y explorado absolutamente todas las características, trivia y cartas de las superestrellas canarinhas.</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

            </div>

          </div>
        )}

      </main>

      {/* FOOTER COLOFON */}
      <footer className="border-t border-slate-900 bg-slate-950 py-5 select-none text-center">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 text-slate-500 text-xs">
          <p>© 2026 Brasil Star Sticker Album - Estilo Retro Clásico. Derechos de Autor: Alfonso Abate. Diseñado bajo directrices de alta costura futbolística.</p>
          <div className="flex gap-4 font-mono">
            <span className="text-[#009b3a] font-bold">ORDEN • PROGRESSO</span>
            <span className="text-yellow-400 font-bold">100% OFICIAL</span>
            <span>VER. 1.25</span>
          </div>
        </div>
      </footer>

      {/* FULL SCREEN STICKER CINEMATIC GALLERY */}
      {isFullScreenActive && (
        <FullScreenViewer
          player={currentPlayer}
          theme={currentTheme}
          isUnlocked={isCurrentUnlocked}
          onClose={() => setIsFullScreenActive(false)}
          onChangeTheme={(themeId) => setSelectedThemeId(themeId)}
          themes={CARD_THEMES}
        />
      )}

    </div>
  );
}
