import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { selectAllTickets } from '../store/booking.selectors';
import { tap } from 'rxjs/operators';
import { BookTickets } from '../store/booking.actions';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  generateOrderConfirmation() {
    this.store.pipe(
      select(selectAllTickets),
      tap(tickets => {

        console.log('generateOrderConfirmation')
        this.store.dispatch(
          new BookTickets({
            orderedTickets: tickets
          }))
      })
    ).subscribe();
  }

}
