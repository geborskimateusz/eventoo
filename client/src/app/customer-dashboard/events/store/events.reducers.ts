import { Event } from 'src/app/shared/event.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { EventsActions, EventsActionTypes } from './events.actions';

export interface EventsState extends EntityState<Event> {
    allEventsLoaded: boolean;
}

export const adapter: EntityAdapter<Event> = createEntityAdapter<Event>();

export const initialEventsState: EventsState = adapter.getInitialState({
    allEventsLoaded: false
});

export function eventsReducer(state = initialEventsState, action: EventsActions) {
    switch (action.type) {

        case EventsActionTypes.EventLoaded:
            return adapter.addOne(action.payload.event, state);

        case EventsActionTypes.AllEventsLoaded:
            return adapter.addAll(
                action.payload.events,
                 {...state, allEventsLoaded: true});

        default: {
            return state;
        }
    }
}

export const { selectAll } = adapter.getSelectors();