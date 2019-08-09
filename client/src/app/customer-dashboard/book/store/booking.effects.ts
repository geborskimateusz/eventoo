import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { BookTickets, BookingActionTypes } from './booking.actions';
import { tap, switchMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BookingEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient) { }

    @Effect({ dispatch: false })
    book$ = this.actions$.pipe(
        ofType<BookTickets>(BookingActionTypes.BookTickets),
        switchMap(action => this.httpClient.patch('http://localhost:8080/api/v1/order',
            {
                orderDate: new Date(),
                orderedTickets: action.payload.orderedTickets
            })
        ))

}