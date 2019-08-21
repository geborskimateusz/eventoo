import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { PutShoppingCart, ShoppingCartActionTypes } from './shopping-cart.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class ShoppingCartEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient) { }

        @Effect({dispatch: false})
        putShoppingCart$ = this.actions$.pipe(
            ofType<PutShoppingCart>(ShoppingCartActionTypes.PutShoppingCart),
            tap(action => {
                console.log(action.payload)

                //create bookmarks on server
                // events + user id 
            })

        )
}