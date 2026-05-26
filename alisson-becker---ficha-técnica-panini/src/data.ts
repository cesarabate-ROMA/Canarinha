import { CardTheme, PlayerStats, TriviaQuestion, Achievement, Player } from './types';

export const CARD_THEMES: CardTheme[] = [
  {
    id: 'classic',
    name: 'Edición Clásica',
    badgeBg: 'bg-[#009b3a]',
    badgeText: 'text-white',
    cardBorder: 'border-8 border-amber-400 border-double shadow-2xl',
    bgGradient: 'from-amber-50 via-white to-amber-100',
    glowColor: 'rgba(234, 179, 8, 0.4)',
    textColor: 'text-slate-800',
    accentColor: 'text-[#009b3a]',
    labelText: 'BRS 1'
  },
  {
    id: 'shiny',
    name: 'Brillante Foil Holográfico',
    badgeBg: 'bg-gradient-to-r from-yellow-400 via-pink-500 to-indigo-500',
    badgeText: 'text-white font-extrabold animate-pulse',
    cardBorder: 'border-8 border-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-600 bg-clip-border shadow-[0_0_25px_rgba(250,204,21,0.6)] animate-pulse',
    bgGradient: 'from-amber-200 via-yellow-100 to-amber-200 bg-opacity-95',
    glowColor: 'rgba(250, 204, 21, 0.8)',
    textColor: 'text-yellow-950',
    accentColor: 'text-amber-600',
    labelText: 'BRS SHINY'
  },
  {
    id: 'retro',
    name: 'Retro México 1970',
    badgeBg: 'bg-[#222222]',
    badgeText: 'text-[#e5c158]',
    cardBorder: 'border-8 border-amber-900 border-dotted shadow-lg',
    bgGradient: 'from-[#f4eedb] via-[#e8deb5] to-[#ece0b9]',
    glowColor: 'rgba(120, 53, 4, 0.3)',
    textColor: 'text-amber-950',
    accentColor: 'text-amber-800',
    labelText: 'RETRO 70'
  },
  {
    id: 'cyber',
    name: 'Cyberpunk Futuro 2026',
    badgeBg: 'bg-[#00f0ff]',
    badgeText: 'text-[#1d1d23] font-mono font-bold',
    cardBorder: 'border-8 border-[#00f0ff] shadow-[0_0_20px_#00f0ff]',
    bgGradient: 'from-[#12131a] via-[#1c1d2e] to-[#0f1015]',
    glowColor: 'rgba(0, 240, 255, 0.6)',
    textColor: 'text-slate-100',
    accentColor: 'text-[#ff0055]',
    labelText: 'CYBER-GK'
  }
];

export const ALISSON_PERSONAL_DATA = {
  fullName: 'Alisson Ramses Becker',
  nickname: 'El Muro de Porto Alegre',
  position: 'Portero (Goalkeeper)',
  birthDate: '2 de Octubre de 1992',
  age: 33,
  birthPlace: 'Novo Hamburgo, Rio Grande do Sul, Brasil',
  height: '1.93 m (6 pies 4 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Liverpool F.C. (Premier League, Inglaterra)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '1 (Selección) / 1 (Club)',
  debutYear: '2013 (S.C. Internacional)',
  mainCharacteristic: 'Destaca por sus reflejos felinos y posicionamiento impecable en situaciones de 1 contra 1. Combina un excelente juego aéreo con la mentalidad de un arquero líbero, poseyendo una precisión técnica excepcional para iniciar ataques con saques largos o pases rasos desde su área.',
};

export const ALISSON_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 41,
  concededGoals: 31,
  cleanSheets: 19,
  assists: 1,
  goals: 0,
  minutesPlayed: 3690,
  saves: 118,
  penaltySaves: 2
};

export const ALISSON_ATTRIBUTES = [
  { name: 'Reflejos', value: 94, color: 'bg-emerald-500' },
  { name: 'Posicionamiento', value: 92, color: 'bg-blue-500' },
  { name: 'Estirada / Salto', value: 89, color: 'bg-teal-500' },
  { name: 'Juego de Pies', value: 87, color: 'bg-indigo-500' },
  { name: 'Mano a Mano (1v1)', value: 95, color: 'bg-rose-500' },
  { name: 'Saque y Distribución', value: 90, color: 'bg-violet-500' },
];

export const TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿En qué equipo brasileño debutó profesionalmente Alisson Becker?',
    options: [
      'Grêmio F.B.P.A.',
      'S.C. Internacional de Porto Alegre',
      'S.E. Palmeiras',
      'São Paulo F.C.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Alisson se unió a la academia del S.C. Internacional en 2002 y debutó con el primer equipo en 2013, donde compitió con el legendario arquero Dida.'
  },
  {
    id: 2,
    question: '¿En qué año ganó la UEFA Champions League con el Liverpool F.C.?',
    options: [
      '2018',
      '2019',
      '2021',
      '2022'
    ],
    correctAnswerIndex: 1,
    explanation: 'Alisson ganó la Champions League en la temporada 2018/19 con el Liverpool, manteniendo la valla invicta en la final ante el Tottenham Hotspur (2-0).'
  },
  {
    id: 3,
    question: 'Alisson anotó un gol icónico de cabeza en el último minuto de un partido con el Liverpool en 2021. ¿Contra qué oponente fue?',
    options: [
      'Manchester United',
      'West Bromwich Albion',
      'Chelsea F.C.',
      'Everton F.C.'
    ],
    correctAnswerIndex: 1,
    explanation: 'En mayo de 2021, Alisson anotó un asombroso gol de golpe de cabeza de tiro de esquina en el minuto 95 contra el West Bromwich Albion, dándole la victoria 2-1 al Liverpool y asegurando su pase a la Champions.'
  },
  {
    id: 4,
    question: '¿Cuál fue el club europeo que fichó a Alisson directamente desde Internacional antes del Liverpool?',
    options: [
      'Roma (A.S. Roma)',
      'AC Milan',
      'Benfica',
      'Fiorentina'
    ],
    correctAnswerIndex: 0,
    explanation: 'Alisson completó su traspaso a la A.S. Roma de Italia en julio de 2016, donde tuvo actuaciones de clase mundial antes de recalar en la Premier League.'
  }
];

export const NEYMAR_PERSONAL_DATA = {
  fullName: 'Neymar da Silva Santos Júnior',
  nickname: 'O Rei do Drible (El Rey del Regate)',
  position: 'Extremo / Delantero (Winger / Forward)',
  birthDate: '5 de Febrero de 1992',
  age: 34,
  birthPlace: 'Mogi das Cruzes, São Paulo, Brasil',
  height: '1.75 m (5 pies 9 pulgadas)',
  preferredFoot: 'Derecha (Ambidextro natural)',
  currentClub: 'Al-Hilal Saudi F.C. (Saudi Pro League, Arabia Saudita)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '10 (Selección) / 10 (Club)',
  debutYear: '2009 (Santos F.C.)',
  mainCharacteristic: 'Destaca por su regate indescifrable, creatividad lúdica extraordinaria, aceleración cortante y una habilidad sublime para crear espacios o asistir de forma impredecible. Neymar Jr. personifica el clásico Jogo Bonito brasileño, siendo un enganche mágico capaz de definir partidos con toques individuales de genialidad o tiros libres maestrales.',
};

export const NEYMAR_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 23,
  assists: 11,
  goals: 14,
  minutesPlayed: 1910
};

export const NEYMAR_ATTRIBUTES = [
  { name: 'Ritmo / Aceleración', value: 92, color: 'bg-emerald-500' },
  { name: 'Regate / Control', value: 96, color: 'bg-blue-500' },
  { name: 'Tiro / Definición', value: 89, color: 'bg-teal-500' },
  { name: 'Pases / Creatividad', value: 93, color: 'bg-indigo-500' },
  { name: 'Fútbol Callejero (Frees)', value: 98, color: 'bg-rose-500' },
  { name: 'Tiros Libres', value: 91, color: 'bg-violet-500' },
];

export const NEYMAR_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Con qué equipo brasileño ganó Neymar Jr. la histórica Copa Libertadores en 2011?',
    options: [
      'São Paulo F.C.',
      'S.E. Palmeiras',
      'Santos F.C.',
      'C.R. Flamengo'
    ],
    correctAnswerIndex: 2,
    explanation: 'Neymar Jr. lideró al mítico Santos F.C. a conquistar la Copa Libertadores 2011, anotando un gol clave en la final frente a Peñarol de Uruguay.'
  },
  {
    id: 2,
    question: '¿De cuánto fue el traspaso récord cuando Neymar Jr. fichó por el Paris Saint-Germain procedente del F.C. Barcelona en 2017?',
    options: [
      '€150 millones',
      '€222 millones',
      '€180 millones',
      '€100 millones'
    ],
    correctAnswerIndex: 1,
    explanation: 'El fichaje de Neymar Jr. por el PSG en 2017 rompió todos los récords de la historia de este deporte, pagando la cifra de €222 millones de euros.'
  },
  {
    id: 3,
    question: '¿En qué certamen internacional con la selección absoluta de Brasil se coronó Neymar campeón y MVP en 2013?',
    options: [
      'Copa América Argentina 2011',
      'Copa Confederaciones',
      'Mundial Brasil 2014',
      'Copa de Oro CONCACAF'
    ],
    correctAnswerIndex: 1,
    explanation: 'Neymar fue elegido el mejor jugador del certamen tras coronarse campeón de la Copa Confederaciones 2013, derrotando 3-0 en la final a la entonces campeona mundial España.'
  },
  {
    id: 4,
    question: '¿A cuántos goles oficiales llegó Neymar Jr. superando la marca oficial de Pelé en selecciones brasileñas en 2023?',
    options: [
      '75 goles',
      '92 goles',
      '79 goles',
      '84 goles'
    ],
    correctAnswerIndex: 2,
    explanation: 'En las eliminatorias sudamericanas de 2023, Neymar superó oficialmente el récord histórico de 77 goles internacionales de Pelé con la Verdeamarela, alcanzando los 79 goles.'
  }
];

export const MARQUINHOS_PERSONAL_DATA = {
  fullName: 'Marcos Aoás Corrêa (Marquinhos)',
  nickname: 'El Káiser de París',
  position: 'Defensa Central (Defender)',
  birthDate: '14 de Mayo de 1994',
  age: 32,
  birthPlace: 'São Paulo, Brasil',
  height: '1.83 m (6 pies 0 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Paris Saint-Germain F.C. (Ligue 1, Francia)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '4 (Selección) / 5 (Club)',
  debutYear: '2011 (Corinthians)',
  mainCharacteristic: 'Destaca por su liderazgo defensivo excepcional, capacidad de anticipación superlativa y una excelente salida de balón desde el fondo. Marquinhos es el capitán indiscutible del PSG e internacional brasileño consagrado, poseyendo un juego aéreo formidable tanto en defensa como en ataque a pesar de no ser de los centrales más altos.',
};

export const MARQUINHOS_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 38,
  assists: 2,
  goals: 3,
  minutesPlayed: 3420
};

export const MARQUINHOS_ATTRIBUTES = [
  { name: 'Marca / Intercepción', value: 93, color: 'bg-emerald-500' },
  { name: 'Ritmo / Aceleración', value: 84, color: 'bg-blue-500' },
  { name: 'Entrada Limpia (Tackle)', value: 91, color: 'bg-teal-500' },
  { name: 'Salto / Juego Aéreo', value: 94, color: 'bg-indigo-500' },
  { name: 'Pases / Salida', value: 86, color: 'bg-rose-500' },
  { name: 'Liderazgo / Táctica', value: 95, color: 'bg-violet-500' },
];

export const MARQUINHOS_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿En qué equipo brasileño se formó profesionalmente Marquinhos antes de partir a Europa?',
    options: [
      'S.E. Palmeiras',
      'Corinthians',
      'Santos F.C.',
      'São Paulo F.C.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Marquinhos debutó profesionalmente con Corinthians en 2011, formando parte del plantel campeón de la Copa Libertadores en 2012 antes de dar el salto al fútbol europeo.'
  },
  {
    id: 2,
    question: '¿De qué club de la Serie A italiana fue fichado Marquinhos por el Paris Saint-Germain en 2013?',
    options: [
      'Juventus',
      'A.S. Roma',
      'AC Milan',
      'Inter de Milán'
    ],
    correctAnswerIndex: 1,
    explanation: 'Tras una brillante temporada inicial en la Serie A 2012/13 con la A.S. Roma, el PSG apostó fuertemente por él fichándolo con solo 19 años.'
  },
  {
    id: 3,
    question: '¿En qué cita olímpica se consagró Marquinhos ganando la histórica primera medalla de oro para la selección de Brasil?',
    options: [
      'Londres 2012',
      'Río de Janeiro 2016',
      'Tokio 2020',
      'París 2024'
    ],
    correctAnswerIndex: 1,
    explanation: 'Marquinhos fue titular inamovible de la zaga del plantel brasileño que logró el emblemático primer título olímpico de fútbol masculino en Río de Janeiro 2016 ante Alemania en el Maracaná.'
  },
  {
    id: 4,
    question: 'Marquinhos asumió de forma definitiva la capitanía del PSG heredando el brazalete de otro emblemático central brasileño en 2020. ¿De quién se trata?',
    options: [
      'David Luiz',
      'Maxwell',
      'Thiago Silva',
      'Alex'
    ],
    correctAnswerIndex: 2,
    explanation: 'Marquinhos heredó la histórica cinta de capitán y el liderazgo de la zaga de Thiago Silva cuando "O Monstro" se despidió del conjunto parisino en el verano del 2020 rumbo al Chelsea.'
  }
];

export const GABRIEL_PERSONAL_DATA = {
  fullName: 'Gabriel dos Santos Magalhães',
  nickname: 'La Muralla de Highbury',
  position: 'Defensa Central (Defender)',
  birthDate: '19 de Diciembre de 1997',
  age: 28,
  birthPlace: 'São Paulo, Brasil',
  height: '1.90 m (6 pies 3 pulgadas)',
  preferredFoot: 'Izquierda (Left-footed)',
  currentClub: 'Arsenal F.C. (Premier League, Inglaterra)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '14 (Selección) / 6 (Club)',
  debutYear: '2016 (Avaí)',
  mainCharacteristic: 'Se erige como uno de los centrales zurdos más dominantes de la Premier League y pilar cimiento del Arsenal. Destaca por su fuerza física demoledora, agresividad inteligente y una soberbia efectividad en el juego aéreo de balón parado que lo convierte en un defensor sumamente goleador.',
};

export const GABRIEL_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 36,
  assists: 1,
  goals: 5,
  minutesPlayed: 3240
};

export const GABRIEL_ATTRIBUTES = [
  { name: 'Marca / Intercepción', value: 92, color: 'bg-emerald-500' },
  { name: 'Ritmo / Velocidad', value: 81, color: 'bg-blue-500' },
  { name: 'Fuerza / Presión', value: 95, color: 'bg-teal-500' },
  { name: 'Salto / Cabezazo', value: 96, color: 'bg-indigo-500' },
  { name: 'Pases / Salida', value: 83, color: 'bg-rose-500' },
  { name: 'Agresividad / Enfoque', value: 94, color: 'bg-violet-500' },
];

export const GABRIEL_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿En qué club francés destacó Gabriel Magalhães antes de ser fichado por el Arsenal F.C. en 2020?',
    options: [
      'Olympique de Lyon',
      'LOSC Lille',
      'A.S. Monaco',
      'Olympique de Marsella'
    ],
    correctAnswerIndex: 1,
    explanation: 'Gabriel tuvo un paso rutilante por el Lille de la Ligue 1, donde sus espectaculares actuaciones en liga y Champions League llamaron la atención de los grandes de Europa.'
  },
  {
    id: 2,
    question: 'Gabriel Magalhães es muy conocido por su increíble dupla defensiva en el Arsenal. ¿Quién es su pareja indiscutible en la zaga central de los Gunners?',
    options: [
      'Ben White',
      'William Saliba',
      'Jurrien Timber',
      'Jakub Kiwior'
    ],
    correctAnswerIndex: 1,
    explanation: 'La dupla "Gabriel & Saliba" es catalogada por expertos y aficionados como una de las mejores y más sólidas sociedades defensivas del fútbol mundial actual.'
  },
  {
    id: 3,
    question: '¿En qué club brasileño debutó Gabriel Magalhães profesionalmente como canterano antes de emigrar al fútbol europeo?',
    options: [
      'Avaí F.C.',
      'Corinthians',
      'Figueirense',
      'Gremio'
    ],
    correctAnswerIndex: 0,
    explanation: 'Gabriel se formó en las divisiones juveniles de Avaí, debutando en el primer equipo en 2016 antes de ser transferido tempranamente al Lille de Francia.'
  },
  {
    id: 4,
    question: '¿Cuál es el dorsal característico que luce Gabriel Magalhães en el primer equipo del Arsenal en la Premier League?',
    options: [
      'Dorsal 4',
      'Dorsal 5',
      'Dorsal 6',
      'Dorsal 14'
    ],
    correctAnswerIndex: 2,
    explanation: 'Gabriel Magalhães viste la camiseta número 6 de los Gunners de manera firme, convirtiéndose en el portador de la legendaria retaguardia del club londinense.'
  }
];

