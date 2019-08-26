import { Inject, Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DownloadRequested, FilesActionTypes, SendByEmailRequested, ContactRequest } from './files.actions';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class FilesEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient) { }


    @Effect({ dispatch: false })
    download$ = this.actions$.pipe(
        ofType<DownloadRequested>(FilesActionTypes.DownloadRequested),
        switchMap(action => {
            let fileName = action.payload.fileName;

            let headers = new HttpHeaders();
            headers = headers.set('Accept', 'application/pdf');

            let url = `http://localhost:8080/api/v1/order/${fileName}`;
            console.log(url)

            return this.httpClient.get(url, { headers: headers, responseType: 'blob' })
                .pipe(
                    catchError(err => {
                        console.log(err)
                        return EMPTY;
                    })
                )
        }),
        map(file => {
            let pdf = new Blob([file], { type: 'application/pdf' });
            let fileURL = URL.createObjectURL(pdf);
            window.open(fileURL)
        })
    )

    @Effect({ dispatch: false })
    sendConfirmationOrderEmail$ = this.actions$.pipe(
        ofType<SendByEmailRequested>(FilesActionTypes.SendByEmailRequested),
        tap(action => {
            let fileName = action.payload.fileName;

            let headers = new HttpHeaders();
            headers = headers.set('Accept', 'application/pdf');

            let url = `http://localhost:8080/api/v1/messages?invoice=${fileName}`;

            this.httpClient.get(url)
                .pipe(
                    catchError(err => {
                        console.log(err)
                        return EMPTY;
                    })
                ).subscribe();
        })
    )

    @Effect({ dispatch: false })
    contactRequest$ = this.actions$.pipe(
        ofType<ContactRequest>(FilesActionTypes.ContactRequest),
        tap(action => {
            let email = action.payload.email;
            let fullName = action.payload.fullName;

            let url = `http://localhost:8080/api/v1/messages?email=${email}?fullName=${fullName}`;

            this.httpClient.get(url)
                .pipe(
                    catchError(err => {
                        console.log(err)
                        return EMPTY;
                    })
                ).subscribe();
        })
    )
}