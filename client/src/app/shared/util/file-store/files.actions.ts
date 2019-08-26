import { Action } from '@ngrx/store';

export enum FilesActionTypes {
    DownloadRequested = '[File] Download Requested',
    SendByEmailRequested = '[File] Send By Email Requested',
    ContactRequest = '[File] Contact Request'
}

export class DownloadRequested implements Action {
    readonly type = FilesActionTypes.DownloadRequested;

    constructor(public payload: { fileName: string }) { }
}

export class SendByEmailRequested implements Action {
    readonly type = FilesActionTypes.SendByEmailRequested;

    constructor(public payload: { fileName: string }) { }
}

export class ContactRequest implements Action {
    readonly type = FilesActionTypes.ContactRequest;

    constructor(public payload: { email: string, fullName: string }) { }
}

export type FilesActions =
    DownloadRequested
    | SendByEmailRequested
    | ContactRequest;