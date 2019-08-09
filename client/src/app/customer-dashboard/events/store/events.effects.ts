import { first, mergeMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { EventsActionTypes, EventRequested, EventLoaded, AllEventsRequested, AllEventsLoaded } from './events.actions';
import { EVENTS_DATASOURCE } from 'src/app/shared/fake-datasource/events-datasource';
import { of } from 'rxjs';
import { AppState } from 'src/app/store';
import { selectAllEventsLoaded } from './events.selectors';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { Event } from 'src/app/shared/model/event.model';

@Injectable()
export class EventsEffects {

    constructor(private actions$: Actions,
        private store: Store<AppState>,
        private httpClient: HttpClient) { }

    @Effect()
    loadEvent$ = this.actions$.pipe(
        ofType<EventRequested>(EventsActionTypes.EventRequested),
        mergeMap((action) =>
            //here should be request to server
            of(EVENTS_DATASOURCE.find(event => event.id == action.payload.eventId))),
        map(event => new EventLoaded({ event })))


    @Effect()
    loadEvents$ = this.actions$.pipe(
        ofType<AllEventsRequested>(EventsActionTypes.AllEventsRequested),
        withLatestFrom(this.store.pipe(select(selectAllEventsLoaded))),
        filter(([action, allEventsLoaded]) => !allEventsLoaded),

        //here should be request to server
        mergeMap(() => {
            return this.httpClient.get<Event[]>('http://localhost:8080/api/v1/events')
        }),
        map(events => {
            events.forEach(event => event.date = new Date(event.date))
            return new AllEventsLoaded({ events })
        }));
}
