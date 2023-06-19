export interface ITeams {
  _id?: string;
  team: ITeam;
  venue: IVenue;
}

export interface ITeam {
  id: number;
  name: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

export interface IVenue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}
