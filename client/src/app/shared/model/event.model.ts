import { MusicGenres } from './music-genres.model';
import { TicketModel as Ticket } from './ticket-model';
import { Location } from './location.model';

export interface Event {
    id: number,
    title: string,
    description: string,
    date: Date,
    img: string,
    genre: MusicGenres,
    location: Location,
    tickets: Ticket[]
}