export const DANILO_PERSONAL_DATA = {
  fullName: 'Danilo Luiz da Silva (Danilo)',
  nickname: 'O Capitão de Turín',
  position: 'Defensa / Lateral (Defender / Fullback)',
  birthDate: '15 de Julio de 1991',
  age: 34,
  birthPlace: 'Bicas, Minas Gerais, Brasil',
  height: '1.84 m (6 pies 0 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Juventus de Turín (Serie A, Italia)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '2 (Selección / Club)',
  debutYear: '2009 (América Mineiro)',
  mainCharacteristic: 'Destaca por su polivalencia defensiva integral y tremendo rigor táctico, capaz de jugar en ambos laterales o en la zaga central. Danilo es la voz de la madurez y portador de la cinta de capitán tanto en la Juventus de Turín como en la Selección de Brasil.',
};

export const DANILO_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 34,
  assists: 3,
  goals: 2,
  minutesPlayed: 2980
};

export const DANILO_ATTRIBUTES = [
  { name: 'Rigor / Intercepción', value: 90, color: 'bg-emerald-500' },
  { name: 'Ritmo / Cobertura', value: 80, color: 'bg-blue-500' },
  { name: 'Entrada / Fuerza', value: 89, color: 'bg-teal-500' },
  { name: 'Pases / Salida', value: 87, color: 'bg-indigo-500' },
  { name: 'Inteligencia Táctica', value: 94, color: 'bg-rose-500' },
  { name: 'Liderazgo / Jerarquía', value: 96, color: 'bg-violet-500' },
];

export const DANILO_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿En qué club europeo debutó Danilo tras dar el gran salto desde el Santos F.C. en 2012?',
    options: [
      'Real Madrid',
      'FC Porto',
      'Juventus',
      'Manchester City'
    ],
    correctAnswerIndex: 1,
    explanation: 'Danilo dio su primer gran paso europeo en el FC Porto de Portugal en 2012, brillando por el sector derecho antes de recalar en el Santiago Bernabéu.'
  },
  {
    id: 2,
    question: 'Danilo es un multicampeón que levantó títulos en España, Italia y Portugal. ¿Con qué club inglés conquistó la Premier League?',
    options: [
      'Manchester United',
      'Chelsea',
      'Liverpool',
      'Manchester City'
    ],
    correctAnswerIndex: 3,
    explanation: 'Bajo el mando de Pep Guardiola, Danilo jugó para el Manchester City conquistando el bicampeonato de Premier League entre el 2017 y 2019.'
  },
  {
    id: 3,
    question: '¿Con qué club de su natal Brasil conquistó Danilo la Copa Libertadores 2011 anotando además el gol del triunfo en la gran final?',
    options: [
      'Santos F.C.',
      'Corinthians',
      'Palmeiras',
      'São Paulo F.C.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Danilo fue una pieza elemental del Santos campeón 2011 junto a Neymar Jr., marcando el memorable gol para la victoria canarinha por 2-1 ante Peñarol.'
  },
  {
    id: 4,
    question: '¿Qué gran distinción ostenta Danilo en la Juventus y en la selección de Brasil por su indiscutible voz de mando?',
    options: [
      'Especialista en Penaltis',
      'Segundo Portero',
      'Capitán Principal',
      'Preparador Físico'
    ],
    correctAnswerIndex: 2,
    explanation: 'Su tremendo profesionalismo, madurez y solidez conceptual le adjudicaron la cinta de capitán con orgullo en la Vecchia Signora y de la Canarinha absoluta.'
  }
];

export const ALEX_SANDRO_PERSONAL_DATA = {
  fullName: 'Alex Sandro Lobo Silva',
  nickname: 'El Expreso de Catanduva',
  position: 'Defensa / Lateral Izquierdo (Defender / Leftback)',
  birthDate: '26 de Enero de 1991',
  age: 35,
  birthPlace: 'Catanduva, São Paulo, Brasil',
  height: '1.80 m (5 pies 11 pulgadas)',
  preferredFoot: 'Izquierda (Left-footed)',
  currentClub: 'CR Flamengo (Serie A, Brasil)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '6 (Selección) / 26 (Club)',
  debutYear: '2008 (Atlético Paranaense)',
  mainCharacteristic: 'Destaca por su tremenda potencia de desborde por izquierda, solidez en el duelo individual y versatilidad táctica. Alex Sandro se consagró como un lateral de clase mundial en Portugal con el Porto y fue una pieza legendaria de la Juventus de Turín por casi una década.',
};

export const ALEX_SANDRO_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 32,
  assists: 4,
  goals: 1,
  minutesPlayed: 2650
};

export const ALEX_SANDRO_ATTRIBUTES = [
  { name: 'Rigor / Marca', value: 89, color: 'bg-emerald-500' },
  { name: 'Ritmo / Despliegue', value: 83, color: 'bg-blue-500' },
  { name: 'Fuerza / Presión', value: 87, color: 'bg-teal-500' },
  { name: 'Centros / Pase', value: 86, color: 'bg-indigo-500' },
  { name: 'Táctica / Posición', value: 91, color: 'bg-rose-500' },
  { name: 'Experiencia / Jerarquía', value: 93, color: 'bg-violet-500' },
];

export const ALEX_SANDRO_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Junto a qué club brasileño Alex Sandro saltó a la fama ganando la Copa Libertadores 2011 junto a Neymar y Danilo?',
    options: [
      'Santos F.C.',
      'Corinthians',
      'Flamengo',
      'São Paulo F.C.'
    ],
    correctAnswerIndex: 0,
    explanation: 'Alex Sandro integró aquel mítico cuadro del Santos F.C. de 2011 que conquistó la gloria continental de Sudamérica bajo la batuta del talento de Neymar Jr.'
  },
  {
    id: 2,
    question: '¿Por cuántas temporadas vistió la legendaria camiseta de la Juventus de Turín de forma oficial?',
    options: [
      '5 temporadas',
      '7 temporadas',
      '9 temporadas',
      '11 temporadas'
    ],
    correctAnswerIndex: 2,
    explanation: 'Alex Sandro militó en la Vecchia Signora por 9 exitosas temporadas (del 2015 al 2024), adueñándose de la banda izquierda y sumando decenas de campeonatos nacionales.'
  },
  {
    id: 3,
    question: '¿De qué club de la primera división portuguesa fue adquirido por la Juventus en 2015?',
    options: [
      'S.L. Benfica',
      'FC Porto',
      'Sporting de Lisboa',
      'S.C. Braga'
    ],
    correctAnswerIndex: 1,
    explanation: 'Alex Sandro dio el gran salto porto-italiano tras brillar intensamente en el FC Porto de Portugal entre 2011 y 2015.'
  },
  {
    id: 4,
    question: '¿Con qué equipo brasileño de alta gama regresó Alex Sandro a Sudamérica tras finalizar su histórico ciclo en la Juventus en 2024?',
    options: [
      'CR Flamengo',
      'Palmeiras',
      'Grêmio',
      'Fluminense'
    ],
    correctAnswerIndex: 0,
    explanation: 'Tras despedirse de Turín, el experimentado lateral regresó a su país natal en 2024 para defender el escudo del CR Flamengo.'
  }
];

export const LEO_PEREIRA_PERSONAL_DATA = {
  fullName: 'Leonardo Pereira',
  nickname: 'El Mariscal de Gávea',
  position: 'Defensa Central (Defender)',
  birthDate: '31 de Enero de 1996',
  age: 30,
  birthPlace: 'Curitiba, Paraná, Brasil',
  height: '1.88 m (6 pies 2 pulgadas)',
  preferredFoot: 'Izquierda (Left-footed)',
  currentClub: 'CR Flamengo (Serie A, Brasil)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '13 (Selección) / 4 (Club)',
  debutYear: '2013 (Athletico Paranaense)',
  mainCharacteristic: 'Destaca por su impecable técnica para la limpia salida de balón con perfil zurdo, un excelente posicionamiento aéreo en ambas áreas y gran firmeza en los duelos cuerpo a cuerpo, siendo uno de los centrales más estables del fútbol brasileño de élite.',
};

export const LEO_PEREIRA_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 35,
  assists: 2,
  goals: 3,
  minutesPlayed: 3110
};

export const LEO_PEREIRA_ATTRIBUTES = [
  { name: 'Rigor / Intercepción', value: 88, color: 'bg-emerald-500' },
  { name: 'Ritmo / Velocidad', value: 81, color: 'bg-blue-500' },
  { name: 'Corte / Fuerza', value: 90, color: 'bg-teal-500' },
  { name: 'Salto / Cabezazo', value: 92, color: 'bg-indigo-500' },
  { name: 'Pases / Salida', value: 89, color: 'bg-rose-500' },
  { name: 'Liderazgo / Enfoque', value: 87, color: 'bg-violet-500' },
];

export const LEO_PEREIRA_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿En qué club brasileño debutó y se consagró ganando la Copa Sudamericana 2018 Léo Pereira antes de pasar a Flamengo?',
    options: [
      'Coritiba F.C.',
      'Athletico Paranaense',
      'Paraná Clube',
      'Santos F.C.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Léo Pereira brilló notablemente en el Athletico Paranaense, conquistando copas y consagrándose como uno de los mejores defensas jóvenes en Brasil antes de emigrar al Flamengo.'
  },
  {
    id: 2,
    question: '¿Cuál es el apodo carismático con el que los hinchas conocen a Léo Pereira en el Flamengo debido a su carisma fuera del campo?',
    options: [
      'Karolino',
      'O General',
      'El Tanque',
      'Papi'
    ],
    correctAnswerIndex: 0,
    explanation: 'La hinchada brasileña adoptó fuertemente el apodo jocoso "Karolino" en el ecosistema digital debido a su carismática presencia y relación sentimental.'
  },
  {
    id: 3,
    question: '¿Con qué club conquistó Léo Pereira la histórica e invicta Copa Libertadores en la edición del año 2022?',
    options: [
      'Athletico Paranaense',
      'CR Flamengo',
      'Palmeiras',
      'Atlético Mineiro'
    ],
    correctAnswerIndex: 1,
    explanation: 'Bajo la conducción táctica de Dorival Júnior, Léo Pereira erigió una sólida zaga titular junto a David Luiz para conquistar de forma invicta la Copa Libertadores 2022.'
  },
  {
    id: 4,
    question: '¿Qué dorsal característico porta Léo Pereira en su espalda defendiendo los colores del Flamengo?',
    options: [
      'Dorsal 3',
      'Dorsal 4',
      'Dorsal 13',
      'Dorsal 23'
    ],
    correctAnswerIndex: 1,
    explanation: 'Léo Pereira es el encargado de heredar y portar con prestancia la mítica camiseta número 4 de la retaguardia del Mengão.'
  }
];

export const BREMER_PERSONAL_DATA = {
  fullName: 'Gleison Bremer Silva Nascimento',
  nickname: 'El Káiser de Turín',
  position: 'Defensa Central (Defender)',
  birthDate: '18 de Marzo de 1997',
  age: 29,
  birthPlace: 'Itapitanga, Bahía, Brasil',
  height: '1.88 m (6 pies 2 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Juventus de Turín (Serie A, Italia)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '3 (Selección) / 3 (Club)',
  debutYear: '2017 (Atlético Mineiro)',
  mainCharacteristic: 'Destaca como uno de los centrales más dominantes y agresivos de la Serie A. Su imponente fortaleza física, velocidad letal en recuperación, lectura genial de anticipación y descollante juego por arriba lo vuelven una muralla infranqueable.',
};

export const BREMER_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 35,
  assists: 1,
  goals: 3,
  minutesPlayed: 3080
};

export const BREMER_ATTRIBUTES = [
  { name: 'Marca / Anticipo', value: 94, color: 'bg-emerald-500' },
  { name: 'Ritmo / Velocidad', value: 84, color: 'bg-blue-500' },
  { name: 'Fuerza / Presión', value: 96, color: 'bg-teal-500' },
  { name: 'Salto / Cabezazo', value: 95, color: 'bg-indigo-500' },
  { name: 'Entrada / Despeje', value: 93, color: 'bg-rose-500' },
  { name: 'Liderazgo / Jerarquía', value: 88, color: 'bg-violet-500' },
];

export const BREMER_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿En qué club italiano de la Serie A se consagró Bremer como "Mejor Defensor de la Serie A" en la temporada 2021/2022 antes de fichar por la Juventus?',
    options: [
      'Torino F.C.',
      'A.C. Milan',
      'AS Roma',
      'Fiorentina'
    ],
    correctAnswerIndex: 0,
    explanation: 'Bremer brilló con luz propia en el Torino F.C., ganando el premio al mejor defensor del campeonato italiano antes de hacer un histórico traspaso a su clásico rival de ciudad, la Juventus.'
  },
  {
    id: 2,
    question: '¿Cuál es el dorsal característico que viste Bremer en la Selección brasileña y también en la Juventus de Turín?',
    options: [
      'Dorsal 3',
      'Dorsal 4',
      'Dorsal 13',
      'Dorsal 24'
    ],
    correctAnswerIndex: 0,
    explanation: 'Bremer se ha adueñado del dorsal número 3 en la retaguardia de la Vecchia Signora y de la Canarinha absoluta.'
  },
  {
    id: 3,
    question: '¿En qué importante equipo de la Serie A de Brasil debutó y demostró su gran valía defensiva antes de dar el salto al continente europeo en 2018?',
    options: [
      'Flamengo',
      'Atlético Mineiro',
      'São Paulo F.C.',
      'Santos F.C.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Bremer comenzó a impresionar al fútbol brasileño vistiendo los colores del Atlético Mineiro, club desde el cual emigró al Torino de Italia en 2018.'
  },
  {
    id: 4,
    question: '¿Cuál de estos galardones importantes conquistó Bremer en el fútbol italiano que reafirmó su rol de central de élite mundial?',
    options: [
      'Bota de Oro',
      'Mejor Centrocampista',
      'Equipo del Año de la Serie A',
      'Mejor Portero'
    ],
    correctAnswerIndex: 2,
    explanation: 'Ha sido incluido consecutivamente en el Equipo del Año de la Serie A por su imponente consistencia y solidez defensiva en la liga italiana.'
  }
];

export const DOUGLAS_SANTOS_PERSONAL_DATA = {
  fullName: 'Douglas dos Santos Justino de Melo (Douglas Santos)',
  nickname: 'El Campeón Imperial',
  position: 'Defensa / Lateral Izquierdo (Defender / Leftback)',
  birthDate: '22 de Marzo de 1994',
  age: 32,
  birthPlace: 'João Pessoa, Paraíba, Brasil',
  height: '1.76 m (5 pies 9 pulgadas)',
  preferredFoot: 'Izquierda (Left-footed)',
  currentClub: 'FC Zenit (Liga Premier de Rusia)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '6 (Selección) / 3 (Club)',
  debutYear: '2012 (Náutico)',
  mainCharacteristic: 'Destaca por su extraordinaria proyección ofensiva, centros milimétricos de perfil zurdo y magnífico repliegue defensivo. Douglas es capitán consagrado del Zenit y fue una de las grandes figuras que conquistó la histórica medalla de oro olímpica en Río de Janeiro 2016.',
};

export const DOUGLAS_SANTOS_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 33,
  assists: 5,
  goals: 2,
  minutesPlayed: 2840
};

export const DOUGLAS_SANTOS_ATTRIBUTES = [
  { name: 'Rigor / Despeje', value: 87, color: 'bg-emerald-500' },
  { name: 'Ritmo / Velocidad', value: 85, color: 'bg-blue-500' },
  { name: 'Cruce / Centros', value: 91, color: 'bg-teal-500' },
  { name: 'Entrada / Cobertura', value: 88, color: 'bg-indigo-500' },
  { name: 'Táctica / Posición', value: 92, color: 'bg-rose-500' },
  { name: 'Liderazgo / Insignia', value: 91, color: 'bg-violet-500' },
];

