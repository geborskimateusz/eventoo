import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventsState } from './events.reducers';
import * as fromEvents from './events.reducers'
import { MusicGenre } from 'src/app/shared/model/music-genres.model';
import { PageQuery } from './events.actions';
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
            musicGenre === MusicGenre.ALL ?
                fromEvents.selectAll : event.genre === musicGenre
    )
);

export const selectAllEventsLoaded = createSelector(
    selectEventsState,
    eventsState => eventsState.allEventsLoaded
);

export const selectEventsPageByGenre = (musicGenre: string, page: PageQuery) => createSelector(
    selectEventsByGenre(musicGenre),
    events => {
        const start = page.pageIndex * page.pageSize,
            end = start + page.pageSize;

        return events.slice(start, end);
        }

)