import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLocalizationDialogComponent } from './event-localization-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

describe('EventLocalizationDialogComponent', () => {
  let component: EventLocalizationDialogComponent;
  let fixture: ComponentFixture<EventLocalizationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventLocalizationDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
              location: {
                lat: '0.123',
                lon: '0.123'
              }
          }
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLocalizationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
