import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventsState } from './events.reducers';
import * as fromEvents from './events.reducers'
import { MusicGenres } from 'src/app/shared/model/music-genres.model';
export const selectEventsState = createFeatureSelector<EventsState>("events");

export const selectEventById = (eventId: number) => createSelector(
    selectEventsState,
    eventsState => eventsState.entities[eventId]
);

export const selectAllEvents = createSelector(
    selectEventsState,
    fromEvents.selectAll
);

export const selectEventsByGenre = (musicGenre: string) => createSelector(
    selectAllEvents,
    events => events.filter(
        event =>
            musicGenre === MusicGenres.ALL ?
                fromEvents.selectAll : event.genre === musicGenre
    )
);

export const selectAllEventsLoaded = createSelector(
    selectEventsState,
    eventsState => eventsState.allEventsLoaded
);