import { Event } from 'src/app/shared/event.model';

export interface EventsState {
    eventsEntities: { [key: number]: Event };
    eventsOrder: number[]
}