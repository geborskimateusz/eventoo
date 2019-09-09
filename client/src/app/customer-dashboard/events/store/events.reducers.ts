import { Event } from 'src/app/shared/model/event.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { EventsActions, EventsActionTypes } from './events.actions';
import * as fromCustomerDashboard from '../../store/customer-dashboard.reducers';

export interface EventsState extends EntityState<Event> {
}

export const adapter: EntityAdapter<Event> = createEntityAdapter<Event>();

export const initialEventsState: EventsState = adapter.getInitialState({});

export function eventsReducer(state = initialEventsState, action: EventsActions) {
    switch (action.type) {

        case EventsActionTypes.EventLoaded:
            return adapter.addOne(action.payload.event, state);

        case EventsActionTypes.EventsPageLoaded:
            return adapter.upsertMany(
                action.payload.events,
                {...state});

        // case EventsActionTypes.EventsPageCancelled:
        //         return { ...state}

        default: {
            return state;
        }
    }
}

export const { selectAll } = adapter.getSelectors();
