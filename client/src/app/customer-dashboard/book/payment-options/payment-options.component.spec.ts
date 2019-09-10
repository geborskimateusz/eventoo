import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOptionsComponent } from './payment-options.component';
import { MaterialModule } from 'src/app/material.module';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';

xdescribe('PaymentOptionsComponent', () => {
  let component: PaymentOptionsComponent;
  let fixture: ComponentFixture<PaymentOptionsComponent>;
  let storeSpy;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj('Store', ["pipe", "dispatch"])

    TestBed.configureTestingModule({
      declarations: [ PaymentOptionsComponent ],
      imports: [MaterialModule],
      providers: [
        { provide: Store, useValue: storeSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
