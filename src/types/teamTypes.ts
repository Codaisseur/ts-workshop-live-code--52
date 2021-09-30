export type Team = {
  id: number | null;
  name: string | null;
  country: string | null;
  founded: number | null;
  titles: number | null;
  championsLeagueParticipant: boolean | null;
};

export type TeamWPlayer = {
  id: number | null;
  name: string | null;
  country: string | null;
  founded: number | null;
  titles: number | null;
  championsLeagueParticipant: boolean | null;
  players: Player[];
};

export type Player = {
  id: number;
  name: string;
  age: number;
  nationality: string;
  profilePicture: string;
  retired: boolean;
  teamId: number;
};
