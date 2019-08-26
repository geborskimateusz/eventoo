import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UIState } from './ui.reducers';

export const selectUIState = createFeatureSelector<UIState>("ui");

export const selectIsLoading = createSelector(
    selectUIState,
    state => state.isLoading
)