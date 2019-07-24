import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventsState } from './events.reducers';

export const selectEventsState = createFeatureSelector<EventsState>("events");

export const selectEventById = (eventId:number) => createSelector(
    selectEventsState,
    eventsState => eventsState.entities[eventId]
);