import { Action } from '@ngrx/store';

export enum FilesActionTypes {
    DownloadRequested = '[File] Download Requested',
    // SendByEmailRequested = '[File] Send By Email Requested'
}

export class DownloadRequested implements Action {
    readonly type = FilesActionTypes.DownloadRequested;

    constructor(public payload: {fileName: string}) {}
}

export type FilesActions = DownloadRequested;