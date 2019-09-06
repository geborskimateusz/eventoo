import { Location } from "@angular/common";
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router"
import { routes } from './app-routing.module';
import { WelcomeModule } from './welcome/welcome.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { AppModule } from './app.module';
import { SharedModule } from './shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { CustomerDashboardModule } from './customer-dashboard/customer-dashboard.module';
import { NgModuleFactoryLoader } from '@angular/core';

fdescribe('AppRoutingModule', () => {

    let location: Location;
    let router: Router;
    let fixture;


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes),
                WelcomeModule,
                SharedModule,
                StoreModule.forRoot(reducers),
                EffectsModule.forRoot([]),
                HttpClientModule
            ],
            declarations: [
                AppComponent,
            ],
            providers: [
                Location
            ]
        }).compileComponents();

        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();

    });

    it('should navigate from empty path to welcome', fakeAsync(() => {
        router.navigate(['']);
        tick();
        expect(location.path()).toBe('/welcome');
    }))

    it('should navigate to welcome', fakeAsync(() => {
        router.navigate(['welcome']);
        tick();
        expect(location.path()).toBe('/welcome');
    }))


    it('should navigate to /offer lazy loaded module', fakeAsync(() => {
        
        const loader = TestBed.get(NgModuleFactoryLoader);
        loader.stubbedModules = {
            './customer-dashboard/customer-dashboard.module#CustomerDashboardModule': CustomerDashboardModule
        };
      
        router.resetConfig([
          {path: 'offer', loadChildren: () => CustomerDashboardModule },
        ]);
      
        router.navigate(['offer']);
      
        tick();

        expect(location.path()).toBe('/offer/events');
      }));


      it('should navigate to uderConstruction', fakeAsync(() => {
        router.navigate(['underConstruction']);
        tick();
        expect(location.path()).toBe('/underConstruction');
    }))

})