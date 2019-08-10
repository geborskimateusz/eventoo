import { Action } from '@ngrx/store';
import { Event } from 'src/app/shared/model/event.model';
import { MusicGenre } from 'src/app/shared/model/music-genres.model';

export enum EventsActionTypes {
    EventRequested = '[View Event Page] Event Requested',
    EventLoaded = '[Events API] Event Loaded',
    EventsRequested = '[View Events Page] Events Requested',
    EventsLoaded = '[View Events Page] Events Loaded'
}


export class EventRequested implements Action {
    readonly type = EventsActionTypes.EventRequested;
    constructor(public payload: { eventId: number }) { }
}

export class EventLoaded implements Action {
    readonly type = EventsActionTypes.EventLoaded;
    constructor(public payload: { event: Event }) { }
}

export class EventsRequested implements Action {
    readonly type = EventsActionTypes.EventsRequested;
    constructor(public payload: {musicGenre: MusicGenre, pageNum: number}) { }
}

export class EventsLoaded implements Action {
    readonly type = EventsActionTypes.EventsLoaded;
    constructor(public payload: { events: Event[] }) { }
}

export type EventsActions = 
EventRequested | 
EventLoaded | 
EventsRequested | 
EventsLoaded;