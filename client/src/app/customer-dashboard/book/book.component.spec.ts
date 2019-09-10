import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { EventService } from 'src/app/shared/event.service';
import { MaterialModule } from 'src/app/material.module';
import { ActivatedRoute } from '@angular/router';
import { EVENTS_DATASOURCE } from 'src/app/shared/fake-datasource/events-datasource';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';


describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let storeSpy;

  beforeEach(async(() => {

    storeSpy = jasmine.createSpyObj('Store', ["pipe", "dispatch"])

    TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [
        RouterTestingModule,
        EventService,
        { provide: MatDialog, useValue: {} },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: { event: EVENTS_DATASOURCE[0] } },
          }
        },
        { provide: Store, useValue: storeSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
