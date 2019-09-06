import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';
import { UIState, uiReducers } from '../shared/ui/ui-store/ui.reducers';


export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  ui: uiReducers
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