export const DOUGLAS_SANTOS_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Qué gran logro histórico conquistó Douglas Santos en 2016 junto a la Selección Brasileña Sub-23 como lateral izquierdo titular?',
    options: [
      'Copa América',
      'Medalla de Oro Olímpica',
      'Copa del Mundo Sub-20',
      'Copa Confederaciones'
    ],
    correctAnswerIndex: 1,
    explanation: 'Douglas Santos fue una pieza clave e inicialista en todos los partidos de los Juegos Olímpicos de Río 2016, consagrándose con la primera medalla de oro del fútbol brasileño de la historia.'
  },
  {
    id: 2,
    question: '¿En qué club europeo del fútbol alemán brilló Douglas Santos entre 2016 y 2019 antes de recalar en la liga rusa?',
    options: [
      'Borussia Dortmund',
      'Hamburger SV',
      'Bayer Leverkusen',
      'Schalke 04'
    ],
    correctAnswerIndex: 1,
    explanation: 'Douglas Santos se forjó un nombre respetable en el Viejo Continente jugando para el histórico Hamburger SV de Alemania antes de iniciar su racha de oro en Rusia.'
  },
  {
    id: 3,
    question: '¿En qué club de la primera división de Rusia se consolidó como capitán absoluto e indiscutido referente del plantel titular conquitándolo todo?',
    options: [
      'Spartak de Moscú',
      'FC Zenit',
      'CSKA Moscú',
      'Lokomotiv'
    ],
    correctAnswerIndex: 1,
    explanation: 'En el Zenit de San Petersburgo, Douglas Santos no solo es el dueño del lateral izquierdo sino que funge con enorme liderazgo como capitán imperial del primer equipo.'
  },
  {
    id: 4,
    question: '¿Con qué tradicional escuadra de la Serie A brasileña conquistó Douglas Santos la prestigiosa Copa de Brasil en el año 2014?',
    options: [
      'Atlético Mineiro',
      'Cruzeiro',
      'Grêmio',
      'Flamengo'
    ],
    correctAnswerIndex: 0,
    explanation: 'Con el recordado "Galo" (Atlético Mineiro) conquistó la Copa de Brasil 2014, erigiéndose rápidamente como uno de los laterales más cotizados de Sudamérica.'
  }
];

export const IBANEZ_PERSONAL_DATA = {
  fullName: 'Roger Ibañez da Silva',
  nickname: 'El Muro de Al-Ahli',
  position: 'Defensa Central (Defender)',
  birthDate: '23 de Noviembre de 1998',
  age: 27,
  birthPlace: 'Canela, Rio Grande do Sul, Brasil',
  height: '1.86 m (6 pies 1 pulgada)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Al-Ahli SFC (Saudi Pro League)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '14 (Selección) / 3 (Club)',
  debutYear: '2017 (PRS Futebol Clube)',
  mainCharacteristic: 'Destaca por su imponente juego aéreo, gran velocidad de reacción para coberturas a campo abierto y un instinto de anticipación superlativo, habiendo brillado en la Roma subcampeona de Europa League antes de su llegada a Arabia Saudita.',
};

export const IBANEZ_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 30,
  assists: 1,
  goals: 3,
  minutesPlayed: 2700
};

export const IBANEZ_ATTRIBUTES = [
  { name: 'Anticipación / Rigor', value: 90, color: 'bg-emerald-500' },
  { name: 'Ritmo / Velocidad', value: 86, color: 'bg-blue-500' },
  { name: 'Entrada / Cobertura', value: 89, color: 'bg-teal-500' },
  { name: 'Balón Aéreo / Cabezazo', value: 91, color: 'bg-indigo-500' },
  { name: 'Salida / Pase', value: 82, color: 'bg-rose-500' },
  { name: 'Fuerza / Duelos', value: 88, color: 'bg-violet-500' },
];

export const IBANEZ_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Con qué club italiano alcanzó la final de la UEFA Europa League 2023 consolidándose como central indiscutible?',
    options: [
      'Lazio',
      'AS Roma',
      'Juventus',
      'Atalanta'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ibañez tuvo un paso brillantísimo por la AS Roma, equipo con el que conquistó la primera edición de la UEFA Conference League y llegó a la final de la Europa League.'
  },
  {
    id: 2,
    question: '¿De qué equipo de la primera división de Brasil procedía Roger Ibañez antes de firmar por el Atalanta en 2019?',
    options: [
      'Fluminense FC',
      'Flamengo',
      'Palmeiras',
      'São Paulo FC'
    ],
    correctAnswerIndex: 0,
    explanation: 'Roger Ibañez despuntó como una de las grandes promesas defensivas del Fluminense, lo que propició su viaje al fútbol europeo de la mano de la Atalanta.'
  },
  {
    id: 3,
    question: '¿En qué club de la liga de Arabia Saudita milita Roger Ibañez desde su traspaso en el verano de 2023?',
    options: [
      'Al-Hilal',
      'Al-Nassr',
      'Al-Ahli SFC',
      'Al-Ittihad'
    ],
    correctAnswerIndex: 2,
    explanation: 'Desde 2023, Roger Ibañez es uno de los máximos baluartes en la zaga central del Al-Ahli en la competitiva Saudi Pro League.'
  },
  {
    id: 4,
    question: '¿Cuál de estos torneos continentales conquistó Ibañez en 2022 bajo las órdenes del estratega José Mourinho?',
    options: [
      'UEFA Champions League',
      'UEFA Europa League',
      'UEFA Conference League',
      'Supercopa de Europa'
    ],
    correctAnswerIndex: 2,
    explanation: 'Formó parte vital del cuadro romano de Mourinho que levantó el título de la UEFA Conference League en la campaña 2021/2022.'
  }
];

export const WESLEY_PERSONAL_DATA = {
  fullName: 'Wesley Vinícius França Lima',
  nickname: 'La Bala de Roma',
  position: 'Defensa / Lateral Derecho (Defender / Rightback)',
  birthDate: '06 de Septiembre de 2003',
  age: 22,
  birthPlace: 'Caxias, Maranhão, Brasil',
  height: '1.73 m (5 pies 8 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'AS Roma (Serie A, Italia)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '19 (Club) / 2 (Selección)',
  debutYear: '2021 (CR Flamengo)',
  mainCharacteristic: 'Destaca por su velocidad supersónica en carrera, su espectacular fuerza y potencia física, y un gran desborde ofensivo por la banda derecha que lo convierte en uno de los laterales defensivos con mayor proyección en la Serie A de Italia y el fútbol mundial.',
};

export const WESLEY_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 32,
  assists: 4,
  goals: 1,
  minutesPlayed: 2680
};

export const WESLEY_ATTRIBUTES = [
  { name: 'Velocidad / Aceleración', value: 95, color: 'bg-emerald-500' },
  { name: 'Fuerza / Potencia', value: 87, color: 'bg-blue-500' },
  { name: 'Desborde / Regate', value: 85, color: 'bg-teal-500' },
  { name: 'Entrada / Cobertura', value: 81, color: 'bg-indigo-500' },
  { name: 'Centros / Pases', value: 80, color: 'bg-rose-500' },
  { name: 'Resistencia / Energía', value: 90, color: 'bg-violet-500' },
];

export const WESLEY_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿En qué prestigioso club de Río de Janeiro debutó y se consolidó Wesley antes de captar la atención de gigantes clubes de Europa?',
    options: [
      'Fluminense',
      'Vasco da Gama',
      'CR Flamengo',
      'Botafogo'
    ],
    correctAnswerIndex: 2,
    explanation: 'Wesley se formó e hizo su debut profesional absoluto en el CR Flamengo de Río de Janeiro, donde rápidamente se apoderó de la banda derecha.'
  },
  {
    id: 2,
    question: '¿Cuál es la principal virtud física de Wesley que lo destaca por encima de la mayoría de laterales en el continente sudamericano?',
    options: [
      'Juego aéreo',
      'Velocidad y aceleración extrema',
      'Atajar penales',
      'Pase de tres dedos'
    ],
    correctAnswerIndex: 1,
    explanation: 'Wesley posee una velocidad supersónica y aceleración explosiva que le permiten recorrer toda la banda derecha con suma facilidad.'
  },
  {
    id: 3,
    question: '¿A qué club de la Serie A de Italia dio el gran paso futbolístico Wesley desde el Flamengo de Río de Janeiro?',
    options: [
      'Juventus de Turín',
      'AC Milan',
      'AS Roma',
      'Inter de Milán'
    ],
    correctAnswerIndex: 2,
    explanation: 'Wesley dio el gran paso táctico e internacional de incorporarse a las filas de la prestigiosa AS Roma en la competitiva Serie A de Italia.'
  },
  {
    id: 4,
    question: '¿Con qué apodo se le conoce habitualmente a Wesley por su tremenda aceleración y velocidad por la banda derecha en su club actual AS Roma?',
    options: [
      'El Tren del Norte',
      'La Bala de Roma',
      'El Gladiador',
      'La Garra Imperial'
    ],
    correctAnswerIndex: 1,
    explanation: 'Por su velocidad supersónica y desborde explosivo por el flanco derecho, Wesley se ha ganado el apodo de "La Bala de Roma".'
  }
];

export const DANILO_BOTAFOGO_PERSONAL_DATA = {
  fullName: 'Danilo Barbosa da Silva',
  nickname: 'El Motor de Botafogo',
  position: 'Mediocampista / Pivote (Midfielder / Defensive Midfielder)',
  birthDate: '28 de Febrero de 1996',
  age: 30,
  birthPlace: 'Simão Dias, Sergipe, Brasil',
  height: '1.83 m (6 pies 0 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Botafogo de Futebol e Regatas',
  nationalTeam: 'Selección de Brasil (Sub-20/Olímpica/Absoluta)',
  squadNumber: '5 (Club) / 15 (Selección)',
  debutYear: '2014 (Vasco da Gama)',
  mainCharacteristic: 'Destaca por su imponente rigor físico en la marca, excelente salida limpia con balón dominado, potente remate de media distancia y un temperamento competitivo superlativo para comandar la volante.',
};

export const DANILO_BOTAFOGO_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 31,
  assists: 2,
  goals: 3,
  minutesPlayed: 2590
};

export const DANILO_BOTAFOGO_ATTRIBUTES = [
  { name: 'Rigor / Tacle', value: 85, color: 'bg-emerald-500' },
  { name: 'Salida / Pase', value: 82, color: 'bg-blue-500' },
  { name: 'Potencia / Remate', value: 84, color: 'bg-teal-500' },
  { name: 'Fuerza / Presencia', value: 86, color: 'bg-indigo-500' },
  { name: 'Posicionamiento', value: 83, color: 'bg-rose-500' },
  { name: 'Resistencia', value: 88, color: 'bg-violet-500' },
];

export const DANILO_BOTAFOGO_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Con qué selección juvenil brasileña destacó Danilo Barbosa como capitán y ganó el prestigiado Balón de Plata en el Mundial Sub-20 de 2015?',
    options: [
      'Brasil Sub-17',
      'Brasil Sub-20',
      'Brasil Olímpica',
      'Brasil Sub-15'
    ],
    correctAnswerIndex: 1,
    explanation: 'Danilo lideró brillantemente a la Selección de Brasil Sub-20 en la Copa Mundial 2015, donde alcanzaron el subcampeonato y él recibió el Balón de Plata.'
  },
  {
    id: 2,
    question: '¿En cuál de estos representativos de la Serie A de Italia militó Danilo Barbosa de manera regular a préstamo desde el Braga?',
    options: [
      'SS Lazio',
      'Atalanta BC',
      'ACF Fiorentina',
      'Torino FC'
    ],
    correctAnswerIndex: 0,
    explanation: 'Danilo Barbosa jugó en la SS Lazio en la temporada 2017-18 con un rendimiento de alto nivel e integrando la gran volante romana.'
  },
  {
    id: 3,
    question: '¿Con qué club del fútbol francés acumuló la mayor cantidad de minutos jugados en Europa ganándose el respeto del público local?',
    options: [
      'Olympique de Lyon',
      'OGC Niza',
      'AS Mónaco',
      'Lille OSC'
    ],
    correctAnswerIndex: 1,
    explanation: 'En el OGC Niza, Danilo Barbosa se erigió como uno de los pivotes más dinámicos de la Ligue 1, jugando casi cincuenta partidos oficiales.'
  },
  {
    id: 4,
    question: '¿En qué tradicional club de Río de Janeiro de alta rivalidad carioca completó Danilo su formación juvenil y debutó en primera división?',
    options: [
      'CR Flamengo',
      'Fluminense FC',
      'Botafogo FR',
      'Vasco da Gama'
    ],
    correctAnswerIndex: 3,
    explanation: 'Danilo comenzó profesionalmente en Vasco da Gama antes de emigrar rápidamente al fútbol del Viejo Continente consolidándose en el Sporting de Braga.'
  }
];

export const CASEMIRO_PERSONAL_DATA = {
  fullName: 'Carlos Henrique Casimiro',
  nickname: 'El Tanque Imperial',
  position: 'Mediocampista Defensivo (Defensive Midfielder)',
  birthDate: '23 de Febrero de 1992',
  age: 34,
  birthPlace: 'São José dos Campos, São Paulo, Brasil',
  height: '1.85 m (6 pies 1 pulgada)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Manchester United (Premier League)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '5 (Selección) / 18 (Club)',
  debutYear: '2010 (São Paulo FC)',
  mainCharacteristic: 'Leyenda viviente en el pivote defensivo, célebre por su inquebrantable fuerza física, letal capacidad de anticipación, testarazo goleador y liderazgo supremo que lo coronaron con 5 Champions League en el Real Madrid.',
};

export const CASEMIRO_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 29,
  assists: 1,
  goals: 2,
  minutesPlayed: 2480
};

export const CASEMIRO_ATTRIBUTES = [
  { name: 'Intercepción', value: 94, color: 'bg-emerald-500' },
  { name: 'Entrada / Tacle', value: 92, color: 'bg-blue-500' },
  { name: 'Fuerza / Duelo', value: 95, color: 'bg-teal-500' },
  { name: 'Potencia de Disparo', value: 88, color: 'bg-indigo-500' },
  { name: 'Cabezazo', value: 90, color: 'bg-rose-500' },
  { name: 'Liderazgo / Voz', value: 96, color: 'bg-violet-500' },
];

export const CASEMIRO_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Cuántas copas de la UEFA Champions League conquistó Casemiro vistiendo de forma gloriosa los colores del Real Madrid?',
    options: [
      '3 Champions',
      '4 Champions',
      '5 Champions',
      '6 Champions'
    ],
    correctAnswerIndex: 2,
    explanation: 'Casemiro integra un selecto grupo histórico de futbolistas tras conquistar 5 Champions League con la mítica camiseta del Real Madrid.'
  },
  {
    id: 2,
    question: '¿De qué histórico club de la primera división brasileña emergió Casemiro al profesionalismo antes de fichar por el Real Madrid Castilla?',
    options: [
      'São Paulo FC',
      'Santos FC',
      'Palmeiras',
      'Corinthians'
    ],
    correctAnswerIndex: 0,
    explanation: 'Casemiro deslumbra desde joven en el tricolor de São Paulo, club con el que además conquistó la Copa Sudamericana en 2012.'
  },
  {
    id: 3,
    question: '¿Qué número de camiseta legendaria adoptó Casemiro para capitanear la medular del Manchester United en la Premier League?',
    options: [
      'Número 18',
      'Número 5',
      'Número 14',
      'Número 81'
    ],
    correctAnswerIndex: 0,
    explanation: 'En Old Trafford, Casemiro lidera la marca y los relevos portando el histórico número 18 en su espalda.'
  },
  {
    id: 4,
    question: '¿En qué club europeo jugó Casemiro a préstamo en la campaña 2014/15 adquiriendo valiosísima experiencia antes de adueñarse de la medular blanca?',
    options: [
      'Benfica',
      'FC Porto',
      'Sevilla FC',
      'Bayer Leverkusen'
    ],
    correctAnswerIndex: 1,
    explanation: 'Casemiro cumplió una destacadísima temporada a prestámo en el Porto que convenció a Rafa Benítez y posteriormente a Zidane de repatriarlo definitivamente.'
  }
];

