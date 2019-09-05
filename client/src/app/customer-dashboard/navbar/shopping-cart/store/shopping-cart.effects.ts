import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { PutShoppingCart, ShoppingCartActionTypes, ShoppingCartRequest, AddEventsToShoppingCart, ResetShoppingCart, DeleteEvent } from './shopping-cart.actions';
import { tap, map, catchError, switchMap, concatMap, withLatestFrom, filter, combineLatest, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Event } from 'src/app/shared/model/event.model';
import { select, Store } from '@ngrx/store';
import { isShoppingCartEmpty, selectEventFromShoppingList } from './shopping-cart.selectors';
import { AppState } from 'src/app/store';
import { ApplicationConstans } from 'src/app/app-const';

export interface ShoppingCart {
    userId: string,
    events: Event[]
}

@Injectable()
export class ShoppingCartEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient) { }

    @Effect()
    putShoppingCart$ = this.actions$.pipe(
        ofType<PutShoppingCart>(ShoppingCartActionTypes.PutShoppingCart),
        concatMap(action => {

            console.log(action)

            const userId = action.payload.userId;
            const events = action.payload.events;

            let shoppingCart: ShoppingCart = { userId, events }
            console.log(shoppingCart)

            return this.httpClient.put(`${ApplicationConstans.BASE_URL}/shoppingCart`, shoppingCart)
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
        switchMap(action => {
            console.log('in request');

            return this.httpClient.get<ShoppingCart>(`${ApplicationConstans.BASE_URL}/shoppingCart/${action.payload.userId}`)
            .pipe(
                catchError(err => {
                    console.log(err);
                    return EMPTY
                })
            )
        }),
        map(shoppingCart => {
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
            return this.httpClient.delete(`${ApplicationConstans.BASE_URL}/shoppingCart/${userId}?eventId=${eventId}`)
                .pipe(
                    catchError(err => {
                        console.log(err);
                        return EMPTY
                    })
                )
        })
    )
}
















