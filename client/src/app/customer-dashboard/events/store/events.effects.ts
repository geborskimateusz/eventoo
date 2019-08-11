import { first, mergeMap, map, withLatestFrom, filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { EventsActionTypes, EventRequested, EventLoaded, EventsPageRequested, EventsPageLoaded } from './events.actions';
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
        // withLatestFrom(this.store.pipe(select(selectAllEventsLoaded))),
        // filter(([action, allEventsLoaded]) => !allEventsLoaded),
        mergeMap((action) =>
            //here should be request to server
            of(EVENTS_DATASOURCE.find(event => event.id == action.payload.eventId))),
        map(event => new EventLoaded({ event })))


    @Effect()
    loadEvents$ = this.actions$.pipe(
        ofType<EventsPageRequested>(EventsActionTypes.EventsPageRequested),
        mergeMap((action) => {
            return this.httpClient.get<Event[]>(`http://localhost:8080/api/v1/events/${action.payload.musicGenre}?page=${action.payload.pageNum}`)
        }),
        map((eventsArr: any) => {
            console.log(eventsArr)
            let events = eventsArr.events;
            events.forEach(event => event.date = new Date(event.date))
            return new EventsPageLoaded({ events })
        }));
}
