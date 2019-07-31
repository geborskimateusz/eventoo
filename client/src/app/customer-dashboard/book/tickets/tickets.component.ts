import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { TicketAdded } from '../store/booking.actions';
import { selectAllTickets } from '../store/booking.selectors';
import { map, tap } from 'rxjs/operators';
import { ListTypes } from '../list-type';
import { Observable } from 'rxjs';
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

    if (!this.isAvilableTicketsList()) {
      this.tickets = this.store.pipe(
        select(selectAllTickets),
      )
    }
  }


  isAvilableTicketsList(): boolean {
    return this.listType === ListTypes.AVILABLE_TICKETS;
  }

  onAddToShoppingList(ticket: Ticket) {
    this.store.dispatch(new TicketAdded({ orderedTicket: { ...ticket, ammount: 1 } }))
  }

  incrementAmmount(ticket: Ticket) {
    const ticketsAreAvilable = ticket.inStock > 0;
    if (ticketsAreAvilable) {

      const ammount = ticket.ammount + 1;
      const inStock = ticket.inStock - 1;
      this.store.dispatch(
        new TicketAdded({
          orderedTicket: { ...ticket, ammount, inStock }
        }));

    }
  }

  decrementAmmount(ticket: Ticket) {
    if (ticket.ammount > 1 && ticket.ammount < ticket.inStock) {


      // const negativePrice = this.ticket.price * -1;
      // this.priceChange.emit(negativePrice)


      const ammount = ticket.ammount - 1;
      const inStock = ticket.inStock + 1;
      this.store.dispatch(new TicketAdded({ orderedTicket: { ...ticket, ammount, inStock } }))

    }
  }

  // ngOnDestroy(ticket: Ticket) {
  //   const totalNegative = this.ticket.price * this.ammount * -1;
  //   this.priceChange.emit(totalNegative)
  // }
}
