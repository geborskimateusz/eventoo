import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';
import { ApplicationConstans } from 'src/app/app-const';
import { Event } from 'src/app/shared/model/event.model';
import { AddEventsToShoppingCart, DeleteEvent, PutShoppingCart, ResetShoppingCart, ShoppingCartActionTypes, ShoppingCartRequest } from './shopping-cart.actions';

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

            const userId = action.payload.userId;
            const events = action.payload.events;

            let shoppingCart: ShoppingCart = { userId, events }

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
















