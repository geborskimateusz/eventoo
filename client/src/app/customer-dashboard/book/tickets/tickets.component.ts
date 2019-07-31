import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { TicketAdded } from '../store/booking.actions';
import { selectAllTickets } from '../store/booking.selectors';
import { map, tap } from 'rxjs/operators';
import { ListTypes } from '../list-type';
import { Observable } from 'rxjs';

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
    console.log(this.tickets, this.listType)

    if(this.listType === ListTypes.SHOPPING_LIST) {
     this.tickets = this.store.pipe(
       select(selectAllTickets),
     )
    }
  }


  isAvilableTicketsList() : boolean {
    console.log(this.listType === ListTypes.AVILABLE_TICKETS)
    return this.listType === ListTypes.AVILABLE_TICKETS;
  }

  onAddToShoppingList(ticket: Ticket) {
    this.store.dispatch(new TicketAdded({ orderedTicket: { ...ticket, ammount: 1 } }))
  }
}
