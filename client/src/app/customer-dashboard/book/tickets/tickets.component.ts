import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { SaveOrUpdateTicket, DeleteTicket } from '../store/booking.actions';
import { selectAllTickets, selectPricePerType } from '../store/booking.selectors';
import { map, tap } from 'rxjs/operators';
import { ListTypes } from '../list-type';
import { Observable, of } from 'rxjs';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  @Input() listType: string;
  @Input() tickets: Observable<Ticket[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.initShoppingList();
  }

  isAvilableTicketsList(): boolean {
    return this.listType === ListTypes.AVILABLE_TICKETS;
  }

  private initShoppingList() {
    if (!this.isAvilableTicketsList()) {
      this.tickets = this.store.pipe(
        select(selectAllTickets));
    }
  }

}
