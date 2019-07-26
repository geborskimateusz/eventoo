import { MusicGenres } from './music-genres.model';
import { TicketModel } from './ticket';

export interface Event {
    id: number,
    title: string,
    description: string,
    date: Date,
    img: string,
    genre: MusicGenres,
    location: {
        name: string,
        address: string,
        lat: string,
        lon: string
    },
    tickets: TicketModel[]
}