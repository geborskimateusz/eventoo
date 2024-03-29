import { createSelector } from '@ngrx/store';
import { MusicGenre } from 'src/app/shared/model/music-genres.model';
import { CustomerDashboardState } from '../../store/customer-dashboard.reducers';
import { selectCustomerDashboardState } from '../../store/customer-dashboard.selectors';
import { PageQuery } from './events.actions';
import * as fromEvents from './events.reducers';


export const selectEventsState = createSelector(
    selectCustomerDashboardState,
    (state: CustomerDashboardState) => state.events
);

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

export const selectEventsPageByGenre = (musicGenre: string, page: PageQuery) => createSelector(
    selectEventsByGenre(musicGenre),
    events => {
        const start = page.pageIndex * page.pageSize,
            end = start + page.pageSize;

        return events.slice(start, end);
        }
)

