import { Action } from '@ngrx/store';
import { EventModel } from 'src/app/shared/model/event.model';

export enum EventsActionTypes {
    EventRequested = '[View Event Page] Event Requested',
    EventLoaded = '[Events API] Event Loaded',
    AllEventsRequested = '[View Events Page] All Events Requested',
    AllEventsLoaded = '[View Events Page] All Events Loaded'
}


export class EventRequested implements Action {
    readonly type = EventsActionTypes.EventRequested;
    constructor(public payload: { eventId: number }) { }
}

export class EventLoaded implements Action {
    readonly type = EventsActionTypes.EventLoaded;
    constructor(public payload: { event: EventModel }) { }
}

export class AllEventsRequested implements Action {
    readonly type = EventsActionTypes.AllEventsRequested;
    constructor() { }
}

export class AllEventsLoaded implements Action {
    readonly type = EventsActionTypes.AllEventsLoaded;
    constructor(public payload: { events: EventModel[] }) { }
}

export type EventsActions = 
EventRequested | 
EventLoaded | 
AllEventsRequested | 
AllEventsLoaded;