export const BRUNO_GUIMARAES_PERSONAL_DATA = {
  fullName: 'Bruno Guimarães Rodriguez Moura',
  nickname: 'El Arquitecto de Newcastle',
  position: 'Mediocampista Central / Organizador (Midfielder / Playmaker)',
  birthDate: '16 de Noviembre de 1997',
  age: 28,
  birthPlace: 'Río de Janeiro, Rio de Janeiro, Brasil',
  height: '1.82 m (6 pies 0 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Newcastle United (Premier League)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '8 (Selección) / 39 (Club)',
  debutYear: '2017 (Audax)',
  mainCharacteristic: 'Exquisito volante mixto de distribución magistral. Su privilegiada visión de juego para romper líneas enemigas, férrea disciplina táctica y entrega incesante lo consagran como ídolo en St James Park.',
};

export const BRUNO_GUIMARAES_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 34,
  assists: 7,
  goals: 4,
  minutesPlayed: 2920
};

export const BRUNO_GUIMARAES_ATTRIBUTES = [
  { name: 'Visión / Creación', value: 92, color: 'bg-emerald-500' },
  { name: 'Pase Corto / Largo', value: 93, color: 'bg-blue-500' },
  { name: 'Control / Regate', value: 89, color: 'bg-teal-500' },
  { name: 'Rigor Defensivo', value: 84, color: 'bg-indigo-500' },
  { name: 'Resistencia / Ritmo', value: 90, color: 'bg-rose-500' },
  { name: 'Fuerza / Duelos', value: 86, color: 'bg-violet-500' },
];

export const BRUNO_GUIMARAES_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Por qué histórico número dorsal en su camiseta tiene Bruno Guimarães absoluta devoción como homenaje a su padre taxista?',
    options: [
      'Número 39',
      'Número 8',
      'Número 24',
      'Número 10'
    ],
    correctAnswerIndex: 0,
    explanation: 'Bruno Guimarães juega de forma icónica con el número 39 en homenaje al taxi que conducía su padre (el coche 39) en Río de Janeiro.'
  },
  {
    id: 2,
    question: '¿Con qué club del fútbol brasileño dio un salto colosal a la fama conquistando la Copa Sudamericana 2018 y la Copa de Brasil 2019?',
    options: [
      'Flamengo',
      'Athletico Paranaense',
      'São Paulo FC',
      'Vasco da Gama'
    ],
    correctAnswerIndex: 1,
    explanation: 'Con el recordado Athletico Paranaense comandado por Tiago Nunes se coronó monarca continental en 2018 y campeón de copa en 2019.'
  },
  {
    id: 3,
    question: '¿En qué tradicional escuadra de la Ligue 1 francesa debutó Bruno Guimarães en el fútbol europeo de forma brillante?',
    options: [
      'Olympique de Marsella',
      'AS Mónaco',
      'Olympique de Lyon',
      'Lille OSC'
    ],
    correctAnswerIndex: 2,
    explanation: 'Bruno brilló de gran manera en el centro del campo del Lyon llegando a semifinales de la Champions League antes de su mudanza a Inglaterra.'
  },
  {
    id: 4,
    question: '¿Qué histórica medalla conquistó Bruno Guimarães con la Selección Brasileña Sub-23 siendo el motor absoluto del mediocampo?',
    options: [
      'Medalla de Plata en Londres 2012',
      'Medalla de Oro en Río 2016',
      'Medalla de Oro en Tokio 2020',
      'Bronce en Pekín 2008'
    ],
    correctAnswerIndex: 2,
    explanation: 'Fue campeón olímpico titular, aportando jerarquía, quite y pase gol en la exitosa campaña de la Canarinha para revalidar el Oro en Tokio 2020.'
  }
];

export const FABINHO_PERSONAL_DATA = {
  fullName: 'Fábio Henrique Tavares',
  nickname: 'El Pulpo de Al-Ittihad',
  position: 'Mediocampista Defensivo / Zaguero (Defensive Midfielder / Centerback)',
  birthDate: '23 de Octubre de 1993',
  age: 32,
  birthPlace: 'Campinas, São Paulo, Brasil',
  height: '1.88 m (6 pies 2 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Al-Ittihad Club (Saudi Pro League)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '15 (Selección) / 8 (Club)',
  debutYear: '2012 (Fluminense)',
  mainCharacteristic: 'Reconocido mundialmente por su sobrehumano alcance apodado "el pulpo". Su superlativo sentido para la intercepción, tenacidad en duelos aéreos e implacables barridas lo erigieron como pilar del Liverpool multicampeón.',
};

export const FABINHO_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 32,
  assists: 2,
  goals: 2,
  minutesPlayed: 2780
};

export const FABINHO_ATTRIBUTES = [
  { name: 'Anticipación', value: 93, color: 'bg-emerald-500' },
  { name: 'Barrida / Quite', value: 91, color: 'bg-blue-500' },
  { name: 'Lectura / Cobertura', value: 94, color: 'bg-teal-500' },
  { name: 'Juego Aéreo / Salto', value: 88, color: 'bg-indigo-500' },
  { name: 'Pase / Distribución', value: 85, color: 'bg-rose-500' },
  { name: 'Fuerza / Resistencia', value: 88, color: 'bg-violet-500' },
];

export const FABINHO_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Con qué club del fútbol europeo se coronó campeón de la UEFA Champions League 2019 siendo el indiscutible sostén de la volante?',
    options: [
      'AS Mónaco',
      'Liverpool FC',
      'Real Madrid',
      'FC Porto'
    ],
    correctAnswerIndex: 1,
    explanation: 'Bajo las órdenes de Jürgen Klopp en el Liverpool FC, Fabinho alcanzó un estatus de élite total y se adjudicó la Orejona derrotando al Tottenham en Madrid.'
  },
  {
    id: 2,
    question: 'En sus inicios en Europa, Fabinho fue fichado por un gigante español para su equipo filial, llegando a debutar en el primer equipo asistiendo a Di María. ¿Cuál fue?',
    options: [
      'FC Barcelona',
      'Atlético de Madrid',
      'Real Madrid',
      'Valencia CF'
    ],
    correctAnswerIndex: 2,
    explanation: 'Fabinho jugó en el Real Madrid Castilla en la 2012/13 cedido del Rio Ave, y llegó a jugar un partido oficial con el primer equipo merengue guiado por José Mourinho.'
  },
  {
    id: 3,
    question: '¿En qué equipo histórico de Francia maravilló al mundo ganando la Ligue 1 2017 junto a talentos como Mbappé y Bernardo Silva?',
    options: [
      'AS Mónaco',
      'París Saint-Germain',
      'Olympique de Lyon',
      'Lille OSC'
    ],
    correctAnswerIndex: 0,
    explanation: 'El AS Mónaco estructuró un equipo formidable en la temporada 2016/17 con Fabinho liderando alternando el lateral derecho y el eje del mediocampo.'
  },
  {
    id: 4,
    question: '¿Frente a qué equipo anotó Fabinho un icónico penal picándolo a lo "Panenka" en una tanda de penales definitiva para el Liverpool en Wembley?',
    options: [
      'Manchester City',
      'Chelsea FC',
      'Arsenal',
      'Manchester United'
    ],
    correctAnswerIndex: 1,
    explanation: 'Lo hizo friamente frente a Kepa en la tanda de penales de la final de la Carabao Cup de la temporada 2021/2022 dándole la copa a los Reds.'
  }
];

export const LUCAS_PAQUETA_PERSONAL_DATA = {
  fullName: 'Lucas Tolentino Coelho de Lima',
  nickname: 'El Mago de Paquetá',
  position: 'Mediocampista Ofensivo (Attacking Midfielder)',
  birthDate: '27 de Agosto de 1997',
  age: 28,
  birthPlace: 'Río de Janeiro, Rio de Janeiro, Brasil',
  height: '1.80 m (5 pies 11 pulgadas)',
  preferredFoot: 'Izquierda (Left-footed)',
  currentClub: 'West Ham United (Premier League)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '10 (Selección) / 10 (Club)',
  debutYear: '2016 (CR Flamengo)',
  mainCharacteristic: 'Mago absoluto del drible y la inventiva. Dotado de una excelsa zurda de pase fino, recursos artísticos infinitos (tacos, globos, rabonas) y un encomiable compromiso físico en el ida y vuelta que enciende a los "hammers".',
};

export const LUCAS_PAQUETA_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 33,
  assists: 9,
  goals: 6,
  minutesPlayed: 2790
};

export const LUCAS_PAQUETA_ATTRIBUTES = [
  { name: 'Regate / Magia', value: 93, color: 'bg-emerald-500' },
  { name: 'Visión / Asistencias', value: 91, color: 'bg-blue-500' },
  { name: 'Pase Creativo', value: 92, color: 'bg-teal-500' },
  { name: 'Disparo / Colocación', value: 86, color: 'bg-indigo-500' },
  { name: 'Rigor / Recuperación', value: 82, color: 'bg-rose-500' },
  { name: 'Resistencia', value: 88, color: 'bg-violet-500' },
];

export const LUCAS_PAQUETA_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Qué gran trofeo europeo levantó Lucas Paquetá en el año 2023 consagrándose como la súper figura del West Ham United?',
    options: [
      'UEFA Europa League',
      'Supercopa de Europa',
      'UEFA Conference League',
      'Copa Intertoto'
    ],
    correctAnswerIndex: 2,
    explanation: 'Paquetá guio magistralmente el triunfo del West Ham en la UEFA Conference League de 2023, asistiendo genialmente a Bowen para el agónico gol del campeonato.'
  },
  {
    id: 2,
    question: '¿De qué famosa cantera y tradicional equipo del fútbol brasileño surgió Lucas Paquetá, erigiéndose como ídolo juvenil?',
    options: [
      'CR Flamengo',
      'Fluminense FC',
      'Vasco da Gama',
      'Botafogo FR'
    ],
    correctAnswerIndex: 0,
    explanation: 'Surgido del Flamengo en Gávea, Paquetá brilló desde niño ganando el Campeonato Carioca antes de emprender su aventura europea.'
  },
  {
    id: 3,
    question: '¿En qué laureada institución del fútbol de la Serie A de Italia desembarcó Lucas Paquetá por primera vez procedente de Sudamérica en 2019?',
    options: [
      'Inter de Milán',
      'Juventus',
      'AC Milan',
      'AS Roma'
    ],
    correctAnswerIndex: 2,
    explanation: 'Su primer club europeo de renombre fue el AC Milan, que pagó una millonaria cifra para sumarlo a su histórico plantel tricolor.'
  },
  {
    id: 4,
    question: '¿Con qué Selección Nacional se coronó Campeón de América de mayores en 2019 siendo una de las gratas sorpresas alternativas del plantel?',
    options: [
      'Brasil Sub-20',
      'Brasil Olímpica',
      'Selección de Brasil',
      'Brasil Sub-23'
    ],
    correctAnswerIndex: 2,
    explanation: 'Formó parte del laureado combinado brasileño dirigido por Tite que levantó la prestigiosa Copa América de mayores en 2019 en el templo del Maracaná.'
  }
];

export const VINICIUS_JR_PERSONAL_DATA = {
  fullName: 'Vinícius José Paixão de Oliveira Júnior',
  nickname: 'Vini de Oro (Vini Jr.)',
  position: 'Delantero / Extremo Izquierdo (Forward / Left Winger)',
  birthDate: '12 de Julio de 2000',
  age: 25,
  birthPlace: 'São Gonçalo, Río de Janeiro, Brasil',
  height: '1.76 m (5 pies 9 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Real Madrid CF (LaLiga)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '7 (Club) / 7 (Selección)',
  debutYear: '2017 (CR Flamengo)',
  mainCharacteristic: 'Letal e imparable en el mano a mano, dotado de un regate eléctrico, aceleración explosiva inigualable y olfato de gol legendario para decidir Champions con el Real Madrid.',
};

export const VINICIUS_JR_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 35,
  assists: 11,
  goals: 24,
  minutesPlayed: 2980
};

export const VINICIUS_JR_ATTRIBUTES = [
  { name: 'Ritmo / Velocidad', value: 98, color: 'bg-emerald-500' },
  { name: 'Regate / Control', value: 96, color: 'bg-blue-500' },
  { name: 'Tiro / Definición', value: 91, color: 'bg-teal-500' },
  { name: 'Pases / Centros', value: 85, color: 'bg-indigo-500' },
  { name: 'Resistencia', value: 90, color: 'bg-rose-500' },
  { name: 'Agilidad', value: 97, color: 'bg-violet-500' },
];

export const VINICIUS_JR_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿A qué equipo le anotó Vinicius Jr su primer gol en una final de la UEFA Champions League, dándole la decimocuarta al Real Madrid?',
    options: ['Liverpool FC', 'Manchester City', 'Chelsea FC', 'Borussia Dortmund'],
    correctAnswerIndex: 0,
    explanation: 'Vinicius Jr anotó el único gol del partido contra el Liverpool FC en la histórica final de la Champions League 2022 en París.'
  },
  {
    id: 2,
    question: '¿Con qué club brasileño hizo Vinicius Jr su debut en el fútbol profesional antes de mudarse a Madrid?',
    options: ['Fluminense FC', 'CR Flamengo', 'Vasco da Gama', 'Botafogo FR'],
    correctAnswerIndex: 1,
    explanation: 'Se formó en las categorías inferiores del Flamengo, donde debutó en primera división a los 16 años antes de viajar al Real Madrid.'
  },
  {
    id: 3,
    question: '¿Qué número icónico heredó Vinicius Jr en el Real Madrid y en la Selección para la temporada 2023-24?',
    options: ['Número 11', 'Número 20', 'Número 10', 'Número 7'],
    correctAnswerIndex: 3,
    explanation: 'Heredó la legendaria camiseta número 7, portada anteriormente por astros inmortales como Raúl González y Cristiano Ronaldo.'
  },
  {
    id: 4,
    question: 'Además de sus hazañas goleadoras, ¿por qué causa social de renombre mundial destaca Vinicius Jr fuera del campo?',
    options: [
      'Su lucha global contra el racismo y la discriminación',
      'Su fundación de ayuda a la conservación del Amazonas',
      'Su escuela internacional de tenis de mesa',
      'Su programa de becas artísticas en Europa'
    ],
    correctAnswerIndex: 0,
    explanation: 'Vini Jr es un referente global y Embajador de Buena Voluntad de la UNESCO, reconocido por su valiente lucha contra el racismo en los estadios.'
  }
];

export const ENDRICK_PERSONAL_DATA = {
  fullName: 'Endrick Felipe Moreira de Sousa',
  nickname: 'El Prodigio de la Canarinha',
  position: 'Delantero Centro (Forward / Striker)',
  birthDate: '21 de Julio de 2006',
  age: 19,
  birthPlace: 'Brasilia, Distrito Federal, Brasil',
  height: '1.73 m (5 pies 8 pulgadas)',
  preferredFoot: 'Izquierda (Left-footed)',
  currentClub: 'Real Madrid CF (LaLiga)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '16 (Club) / 9 (Selección)',
  debutYear: '2022 (Palmeiras)',
  mainCharacteristic: 'Fuerza física devastadora a corta edad, explosividad letal, tiro zurdo potente al arco y una mentalidad ganadora innata que asombra al planeta fútbol.',
};

export const ENDRICK_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 28,
  assists: 3,
  goals: 12,
  minutesPlayed: 1420
};

export const ENDRICK_ATTRIBUTES = [
  { name: 'Aceleración / Potencia', value: 92, color: 'bg-emerald-500' },
  { name: 'Remate / Definición', value: 89, color: 'bg-blue-500' },
  { name: 'Fuerza Corporal', value: 88, color: 'bg-teal-500' },
  { name: 'Control de Balón', value: 87, color: 'bg-indigo-500' },
  { name: 'Regate en Corto', value: 86, color: 'bg-rose-500' },
  { name: 'Agrecividad / Presión', value: 85, color: 'bg-violet-500' },
];

