import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { UserDetails } from 'src/app/shared/model/user-details';

export enum AuthActionTypes {
  LoginRequest = '[Auth] Login Request',
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  FindByUsername = '[Auth] Find By Username'
}


export class LoginRequest implements Action {
  readonly type = AuthActionTypes.LoginRequest;

  constructor(public payload: { username: string, password: string }) { }
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: { userDetails: UserDetails }) { }
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;

  constructor() { }
}

export class FindByUsername implements Action {
  readonly type = AuthActionTypes.FindByUsername;

  constructor(public payload: { username: string }) { }
}


export type AuthActions =
  LoginRequest
  | Login
  | Logout
  | FindByUsername;
