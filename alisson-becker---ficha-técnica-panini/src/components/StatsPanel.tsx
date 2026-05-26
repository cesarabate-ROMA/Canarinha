import React from 'react';
import { Player } from '../types';
import { Shield, Sparkles, Footprints, Award, Calendar, Flame, Dribbble, Target } from 'lucide-react';
import { motion } from 'motion/react';

interface StatsPanelProps {
  player: Player;
}

export function StatsPanel({ player }: StatsPanelProps) {
  // Calculate average rating of attributes
  const averageRating = Math.round(
    player.attributes.reduce((acc, curr) => acc + curr.value, 0) / player.attributes.length
  );

  const stats = player.stats;
  const isGk = player.id === 'alisson' || player.id === 'weverton' || player.id === 'edersonfener';
  const isDef = [
    'marquinhos', 'gabriel', 'danilo', 'alexsandro', 'leopereira', 'bremer', 'douglassantos', 'ibanez', 'wesley'
  ].includes(player.id);
  const isMid = [
    'danilobotafogo', 'casemiro', 'brunoguimaraes', 'fabinho', 'lucaspaqueta'
  ].includes(player.id);

  return (
    <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800 p-6 shadow-xl text-white select-none">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800 pb-5 mb-5 gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-400 border border-green-500/20 mb-2 font-mono">
            <Flame className="w-3.5 h-3.5 text-red-500" />
            Temporada {stats.season} (Club + Selección)
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-100 flex items-center gap-2">
            Rendimiento & Ficha Técnica completa
          </h2>
        </div>
        
        {/* Rating styled Overall */}
        <div className="flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-yellow-500/10 px-4 py-2 rounded-xl border border-yellow-500/30">
          <div className="text-center">
            <span className="text-[10px] text-yellow-500 block font-mono font-bold uppercase tracking-wider">MEDIA RATING</span>
            <span className="text-3xl font-black text-yellow-400 tracking-tighter leading-none">{averageRating}</span>
          </div>
          <Award className="w-8 h-8 text-yellow-400" />
        </div>
      </div>

      {/* CORE INFO GRID (FECHA NACIMIENTO, CLUB ORIGINAL, ALTURA, PIERNA HABIL) */}
      <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-3 block font-mono">DATOS DE IDENTIDAD</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3.5 hover:border-slate-800 transition-all">
          <span className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold block mb-1">Nacimiento</span>
          <p className="font-bold text-sm text-slate-200">{player.birthDate}</p>
          <p className="text-xs text-slate-400 mt-1">{player.birthPlace.split(', ').slice(-2).join(', ')} ({player.age} años)</p>
        </div>
        
        <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3.5 hover:border-slate-800 transition-all">
          <span className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold block mb-1">Club Actual</span>
          <p className="font-bold text-sm text-slate-200 truncate">{player.currentClub.split(' (')[0]}</p>
          <p className="text-xs text-emerald-400 mt-1 font-semibold flex items-center gap-1">
            <Shield className="w-3 h-3 text-emerald-400 animate-pulse" />
            Contrato de Élite mundial
          </p>
        </div>

        <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3.5 hover:border-slate-800 transition-all">
          <span className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold block mb-1">Estatura</span>
          <p className="font-bold text-sm text-slate-200">{player.height.split(' (')[0]}</p>
          <p className="text-xs text-slate-400 mt-1">
            {isGk ? 'Óptimo para balones aéreos' : (player.id === 'marquinhos' || player.id === 'gabriel' || player.id === 'leopereira' || player.id === 'bremer' || player.id === 'ibanez') ? 'Excelente salto vertical' : (player.id === 'danilo' || player.id === 'alexsandro' || player.id === 'casemiro' || player.id === 'fabinho' || player.id === 'edersonfener') ? 'Físico sumamente equilibrado y robusto' : 'Centro de gravedad bajo'}
          </p>
        </div>

        <div className="bg-slate-950/40 border border-slate-800/80 rounded-xl p-3.5 hover:border-slate-800 transition-all">
          <span className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold block mb-1">Pierna Hábil</span>
          <p className="font-bold text-sm text-slate-200 flex items-center gap-1.5">
            <Footprints className="w-4 h-4 text-emerald-400" />
            {player.preferredFoot.split(' (')[0]}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {isGk ? 'Excelente pase largo' : isDef ? 'Corte limpio por tierra' : isMid ? 'Distribución táctica excelsa' : 'Ambidextro absoluto'}
          </p>
        </div>
      </div>

      {/* CORE STATS GRID */}
      <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-3 block font-mono">ESTADÍSTICAS OFICIALES {stats.season}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
        <div className="bg-slate-950/60 rounded-xl p-4 text-center border-b-2 border-emerald-500/50">
          <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase mb-1">Partidos</span>
          <span className="text-2xl font-black text-emerald-400 tracking-tight block">{stats.matchesPlayed}</span>
          <span className="text-[10px] text-slate-500">100% Titular</span>
        </div>

        <div className="bg-slate-950/60 rounded-xl p-4 text-center border-b-2 border-cyan-500/50">
          <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase mb-1">Minutos</span>
          <span className="text-2xl font-black text-cyan-400 tracking-tight block">{stats.minutesPlayed}</span>
          <span className="text-[10px] text-slate-500">Minutos totales</span>
        </div>

        {isGk ? (
          <>
            <div className="bg-slate-950/60 rounded-xl p-4 text-center border-b-2 border-yellow-500/50">
               <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase mb-1">Vallas Invictas</span>
              <span className="text-2xl font-black text-yellow-400 tracking-tight block">{stats.cleanSheets}</span>
              <span className="text-[10px] text-slate-500">{stats.cleanSheets ? ((stats.cleanSheets / stats.matchesPlayed) * 100).toFixed(0) : 0}% invicto</span>
            </div>

            <div className="bg-slate-950/60 rounded-xl p-4 text-center border-b-2 border-rose-500/50">
              <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase mb-1">Goles Recibidos</span>
              <span className="text-2xl font-black text-rose-500 tracking-tight block">{stats.concededGoals}</span>
              <span className="text-[10px] text-slate-500">{(stats.concededGoals && stats.matchesPlayed) ? (stats.concededGoals / stats.matchesPlayed).toFixed(2) : 0} por partido</span>
            </div>
          </>
        ) : (
          <>
            <div className="bg-slate-950/60 rounded-xl p-4 text-center border-b-2 border-yellow-500/50">
              <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase mb-1">Goles Metidos</span>
              <span className="text-2xl font-black text-yellow-400 tracking-tight block">{stats.goals}</span>
              <span className="text-[10px] text-slate-500">{(stats.goals / stats.matchesPlayed).toFixed(2)} por partido</span>
            </div>

            <div className="bg-slate-950/60 rounded-xl p-4 text-center border-b-2 border-rose-500/50">
              <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase mb-1">Aporte G+A</span>
              <span className="text-2xl font-black text-rose-500 tracking-tight block">{stats.goals + stats.assists}</span>
              <span className="text-[10px] text-slate-500">Goles + Asistencias</span>
            </div>
          </>
        )}

        <div className="bg-slate-950/60 rounded-xl p-4 text-center border-b-2 border-violet-500/50">
          <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase mb-1">Asistencias</span>
          <span className="text-2xl font-black text-violet-400 tracking-tight block">{stats.assists}</span>
          <span className="text-[10px] text-slate-500">{isGk ? 'Trazo largo' : 'Asistencias clave'}</span>
        </div>

        <div className="bg-slate-950/60 rounded-xl p-4 text-center border-b-2 border-slate-500/50">
          <span className="text-[9px] text-slate-400 font-mono tracking-wider block uppercase mb-1">
            {isGk ? 'Goles Metidos' : isDef ? 'Intercepciones' : isMid ? 'Pases Clave' : 'Tiros Libres'}
          </span>
          <span className="text-2xl font-black text-slate-400 tracking-tight block">
            {isGk ? stats.goals : player.id === 'marquinhos' ? 54 : player.id === 'gabriel' ? 48 : player.id === 'danilo' ? 45 : player.id === 'alexsandro' ? 42 : player.id === 'leopereira' ? 39 : player.id === 'bremer' ? 51 : player.id === 'douglassantos' ? 44 : player.id === 'ibanez' ? 47 : player.id === 'wesley' ? 38 : player.id === 'danilobotafogo' ? 41 : player.id === 'casemiro' ? 68 : player.id === 'brunoguimaraes' ? 59 : player.id === 'fabinho' ? 55 : player.id === 'lucaspaqueta' ? 64 : player.id === 'edersonfener' ? 49 : 4}
          </span>
          <span className="text-[9px] text-amber-500 font-semibold mt-px block">
            {isGk ? (player.id === 'alisson' ? 'Histórico: 1 Gol' : 'Histórico: 0 Goles') : isDef ? 'Cortes clave' : isMid ? 'Creación de peligro' : 'Goles de tiro libre/bola'}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* CHARACTERISTICS SECTION */}
        <div className="lg:col-span-5 bg-gradient-to-br from-green-950/30 to-slate-950/40 rounded-xl border border-green-500/10 p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-green-400 font-mono">
                Característica Principal
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {player.mainCharacteristic}
            </p>
          </div>
          
          <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-xs">
            {isGk ? (
              <>
                <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                  <span>Atajadas clave {stats.season}:</span>
                  <span className="text-yellow-400 font-extrabold font-mono">{stats.saves}</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 font-semibold">
                  <span>Penales Atajados {stats.season}:</span>
                  <span className="text-yellow-400 font-extrabold font-mono">{stats.penaltySaves} / 4</span>
                </div>
              </>
            ) : isDef ? (
              <>
                <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-blue-400" />
                    Recuperadas / partido:
                  </span>
                  <span className="text-yellow-400 font-extrabold font-mono">
                    {player.id === 'marquinhos' ? '8.4' : player.id === 'gabriel' ? '7.9' : player.id === 'danilo' ? '7.2' : player.id === 'alexsandro' ? '7.5' : player.id === 'leopereira' ? '7.4' : player.id === 'bremer' ? '8.1' : player.id === 'douglassantos' ? '7.8' : player.id === 'ibanez' ? '7.6' : player.id === 'wesley' ? '6.9' : '7.6'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300 font-semibold">
                  <span className="flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-rose-400" />
                    Efectividad en Tacle:
                  </span>
                  <span className="text-yellow-400 font-extrabold font-mono">
                    {player.id === 'marquinhos' ? '91.2%' : player.id === 'gabriel' ? '88.7%' : player.id === 'danilo' ? '89.5%' : player.id === 'alexsandro' ? '88.3%' : player.id === 'leopereira' ? '87.6%' : player.id === 'bremer' ? '90.4%' : player.id === 'douglassantos' ? '89.1%' : player.id === 'ibanez' ? '89.5%' : player.id === 'wesley' ? '86.4%' : '89.5%'}
                  </span>
                </div>
              </>
            ) : isMid ? (
              <>
                <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                  <span className="flex items-center gap-1">
                    <Dribbble className="w-3.5 h-3.5 text-emerald-400" />
                    Precisión de Pase:
                  </span>
                  <span className="text-yellow-400 font-extrabold font-mono">
                    {player.id === 'brunoguimaraes' ? '91.8%' : player.id === 'casemiro' ? '86.5%' : player.id === 'fabinho' ? '88.9%' : player.id === 'lucaspaqueta' ? '82.4%' : player.id === 'danilobotafogo' ? '87.2%' : '85.5%'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300 font-semibold">
                  <span className="flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-rose-400" />
                    Duelos Ganados:
                  </span>
                  <span className="text-yellow-400 font-extrabold font-mono">
                    {player.id === 'casemiro' ? '65.2%' : player.id === 'danilobotafogo' ? '61.8%' : player.id === 'fabinho' ? '59.7%' : player.id === 'brunoguimaraes' ? '58.4%' : player.id === 'lucaspaqueta' ? '54.5%' : '58.0%'}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between text-slate-300 font-semibold mb-1">
                  <span className="flex items-center gap-1">
                    <Dribbble className="w-3.5 h-3.5 text-blue-400" />
                    Regates exitosos / partido:
                  </span>
                  <span className="text-yellow-400 font-extrabold font-mono">5.2</span>
                </div>
                <div className="flex items-center justify-between text-slate-300 font-semibold">
                  <span className="flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-rose-400" />
                    Efectividad en Penales:
                  </span>
                  <span className="text-yellow-400 font-extrabold font-mono">94.3%</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* GOALKEEPER/OUTFIELD PLAYER ATTRIBUTES STAT BARS */}
        <div className="lg:col-span-7 bg-slate-950/30 rounded-xl border border-slate-800 p-5">
          <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-400 mb-4 select-none font-mono">
            Análisis de Habilidades Específicas
          </h3>
          <div className="space-y-3.5">
            {player.attributes.map((attr, idx) => (
              <div key={idx} className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-semibold text-slate-200">{attr.name}</span>
                  <span className="font-bold text-slate-400 font-mono flex items-center gap-1">
                    <span className="text-white font-extrabold">{attr.value}</span>
                    <span className="text-[10px] text-slate-600">/ 100</span>
                  </span>
                </div>
                <div className="w-full bg-slate-850 h-2.5 rounded-full overflow-hidden border border-slate-800">
                  <motion.div 
                    className={`h-full rounded-full ${attr.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${attr.value}%` }}
                    transition={{ duration: 1, delay: idx * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
