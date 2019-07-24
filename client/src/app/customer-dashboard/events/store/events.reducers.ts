import { Event } from 'src/app/shared/event.model';
import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import { EventsActions, EventsActionTypes } from './events.actions';

export interface EventsState extends EntityState<Event> {
  
}

export const adapter: EntityAdapter<Event> = createEntityAdapter<Event>();

export const initialEventsState: EventsState = adapter.getInitialState();

export function eventsReducer(state = initialEventsState, action: EventsActions) {
    switch(action.type) {

        case EventsActionTypes.EventLoaded: 
            return adapter.addOne(action.payload.event, state);

        default: {
            return state;
        }
    }
}