import { Component, OnInit, Input} from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectAllTickets } from '../store/booking.selectors';
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
