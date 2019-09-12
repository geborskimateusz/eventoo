import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApplicationConstans } from 'src/app/app-const';
import { UIService } from '../../ui/service/ui.service';
import { ContactRequest, DownloadRequested, SendByEmailRequested, UtilActionTypes } from './util.actions';

@Injectable()
export class UtilEffects {

    constructor(private actions$: Actions,
        private httpClient: HttpClient,
        private uiService: UIService) { }


    @Effect({ dispatch: false })
    download$ = this.actions$.pipe(
        ofType<DownloadRequested>(UtilActionTypes.DownloadRequested),
        switchMap(action => {
            let fileName = action.payload.fileName;

            let headers = new HttpHeaders();
            headers = headers.set('Accept', 'application/pdf');

            let url = `${ApplicationConstans.BASE_URL}/order/${fileName}`;

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
        ofType<SendByEmailRequested>(UtilActionTypes.SendByEmailRequested),
        switchMap(action => {
            let fileName = action.payload.fileName;

            let headers = new HttpHeaders();
            headers = headers.set('Accept', 'application/pdf');

            let url = `${ApplicationConstans.BASE_URL}/messages/confirmationOrder?invoice=${fileName}`;

            return this.httpClient.get(url)
                .pipe(
                    catchError(err => {

                        console.log(err)

                        this.openSnackBar('Something went wrong.');

                        return EMPTY;
                    })
                );
        }),
        map(() => this.openSnackBar('Message was sent successfully. ☑️'))
    )

    @Effect({ dispatch: false })
    contactRequest$ = this.actions$.pipe(
        ofType<ContactRequest>(UtilActionTypes.ContactRequest),
        switchMap(action => {
            let email = action.payload.email;
            let fullName = action.payload.fullName;

            let url = `${ApplicationConstans.BASE_URL}/messages/contactRequest?email=${email}&fullName=${fullName}`;

            return this.httpClient.get(url)
                .pipe(
                    catchError(err => {

                        console.log(err)

                        this.openSnackBar('Something went wrong.');

                        return EMPTY;
                    })
                );
        }),
        map(() => this.openSnackBar('Message was sent successfully. ☑️'))
    )


    private openSnackBar(message: string) {
        this.uiService.openSnackbar(
            message,
            null,
            3000
        )
    }
}