export interface IStandings {
  team: Team;
  all: All;
  home: All;
  away: All;
  _id: string;
  rank: number;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  update: Date;
}

export interface All {
  goals: Goals;
  played: number;
  win: number;
  draw: number;
  lose: number;
}

export interface Goals {
  for: number;
  against: number;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}
