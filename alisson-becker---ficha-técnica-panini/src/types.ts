export type CardThemeId = 'classic' | 'shiny' | 'retro' | 'cyber';

export interface CardTheme {
  id: CardThemeId;
  name: string;
  badgeBg: string;
  badgeText: string;
  cardBorder: string;
  bgGradient: string;
  glowColor: string;
  textColor: string;
  accentColor: string;
  labelText: string;
}

export interface PlayerStats {
  season: string;
  matchesPlayed: number;
  concededGoals?: number; // Portero únicamente
  cleanSheets?: number;    // Portero únicamente
  saves?: number;         // Portero únicamente
  penaltySaves?: number;  // Portero únicamente
  assists: number;
  goals: number;
  minutesPlayed: number;
}

export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

export interface Player {
  id: string;
  name: string;
  fullName: string;
  nickname: string;
  position: string;
  birthDate: string;
  age: number;
  birthPlace: string;
  height: string;
  preferredFoot: string;
  currentClub: string;
  nationalTeam: string;
  squadNumber: string;
  debutYear: string;
  mainCharacteristic: string;
  imagePath: string;
  albumCode: string;
  stats: PlayerStats;
  attributes: { name: string; value: number; color: string }[];
  trivia: TriviaQuestion[];
}
