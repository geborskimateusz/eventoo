import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsComponent } from './tickets.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';

describe('AvilableTicketsComponent', () => {
  let component: TicketsComponent;
  let fixture: ComponentFixture<TicketsComponent>;
  let storeSpy;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj('Store', ["pipe", "dispatch"])

    TestBed.configureTestingModule({
      declarations: [TicketsComponent],
      providers: [
        { provide: Store, useValue: storeSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
