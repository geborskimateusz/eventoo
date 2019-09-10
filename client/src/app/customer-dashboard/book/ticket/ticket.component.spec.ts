import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketComponent } from './ticket.component';
import { Store } from '@ngrx/store';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EVENTS_DATASOURCE } from 'src/app/shared/fake-datasource/events-datasource';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';
import { ListTypes } from '../list-type';

describe('TicketComponent', () => {
  let component: TicketComponent;
  let fixture: ComponentFixture<TicketComponent>;
  let storeSpy;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj('Store', ["pipe", "dispatch"])

    TestBed.configureTestingModule({
      declarations: [ TicketComponent ],
      providers: [
        { provide: Store, useValue: storeSpy }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketComponent);
    component = fixture.componentInstance;

    let ticket = EVENTS_DATASOURCE[0].tickets[0];
    let orderedTicket: OrderedTicket = {
      amount: 3,
      ...ticket
    }
    component.ticket = orderedTicket;

    component.listType = ListTypes.AVILABLE_TICKETS;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
