import { Component, OnInit, Input, Output, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Event } from 'src/app/shared/model/event.model';
import { EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { BookingActionTypes, TicketsAdded, TicketAdded } from '../store/booking.actions';
// import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {

  @Input() ticket: Ticket;

  @Output() priceChange: EventEmitter<number> = new EventEmitter<number>();

  ammount: number = 0;
  inStock: number = 0;
  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    console.log(this.ticket);
    // this.inStock = this.ticket.inStock;

    this.incrementAmmount();

  }

  incrementAmmount() {
    const ticketsAreAvilable = this.inStock > 0;
    if (ticketsAreAvilable) {
      // this.ticket.ammount+=1;
      // this.ticket.inStock-=1;

      this.priceChange.emit(this.ticket.price)

      // this.ticket = {...this.ticket, ammount: this.ammount}
      console.log(this.ticket)
      this.store.dispatch(new TicketAdded({ orderedTicket: this.ticket }))

    }
  }

  decrementAmmount() {
    if (this.ammount > 1) {
      this.ammount--;
      this.inStock++;

      const negativePrice = this.ticket.price * -1;
      this.priceChange.emit(negativePrice)

      this.ticket = {...this.ticket, ammount: this.ammount}
      console.log(this.ticket)
      this.store.dispatch(new TicketAdded({ orderedTicket: this.ticket }))

    }
  }

  ngOnDestroy() {
    const totalNegative = this.ticket.price * this.ammount * -1;
    this.priceChange.emit(totalNegative)
  }

}
