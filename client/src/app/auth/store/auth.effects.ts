import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, Logout } from './auth.actions';
import { tap } from 'rxjs/operators';



@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions) {}

  @Effect({dispatch: false})
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap(action => localStorage.setItem("user", JSON.stringify(action.payload.user)))
  );

  @Effect({dispatch: false})
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(()=> localStorage.removeItem("user"))
  )

}
