import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { PutShoppingCart, ShoppingCartActionTypes, ShoppingCartRequest, AddEventsToShoppingCart } from './shopping-cart.actions';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Event } from 'src/app/shared/model/event.model';

export interface ShoppingCart {
    userId: string,
    events: Event[]
}

@Injectable()
export class ShoppingCartEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient) { }

    @Effect({ dispatch: false })
    putShoppingCart$ = this.actions$.pipe(
        ofType<PutShoppingCart>(ShoppingCartActionTypes.PutShoppingCart),
        switchMap(action => {
            
            const userId = localStorage.getItem("current_user_id");
            const events = action.payload.events;
            let shoppingCart: ShoppingCart = { userId, events }

            return this.httpClient.put('http://localhost:8080/api/v1/shoppingCart', shoppingCart)
                .pipe(
                    catchError(err => {
                        console.log(err);
                        return EMPTY
                    })
                )
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
            return new AddEventsToShoppingCart({ events: shoppingCart.events })
        })
    )
}