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
        tap(action => this.httpClient.post('api/v1/events/book', action.payload.order))
    )

}