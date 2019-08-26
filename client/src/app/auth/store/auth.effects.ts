import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes, Login, Logout, LoginRequest, FindByUsername } from './auth.actions';
import { tap, switchMap, catchError, map, mergeMap } from 'rxjs/operators';
import { defer, of, Observable, EMPTY } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from 'src/app/shared/model/user-details';
import { UIService } from 'src/app/shared/ui/service/ui.service';
import { ShoppingCartRequest } from 'src/app/customer-dashboard/navbar/shopping-cart/store/shopping-cart.actions';



@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions,
    private httpClient: HttpClient,
    private uiService: UIService) { }

  @Effect()
  login$ = this.actions$.pipe(
    ofType<LoginRequest>(AuthActionTypes.LoginRequest),
    switchMap(action => {
      return this.httpClient.post<UserDetails>('http://localhost:8080/api/v1/user/login',
        { username: action.payload.username, password: action.payload.password })
        .pipe(
          catchError(err => {

            console.log(err)

            this.uiService.openSnackbar(
              'Invalid username or password',
              null,
              3000
          )

            return EMPTY;
          })
        )

    }),
    mergeMap(userDetails => {

      localStorage.setItem("current_user_id", JSON.stringify(userDetails.id))
      localStorage.setItem("current_username", JSON.stringify(userDetails.email))

      return [
        new Login({ userDetails }),
        new ShoppingCartRequest({ userId: userDetails.id })        
      ] 

    })
  );

  @Effect()
  findByUsername$ = this.actions$.pipe(
    ofType<FindByUsername>(AuthActionTypes.FindByUsername),
    switchMap(action => {
      return this.httpClient.get<UserDetails>(`http://localhost:8080/api/v1/user?username=${action.payload.username}`)
        .pipe(
          catchError(err => {

            console.log(err)

            return EMPTY;
          })
        )

    }),
    mergeMap(userDetails => {
  
      return [
        new Login({ userDetails }),
        new ShoppingCartRequest({ userId: userDetails.id })        
      ] 
    })
  );


  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType<Logout>(AuthActionTypes.Logout),
    tap(() => localStorage.clear())
  )

  @Effect()
  init$ = defer((): Observable<FindByUsername | Logout> => {
    const username = localStorage.getItem("current_username");

    return (username) ?
      of(new FindByUsername({ username: JSON.parse(username) })) :
      of(new Logout())

  });

}
