import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { BookTickets, BookingActionTypes } from './booking.actions';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class BookingEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient) { }

    book$ = this.actions$.pipe(
        ofType<BookTickets>(BookingActionTypes.BookTickets),
        tap(action => {
            console.log('ofType<BookTickets>(BookingActionTypes.BookTickets)')

            return  this.httpClient.put('api/v1/order', action.payload.order);
        })
    )

}