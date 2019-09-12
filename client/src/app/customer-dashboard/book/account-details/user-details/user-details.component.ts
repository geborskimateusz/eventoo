import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/shared/model/user-details';
import { selectUserDetails, isLoggedIn } from 'src/app/auth/store/auth.selector';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails$: Observable<UserDetails>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userDetails$ = this.store.pipe(
      select(selectUserDetails)
    );
  }
}