export const ENDRICK_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿A qué legendaria edad hizo Endrick su debut profesional con el Palmeiras, convirtiéndose en el más joven de la historia de la escuadra?',
    options: ['15 años', '16 años', '17 años', '14 años'],
    correctAnswerIndex: 1,
    explanation: 'Hizo su debut absoluto en primera división nacional a la corta edad de 16 años, 2 meses y 15 días con el Palmeiras en 2022.'
  },
  {
    id: 2,
    question: 'En un partido amistoso en marzo de 2024 en Wembley, ¿contra qué selección marcó Endrick su primer gol internacional oficial con la absoluta brasileña?',
    options: ['Inglaterra', 'Francia', 'España', 'Argentina'],
    correctAnswerIndex: 0,
    explanation: 'Anotó su histórica primera diana internacional para sellar el 1-0 de Brasil sobre Inglaterra en el mítico estadio de Wembley a los 17 años.'
  },
  {
    id: 3,
    question: '¿Cuántos campeonatos del Brasileirão conquistó Endrick con Palmeiras antes de unirse al Real Madrid?',
    options: ['1 título', '2 títulos', '3 títulos', 'Ninguno'],
    correctAnswerIndex: 1,
    explanation: 'Ganó el Brasileirão de forma sucesiva en 2022 y 2023, siendo pieza clave para remontar el título del 2023 con goles fundamentales.'
  },
  {
    id: 4,
    question: '¿Qué dorsal asumió Endrick para su debut absoluto oficial con la camiseta del Real Madrid en la temporada 2024-25?',
    options: ['Número 9', 'Número 16', 'Número 19', 'Número 25'],
    correctAnswerIndex: 1,
    explanation: 'Endrick eligió inicialmente portar la camiseta número 16 en el Real Madrid, emulando sus primeros pasos triunfales en el Palmeiras.'
  }
];

export const RAPHINHA_PERSONAL_DATA = {
  fullName: 'Raphael Dias Belloli',
  nickname: 'El Eléctrico de Barcelona',
  position: 'Delantero / Extremo Derecho (Forward / Right Winger)',
  birthDate: '14 de Diciembre de 1996',
  age: 29,
  birthPlace: 'Porto Alegre, Brasil',
  height: '1.76 m (5 pies 9 pulgadas)',
  preferredFoot: 'Izquierda (Left-footed)',
  currentClub: 'FC Barcelona (LaLiga)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '11 (Club) / 11 (Selección)',
  debutYear: '2015 (Avaí FC)',
  mainCharacteristic: 'Impresionante intensidad física de ida y vuelta, pegada fabulosa a puerta, excelente visión para asistir y liderazgo competitivo en la delantera.',
};

export const RAPHINHA_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 36,
  assists: 14,
  goals: 18,
  minutesPlayed: 3120
};

export const RAPHINHA_ATTRIBUTES = [
  { name: 'Velocidad de Reacción', value: 92, color: 'bg-emerald-500' },
  { name: 'Centros / Pases', value: 91, color: 'bg-blue-500' },
  { name: 'Disparo / Tiro Libre', value: 89, color: 'bg-teal-500' },
  { name: 'Regate / Amague', value: 90, color: 'bg-indigo-500' },
  { name: 'Resistencia / Presión', value: 93, color: 'bg-rose-500' },
  { name: 'Creatividad / Visión', value: 90, color: 'bg-violet-500' },
];

export const RAPHINHA_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Bajo qué estratega de élite mundial brilló Raphinha en el Leeds United de la Premier League despertando el interés de los colosos de Europa?',
    options: ['Marcelo Bielsa', 'Pep Guardiola', 'Jürgen Klopp', 'José Mourinho'],
    correctAnswerIndex: 0,
    explanation: 'Fue bajo la tutela de Marcelo "El Loco" Bielsa donde Raphinha pulió su intensidad defensiva y libertad de ataque en la Premier League.'
  },
  {
    id: 2,
    question: '¿Frente a qué rival europeo cosechó Raphinha un glorioso hat-trick en la UEFA Champions League destacándose como el máximo referente culé del partido?',
    options: ['París Saint-Germain', 'Bayern de Múnich', 'Manchester City', 'Inter de Milán'],
    correctAnswerIndex: 1,
    explanation: 'Raphinha anotó un deslumbrante hat-trick en 2024 para liderar al FC Barcelona en una victoria contundente frente al Bayern de Múnich.'
  },
  {
    id: 3,
    question: '¿En qué liga de fútbol europea militó Raphinha con el Rennes antes de ser traspasado al fútbol inglés?',
    options: ['Ligue 1 (Francia)', 'Süper Lig (Turquía)', 'Seria A (Italia)', 'Primeira Liga (Portugal)'],
    correctAnswerIndex: 0,
    explanation: 'Raphinha brilló con el Stade Rennais en la máxima liga de Francia clasicándolos a competiciones europeas antes de partir a Elland Road.'
  },
  {
    id: 4,
    question: '¿Cuál es la ciudad natal de Raphinha en Brasil, donde jugaba partidos informales en canchas de tierra batida llamados "fútbol varzeano"?',
    options: ['Río de Janeiro', 'São Paulo', 'Porto Alegre', 'Salvador de Bahía'],
    correctAnswerIndex: 2,
    explanation: 'Raphinha nació en Porto Alegre, entablando desde muy niño una conocida amistad con Ronaldinho Gaúcho debido a la cercanía vecinal.'
  }
];

export const GABRIEL_MARTINELLI_PERSONAL_DATA = {
  fullName: 'Gabriel Teodoro Martinelli Silva',
  nickname: 'El Cohete de Guarulhos',
  position: 'Delantero / Extremo Izquierdo (Forward / Left Winger)',
  birthDate: '18 de Junio de 2001',
  age: 24,
  birthPlace: 'Guarulhos, São Paulo, Brasil',
  height: '1.78 m (5 pies 10 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Arsenal FC (Premier League)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '11 (Club) / 22 (Selección)',
  debutYear: '2018 (Ituano)',
  mainCharacteristic: 'Velocidad directa demoledora, verticalidad con transiciones explosivas, intensa marca defensiva al presionar la salida y magnífica agilidad para encarar al rival.',
};

export const GABRIEL_MARTINELLI_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 32,
  assists: 6,
  goals: 10,
  minutesPlayed: 2380
};

export const GABRIEL_MARTINELLI_ATTRIBUTES = [
  { name: 'Aceleración / Sprint', value: 95, color: 'bg-emerald-500' },
  { name: 'Regate en Carrera', value: 89, color: 'bg-blue-500' },
  { name: 'Tiro de Media Distancia', value: 84, color: 'bg-teal-500' },
  { name: 'Presión defensiva', value: 86, color: 'bg-indigo-500' },
  { name: 'Centros e Indirectos', value: 82, color: 'bg-rose-500' },
  { name: 'Resistencia constante', value: 91, color: 'bg-violet-500' },
];

export const GABRIEL_MARTINELLI_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿De qué modesto equipo paulista dio Martinelli el salto directo al Arsenal de Inglaterra sin jugar en un tradicional de Brasil?',
    options: ['Ituano FC', 'Ponte Preta', 'Guarani FC', 'Oeste FC'],
    correctAnswerIndex: 0,
    explanation: 'Martinelli brilló con Ituano en las categorías juveniles y el torneo paulista de mayores antes de llamar la atención de los cazatalentos ingleses.'
  },
  {
    id: 2,
    question: '¿Qué número histórico heredó Gabriel Martinelli en el Arsenal para la temporada 2022-2023 consolidándose como estrella habitual?',
    options: ['Número 14', 'Número 11', 'Número 7', 'Número 10'],
    correctAnswerIndex: 1,
    explanation: 'Recibió el clásico dorsal número 11, camiseta portée anteriormente por figuras históricas del ataque de los Gunners como Mesut Özil o Marc Overmars.'
  },
  {
    id: 3,
    question: '¿En qué club europeo realizó Martinelli una serie de pruebas de entrenamiento juvenil (tryouts) antes de su exitosa transferencia al norte de Londres?',
    options: ['FC Barcelona', 'Real Madrid Castilla', 'Manchester United', 'Benfica'],
    correctAnswerIndex: 2,
    explanation: 'Martinelli entrenó a prueba en múltiples oportunidades con el Manchester United en su etapa de formación en Ituano, aunque no firmó contrato definitivo.'
  },
  {
    id: 4,
    question: '¿Con qué Selección Nacional festejó Gabriel Martinelli la medalla de Oro de los Juegos Olímpicos de Tokio derrotando a España en la final?',
    options: ['Brasil Sub-20', 'Selección de Brasil Olímpica', 'Brasil Sub-17', 'La Selección Absoluta'],
    correctAnswerIndex: 1,
    explanation: 'Martinelli formó parte del glorioso combinado brasileño Sub-23 titular que revalidó el oro en el Estadio Internacional de Yokohama.'
  }
];

export const MATHEUS_CUNHA_PERSONAL_DATA = {
  fullName: 'Matheus Santos Carneiro da Cunha',
  nickname: 'El Guerrero de Molineux',
  position: 'Delantero / Mediapunta (Forward / Second Striker)',
  birthDate: '27 de Mayo de 1999',
  age: 27,
  birthPlace: 'João Pessoa, Paraíba, Brasil',
  height: '1.84 m (6 pies 0 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Wolverhampton Wanderers (Premier League)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '12 (Club) / 19 (Selección)',
  debutYear: '2017 (FC Sion)',
  mainCharacteristic: 'Gran movilidad por todo el frente de ataque, excelente control de balón para descargar, fortaleza en duelos físicos del mediocampo y compromiso letal de cara al arco rival.',
};

export const MATHEUS_CUNHA_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 33,
  assists: 7,
  goals: 13,
  minutesPlayed: 2680
};

export const MATHEUS_CUNHA_ATTRIBUTES = [
  { name: 'Potencia de Arranque', value: 86, color: 'bg-emerald-500' },
  { name: 'Control en Presión', value: 88, color: 'bg-blue-500' },
  { name: 'Disparo potente', value: 87, color: 'bg-teal-500' },
  { name: 'Asociación corta', value: 85, color: 'bg-indigo-500' },
  { name: 'Fuerza en Choque', value: 89, color: 'bg-rose-500' },
  { name: 'Resistencia de ida-vuelta', value: 90, color: 'bg-violet-500' },
];

export const MATHEUS_CUNHA_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Con qué club de la Bundesliga de Alemania nominaron a Matheus Cunha al prestigioso Premio Puskás en 2019 tras un gol de antología con ruleta marsellesa?',
    options: ['RB Leipzig', 'Hertha Berlín', 'Bayer Leverkusen', 'Eintracht Frankfurt'],
    correctAnswerIndex: 0,
    explanation: 'Anotó un gol deslumbrante regateando con ruleta y picando el balón sobre el portero del Bayer Leverkusen mientras defendía los colores del RB Leipzig.'
  },
  {
    id: 2,
    question: '¿En qué club de la liga española militó Matheus Cunha bajo las órdenes tácticas de Diego Simeone antes de marcharse a los Wolves de Inglaterra?',
    options: ['Sevilla FC', 'Atlético de Madrid', 'Real Sociedad', 'Valencia CF'],
    correctAnswerIndex: 1,
    explanation: 'Jugó en el Atlético de Madrid aportando dinamismo, despliegue físico y goles valiosos saliendo desde el banquillo de los colchoneros.'
  },
  {
    id: 3,
    question: '¿Cuál fue su histórico logro con la Selección Olímpica Brasileña en Tokio 2020 en la gran final frente a la selección de España?',
    options: [
      'Marcó el vital gol de la victoria en penales',
      'Anotó el primer tanto del partido para abrir la cuenta brasileña',
      'Fue el arquero de emergencia en los minutos finales',
      'Dio asistencia de taco en la prórroga'
    ],
    correctAnswerIndex: 1,
    explanation: 'Fue el gran abridor del marcador en la final olímpica que puso en ventaja a la Canarinha de cara a la Medalla de Oro final.'
  },
  {
    id: 4,
    question: '¿En qué país europeo inició Matheus Cunha su trayectoria profesional debutando en primera división tras marcharse temprano de Sudamérica?',
    options: ['Suiza (FC Sion)', 'Portugal (Estoril Prais)', 'Francia (Lille)', 'Rusia (Zenit)'],
    correctAnswerIndex: 0,
    explanation: 'Matheus Cunha cruzó el Atlántico a tierras suizas sumándose al prestigioso FC Sion, donde se convirtió rápidamente en goleador revelación.'
  }
];

export const IGOR_THIAGO_PERSONAL_DATA = {
  fullName: 'Igor Thiago Nascimento Rodrigues',
  nickname: 'El Búfalo de Tucuruí',
  position: 'Delantero Centro (Forward / Striker)',
  birthDate: '26 de Junio de 2001',
  age: 24,
  birthPlace: 'Tucuruí, Pará, Brasil',
  height: '1.88 m (6 pies 2 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'Brentford FC (Premier League)',
  nationalTeam: 'Selección de Brasil (Preseleccionado)',
  squadNumber: '9 (Club) / 20 (Selección)',
  debutYear: '2020 (Cruzeiro)',
  mainCharacteristic: 'Imponente centro delantero corpulento que destaca por su fortaleza en el pivoteo, juego aéreo demoledor en área chica, y letal potencia en el remate.',
};

export const IGOR_THIAGO_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 25,
  assists: 2,
  goals: 9,
  minutesPlayed: 1890
};

export const IGOR_THIAGO_ATTRIBUTES = [
  { name: 'Fuerza Física', value: 92, color: 'bg-emerald-500' },
  { name: 'Juego Aéreo / Salto', value: 91, color: 'bg-blue-500' },
  { name: 'Remate de área', value: 86, color: 'bg-teal-500' },
  { name: 'Pivoteo / Control', value: 84, color: 'bg-indigo-500' },
  { name: 'Potencia de Tiro', value: 88, color: 'bg-rose-500' },
  { name: 'Presión / Choque', value: 85, color: 'bg-violet-500' },
];

export const IGOR_THIAGO_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Con qué club del fútbol belga registró Igor Thiago una campaña espectacular con casi 30 goles en todas las competiciones para llamar la atención en la Premier League?',
    options: ['RSC Anderlecht', 'Brujas (Club Brugge)', 'KRC Genk', 'Royal Antwerp'],
    correctAnswerIndex: 1,
    explanation: 'Igor Thiago se convirtió en un héroe del gol absoluto para el Brujas en Bélgica, liderando una histórica campaña en liga y en Europa.'
  },
  {
    id: 2,
    question: '¿En qué club emblemático del fútbol búlgaro militó Igor Thiago para dar el salto del fútbol brasileño con muchísimos goles al Viejo Continente?',
    options: ['Ludogorets Razgrad', 'CSKA Sofía', 'Levski Sofía', 'Beroe Stara Zagora'],
    correctAnswerIndex: 0,
    explanation: 'Thiago formó parte de la ofensiva del Ludogorets Razgrad, sumando múltiples títulos de liga locales a su naciente palmarés.'
  },
  {
    id: 3,
    question: '¿De qué cantera del fútbol brasileño surgió Igor Thiago antes de ser transferido al fútbol europeo de primera velocidad?',
    options: ['Cruzeiro EC', 'Grêmio', 'Santos FC', 'Atlético Mineiro'],
    correctAnswerIndex: 0,
    explanation: 'Nació profesionalmente en Cruzeiro de Belo Horizonte, jugando un papel fundamental en la delantera de la Raposa antes de su viaje continental.'
  },
  {
    id: 4,
    question: '¿Por qué importante cantidad acumulada (rango estimado) de millones lo fichó el Brentford inglés como gran promesa ofensiva para el 2024-25?',
    options: ['Alrededor de 15 millones de euros', 'Cerca de 37 millones de euros', 'Unos 5 millones de euros', 'Libre de contrato'],
    correctAnswerIndex: 1,
    explanation: 'Fue adquirido en una cifra récord para el club belga estimada en cerca de 37 millones de euros de cara a liderar la medular ofensiva de las Abejas.'
  }
];

export const LUIZ_HENRIQUE_PERSONAL_DATA = {
  fullName: 'Luiz Henrique André Rosa da Silva',
  nickname: 'La Pantera Negra de Río de Janeiro',
  position: 'Delantero / Extremo Derecho (Forward / Right Winger)',
  birthDate: '2 de Enero de 2001',
  age: 25,
  birthPlace: 'Petrópolis, Río de Janeiro, Brasil',
  height: '1.82 m (6 pies 0 pulgadas)',
  preferredFoot: 'Izquierda (Left-footed)',
  currentClub: 'Botafogo de Futebol e Regatas',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '7 (Club) / 21 (Selección)',
  debutYear: '2020 (Fluminense)',
  mainCharacteristic: 'Imponente velocidad en zancada larga, dribbling audaz enganchando hacia la medular ofensiva, excelente despliegue de fuerza, y decisivo en encuentros de alta tensión.',
};

export const LUIZ_HENRIQUE_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 34,
  assists: 8,
  goals: 11,
  minutesPlayed: 2840
};

