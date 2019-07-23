import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Login } from '../store/auth.actions';
import { AuthService } from '../auth.service';
import { tap, } from 'rxjs/operators';
import {noop} from "rxjs";


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
      email: ['fakeemail@gmail.com', [Validators.required]],
      password: ['a', [Validators.required]]
    })
  }

  ngOnInit() {
  }

  login() {
    const authData = this.form.value;
    console.log(authData);
    this.authService.login(authData.email, authData.password)
    .pipe(
      tap(user => {
        console.log(user);
        this.store.dispatch(new Login({user}));
        this.onAuthSuccesfull.emit(true);
      })
    )
    .subscribe(
      noop,
      () => alert('Login Failed')
    );
  }

}
