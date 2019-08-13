import { first, mergeMap, map, withLatestFrom, filter, shareReplay, tap, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action, Store, select } from '@ngrx/store';
import { EventsActionTypes, EventRequested, EventLoaded, EventsPageRequested, EventsPageLoaded, EventsPageCancelled } from './events.actions';
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
    loadEvents$ = this.actions$.pipe(
        ofType<EventsPageRequested>(EventsActionTypes.EventsPageRequested),
        tap(() => console.log('request')),
        mergeMap((action) => {
            return this.httpClient.get<Event[]>(`http://localhost:8080/api/v1/events/${action.payload.musicGenre}?page=${action.payload.page.pageIndex}`)
                .pipe(
                    catchError(err => {
                        console.log(err)
                        this.store.dispatch(new EventsPageCancelled());
                        return of([])
                    }),
                )
        }),
        map((eventsArr: any) => {
            let events = eventsArr.events;
            events.forEach(event => event.date = new Date(event.date))
            return new EventsPageLoaded({ events })
        }));
}
