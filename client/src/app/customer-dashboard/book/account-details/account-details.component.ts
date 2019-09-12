import { Component, OnInit, Input } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';
import { selectAllTickets } from '../store/booking.selectors';
import { Event } from 'src/app/shared/model/event.model';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  @Input() event: Event;
  @Input() totalPrice: number;
  
  orderedTickets: Observable<OrderedTicket[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.orderedTickets = this.store.pipe(
      select(selectAllTickets)
    )
  }

}
