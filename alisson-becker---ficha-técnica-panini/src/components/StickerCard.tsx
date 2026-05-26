import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, Calendar, Shield, Footprints, Eye } from 'lucide-react';
import { CardTheme, Player } from '../types';

interface StickerCardProps {
  theme: CardTheme;
  player: Player;
  isUnlocked: boolean;
  onReveal?: () => void;
}

export function StickerCard({ theme, player, isUnlocked, onReveal }: StickerCardProps) {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for realistic 3D card tilts
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs smooth out the translation
  const springConfig = { damping: 20, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-100, 100], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);

  // Holographic reflection position based on mouse position
  const shineX = useTransform(x, [-100, 100], ['0%', '100%']);
  const shineY = useTransform(y, [-100, 100], ['0%', '100%']);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || flipped || !isUnlocked) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Reset values when theme or player changes
  useEffect(() => {
    x.set(0);
    y.set(0);
    setFlipped(false);
  }, [theme, player, x, y]);

  // Player birth formatted representation
  const shortBirthDate = (() => {
    switch (player.id) {
      case 'alisson': return '02/10/1992';
      case 'neymar': return '05/02/1992';
      case 'marquinhos': return '14/05/1994';
      case 'gabriel': return '19/12/1997';
      case 'danilo': return '15/07/1991';
      case 'alexsandro': return '26/01/1991';
      case 'leopereira': return '31/01/1996';
      case 'bremer': return '18/03/1997';
      case 'douglassantos': return '22/03/1994';
      case 'ibanez': return '23/11/1998';
      case 'wesley': return '06/09/2003';
      case 'danilobotafogo': return '28/02/1996';
      case 'casemiro': return '23/02/1992';
      case 'brunoguimaraes': return '16/11/1997';
      case 'fabinho': return '23/10/1993';
      case 'lucaspaqueta': return '27/08/1997';
      default: return '27/08/1997';
    }
  })();
  const squadNumberShort = player.squadNumber.split(' (')[0];
  const positionShort = player.position.split(' (')[0];
  const clubShort = player.currentClub.split(' (')[0].toUpperCase();
  const heightShort = player.height.split(' (')[0];
  const trajectory = (() => {
    switch (player.id) {
      case 'alisson': return 'Internacional ➜ Roma ➜ Liverpool FC';
      case 'neymar': return 'Santos FC ➜ Barcelona ➜ PSG ➜ Al-Hilal';
      case 'marquinhos': return 'Corinthians ➜ Roma ➜ Paris Saint-Germain';
      case 'gabriel': return 'Avaí FC ➜ Lille OSC ➜ Arsenal F.C.';
      case 'danilo': return 'América Mineiro ➜ Porto ➜ Real Madrid ➜ Man City ➜ Juventus';
      case 'alexsandro': return 'Atlético Paranaense ➜ Santos ➜ Porto ➜ Juventus ➜ Flamengo';
      case 'leopereira': return 'Athletico Paranaense ➜ Orlando City ➜ CR Flamengo';
      case 'bremer': return 'Desportivo Brasil ➜ Atlético Mineiro ➜ Torino ➜ Juventus';
      case 'douglassantos': return 'Náutico ➜ Granada ➜ Udinese ➜ Atl. Mineiro ➜ Hamburg ➜ Zenit';
      case 'ibanez': return 'Fluminense ➜ Atalanta ➜ AS Roma ➜ Al-Ahli';
      case 'wesley': return 'CR Flamengo ➜ AS Roma';
      case 'danilobotafogo': return 'Vasco ➜ Braga ➜ Valencia ➜ Benfica ➜ Nice ➜ Palmeiras ➜ Botafogo';
      case 'casemiro': return 'São Paulo ➜ Real Madrid ➜ FC Porto ➜ Manchester United';
      case 'brunoguimaraes': return 'Audax ➜ Athletico Paranaense ➜ Lyon ➜ Newcastle United';
      case 'fabinho': return 'Fluminense ➜ Real Madrid ➜ Monaco ➜ Liverpool ➜ Al-Ittihad';
      case 'lucaspaqueta': return 'Flamengo ➜ Milan ➜ Lyon ➜ West Ham United';
      default: return 'Trayectoria Estelar';
    }
  })();
  const iconicQuote = (() => {
    switch (player.id) {
      case 'alisson':
        return '"Anotó un gol de cabeza inolvidable en la Premier League 2020/21 contra el West Brom, erigiéndose histórico."';
      case 'neymar':
        return '"Lideró la mítica remontada europea del Barcelona 6-1 contra el PSG y se coronó máximo goleador histórico de la Canarinha."';
      case 'marquinhos':
        return '"Capitán indiscutible del elenco de París y pilar de la Canarinha, conquistó el histórico oro olímpico en Río de Janeiro 2016."';
      case 'gabriel':
        return '"Muralla zurda e inapelable del Arsenal londinense y pilar de la Canarinha, erigido uno de los mejores defensas de Europa."';
      case 'danilo':
        return '"Gran capitán de jerarquía indiscutible, ganador de Champions League y de títulos de liga en España, Italia, Inglaterra y Portugal."';
      case 'alexsandro':
        return '"Carrilero zurdo de potencia incansable, múltiple campéon con Porto y Juventus, e internacional brasileño de intachables batallas."';
      case 'leopereira':
        return '"Defensor central impecable con suntuoso juego aéreo y salida zurda de alta precisión en el Mengão y la Canarinha."';
      case 'bremer':
        return '"Férreo jerarca indiscutible del fútbol de élite italiano, coronado como MVP defensivo de la Serie A y baluarte de la Canarinha."';
      case 'douglassantos':
        return '"Imparable carrilero izquierdo de alta influencia ofensiva, glorioso capitán del Zenit y héroe de Oro en Río 2016."';
      case 'ibanez':
        return '"Firme zaguero central de juego aéreo imbatible, campeón de Conference League con la Roma y muralla defensiva del Al-Ahli."';
      case 'wesley':
        return '"Velocista supersónico e imparable carrilero de alta potencia por la franja derecha, consolidando su tremenda clase en la AS Roma."';
      case 'danilobotafogo':
        return '"Líder con despliegue físico brutal, subcampeón mundial sub-20 y motor en la volante del Botafogo de primera categoría."';
      case 'casemiro':
        return '"Héroe imponente de la volante central, amo del equilibrio y leyenda pura ganadora de cinco UEFA Champions League."';
      case 'brunoguimaraes':
        return '"Mago de la distribución del Newcastle, medallista de oro olímpico y virtuoso en romper defensas con pases milimétricos."';
      case 'fabinho':
        return '"Pilar de contención apodado el pulpo, líder indestructible de Europa y el ancla táctica fundamental de la Canarinha."';
      case 'lucaspaqueta':
        return '"Creador absoluto de juego deslumbrante, campeón europeo con West Ham, dotado de magia pura, regate y taco de colección."';
      default:
        return '"Líder y estandarte absoluto de la Seleção Brasileira."';
    }
  })();

  return (
    <div className="flex flex-col items-center">
      {/* 3D container */}
      <div 
        className="perspective-1000 cursor-pointer select-none"
        style={{ width: '310px', height: '420px' }}
        onClick={() => {
          if (!isUnlocked && onReveal) {
            onReveal();
          } else {
            setFlipped(!flipped);
          }
        }}
      >
        <motion.div
          ref={cardRef}
          className="relative w-full h-full duration-700 preserve-3d"
          animate={{ rotateY: flipped ? 180 : 0 }}
          style={{
            rotateX: flipped ? 0 : rotateX,
            rotateY: flipped ? 180 : rotateY,
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* FRONT SIDE */}
          <div 
            className={`absolute inset-0 backface-hidden rounded-2xl p-3 flex flex-col justify-between overflow-hidden transition-all duration-300 ${theme.cardBorder} bg-gradient-to-br ${theme.bgGradient} ${theme.textColor}`}
            style={{
              boxShadow: `0 20px 40px -15px ${theme.glowColor}, inset 0 0 40px rgba(255,255,255,0.15)`,
            }}
          >
            {/* Holographic overlay */}
            {theme.id === 'shiny' && isUnlocked && (
              <motion.div 
                className="absolute inset-0 pointer-events-none mix-blend-color-dodge opacity-55 z-20"
                style={{
                  background: `linear-gradient(135deg, rgba(236, 72, 153, 0.4) 0%, rgba(250, 204, 21, 0.4) 30%, rgba(59, 130, 246, 0.4) 70%, rgba(16, 185, 129, 0.4) 100%)`,
                  backgroundPosition: `${shineX.get()} ${shineY.get()}`,
                  backgroundSize: '200% 200%'
                }}
              />
            )}

            {/* Cyber scanline overlay */}
            {theme.id === 'cyber' && isUnlocked && (
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.08)_0%,transparent_80%)] border border-[#00f0ff]/10 rounded-xl z-20">
                <div className="absolute h-[1px] w-full bg-cyan-400/20 top-0 left-0 animate-[scanline_4s_linear_infinite]" />
              </div>
            )}

            {/* Retro sepia overlay */}
            {theme.id === 'retro' && isUnlocked && (
              <div className="absolute inset-0 pointer-events-none bg-[#7c2d12]/5 mix-blend-multiply rounded-xl z-20 noise-overlay border-2 border-dashed border-[#e6cca0]/20" />
            )}

            {/* Locked screen style */}
            {!isUnlocked ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/95 text-white p-6 text-center rounded-lg z-30">
                <div className="w-16 h-16 rounded-full bg-yellow-500/20 border-2 border-yellow-500 flex items-center justify-center animate-bounce mb-4">
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="font-bold text-lg text-yellow-400 uppercase tracking-wider mb-2">CUSTODIA DE SEGURIDAD</h3>
                <p className="text-xs text-slate-300">¡Rasca el envoltorio para revelar el cromo exclusivo de {player.name}!</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onReveal) onReveal();
                  }}
                  className="mt-5 px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-slate-900 font-extrabold rounded-lg shadow-lg hover:shadow-yellow-500/30 transition-all text-sm uppercase tracking-wide border-b-4 border-amber-800"
                >
                  Abrir Sobre
                </button>
              </div>
            ) : null}

            {/* HEADER DEL CROMO */}
            <div className="flex justify-between items-center z-10">
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase ${theme.badgeBg} ${theme.badgeText}`}>
                {theme.id === 'classic' ? player.albumCode : theme.labelText}
              </span>
              <div className="flex items-center gap-1.5 bg-slate-950/5 px-2 py-0.5 rounded-full border border-slate-950/5">
                <span className="text-[10px] font-extrabold text-green-600 dark:text-green-400">BRS</span>
                <div className="w-4 h-2.5 bg-[#009b3a] flex items-center justify-center relative overflow-hidden rounded-[1px]">
                  <div className="w-2 h-2.5 bg-yellow-400 rotate-45 transform scale-y-75 absolute"></div>
                  <div className="w-1 h-1 bg-blue-800 rounded-full absolute"></div>
                </div>
              </div>
            </div>

            {/* IMAGE AREA */}
            <div className="relative flex-1 my-2 bg-slate-205 border-4 border-slate-905 dark:border-slate-800 rounded-lg overflow-hidden flex items-center justify-center shadow-inner group">
              <img 
                src={player.imagePath} 
                alt={`${player.name} Cromo`} 
                className={`w-full h-full object-cover transition-all duration-500 scale-102 group-hover:scale-105 pointer-events-none select-none ${theme.id === 'retro' ? 'sepia-[30%] contrast-[105%]' : ''}`}
                referrerPolicy="no-referrer"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onError={(e) => {
                  // Fallback safe image
                  (e.target as HTMLImageElement).src = (() => {
                    switch (player.id) {
                      case 'alisson': return 'https://images.unsplash.com/photo-1510562137359-24f536cb8c3f?q=80&w=310&h=310&fit=crop';
                      case 'neymar': return '/src/assets/images/neymar_new_sticker_1779293133178.png';
                      case 'marquinhos': return '/src/assets/images/marquinhos_star_sticker_1779410435861.png';
                      case 'gabriel': return 'https://images.unsplash.com/photo-1431324155629-1a6edd1dec1d?q=80&w=310&h=310&fit=crop';
                      case 'danilo': return 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=310&h=310&fit=crop';
                      case 'alexsandro': return 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=310&h=310&fit=crop';
                      case 'leopereira': return 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=310&h=310&fit=crop';
                      case 'bremer': return 'https://images.unsplash.com/photo-1431324155629-1a6edd1dec1d?q=80&w=310&h=310&fit=crop';
                      case 'douglassantos': return 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=310&h=310&fit=crop';
                      case 'ibanez': return '/src/assets/images/roger_ibanez_headshot_1779412955948.png';
                      case 'wesley': return '/src/assets/images/wesley_new_look_sticker_1779457543781.png';
                      case 'danilobotafogo': return 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=310&h=310&fit=crop';
                      case 'casemiro': return 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=310&h=310&fit=crop';
                      case 'brunoguimaraes': return 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=310&h=310&fit=crop';
                      case 'fabinho': return 'https://images.unsplash.com/photo-1431324155629-1a6edd1dec1d?q=80&w=310&h=310&fit=crop';
                      case 'lucaspaqueta': return 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=310&h=310&fit=crop';
                      case 'viniciusjr': return 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=310&h=310&fit=crop';
                      case 'endrick': return 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=310&h=310&fit=crop';
                      case 'raphinha': return 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=310&h=310&fit=crop';
                      case 'martinelli': return 'https://images.unsplash.com/photo-1431324155629-1a6edd1dec1d?q=80&w=310&h=310&fit=crop';
                      case 'matheuscunha': return 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=310&h=310&fit=crop';
                      case 'igorthiago': return 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=310&h=310&fit=crop';
                      case 'luizhenrique': return 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=310&h=310&fit=crop';
                      case 'rayan': return 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?q=80&w=310&h=310&fit=crop';
                      case 'edersonfener': return '/src/assets/images/ederson_city_sticker_1779410456907.png';
                      case 'weverton': return 'https://images.unsplash.com/photo-1510562137359-24f536cb8c3f?q=80&w=310&h=310&fit=crop';
                      default: return 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=310&h=310&fit=crop';
                    }
                  })();
                }}
              />
              {/* Overlay with Player Badge / Number */}
              <div className="absolute bottom-2 left-2 bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 rounded text-white border border-slate-700/50 flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-yellow-400" />
                <span className="font-mono text-xs font-bold leading-none">{squadNumberShort}</span>
              </div>


              
              {theme.id === 'shiny' && (
                <div className="absolute top-2 right-2 p-1 bg-yellow-500 rounded-full animate-spin [animation-duration:8s]">
                  <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                </div>
              )}
            </div>

            {/* PLAYER PROFILE SUMMARY */}
            <div className="z-10 bg-slate-950/5 dark:bg-white/5 rounded-lg border border-slate-950/5 dark:border-white/10 p-2 text-center">
              <h2 className="text-lg font-black tracking-tight uppercase select-none font-sans filter drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                {player.name}
              </h2>
              <div className="flex justify-center items-center gap-2 text-[10px] uppercase font-bold tracking-wide mt-1 select-none opacity-90">
                <span className="text-[#009b3a] font-extrabold">{positionShort}</span>
                <span className="text-slate-400 bg-slate-950/10 px-1 py-px rounded truncate max-w-[120px]">{clubShort.split(' F.C.')[0]}</span>
              </div>
            </div>

            {/* MINOR SPECS FOOTER */}
            <div className="flex justify-around items-center text-[10px] font-mono border-t border-slate-900/10 dark:border-white/10 pt-1.5 mt-1 select-none opacity-85">
              <div className="flex flex-col items-center">
                <span className="text-[8px] uppercase tracking-wider text-slate-500 font-sans">Estatura</span>
                <span className="font-bold">{heightShort}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[8px] uppercase tracking-wider text-slate-500 font-sans">Nacimiento</span>
                <span className="font-bold">{shortBirthDate}</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[8px] uppercase tracking-wider text-slate-500 font-sans">Pie</span>
                <span className="font-bold flex items-center gap-0.5">
                  <Footprints className="w-3 h-3 text-emerald-600" />
                  {player.preferredFoot.split(' (')[0].toUpperCase()}
                </span>
              </div>
            </div>
            
            {/* Flip hint */}
            {isUnlocked && (
              <div className="absolute bottom-1 right-1 opacity-20 hover:opacity-100 transition-opacity pr-1 text-[8px] uppercase font-sans flex items-center gap-0.5 text-slate-500">
                <Eye className="w-2.5 h-2.5" />
                <span>Girar</span>
              </div>
            )}
          </div>

          {/* BACK SIDE */}
          <div 
            className="absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between overflow-hidden border-8 border-slate-800 bg-slate-900 text-slate-100"
            style={{
              transform: 'rotateY(180deg)',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.5), inset 0 0 30px rgba(0,0,0,0.8)'
            }}
          >
            {/* Subtle soccer pitch grid background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-8 border-slate-200"></div>
              <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-slate-200"></div>
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200"></div>
            </div>

            <div className="z-10 flex justify-between items-start border-b border-slate-800 pb-3">
              <div>
                <span className="text-yellow-500 font-mono text-[10px] tracking-widest font-bold">ALBUM DE CROMOS 2026</span>
                <h3 className="text-md font-extrabold text-white leading-tight uppercase mt-0.5">{player.fullName}</h3>
              </div>
              <div className="bg-slate-800 text-slate-300 font-mono font-bold border border-slate-700 rounded text-xs px-2 py-1 select-none font-mono">
                {player.albumCode.replace(' ', ' - #')}
              </div>
            </div>

            {/* Info details */}
            <div className="z-10 flex-1 my-4 flex flex-col gap-2.5 text-xs select-none">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-mono">Fecha de Nacimiento</span>
                  <p className="font-bold text-slate-200">{player.birthDate} ({player.age} años)</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-mono">Club de Origen & Trayectoria</span>
                  <p className="font-semibold text-slate-200">{trajectory}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-mono">Selección Nacional</span>
                  <p className="font-bold text-slate-200">{player.nationalTeam} (Dorsal {squadNumberShort})</p>
                </div>
              </div>

              <div className="mt-2 p-2 bg-slate-950/40 rounded-lg border border-slate-800 text-[11px] leading-relaxed italic text-slate-300 select-none">
                💡 {iconicQuote}
              </div>
            </div>

            {/* Pitch / Signature graphic or mini logo */}
            <div className="z-10 text-center border-t border-slate-800 pt-3 flex items-center justify-between">
              <div className="flex flex-col items-start leading-none">
                <span className="text-[8px] tracking-wider text-slate-500 uppercase font-mono">Licencia Oficial de</span>
                <span className="text-[10px] font-bold text-emerald-500 tracking-tight">CONFEDERAÇÃO BRASILEIRA</span>
              </div>
              <div className="flex flex-col items-end leading-none">
                <span className="text-[8px] tracking-wider text-slate-500 uppercase font-mono">Edición</span>
                <span className="text-[10px] font-mono font-bold text-yellow-500 tracking-tight">CROMO-GOLDEN</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="mt-3 text-xs text-slate-500 font-semibold select-none flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-yellow-500" />
        {isUnlocked ? "Haz clic para girar el cromo" : "Haz clic para destapar"}
      </p>
    </div>
  );
}
