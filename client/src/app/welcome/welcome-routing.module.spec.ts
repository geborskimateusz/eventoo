import { routes } from "./welcome-routing.module";
import { Router } from '@angular/router';
import { TestBed, tick, fakeAsync } from '@angular/core/testing';
import { WelcomeComponent } from './welcome.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { Location } from "@angular/common";
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store';
import { EffectsModule } from '@ngrx/effects';

describe('WelcomeRoutingModule', () => {

    let location: Location;
    let router: Router;
    let fixture;


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes),
                HttpClientModule,
                SharedModule,
                StoreModule.forRoot(reducers),
                EffectsModule.forRoot([]),
            ],
            declarations: [
                WelcomeComponent,
            ],
            providers: [
                Location
            ],
            schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

        }).compileComponents();

        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(WelcomeComponent);
        router.initialNavigation();
    });


    it('should navigate to /about', fakeAsync(() => {
        router.navigate(['about']);

        tick();

        expect(location.path()).toBe('/about');
    }))
})