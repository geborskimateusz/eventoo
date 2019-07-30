import { Component, OnInit, Input, Output, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Event } from 'src/app/shared/model/event.model';
import { EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { BookingActionTypes, TicketsAdded, TicketAdded } from '../store/booking.actions';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {

  @Input() ticket: OrderedTicket;
  orderedTicket: OrderedTicket;

  @Output() priceChange: EventEmitter<number> = new EventEmitter<number>();

  ammount: number = 0;
  inStock: number = 0;
  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.inStock = this.ticket.inStock;

    this.incrementAmmount()

  }

  incrementAmmount() {
    const ticketsAreAvilable = this.inStock > 0;
    if (ticketsAreAvilable) {
      this.ammount++;
      this.inStock--;

      this.priceChange.emit(this.ticket.price)

      this.orderedTicket = { ...this.ticket, ammount: this.ammount }
      console.log(this.orderedTicket)
      this.store.dispatch(new TicketAdded({ orderedTicket: this.orderedTicket }))

    }
  }

  decrementAmmount() {
    if (this.ammount > 1) {
      this.ammount--;
      this.inStock++;

      const negativePrice = this.ticket.price * -1;
      this.priceChange.emit(negativePrice)

      this.orderedTicket = { ...this.ticket, ammount: this.ammount }
      this.store.dispatch(new TicketAdded({ orderedTicket: this.orderedTicket }))

    }
  }

  ngOnDestroy() {
    const totalNegative = this.ticket.price * this.ammount * -1;
    this.priceChange.emit(totalNegative)
  }

}
