import { Action } from '@ngrx/store';
import { Event } from 'src/app/shared/event.model';

export enum EventActionTypes {
    EventRequested = '[View Event Page] Event Requested',
    EventLoaded = '[Events API] Event Loaded'
}

export class EventRequested implements Action {
    readonly type: EventActionTypes.EventRequested;
    constructor(public payload: { eventId: number }) { }
}

export class EventLoaded implements Action {
    readonly type: EventActionTypes.EventLoaded;
    constructor(public payload: { event: Event }) { }
}

export type EventActions = EventRequested | EventLoaded;