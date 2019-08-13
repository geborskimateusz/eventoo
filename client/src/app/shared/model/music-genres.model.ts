import { map } from 'rxjs/operators';

export enum MusicGenre {
  ALL = 'All',
  DANCE = 'Dance',
  POP = 'Pop',
  ELECTRONIC = 'Electronic',
  FLAMENCO = 'Flamenco',
  JAZZ = 'Jazz',
  HIP_HOP = 'Hip-hop',
  ROCK = 'Rock',
  METAL = 'Metal',
  FOLK = 'Folk',
  REGGAE = 'Reggae',
  SOUL = 'Soul',
}

export const genreToEnum = (musicGenre: string) => {
   return MusicGenre[musicGenre.toUpperCase().replace(/-/g, "_")];
}