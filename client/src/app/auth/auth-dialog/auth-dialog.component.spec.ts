import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDialog } from './auth-dialog.component';
import { MatDialogRef } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AuthDialogComponent', () => {
  let component: AuthDialog;
  let fixture: ComponentFixture<AuthDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthDialog ],
      providers: [
        {provide: MatDialogRef, useValue: {}}
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
