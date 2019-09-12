import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ApplicationConstans } from 'src/app/app-const';
import { Event } from 'src/app/shared/model/event.model';
import { StopLoading } from 'src/app/shared/ui/ui-store/ui.actions';
import { AppState } from 'src/app/store';
import { EventsActionTypes, EventsPageCancelled, EventsPageLoaded, EventsPageRequested } from './events.actions';

@Injectable()
export class EventsEffects {

    constructor(private actions$: Actions,
        private store: Store<AppState>,
        private httpClient: HttpClient) { }


    @Effect()
    loadEvents$ = this.actions$.pipe(
        ofType<EventsPageRequested>(EventsActionTypes.EventsPageRequested),
        mergeMap((action) => {
            return this.httpClient.get<Event[]>(`${ApplicationConstans.BASE_URL}/events/${action.payload.musicGenre}?page=${action.payload.page.pageIndex}`)
                .pipe(
                    catchError(err => {
                        console.log(err)
                        this.store.dispatch(new EventsPageCancelled());
                        this.store.dispatch(new StopLoading());
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
