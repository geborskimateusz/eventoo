import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, Logout } from './auth.actions';
import { tap } from 'rxjs/operators';
import { defer, of, Observable } from 'rxjs';



@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions) { }

  @Effect({ dispatch: false })
  login$ = this.actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    tap(action => localStorage.setItem("current_user_id", JSON.stringify(action.payload.userDetails.id)))
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => localStorage.removeItem("current_user_id"))
  )

  @Effect()
  init$ = defer((): Observable<Login | Logout> => {
    const userData = localStorage.getItem("current_user_id");

    //get item user id ant look and send request for find by id
    return (userData) ?
      of(new Login({ userDetails: JSON.parse(userData) })) :
      of(new Logout())

  });

}
