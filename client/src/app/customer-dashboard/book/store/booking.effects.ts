import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { BookTicketsRequest, BookingActionTypes, OrderCancelled, TicketsBooked } from './booking.actions';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { EMPTY } from 'rxjs';


@Injectable()
export class BookingEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient,
        private store: Store<AppState>) { }

    @Effect()
    book$ = this.actions$.pipe(
        ofType<BookTicketsRequest>(BookingActionTypes.BookTicketsRequest),
        switchMap(action => {

            let orderedTickets = action.payload.orderedTickets.reduce((arr, orderedTicket) => {
                let { amount, ...ticket } = orderedTicket;

                let preparedTicket = {
                    amount,
                    ticket
                }

                console.log(preparedTicket)

                arr.push(preparedTicket)

                return arr;
            }, [])

            let userDetailsId = localStorage.getItem("current_user_id");
            console.log(userDetailsId)

            return this.httpClient.patch('http://localhost:8080/api/v1/order', {
                orderDate: new Date(),
                orderedTickets,
                userDetailsId
            })
                .pipe(
                    catchError(err => {
                        console.log(err)
                        this.store.dispatch(new OrderCancelled())

                        return EMPTY;
                    })
                )
        }),
        map(() => {
            return new TicketsBooked();
        }))
}