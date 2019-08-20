import * as fromEvents from '../events/store/events.reducers';
import * as fromShoppingCart from '../navbar/shopping-cart/store/shopping-cart.reducers';
import { from } from 'rxjs';
import { ShoppingCartState } from '../navbar/shopping-cart/store/shopping-cart.reducers';
import { EventsState } from '../events/store/events.reducers';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../store';

export interface CustomerDashboardState  {
    events: EventsState,
    shoppingCart: ShoppingCartState
}

export interface State extends fromRoot.AppState {
    customerDashboard: CustomerDashboardState;    
}

export const customerDashboardReducers: ActionReducerMap<CustomerDashboardState> = {
    events: fromEvents.eventsReducer,
    shoppingCart: fromShoppingCart.shoppingCartReducer
}

export const selectCustomerDashboardState = createFeatureSelector<CustomerDashboardState>("customerDashboard");

