import { ActionReducerMap } from '@ngrx/store';
import * as fromRoot from '../../store';
import * as fromEvents from '../events/store/events.reducers';
import { EventsState } from '../events/store/events.reducers';
import * as fromShoppingCart from '../navbar/shopping-cart/store/shopping-cart.reducers';
import { ShoppingCartState } from '../navbar/shopping-cart/store/shopping-cart.reducers';

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



