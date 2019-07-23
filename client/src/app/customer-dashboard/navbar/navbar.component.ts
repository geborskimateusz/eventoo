import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthDialog } from 'src/app/auth/auth-dialog/auth-dialog.component';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { Logout } from 'src/app/auth/store/auth.actions';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { isLoggedIn } from 'src/app/auth/store/auth.selector';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(public dialog: MatDialog,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store
    .pipe(
      select(isLoggedIn)
    )
  
  }

  onLoginModalOpen() {
    this.dialog.open(AuthDialog,{
      width: '250px',
    })
  }

  onLogout() {
    this.store.dispatch(new Logout());
  }

}
