import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { UserDetails } from 'src/app/shared/model/user-details';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: {userDetails: UserDetails}) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;

  constructor() {}
}


export type AuthActions = 
Login |
Logout;
