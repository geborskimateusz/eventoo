import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, Logout, LoginRequest, FindByUsername } from './auth.actions';
import { tap, switchMap, catchError, map } from 'rxjs/operators';
import { defer, of, Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from 'src/app/shared/model/user-details';



@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
    private httpClient: HttpClient) { }

  @Effect()
  login$ = this.actions$.pipe(
    ofType<LoginRequest>(AuthActionTypes.LoginRequest),
    switchMap(action => {
      return this.httpClient.post<UserDetails>('http://localhost:8080/api/v1/user/login',
        { username: action.payload.username, password: action.payload.password })
        .pipe(
          catchError(err => {
            console.log(err)

            return EMPTY;
          })
        )

    }),
    map(userDetails => {
      localStorage.setItem("current_user_id", JSON.stringify(userDetails.id))
      localStorage.setItem("current_username", JSON.stringify(userDetails.email))

      console.log(userDetails)

      return new Login({ userDetails })

    })
  );

  @Effect()
  findByUsername$ = this.actions$.pipe(
    ofType<FindByUsername>(AuthActionTypes.FindByUsername),
    switchMap(action => {
      return this.httpClient.get<UserDetails>(`http://localhost:8080/api/v1/user/username?=${action.payload.username}`)
        .pipe(
          catchError(err => {
            console.log(err)

            return EMPTY;
          })
        )

    }),
    map(userDetails => {
  
      console.log(userDetails)

      return new Login({ userDetails })

    })
  );


  // @Effect({ dispatch: false })
  // login$ = this.actions$.pipe(
  //   ofType<Login>(AuthActionTypes.Login),
  //   tap(action => localStorage.setItem("current_user_id", JSON.stringify(action.payload.userDetails.id)))
  // );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => localStorage.clear())
  )

  @Effect()
  init$ = defer((): Observable<FindByUsername | Logout> => {
    const username = localStorage.getItem("current_username");

    //get item user id ant look and send request for find by id
    return (username) ?
      of(new FindByUsername({ username: JSON.parse(username) })) :
      of(new Logout())

  });

}
