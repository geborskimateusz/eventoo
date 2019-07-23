import { Action } from '@ngrx/store';
import { User } from '../model/user.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout'
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: {user: User}) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;

  constructor() {}
}


export type AuthActions = 
Login |
Logout;
