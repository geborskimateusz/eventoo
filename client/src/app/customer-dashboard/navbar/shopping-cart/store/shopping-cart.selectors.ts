import { createSelector } from '@ngrx/store';
import { selectCustomerDashboardState } from 'src/app/customer-dashboard/store/customer-dashboard.selectors';
import { CustomerDashboardState } from 'src/app/customer-dashboard/store/customer-dashboard.reducers';
import * as fromShoppingCart from './shopping-cart.reducers';

export const selectShoppingCartState = createSelector(
    selectCustomerDashboardState,
    (state: CustomerDashboardState) => state.shoppingCart
);

export const selectEventsFromShoppingList = createSelector(
    selectShoppingCartState,
    fromShoppingCart.selectAll
)

export const selectTotalCount = createSelector(
    selectShoppingCartState,
    fromShoppingCart.selectTotal
)

export const selectEventIDs = createSelector(
    selectShoppingCartState,
    fromShoppingCart.selectIds
)

export const isShoppingCartEmpty = createSelector(
    selectTotalCount,
    total => total === 0
)