import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActionTypes, AuthActions } from './auth.actions';


export interface State {
  loggedIn: boolean,
  user: User
}

export const initialAuthState: State = {
  loggedIn: false,
  user: undefined
};

export function authReducer(state = initialAuthState, action: AuthActions): State {
  switch (action.type) {

    case (AuthActionTypes.Login):
      return {
        loggedIn: true,
        user: action.payload.user
      }

    case (AuthActionTypes.Logout):
      return {
        loggedIn: false,
        user: undefined
      }

    default:
      return state;
  }
}
