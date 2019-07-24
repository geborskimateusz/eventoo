import { first, mergeMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EventsActionTypes, EventRequested, EventLoaded } from './events.actions';
import { EVENTS_DATASOURCE } from 'src/app/shared/events-datasource';
import { of } from 'rxjs';

@Injectable()
export class EventsEffects {

    constructor(private actions$: Actions) { }

    @Effect()
    loadCourse$ = this.actions$.pipe(
        ofType<EventRequested>(EventsActionTypes.EventRequested),
        mergeMap((action) => 
        //here should be request to server
        of(EVENTS_DATASOURCE.find(event => event.id == action.payload.eventId))),
        map(event => new EventLoaded({ event })))
}