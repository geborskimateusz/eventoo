import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { EventsCardListComponent } from './events-card-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/material.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { EventService } from 'src/app/shared/event.service';

fdescribe('EventsCardListComponent', () => {
  let component: EventsCardListComponent;
  let fixture: ComponentFixture<EventsCardListComponent>;
  let storeSpy: any;

  beforeEach(async(() => {

    storeSpy = jasmine.createSpyObj('Store', ["pipe", "dispatch"])

    TestBed.configureTestingModule({
      declarations: [EventsCardListComponent],
      imports: [
        RouterTestingModule,
        MaterialModule
      ],
      providers: [
        EventService,
        PaginationService,
        { provide: Store, useValue: storeSpy }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initEvents', fakeAsync(() => {

    component.initEvents();

    expect(storeSpy.dispatch).toHaveBeenCalled();

  }))
});
