import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { Store } from '@ngrx/store';

xdescribe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let storeSpy: any;

  beforeEach(async(() => {

    // storeSpy = jasmine.createSpyObj('Store', ["pipe", "select"]);


    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [MaterialModule],
      providers: [
        { provide: Store, useValue: storeSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
