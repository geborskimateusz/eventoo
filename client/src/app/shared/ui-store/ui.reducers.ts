import { UIActionTypes, UIActions } from './ui.actions';

export interface UIState {
    isLoading: boolean;
}

const initialState: UIState = {
    isLoading: false
};

export function uiReducers(state = initialState, action: UIActions) {
    switch (action.type) {
        case UIActionTypes.START_LOADING: {
            return {
                isLoading: true,
                ...state
            };
        }
        case UIActionTypes.STOP_LOADING: {
            return {
                isLoading: false,
                ...state
            };
        }
        default:
            return {
                ...state
            }
    }
}