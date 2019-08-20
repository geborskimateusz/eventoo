import { createFeatureSelector } from '@ngrx/store';

import { CustomerDashboardState } from './customer-dashboard.reducers';

export const selectCustomerDashboardState = createFeatureSelector<CustomerDashboardState>("customerDashboard");