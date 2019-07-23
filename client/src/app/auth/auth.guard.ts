import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppState } from '../store';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router'; 
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isLoggedIn } from './store/auth.selector';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AppState>,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.store
            .pipe(
                select(isLoggedIn),
                tap(isLoggedIn => {
                    if(!isLoggedIn) {
                        this.router.navigateByUrl('/offer');
                    }
                })
            )
    }


}