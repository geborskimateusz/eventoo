import { Action } from '@ngrx/store';
import { Event } from 'src/app/shared/model/event.model';
import { MusicGenre } from 'src/app/shared/model/music-genres.model';

export enum EventsActionTypes {
    EventRequested = '[View Event Page] Event Requested',
    EventLoaded = '[Events API] Event Loaded',
    EventsPageRequested = '[View Events Page] Events Page Requested',
    EventsPageLoaded = '[View Events Page] Events Page Loaded',
    EventsPageCancelled = '[View Events Page] Events Page Cancelled'
}


export class EventRequested implements Action {
    readonly type = EventsActionTypes.EventRequested;
    constructor(public payload: { eventId: number }) { }
}

export class EventLoaded implements Action {
    readonly type = EventsActionTypes.EventLoaded;
    constructor(public payload: { event: Event }) { }
}

export class EventsPageRequested implements Action {
    readonly type = EventsActionTypes.EventsPageRequested;
    constructor(public payload: {musicGenre: MusicGenre, pageNum: number}) { }
}

export class EventsPageLoaded implements Action {
    readonly type = EventsActionTypes.EventsPageLoaded;
    constructor(public payload: { events: Event[] }) { }
}

export type EventsActions = 
EventRequested | 
EventLoaded | 
EventsPageRequested | 
EventsPageLoaded;