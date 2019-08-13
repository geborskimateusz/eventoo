import { Event } from 'src/app/shared/model/event.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { EventsActions, EventsActionTypes } from './events.actions';

export interface EventsState extends EntityState<Event> {
    loading: boolean;
}

export const adapter: EntityAdapter<Event> = createEntityAdapter<Event>();

export const initialEventsState: EventsState = adapter.getInitialState({
    loading: false
});

export function eventsReducer(state = initialEventsState, action: EventsActions) {
    switch (action.type) {

        case EventsActionTypes.EventLoaded:
            return adapter.addOne(action.payload.event, state);

        case EventsActionTypes.EventsPageRequested:
            return { ...state, loading: true }

        case EventsActionTypes.EventsPageLoaded:
            return adapter.upsertMany(
                action.payload.events,
                {...state, loading: false
                });

        case EventsActionTypes.EventsPageCancelled:
                return { ...state, loading: false }

        default: {
            return state;
        }
    }
}

export const { selectAll } = adapter.getSelectors();