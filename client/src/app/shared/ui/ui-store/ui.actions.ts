import { Action } from '@ngrx/store';

export enum UIActionTypes {
    START_LOADING = '[UIActionTypes] Start Loading',
    STOP_LOADING = '[UIActionTypes] Stop Loading'
}

export class StartLoading implements Action {
    readonly type = UIActionTypes.START_LOADING;
}

export class StopLoading implements Action {
    readonly type = UIActionTypes.STOP_LOADING;
}

export type UIActions =
    StartLoading
    | StopLoading
