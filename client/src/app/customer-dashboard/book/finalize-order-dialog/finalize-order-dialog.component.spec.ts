import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeOrderDialogComponent } from './finalize-order-dialog.component';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material';

describe('FinalizeOrderDialogComponent', () => {
  let component: FinalizeOrderDialogComponent;
  let fixture: ComponentFixture<FinalizeOrderDialogComponent>;
  let storeSpy;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj('Store', ["pipe", "dispatch"])

    TestBed.configureTestingModule({
      declarations: [ FinalizeOrderDialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Store, useValue: storeSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