export const LUIZ_HENRIQUE_ATTRIBUTES = [
  { name: 'Velocidad de Desborde', value: 94, color: 'bg-emerald-500' },
  { name: 'Regate / Uno contra uno', value: 92, color: 'bg-blue-500' },
  { name: 'Potencia Física', value: 89, color: 'bg-teal-500' },
  { name: 'Efectividad de Tiro', value: 85, color: 'bg-indigo-500' },
  { name: 'Asistencia / Centros', value: 87, color: 'bg-rose-500' },
  { name: 'Resistencia / Sprint', value: 90, color: 'bg-violet-500' },
];

export const LUIZ_HENRIQUE_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: 'En España, Luiz Henrique maravilló en su primera etapa por su increíble gambeta en LaLiga. ¿En qué tradicional club andaluz jugó?',
    options: ['Real Betis Balompié', 'Sevilla FC', 'Málaga CF', 'Granada CF'],
    correctAnswerIndex: 0,
    explanation: 'Luiz Henrique deslumbró con los colores béticos en el Benito Villamarín siendo un dolor de cabeza para los laterales en España.'
  },
  {
    id: 2,
    question: '¿Con qué histórico clásico rival carioca de Botafogo se formó en categorías inferiores y debutó en la primera división brasileña?',
    options: ['Fluminense FC', 'Comunicación Botafogo', 'CR Flamengo', 'Vasco da Gama'],
    correctAnswerIndex: 0,
    explanation: 'Surgió de la cantera de Xerém del Fluminense antes de ser transferido a Europa y volver a Brasil por medio del Botafogo.'
  },
  {
    id: 3,
    question: '¿Contra cuál selección anotó Luiz Henrique un gol legendario de último minuto de fuera del área para darle el triunfo a Brasil en las Eliminatorias Sudamericanas de 2024?',
    options: ['Chile', 'Perú', 'Ecuador', 'Uruguay'],
    correctAnswerIndex: 0,
    explanation: 'Anotó un gol agónico y deslumbrante en Santiago que selló la victoria brasileña 2-1 sobre la fuerte selección de Chile.'
  },
  {
    id: 4,
    question: '¿Qué gran hito para el fútbol brasileño e internacional supuso su transferencia a Botafogo de parte de la corporación Eagle Football?',
    options: [
      'Fue la transferencia más cara de la historia del fútbol de Brasil',
      'El primer jugador con contrato simultáneo en la NBA',
      'Primer fichaje de un jugador en activo en Europa sin costo de tasa',
      'Fue canjeado por tres arqueros emblemáticos'
    ],
    correctAnswerIndex: 0,
    explanation: 'La compra de Luiz Henrique por parte de John Textor para Botafogo batió los récords históricos de desembolso monetario en Brasil.'
  }
];

export const RAYAN_PERSONAL_DATA = {
  fullName: 'Rayan Vitor Simplício Rocha',
  nickname: 'El Rayo de la Colina',
  position: 'Delantero / Extremo (Forward / Winger)',
  birthDate: '3 de Agosto de 2006',
  age: 19,
  birthPlace: 'Río de Janeiro, Río de Janeiro, Brasil',
  height: '1.85 m (6 pies 1 pulgada)',
  preferredFoot: 'Izquierda (Left-footed)',
  currentClub: 'CR Vasco da Gama',
  nationalTeam: 'Selección de Brasil Sub-17/Sub-20',
  squadNumber: '77 (Club) / 18 (Selección)',
  debutYear: '2023 (Vasco da Gama)',
  mainCharacteristic: 'Joven promesa de estupendo físico y envergadura, excelente regate diagonal, explosiva zurda letal en el enganche y gran personalidad sobre el césped.',
};

export const RAYAN_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 24,
  assists: 3,
  goals: 6,
  minutesPlayed: 1280
};

export const RAYAN_ATTRIBUTES = [
  { name: 'Sprint / Potencia', value: 89, color: 'bg-emerald-500' },
  { name: 'Regate / Desborde', value: 87, color: 'bg-blue-500' },
  { name: 'Disparo de media distancia', value: 84, color: 'bg-teal-500' },
  { name: 'Fuerza Corporal', value: 83, color: 'bg-indigo-500' },
  { name: 'Centros e Indirectos', value: 78, color: 'bg-rose-500' },
  { name: 'Margen de Crecimiento', value: 95, color: 'bg-violet-500' },
];

export const RAYAN_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Con qué club del fútbol carioca debutó profesionalmente Rayan, siendo una de las mayores joyas de sus últimos tiempos?',
    options: ['CR Vasco da Gama', 'Fluminense FC', 'Botafogo FR', 'CR Flamengo'],
    correctAnswerIndex: 0,
    explanation: 'Hizo su debut oficial definitivo con la camiseta del Vasco da Gama en el Campeonato Carioca, rompiendo récords de precocidad del club.'
  },
  {
    id: 2,
    question: 'Rayan es hijo de un futbolista brasileño profesional retirado apodado "Valkmar", ¿en qué equipo jugaba el progenitor?',
    options: ['Vasco da Gama', 'Flamengo', 'Palmeiras', 'Bangu'],
    correctAnswerIndex: 0,
    explanation: 'Su padre, el recio defensor Valkmar, jugó también profesionalmente para el propio Vasco da Gama a finales de los años 90.'
  },
  {
    id: 3,
    question: 'En el Sudamericano Sub-17 de 2023, Rayan brilló como una de las máximas figuras de Brasil, ¿cuántos goles anotó para el campeonato carioca juvenil?',
    options: ['5 goles', '2 goles', '8 goles', '1 gol'],
    correctAnswerIndex: 0,
    explanation: 'Anotó 5 goles fundamentales que sirvieron para que la Selección de Brasil Sub-17 alzara el título continental de forma gloriosa.'
  },
  {
    id: 4,
    question: '¿A qué edad anotó Rayan su primer gol profesional con la división de mayores del Vasco, superando hitos del club carioca?',
    options: ['16 años, 10 meses', '14 años y 3 meses', '17 años, 11 meses', '18 años recién cumplidos'],
    correctAnswerIndex: 0,
    explanation: 'Hizo su debut goleador mayoritaria a la corta edad de 16 años y 10 meses en junio del 2023 frente a Internacional.'
  }
];

export const EDERSON_FENER_PERSONAL_DATA = {
  fullName: 'Ederson Santana de Moraes',
  nickname: 'El Cerrojo de Mánchester',
  position: 'Portero (Goalkeeper)',
  birthDate: '17 de Agosto de 1993',
  age: 32,
  birthPlace: 'Osasco, São Paulo, Brasil',
  height: '1.88 m (6 pies 2 pulgadas)',
  preferredFoot: 'Izquierda (Left-footed)',
  currentClub: 'Manchester City F.C. (Premier League)',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '31 (Club) / 23 (Selección)',
  debutYear: '2011 (Ribeirão)',
  mainCharacteristic: 'Portero de época de estirpe legendaria. Histórico campeón con el Manchester City, pionero mundial en el juego con los pies, reflejos felinos formidables, valentía máxima en el mano a mano y un trazo largo preciso milimétrico.',
};

export const EDERSON_FENER_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 34,
  concededGoals: 26,
  cleanSheets: 14,
  saves: 98,
  penaltySaves: 2,
  assists: 1,
  goals: 0,
  minutesPlayed: 3060
};

export const EDERSON_FENER_ATTRIBUTES = [
  { name: 'Reflejos / Reacción', value: 91, color: 'bg-emerald-500' },
  { name: 'Estirada / Vuelo', value: 89, color: 'bg-blue-500' },
  { name: 'Juego de Pies', value: 96, color: 'bg-teal-500' },
  { name: 'Saque de Meta / Largo', value: 95, color: 'bg-indigo-500' },
  { name: 'Posicionamiento', value: 88, color: 'bg-rose-500' },
  { name: 'Uno contra Uno', value: 90, color: 'bg-violet-500' },
];

export const EDERSON_FENER_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Con qué club inglés logró Ederson consagrar su carrera ganando la UEFA Champions League completando un triplete histórico bajo Pep Guardiola en 2023?',
    options: ['Chelsea F.C.', 'Manchester City F.C.', 'Liverpool F.C.', 'Manchester United'],
    correctAnswerIndex: 1,
    explanation: 'Ederson fue el guardián indiscutible del Manchester City en la histórica temporada del Triplete (Champions League, Premier League y FA Cup) en 2022/2023.'
  },
  {
    id: 2,
    question: 'Antes de ser fichado por el Manchester City de la Premier League en 2017, ¿en qué grande de Portugal brilló Ederson ganando títulos nacionales?',
    options: ['Sporting CP', 'FC Porto', 'SL Benfica', 'SC Braga'],
    correctAnswerIndex: 2,
    explanation: 'Con las Águilas del Benfica de Portugal se consolidó firmemente como uno de los porteros con mayor proyección en toda Europa.'
  },
  {
    id: 3,
    question: '¿Cuál es la habilidad técnica mundialmente famosa de Ederson Moraes que cambió la perspectiva táctica del portero moderno?',
    options: ['Velocidad pura de delantero', 'Lanzamiento de penaltis estilo Panenka', 'Su extraordinario rango de pase y golpeo de balón a larga distancia con el pie', 'Fintas con doble pedal'],
    correctAnswerIndex: 2,
    explanation: 'Posee un golpeo soberbio con la pierna izquierda que le permite asistir directamente con trazos milimétricos de más de 70 metros.'
  },
  {
    id: 4,
    question: '¿En qué torneo oficial internacional con la selección mayor de Brasil formó parte del plantel campeón del continente del año 2019 de la mano de Tite?',
    options: ['Copa América 2019', 'Mundial de Qatar 2022', 'Juegos Olímpicos', 'Eliminatorias de Conmebol'],
    correctAnswerIndex: 0,
    explanation: 'Integró el plantel absoluto oficial de Brasil coronado Campeón de América en la emblemática edición de la Copa América de 2019.'
  }
];

export const WEVERTON_PERSONAL_DATA = {
  fullName: 'Weverton Pereira da Silva',
  nickname: 'La Muralla de Acre',
  position: 'Portero (Goalkeeper)',
  birthDate: '13 de Diciembre de 1987',
  age: 38,
  birthPlace: 'Rio Branco, Acre, Brasil',
  height: '1.89 m (6 pies 2 pulgadas)',
  preferredFoot: 'Derecha (Right-footed)',
  currentClub: 'SE Palmeiras',
  nationalTeam: 'Selección de Brasil (Penta)',
  squadNumber: '21 (Club) / 12 (Selección)',
  debutYear: '2006 (Corinthians)',
  mainCharacteristic: 'Histórico arquero bicampeón de América con Palmeiras y oro olímpico. Reflejos asombrosos sobre la línea de meta, sobriedad en el mano a mano y gran juego con los pies.',
};

export const WEVERTON_STATS_25_26: PlayerStats = {
  season: '2025/2026',
  matchesPlayed: 35,
  concededGoals: 24,
  cleanSheets: 16,
  saves: 112,
  penaltySaves: 3,
  assists: 1,
  goals: 0,
  minutesPlayed: 3150
};

export const WEVERTON_ATTRIBUTES = [
  { name: 'Reflejos / Reacción', value: 92, color: 'bg-emerald-500' },
  { name: 'Estirada / Vuelo', value: 90, color: 'bg-blue-500' },
  { name: 'Efectividad en Mano', value: 89, color: 'bg-teal-500' },
  { name: 'Juego de Pies', value: 86, color: 'bg-indigo-500' },
  { name: 'Posicionamiento', value: 91, color: 'bg-rose-500' },
  { name: 'Liderazgo en Arco', value: 94, color: 'bg-violet-500' },
];

export const WEVERTON_TRIVIA_QUESTIONS: TriviaQuestion[] = [
  {
    id: 1,
    question: '¿Qué medalla de hito supremo logró Weverton con la Selección Brasileña en Río 2016 siendo el héroe de la tanda de penaltis frente a Alemania?',
    options: ['Medalla de Plata', 'Medalla de Oro', 'Medalla de Bronce', 'Ninguna'],
    correctAnswerIndex: 1,
    explanation: 'Weverton detuvo el histórico penal final de Nils Petersen para colgarle a la Canarinha el ansiado primer Oro Olímpico de su historia.'
  },
  {
    id: 2,
    question: '¿Cuántas Copas Conmebol Libertadores ha levantado de forma excelsa Weverton defendiendo la meta defensiva del Palmeiras de Abel Ferreira?',
    options: ['1 Libertadores', '2 Libertadores', '3 Libertadores', 'Ninguna'],
    correctAnswerIndex: 1,
    explanation: 'Ganó de forma gloriosa las ediciones seguidas de la Copa Libertadores del año 2020 y 2021 defendiendo el marco albiverde.'
  },
  {
    id: 3,
    question: '¿En qué club tradicional del sur de Brasil brilló Weverton inicialmente jugando más de 300 partidos oficiales antes de ir a Palmeiras?',
    options: ['Athletico Paranaense', 'Grêmio', 'Internacional', 'Coritiba FC'],
    correctAnswerIndex: 0,
    explanation: 'Militó con enorme éxito defendiendo al Furacão del Athletico Paranaense, conquistando el campeonato regional del año 2016.'
  },
  {
    id: 4,
    question: '¿En qué certamen de Copa del Mundo hizo Weverton su debut vistiendo oficialmente la indumentaria de juegos?',
    options: ['Copa del Mundo Rusia 2018', 'Copa del Mundo Qatar 2022', 'Copa del Mundo Brasil 2014', 'Nunca jugó en mundiales'],
    correctAnswerIndex: 1,
    explanation: 'Ingresó de cambio en el partido de Qatar 2022 frente a Corea del Sur en octavos de final, convirtiendo a Brasil en el primer equipo en la historia en rotar todos sus 26 futbolistas convocados en un Mundial.'
  }
];

