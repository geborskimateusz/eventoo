import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserDetails } from 'src/app/shared/model/user-details';
import { selectUserDetails, isLoggedIn } from 'src/app/auth/store/auth.selector';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  userDetails$: Observable<UserDetails>;

  fullName: string;
  address: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.userDetails$ = this.store.pipe(
      select(selectUserDetails),
      map(details => {

        this.fullName = `${details.firstName} ${details.lastName}`;

        this.address =
          `${details.address.city},
         ${details.address.street},
         ${details.address.homeNo},
         ${details.address.postalCode},
         ${details.address.country} `;

        return details;
      })
    );
  }
}