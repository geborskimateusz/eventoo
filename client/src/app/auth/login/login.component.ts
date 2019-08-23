import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { AuthService } from '../auth.service';
import { tap, } from 'rxjs/operators';
import { noop } from "rxjs";
import { Login, LoginRequest } from '../store/auth.actions';
import { ShoppingCartRequest } from 'src/app/customer-dashboard/navbar/shopping-cart/store/shopping-cart.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() onAuthSuccesfull = new EventEmitter();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>) {

    this.form = formBuilder.group({
      email: ['doe055952@gmail.com', [Validators.required]],
      password: ['fakeemail@gmail.com', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  login() {
    const authData = this.form.value;

    this.store.dispatch(new LoginRequest({ username: authData.email, password: authData.password }));

  //   this.authService.login(authData.email, authData.password)
  //     .pipe(
  //       tap(userDetails => {

  //         this.store.dispatch(new Login({ userDetails }));
  //         this.onAuthSuccesfull.emit(true);

  //         this.store.dispatch(new ShoppingCartRequest({ userId: userDetails.id }))
  //       })
  //     )
  //     .subscribe(
  //       noop,
  //       () => alert('Login Failed')
  //     );
  }

}
