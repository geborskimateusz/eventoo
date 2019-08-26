import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { PutShoppingCart, ShoppingCartActionTypes, ShoppingCartRequest, AddEventsToShoppingCart, ResetShoppingCart, DeleteEvent } from './shopping-cart.actions';
import { tap, map, catchError, switchMap, concatMap, withLatestFrom, filter, combineLatest } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Event } from 'src/app/shared/model/event.model';
import { select, Store } from '@ngrx/store';
import { isShoppingCartEmpty, selectEventFromShoppingList } from './shopping-cart.selectors';
import { AppState } from 'src/app/store';

export interface ShoppingCart {
    userId: string,
    events: Event[]
}

@Injectable()
export class ShoppingCartEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient,
        private store: Store<AppState>) { }

    @Effect()
    putShoppingCart$ = this.actions$.pipe(
        ofType<PutShoppingCart>(ShoppingCartActionTypes.PutShoppingCart),
        concatMap(action => {

            const userId = action.payload.userId;
            const events = action.payload.events;

            let shoppingCart: ShoppingCart = { userId, events }
            console.log(shoppingCart)

            return this.httpClient.put('http://localhost:8080/api/v1/shoppingCart', shoppingCart)
                .pipe(
                    catchError(err => {
                        console.log(err);
                        return EMPTY
                    })
                )
        }),
        map(() => {
            return new ResetShoppingCart();
        })

    )

    @Effect()
    initializeShoppingCart$ = this.actions$.pipe(
        ofType<ShoppingCartRequest>(ShoppingCartActionTypes.ShoppingCartRequest),
        switchMap(action => this.httpClient.get<ShoppingCart>(`http://localhost:8080/api/v1/shoppingCart/${action.payload.userId}`)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return EMPTY
                })
            )),
        map(shoppingCart => {
            console.log(shoppingCart)
            return new AddEventsToShoppingCart({ events: shoppingCart.events })
        })
    )

    @Effect({ dispatch: false })
    deleteFromShoppingCart$ = this.actions$.pipe(
        ofType<DeleteEvent>(ShoppingCartActionTypes.DeleteEvent),
        switchMap(action => {

            const userId: string = localStorage.getItem("current_user_id");
            const eventId: number = action.payload.event.id;

            console.log(userId, eventId)
            return this.httpClient.delete(`http://localhost:8080/api/v1/shoppingCart/${userId}?eventId=${eventId}`)
                .pipe(
                    catchError(err => {
                        console.log(err);
                        return EMPTY
                    })
                )
        })
    )
}
















