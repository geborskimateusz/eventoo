import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthDialog } from './auth-dialog/auth-dialog.component';
import { AuthService } from './auth.service';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './store/auth.reducer';
import { AuthGuard } from './auth.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';

@NgModule({
    declarations: [

    LoginComponent,

    AuthDialog
    ],
    imports: [
      SharedModule,
      ReactiveFormsModule,
      StoreModule.forFeature('auth', fromAuth.authReducer),
      EffectsModule.forFeature([AuthEffects])
    ],
    providers: [
      AuthService,
      AuthGuard
    ],
    entryComponents: [
      AuthDialog
    ]
})
export class AuthModule {}