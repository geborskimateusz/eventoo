import { EventModel } from 'src/app/shared/model/event.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { EventsActions, EventsActionTypes } from './events.actions';

export interface EventsState extends EntityState<EventModel> {
    allEventsLoaded: boolean;
}

export const adapter: EntityAdapter<EventModel> = createEntityAdapter<EventModel>();

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