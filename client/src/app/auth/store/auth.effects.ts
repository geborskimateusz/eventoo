import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, Logout } from './auth.actions';
import { tap } from 'rxjs/operators';
import { defer, of } from 'rxjs';



@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions) { }

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap(action => localStorage.setItem("user", JSON.stringify(action.payload.user)))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => localStorage.removeItem("user"))
  )

  @Effect()
  init$ = defer(() => {
    const userData = localStorage.getItem("user");

    if (userData) {
      return of(new Login(JSON.parse(userData)));
    } else {
      return of(new Logout())
    }
  });

}
