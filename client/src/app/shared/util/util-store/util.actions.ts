import { Action } from '@ngrx/store';

export enum UtilActionTypes {
    DownloadRequested = '[Util] Download Requested',
    SendByEmailRequested = '[Util] Send By Email Requested',
    ContactRequest = '[Util] Contact Request'
}

export class DownloadRequested implements Action {
    readonly type = UtilActionTypes.DownloadRequested;

    constructor(public payload: { fileName: string }) { }
}

export class SendByEmailRequested implements Action {
    readonly type = UtilActionTypes.SendByEmailRequested;

    constructor(public payload: { fileName: string }) { }
}

export class ContactRequest implements Action {
    readonly type = UtilActionTypes.ContactRequest;

    constructor(public payload: { email: string, fullName: string }) { }
}

export type FilesActions =
    DownloadRequested
    | SendByEmailRequested
    | ContactRequest;