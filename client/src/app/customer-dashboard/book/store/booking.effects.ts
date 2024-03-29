import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { BookTicketsRequest, BookingActionTypes, OrderCancelled, TicketsBooked } from './booking.actions';
import { tap, switchMap, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { EMPTY } from 'rxjs';
import { ApplicationConstans } from 'src/app/app-const';


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

                arr.push(preparedTicket)

                return arr;
            }, [])

            let userDetailsId = localStorage.getItem(ApplicationConstans.CURRENT_USER_ID);

            return this.httpClient.patch(`${ApplicationConstans.BASE_URL}/order`,
             {
                orderDate: new Date(),
                orderedTickets,
                userDetailsId
            }, { responseType: 'text' })
                .pipe(
                    catchError(err => {

                        console.log(err)
                        
                        this.store.dispatch(new OrderCancelled())

                        return EMPTY;
                    })
                )
        }),
        map(invoiceName => {
            return new TicketsBooked({ latestInvoice: invoiceName });
        }))
}