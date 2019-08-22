import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { PutShoppingCart, ShoppingCartActionTypes } from './shopping-cart.actions';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class ShoppingCartEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient) { }

    @Effect({ dispatch: false })
    putShoppingCart$ = this.actions$.pipe(
        ofType<PutShoppingCart>(ShoppingCartActionTypes.PutShoppingCart),
        switchMap(action => {
            const userId = localStorage.getItem("current_user_id");
            const eventsIds = action.payload.eventsIds;
            let bookmarks = { userId, eventsIds }

            return this.httpClient.put('http://localhost:8080/api/v1/shoppingCart', bookmarks)
                .pipe(
                    catchError(err => {
                        console.log(err);
                        return EMPTY
                    })
                )
        })

    )
}