export const PLAYERS: Player[] = [
  {
    id: 'alisson',
    name: 'Alisson Becker',
    fullName: ALISSON_PERSONAL_DATA.fullName,
    nickname: ALISSON_PERSONAL_DATA.nickname,
    position: ALISSON_PERSONAL_DATA.position,
    birthDate: ALISSON_PERSONAL_DATA.birthDate,
    age: ALISSON_PERSONAL_DATA.age,
    birthPlace: ALISSON_PERSONAL_DATA.birthPlace,
    height: ALISSON_PERSONAL_DATA.height,
    preferredFoot: ALISSON_PERSONAL_DATA.preferredFoot,
    currentClub: ALISSON_PERSONAL_DATA.currentClub,
    nationalTeam: ALISSON_PERSONAL_DATA.nationalTeam,
    squadNumber: ALISSON_PERSONAL_DATA.squadNumber,
    debutYear: ALISSON_PERSONAL_DATA.debutYear,
    mainCharacteristic: ALISSON_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/alisson_sticker_1779282986985.png',
    albumCode: 'BRS 1',
    stats: ALISSON_STATS_25_26,
    attributes: ALISSON_ATTRIBUTES,
    trivia: TRIVIA_QUESTIONS
  },
  {
    id: 'neymar',
    name: 'Neymar Jr',
    fullName: NEYMAR_PERSONAL_DATA.fullName,
    nickname: NEYMAR_PERSONAL_DATA.nickname,
    position: NEYMAR_PERSONAL_DATA.position,
    birthDate: NEYMAR_PERSONAL_DATA.birthDate,
    age: NEYMAR_PERSONAL_DATA.age,
    birthPlace: NEYMAR_PERSONAL_DATA.birthPlace,
    height: NEYMAR_PERSONAL_DATA.height,
    preferredFoot: NEYMAR_PERSONAL_DATA.preferredFoot,
    currentClub: NEYMAR_PERSONAL_DATA.currentClub,
    nationalTeam: NEYMAR_PERSONAL_DATA.nationalTeam,
    squadNumber: NEYMAR_PERSONAL_DATA.squadNumber,
    debutYear: NEYMAR_PERSONAL_DATA.debutYear,
    mainCharacteristic: NEYMAR_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/neymar_new_sticker_1779293133178.png',
    albumCode: 'BRS 10',
    stats: NEYMAR_STATS_25_26,
    attributes: NEYMAR_ATTRIBUTES,
    trivia: NEYMAR_TRIVIA_QUESTIONS
  },
  {
    id: 'marquinhos',
    name: 'Marquinhos',
    fullName: MARQUINHOS_PERSONAL_DATA.fullName,
    nickname: MARQUINHOS_PERSONAL_DATA.nickname,
    position: MARQUINHOS_PERSONAL_DATA.position,
    birthDate: MARQUINHOS_PERSONAL_DATA.birthDate,
    age: MARQUINHOS_PERSONAL_DATA.age,
    birthPlace: MARQUINHOS_PERSONAL_DATA.birthPlace,
    height: MARQUINHOS_PERSONAL_DATA.height,
    preferredFoot: MARQUINHOS_PERSONAL_DATA.preferredFoot,
    currentClub: MARQUINHOS_PERSONAL_DATA.currentClub,
    nationalTeam: MARQUINHOS_PERSONAL_DATA.nationalTeam,
    squadNumber: MARQUINHOS_PERSONAL_DATA.squadNumber,
    debutYear: MARQUINHOS_PERSONAL_DATA.debutYear,
    mainCharacteristic: MARQUINHOS_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/marquinhos_star_sticker_1779410435861.png',
    albumCode: 'BRS 4',
    stats: MARQUINHOS_STATS_25_26,
    attributes: MARQUINHOS_ATTRIBUTES,
    trivia: MARQUINHOS_TRIVIA_QUESTIONS
  },
  {
    id: 'gabriel',
    name: 'Gabriel M.',
    fullName: GABRIEL_PERSONAL_DATA.fullName,
    nickname: GABRIEL_PERSONAL_DATA.nickname,
    position: GABRIEL_PERSONAL_DATA.position,
    birthDate: GABRIEL_PERSONAL_DATA.birthDate,
    age: GABRIEL_PERSONAL_DATA.age,
    birthPlace: GABRIEL_PERSONAL_DATA.birthPlace,
    height: GABRIEL_PERSONAL_DATA.height,
    preferredFoot: GABRIEL_PERSONAL_DATA.preferredFoot,
    currentClub: GABRIEL_PERSONAL_DATA.currentClub,
    nationalTeam: GABRIEL_PERSONAL_DATA.nationalTeam,
    squadNumber: GABRIEL_PERSONAL_DATA.squadNumber,
    debutYear: GABRIEL_PERSONAL_DATA.debutYear,
    mainCharacteristic: GABRIEL_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/gabriel_sticker_1779286341346.png',
    albumCode: 'BRS 6',
    stats: GABRIEL_STATS_25_26,
    attributes: GABRIEL_ATTRIBUTES,
    trivia: GABRIEL_TRIVIA_QUESTIONS
  },
  {
    id: 'danilo',
    name: 'Danilo',
    fullName: DANILO_PERSONAL_DATA.fullName,
    nickname: DANILO_PERSONAL_DATA.nickname,
    position: DANILO_PERSONAL_DATA.position,
    birthDate: DANILO_PERSONAL_DATA.birthDate,
    age: DANILO_PERSONAL_DATA.age,
    birthPlace: DANILO_PERSONAL_DATA.birthPlace,
    height: DANILO_PERSONAL_DATA.height,
    preferredFoot: DANILO_PERSONAL_DATA.preferredFoot,
    currentClub: DANILO_PERSONAL_DATA.currentClub,
    nationalTeam: DANILO_PERSONAL_DATA.nationalTeam,
    squadNumber: DANILO_PERSONAL_DATA.squadNumber,
    debutYear: DANILO_PERSONAL_DATA.debutYear,
    mainCharacteristic: DANILO_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/danilo_sticker_1779286530374.png',
    albumCode: 'BRS 2',
    stats: DANILO_STATS_25_26,
    attributes: DANILO_ATTRIBUTES,
    trivia: DANILO_TRIVIA_QUESTIONS
  },
  {
    id: 'alexsandro',
    name: 'Alex Sandro',
    fullName: ALEX_SANDRO_PERSONAL_DATA.fullName,
    nickname: ALEX_SANDRO_PERSONAL_DATA.nickname,
    position: ALEX_SANDRO_PERSONAL_DATA.position,
    birthDate: ALEX_SANDRO_PERSONAL_DATA.birthDate,
    age: ALEX_SANDRO_PERSONAL_DATA.age,
    birthPlace: ALEX_SANDRO_PERSONAL_DATA.birthPlace,
    height: ALEX_SANDRO_PERSONAL_DATA.height,
    preferredFoot: ALEX_SANDRO_PERSONAL_DATA.preferredFoot,
    currentClub: ALEX_SANDRO_PERSONAL_DATA.currentClub,
    nationalTeam: ALEX_SANDRO_PERSONAL_DATA.nationalTeam,
    squadNumber: ALEX_SANDRO_PERSONAL_DATA.squadNumber,
    debutYear: ALEX_SANDRO_PERSONAL_DATA.debutYear,
    mainCharacteristic: ALEX_SANDRO_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/alex_sandro_sticker_1779286855854.png',
    albumCode: 'BRS 3',
    stats: ALEX_SANDRO_STATS_25_26,
    attributes: ALEX_SANDRO_ATTRIBUTES,
    trivia: ALEX_SANDRO_TRIVIA_QUESTIONS
  },
  {
    id: 'leopereira',
    name: 'Léo Pereira',
    fullName: LEO_PEREIRA_PERSONAL_DATA.fullName,
    nickname: LEO_PEREIRA_PERSONAL_DATA.nickname,
    position: LEO_PEREIRA_PERSONAL_DATA.position,
    birthDate: LEO_PEREIRA_PERSONAL_DATA.birthDate,
    age: LEO_PEREIRA_PERSONAL_DATA.age,
    birthPlace: LEO_PEREIRA_PERSONAL_DATA.birthPlace,
    height: LEO_PEREIRA_PERSONAL_DATA.height,
    preferredFoot: LEO_PEREIRA_PERSONAL_DATA.preferredFoot,
    currentClub: LEO_PEREIRA_PERSONAL_DATA.currentClub,
    nationalTeam: LEO_PEREIRA_PERSONAL_DATA.nationalTeam,
    squadNumber: LEO_PEREIRA_PERSONAL_DATA.squadNumber,
    debutYear: LEO_PEREIRA_PERSONAL_DATA.debutYear,
    mainCharacteristic: LEO_PEREIRA_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/leo_pereira_sticker_1779287119304.png',
    albumCode: 'BRS 4',
    stats: LEO_PEREIRA_STATS_25_26,
    attributes: LEO_PEREIRA_ATTRIBUTES,
    trivia: LEO_PEREIRA_TRIVIA_QUESTIONS
  },
  {
    id: 'bremer',
    name: 'Bremer',
    fullName: BREMER_PERSONAL_DATA.fullName,
    nickname: BREMER_PERSONAL_DATA.nickname,
    position: BREMER_PERSONAL_DATA.position,
    birthDate: BREMER_PERSONAL_DATA.birthDate,
    age: BREMER_PERSONAL_DATA.age,
    birthPlace: BREMER_PERSONAL_DATA.birthPlace,
    height: BREMER_PERSONAL_DATA.height,
    preferredFoot: BREMER_PERSONAL_DATA.preferredFoot,
    currentClub: BREMER_PERSONAL_DATA.currentClub,
    nationalTeam: BREMER_PERSONAL_DATA.nationalTeam,
    squadNumber: BREMER_PERSONAL_DATA.squadNumber,
    debutYear: BREMER_PERSONAL_DATA.debutYear,
    mainCharacteristic: BREMER_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/bremer_sticker_1779287290166.png',
    albumCode: 'BRS 5',
    stats: BREMER_STATS_25_26,
    attributes: BREMER_ATTRIBUTES,
    trivia: BREMER_TRIVIA_QUESTIONS
  },
  {
    id: 'douglassantos',
    name: 'Douglas Santos',
    fullName: DOUGLAS_SANTOS_PERSONAL_DATA.fullName,
    nickname: DOUGLAS_SANTOS_PERSONAL_DATA.nickname,
    position: DOUGLAS_SANTOS_PERSONAL_DATA.position,
    birthDate: DOUGLAS_SANTOS_PERSONAL_DATA.birthDate,
    age: DOUGLAS_SANTOS_PERSONAL_DATA.age,
    birthPlace: DOUGLAS_SANTOS_PERSONAL_DATA.birthPlace,
    height: DOUGLAS_SANTOS_PERSONAL_DATA.height,
    preferredFoot: DOUGLAS_SANTOS_PERSONAL_DATA.preferredFoot,
    currentClub: DOUGLAS_SANTOS_PERSONAL_DATA.currentClub,
    nationalTeam: DOUGLAS_SANTOS_PERSONAL_DATA.nationalTeam,
    squadNumber: DOUGLAS_SANTOS_PERSONAL_DATA.squadNumber,
    debutYear: DOUGLAS_SANTOS_PERSONAL_DATA.debutYear,
    mainCharacteristic: DOUGLAS_SANTOS_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/douglas_santos_sticker_1779287549996.png',
    albumCode: 'BRS 6',
    stats: DOUGLAS_SANTOS_STATS_25_26,
    attributes: DOUGLAS_SANTOS_ATTRIBUTES,
    trivia: DOUGLAS_SANTOS_TRIVIA_QUESTIONS
  },
  {
    id: 'ibanez',
    name: 'Ibañez',
    fullName: IBANEZ_PERSONAL_DATA.fullName,
    nickname: IBANEZ_PERSONAL_DATA.nickname,
    position: IBANEZ_PERSONAL_DATA.position,
    birthDate: IBANEZ_PERSONAL_DATA.birthDate,
    age: IBANEZ_PERSONAL_DATA.age,
    birthPlace: IBANEZ_PERSONAL_DATA.birthPlace,
    height: IBANEZ_PERSONAL_DATA.height,
    preferredFoot: IBANEZ_PERSONAL_DATA.preferredFoot,
    currentClub: IBANEZ_PERSONAL_DATA.currentClub,
    nationalTeam: IBANEZ_PERSONAL_DATA.nationalTeam,
    squadNumber: IBANEZ_PERSONAL_DATA.squadNumber,
    debutYear: IBANEZ_PERSONAL_DATA.debutYear,
    mainCharacteristic: IBANEZ_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/roger_ibanez_headshot_1779412955948.png',
    albumCode: 'BRS 7',
    stats: IBANEZ_STATS_25_26,
    attributes: IBANEZ_ATTRIBUTES,
    trivia: IBANEZ_TRIVIA_QUESTIONS
  },
  {
    id: 'wesley',
    name: 'Wesley',
    fullName: WESLEY_PERSONAL_DATA.fullName,
    nickname: WESLEY_PERSONAL_DATA.nickname,
    position: WESLEY_PERSONAL_DATA.position,
    birthDate: WESLEY_PERSONAL_DATA.birthDate,
    age: WESLEY_PERSONAL_DATA.age,
    birthPlace: WESLEY_PERSONAL_DATA.birthPlace,
    height: WESLEY_PERSONAL_DATA.height,
    preferredFoot: WESLEY_PERSONAL_DATA.preferredFoot,
    currentClub: WESLEY_PERSONAL_DATA.currentClub,
    nationalTeam: WESLEY_PERSONAL_DATA.nationalTeam,
    squadNumber: WESLEY_PERSONAL_DATA.squadNumber,
    debutYear: WESLEY_PERSONAL_DATA.debutYear,
    mainCharacteristic: WESLEY_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/wesley_new_look_sticker_1779457543781.png',
    albumCode: 'BRS 8',
    stats: WESLEY_STATS_25_26,
    attributes: WESLEY_ATTRIBUTES,
    trivia: WESLEY_TRIVIA_QUESTIONS
  },
  {
    id: 'danilobotafogo',
    name: 'Danilo Barbosa',
    fullName: DANILO_BOTAFOGO_PERSONAL_DATA.fullName,
    nickname: DANILO_BOTAFOGO_PERSONAL_DATA.nickname,
    position: DANILO_BOTAFOGO_PERSONAL_DATA.position,
    birthDate: DANILO_BOTAFOGO_PERSONAL_DATA.birthDate,
    age: DANILO_BOTAFOGO_PERSONAL_DATA.age,
    birthPlace: DANILO_BOTAFOGO_PERSONAL_DATA.birthPlace,
    height: DANILO_BOTAFOGO_PERSONAL_DATA.height,
    preferredFoot: DANILO_BOTAFOGO_PERSONAL_DATA.preferredFoot,
    currentClub: DANILO_BOTAFOGO_PERSONAL_DATA.currentClub,
    nationalTeam: DANILO_BOTAFOGO_PERSONAL_DATA.nationalTeam,
    squadNumber: DANILO_BOTAFOGO_PERSONAL_DATA.squadNumber,
    debutYear: DANILO_BOTAFOGO_PERSONAL_DATA.debutYear,
    mainCharacteristic: DANILO_BOTAFOGO_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/danilo_botafogo_sticker_1779288365905.png',
    albumCode: 'BRS 9',
    stats: DANILO_BOTAFOGO_STATS_25_26,
    attributes: DANILO_BOTAFOGO_ATTRIBUTES,
    trivia: DANILO_BOTAFOGO_TRIVIA_QUESTIONS
  },
  {
    id: 'casemiro',
    name: 'Casemiro',
    fullName: CASEMIRO_PERSONAL_DATA.fullName,
    nickname: CASEMIRO_PERSONAL_DATA.nickname,
    position: CASEMIRO_PERSONAL_DATA.position,
    birthDate: CASEMIRO_PERSONAL_DATA.birthDate,
    age: CASEMIRO_PERSONAL_DATA.age,
    birthPlace: CASEMIRO_PERSONAL_DATA.birthPlace,
    height: CASEMIRO_PERSONAL_DATA.height,
    preferredFoot: CASEMIRO_PERSONAL_DATA.preferredFoot,
    currentClub: CASEMIRO_PERSONAL_DATA.currentClub,
    nationalTeam: CASEMIRO_PERSONAL_DATA.nationalTeam,
    squadNumber: CASEMIRO_PERSONAL_DATA.squadNumber,
    debutYear: CASEMIRO_PERSONAL_DATA.debutYear,
    mainCharacteristic: CASEMIRO_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/casemiro_sticker_1779288382662.png',
    albumCode: 'BRS 10',
    stats: CASEMIRO_STATS_25_26,
    attributes: CASEMIRO_ATTRIBUTES,
    trivia: CASEMIRO_TRIVIA_QUESTIONS
  },
  {
    id: 'brunoguimaraes',
    name: 'Bruno Guimarães',
    fullName: BRUNO_GUIMARAES_PERSONAL_DATA.fullName,
    nickname: BRUNO_GUIMARAES_PERSONAL_DATA.nickname,
    position: BRUNO_GUIMARAES_PERSONAL_DATA.position,
    birthDate: BRUNO_GUIMARAES_PERSONAL_DATA.birthDate,
    age: BRUNO_GUIMARAES_PERSONAL_DATA.age,
    birthPlace: BRUNO_GUIMARAES_PERSONAL_DATA.birthPlace,
    height: BRUNO_GUIMARAES_PERSONAL_DATA.height,
    preferredFoot: BRUNO_GUIMARAES_PERSONAL_DATA.preferredFoot,
    currentClub: BRUNO_GUIMARAES_PERSONAL_DATA.currentClub,
    nationalTeam: BRUNO_GUIMARAES_PERSONAL_DATA.nationalTeam,
    squadNumber: BRUNO_GUIMARAES_PERSONAL_DATA.squadNumber,
    debutYear: BRUNO_GUIMARAES_PERSONAL_DATA.debutYear,
    mainCharacteristic: BRUNO_GUIMARAES_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/bruno_guimaraes_sticker_1779288396597.png',
    albumCode: 'BRS 11',
    stats: BRUNO_GUIMARAES_STATS_25_26,
    attributes: BRUNO_GUIMARAES_ATTRIBUTES,
    trivia: BRUNO_GUIMARAES_TRIVIA_QUESTIONS
  },
  {
    id: 'fabinho',
    name: 'Fabinho',
    fullName: FABINHO_PERSONAL_DATA.fullName,
    nickname: FABINHO_PERSONAL_DATA.nickname,
    position: FABINHO_PERSONAL_DATA.position,
    birthDate: FABINHO_PERSONAL_DATA.birthDate,
    age: FABINHO_PERSONAL_DATA.age,
    birthPlace: FABINHO_PERSONAL_DATA.birthPlace,
    height: FABINHO_PERSONAL_DATA.height,
    preferredFoot: FABINHO_PERSONAL_DATA.preferredFoot,
    currentClub: FABINHO_PERSONAL_DATA.currentClub,
    nationalTeam: FABINHO_PERSONAL_DATA.nationalTeam,
    squadNumber: FABINHO_PERSONAL_DATA.squadNumber,
    debutYear: FABINHO_PERSONAL_DATA.debutYear,
    mainCharacteristic: FABINHO_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/fabinho_sticker_1779288412032.png',
    albumCode: 'BRS 12',
    stats: FABINHO_STATS_25_26,
    attributes: FABINHO_ATTRIBUTES,
    trivia: FABINHO_TRIVIA_QUESTIONS
  },
  {
    id: 'lucaspaqueta',
    name: 'Lucas Paquetá',
    fullName: LUCAS_PAQUETA_PERSONAL_DATA.fullName,
    nickname: LUCAS_PAQUETA_PERSONAL_DATA.nickname,
    position: LUCAS_PAQUETA_PERSONAL_DATA.position,
    birthDate: LUCAS_PAQUETA_PERSONAL_DATA.birthDate,
    age: LUCAS_PAQUETA_PERSONAL_DATA.age,
    birthPlace: LUCAS_PAQUETA_PERSONAL_DATA.birthPlace,
    height: LUCAS_PAQUETA_PERSONAL_DATA.height,
    preferredFoot: LUCAS_PAQUETA_PERSONAL_DATA.preferredFoot,
    currentClub: LUCAS_PAQUETA_PERSONAL_DATA.currentClub,
    nationalTeam: LUCAS_PAQUETA_PERSONAL_DATA.nationalTeam,
    squadNumber: LUCAS_PAQUETA_PERSONAL_DATA.squadNumber,
    debutYear: LUCAS_PAQUETA_PERSONAL_DATA.debutYear,
    mainCharacteristic: LUCAS_PAQUETA_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/lucas_paqueta_sticker_1779288426250.png',
    albumCode: 'BRS 13',
    stats: LUCAS_PAQUETA_STATS_25_26,
    attributes: LUCAS_PAQUETA_ATTRIBUTES,
    trivia: LUCAS_PAQUETA_TRIVIA_QUESTIONS
  },
  {
    id: 'viniciusjr',
    name: 'Vini Jr.',
    fullName: VINICIUS_JR_PERSONAL_DATA.fullName,
    nickname: VINICIUS_JR_PERSONAL_DATA.nickname,
    position: VINICIUS_JR_PERSONAL_DATA.position,
    birthDate: VINICIUS_JR_PERSONAL_DATA.birthDate,
    age: VINICIUS_JR_PERSONAL_DATA.age,
    birthPlace: VINICIUS_JR_PERSONAL_DATA.birthPlace,
    height: VINICIUS_JR_PERSONAL_DATA.height,
    preferredFoot: VINICIUS_JR_PERSONAL_DATA.preferredFoot,
    currentClub: VINICIUS_JR_PERSONAL_DATA.currentClub,
    nationalTeam: VINICIUS_JR_PERSONAL_DATA.nationalTeam,
    squadNumber: VINICIUS_JR_PERSONAL_DATA.squadNumber,
    debutYear: VINICIUS_JR_PERSONAL_DATA.debutYear,
    mainCharacteristic: VINICIUS_JR_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/vinicius_jr_sticker_1779288994051.png',
    albumCode: 'BRS 14',
    stats: VINICIUS_JR_STATS_25_26,
    attributes: VINICIUS_JR_ATTRIBUTES,
    trivia: VINICIUS_JR_TRIVIA_QUESTIONS
  },
  {
    id: 'endrick',
    name: 'Endrick',
    fullName: ENDRICK_PERSONAL_DATA.fullName,
    nickname: ENDRICK_PERSONAL_DATA.nickname,
    position: ENDRICK_PERSONAL_DATA.position,
    birthDate: ENDRICK_PERSONAL_DATA.birthDate,
    age: ENDRICK_PERSONAL_DATA.age,
    birthPlace: ENDRICK_PERSONAL_DATA.birthPlace,
    height: ENDRICK_PERSONAL_DATA.height,
    preferredFoot: ENDRICK_PERSONAL_DATA.preferredFoot,
    currentClub: ENDRICK_PERSONAL_DATA.currentClub,
    nationalTeam: ENDRICK_PERSONAL_DATA.nationalTeam,
    squadNumber: ENDRICK_PERSONAL_DATA.squadNumber,
    debutYear: ENDRICK_PERSONAL_DATA.debutYear,
    mainCharacteristic: ENDRICK_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/endrick_sticker_1779289168894.png',
    albumCode: 'BRS 15',
    stats: ENDRICK_STATS_25_26,
    attributes: ENDRICK_ATTRIBUTES,
    trivia: ENDRICK_TRIVIA_QUESTIONS
  },
  {
    id: 'raphinha',
    name: 'Raphinha',
    fullName: RAPHINHA_PERSONAL_DATA.fullName,
    nickname: RAPHINHA_PERSONAL_DATA.nickname,
    position: RAPHINHA_PERSONAL_DATA.position,
    birthDate: RAPHINHA_PERSONAL_DATA.birthDate,
    age: RAPHINHA_PERSONAL_DATA.age,
    birthPlace: RAPHINHA_PERSONAL_DATA.birthPlace,
    height: RAPHINHA_PERSONAL_DATA.height,
    preferredFoot: RAPHINHA_PERSONAL_DATA.preferredFoot,
    currentClub: RAPHINHA_PERSONAL_DATA.currentClub,
    nationalTeam: RAPHINHA_PERSONAL_DATA.nationalTeam,
    squadNumber: RAPHINHA_PERSONAL_DATA.squadNumber,
    debutYear: RAPHINHA_PERSONAL_DATA.debutYear,
    mainCharacteristic: RAPHINHA_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/raphinha_sticker_1779289019894.png',
    albumCode: 'BRS 16',
    stats: RAPHINHA_STATS_25_26,
    attributes: RAPHINHA_ATTRIBUTES,
    trivia: RAPHINHA_TRIVIA_QUESTIONS
  },
  {
    id: 'martinelli',
    name: 'Martinelli',
    fullName: GABRIEL_MARTINELLI_PERSONAL_DATA.fullName,
    nickname: GABRIEL_MARTINELLI_PERSONAL_DATA.nickname,
    position: GABRIEL_MARTINELLI_PERSONAL_DATA.position,
    birthDate: GABRIEL_MARTINELLI_PERSONAL_DATA.birthDate,
    age: GABRIEL_MARTINELLI_PERSONAL_DATA.age,
    birthPlace: GABRIEL_MARTINELLI_PERSONAL_DATA.birthPlace,
    height: GABRIEL_MARTINELLI_PERSONAL_DATA.height,
    preferredFoot: GABRIEL_MARTINELLI_PERSONAL_DATA.preferredFoot,
    currentClub: GABRIEL_MARTINELLI_PERSONAL_DATA.currentClub,
    nationalTeam: GABRIEL_MARTINELLI_PERSONAL_DATA.nationalTeam,
    squadNumber: GABRIEL_MARTINELLI_PERSONAL_DATA.squadNumber,
    debutYear: GABRIEL_MARTINELLI_PERSONAL_DATA.debutYear,
    mainCharacteristic: GABRIEL_MARTINELLI_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/gabriel_martinelli_sticker_1779289035273.png',
    albumCode: 'BRS 17',
    stats: GABRIEL_MARTINELLI_STATS_25_26,
    attributes: GABRIEL_MARTINELLI_ATTRIBUTES,
    trivia: GABRIEL_MARTINELLI_TRIVIA_QUESTIONS
  },
  {
    id: 'matheuscunha',
    name: 'Matheus Cunha',
    fullName: MATHEUS_CUNHA_PERSONAL_DATA.fullName,
    nickname: MATHEUS_CUNHA_PERSONAL_DATA.nickname,
    position: MATHEUS_CUNHA_PERSONAL_DATA.position,
    birthDate: MATHEUS_CUNHA_PERSONAL_DATA.birthDate,
    age: MATHEUS_CUNHA_PERSONAL_DATA.age,
    birthPlace: MATHEUS_CUNHA_PERSONAL_DATA.birthPlace,
    height: MATHEUS_CUNHA_PERSONAL_DATA.height,
    preferredFoot: MATHEUS_CUNHA_PERSONAL_DATA.preferredFoot,
    currentClub: MATHEUS_CUNHA_PERSONAL_DATA.currentClub,
    nationalTeam: MATHEUS_CUNHA_PERSONAL_DATA.nationalTeam,
    squadNumber: MATHEUS_CUNHA_PERSONAL_DATA.squadNumber,
    debutYear: MATHEUS_CUNHA_PERSONAL_DATA.debutYear,
    mainCharacteristic: MATHEUS_CUNHA_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/matheus_cunha_sticker_1779289051280.png',
    albumCode: 'BRS 18',
    stats: MATHEUS_CUNHA_STATS_25_26,
    attributes: MATHEUS_CUNHA_ATTRIBUTES,
    trivia: MATHEUS_CUNHA_TRIVIA_QUESTIONS
  },
  {
    id: 'igorthiago',
    name: 'Igor Thiago',
    fullName: IGOR_THIAGO_PERSONAL_DATA.fullName,
    nickname: IGOR_THIAGO_PERSONAL_DATA.nickname,
    position: IGOR_THIAGO_PERSONAL_DATA.position,
    birthDate: IGOR_THIAGO_PERSONAL_DATA.birthDate,
    age: IGOR_THIAGO_PERSONAL_DATA.age,
    birthPlace: IGOR_THIAGO_PERSONAL_DATA.birthPlace,
    height: IGOR_THIAGO_PERSONAL_DATA.height,
    preferredFoot: IGOR_THIAGO_PERSONAL_DATA.preferredFoot,
    currentClub: IGOR_THIAGO_PERSONAL_DATA.currentClub,
    nationalTeam: IGOR_THIAGO_PERSONAL_DATA.nationalTeam,
    squadNumber: IGOR_THIAGO_PERSONAL_DATA.squadNumber,
    debutYear: IGOR_THIAGO_PERSONAL_DATA.debutYear,
    mainCharacteristic: IGOR_THIAGO_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/igor_thiago_sticker_1779289082311.png',
    albumCode: 'BRS 19',
    stats: IGOR_THIAGO_STATS_25_26,
    attributes: IGOR_THIAGO_ATTRIBUTES,
    trivia: IGOR_THIAGO_TRIVIA_QUESTIONS
  },
  {
    id: 'luizhenrique',
    name: 'Luiz Henrique',
    fullName: LUIZ_HENRIQUE_PERSONAL_DATA.fullName,
    nickname: LUIZ_HENRIQUE_PERSONAL_DATA.nickname,
    position: LUIZ_HENRIQUE_PERSONAL_DATA.position,
    birthDate: LUIZ_HENRIQUE_PERSONAL_DATA.birthDate,
    age: LUIZ_HENRIQUE_PERSONAL_DATA.age,
    birthPlace: LUIZ_HENRIQUE_PERSONAL_DATA.birthPlace,
    height: LUIZ_HENRIQUE_PERSONAL_DATA.height,
    preferredFoot: LUIZ_HENRIQUE_PERSONAL_DATA.preferredFoot,
    currentClub: LUIZ_HENRIQUE_PERSONAL_DATA.currentClub,
    nationalTeam: LUIZ_HENRIQUE_PERSONAL_DATA.nationalTeam,
    squadNumber: LUIZ_HENRIQUE_PERSONAL_DATA.squadNumber,
    debutYear: LUIZ_HENRIQUE_PERSONAL_DATA.debutYear,
    mainCharacteristic: LUIZ_HENRIQUE_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/luiz_henrique_sticker_1779289099517.png',
    albumCode: 'BRS 20',
    stats: LUIZ_HENRIQUE_STATS_25_26,
    attributes: LUIZ_HENRIQUE_ATTRIBUTES,
    trivia: LUIZ_HENRIQUE_TRIVIA_QUESTIONS
  },
  {
    id: 'rayan',
    name: 'Rayan',
    fullName: RAYAN_PERSONAL_DATA.fullName,
    nickname: RAYAN_PERSONAL_DATA.nickname,
    position: RAYAN_PERSONAL_DATA.position,
    birthDate: RAYAN_PERSONAL_DATA.birthDate,
    age: RAYAN_PERSONAL_DATA.age,
    birthPlace: RAYAN_PERSONAL_DATA.birthPlace,
    height: RAYAN_PERSONAL_DATA.height,
    preferredFoot: RAYAN_PERSONAL_DATA.preferredFoot,
    currentClub: RAYAN_PERSONAL_DATA.currentClub,
    nationalTeam: RAYAN_PERSONAL_DATA.nationalTeam,
    squadNumber: RAYAN_PERSONAL_DATA.squadNumber,
    debutYear: RAYAN_PERSONAL_DATA.debutYear,
    mainCharacteristic: RAYAN_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/rayan_sticker_1779289114797.png',
    albumCode: 'BRS 21',
    stats: RAYAN_STATS_25_26,
    attributes: RAYAN_ATTRIBUTES,
    trivia: RAYAN_TRIVIA_QUESTIONS
  },
  {
    id: 'edersonfener',
    name: 'Ederson',
    fullName: EDERSON_FENER_PERSONAL_DATA.fullName,
    nickname: EDERSON_FENER_PERSONAL_DATA.nickname,
    position: EDERSON_FENER_PERSONAL_DATA.position,
    birthDate: EDERSON_FENER_PERSONAL_DATA.birthDate,
    age: EDERSON_FENER_PERSONAL_DATA.age,
    birthPlace: EDERSON_FENER_PERSONAL_DATA.birthPlace,
    height: EDERSON_FENER_PERSONAL_DATA.height,
    preferredFoot: EDERSON_FENER_PERSONAL_DATA.preferredFoot,
    currentClub: EDERSON_FENER_PERSONAL_DATA.currentClub,
    nationalTeam: EDERSON_FENER_PERSONAL_DATA.nationalTeam,
    squadNumber: EDERSON_FENER_PERSONAL_DATA.squadNumber,
    debutYear: EDERSON_FENER_PERSONAL_DATA.debutYear,
    mainCharacteristic: EDERSON_FENER_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/ederson_city_sticker_1779410456907.png',
    albumCode: 'BRS 22',
    stats: EDERSON_FENER_STATS_25_26,
    attributes: EDERSON_FENER_ATTRIBUTES,
    trivia: EDERSON_FENER_TRIVIA_QUESTIONS
  },
  {
    id: 'weverton',
    name: 'Weverton',
    fullName: WEVERTON_PERSONAL_DATA.fullName,
    nickname: WEVERTON_PERSONAL_DATA.nickname,
    position: WEVERTON_PERSONAL_DATA.position,
    birthDate: WEVERTON_PERSONAL_DATA.birthDate,
    age: WEVERTON_PERSONAL_DATA.age,
    birthPlace: WEVERTON_PERSONAL_DATA.birthPlace,
    height: WEVERTON_PERSONAL_DATA.height,
    preferredFoot: WEVERTON_PERSONAL_DATA.preferredFoot,
    currentClub: WEVERTON_PERSONAL_DATA.currentClub,
    nationalTeam: WEVERTON_PERSONAL_DATA.nationalTeam,
    squadNumber: WEVERTON_PERSONAL_DATA.squadNumber,
    debutYear: WEVERTON_PERSONAL_DATA.debutYear,
    mainCharacteristic: WEVERTON_PERSONAL_DATA.mainCharacteristic,
    imagePath: '/src/assets/images/weverton_sticker_1779289150912.png',
    albumCode: 'BRS 23',
    stats: WEVERTON_STATS_25_26,
    attributes: WEVERTON_ATTRIBUTES,
    trivia: WEVERTON_TRIVIA_QUESTIONS
  }
];

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'open_pack',
    title: 'Coleccionista Novato',
    description: 'Abre tu primer paquete de cromos oficiales.',
    unlocked: false,
    icon: 'PackageOpen'
  },
  {
    id: 'shiny_alisson',
    title: '¡Cromo Brillante!',
    description: 'Desbloquea la versión holográfica de cualquiera de tus estrellas favoritas de la Seleção.',
    unlocked: false,
    icon: 'Sparkles'
  },
  {
    id: 'perfect_trivia',
    title: 'Especialista de Oro',
    description: 'Responde correctamente todas las preguntas de la trivia.',
    unlocked: false,
    icon: 'Trophy'
  },
  {
    id: 'all_themes',
    title: 'Multiverso Colección',
    description: 'Explora todos los estilos de cartas de la colección.',
    unlocked: false,
    icon: 'Layers'
  }
];
