import { Action } from '@ngrx/store';
import { User } from '../model/user.model';
import { AuthActionTypes, AuthActions } from './auth.actions';
import { UserDetails } from 'src/app/shared/model/user-details';


export interface State {
  loggedIn: boolean,
  userDetails: UserDetails
}

export const initialAuthState: State = {
  loggedIn: false,
  userDetails: null
};

export function authReducer(state = initialAuthState, action: AuthActions): State {
  switch (action.type) {

    case (AuthActionTypes.Login):
      return {
        userDetails: action.payload.userDetails,
        loggedIn: true
      }

    case (AuthActionTypes.Logout):
      return {
        loggedIn: false,
        userDetails: null
      }

    default:
      return state;
  }
}
