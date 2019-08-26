import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UIService {

    constructor(private snackBar: MatSnackBar) {}

    openSnackbar(message: string, action: any, duration: number): void {
        this.snackBar.open(
            message,
            action,
            {
                duration: duration,
            },
        );
    }
}