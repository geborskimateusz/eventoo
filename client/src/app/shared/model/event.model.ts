import { MusicGenre } from './music-genres.model';
import { Ticket } from './ticket-model';
import { Location } from './location.model';

export interface Event {
    id?: number,
    title: string,
    description: string,
    date: Date,
    img: string,
    genre: MusicGenre,
    location: Location,
    tickets: Ticket[]
}