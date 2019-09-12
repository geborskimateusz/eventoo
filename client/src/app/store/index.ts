import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { uiReducers } from '../shared/ui/ui-store/ui.reducers';


export interface AppState {}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  ui: uiReducers
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
