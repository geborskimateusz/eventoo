import { UIActionTypes, StartLoading, StopLoading } from "./ui.actions";
import { uiReducers, initialState } from './ui.reducers';

describe('ui-reducer', () => {

    
    it('should set isLoading to true', () => {
        const isLoading = true;

        const action = new StartLoading();
        const newState = uiReducers(initialState, action);

        const expectedState = { isLoading, ...initialState };

        expect(newState).toEqual(expectedState);
    })

    it('should set isLoading to false', () => {
        const isLoading = false;

        const action = new StopLoading();
        const newState = uiReducers(initialState, action);

        const expectedState = { isLoading, ...initialState };

        expect(newState).toEqual(expectedState);
    })


})