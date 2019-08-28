import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../store';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isLoggedIn } from './store/auth.selector';
import { UIService } from '../shared/ui/service/ui.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AppState>,
        private router: Router,
        private uiService: UIService) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.store
            .pipe(
                select(isLoggedIn),
                tap(isLoggedIn => {
                    if(!isLoggedIn) {
                        this.uiService.openSnackbar(
                            'You are not allowed to enter this page.',
                            null,
                            3000
                        )
                        this.router.navigateByUrl('/offer');
                    }
                })
            )
    }


}