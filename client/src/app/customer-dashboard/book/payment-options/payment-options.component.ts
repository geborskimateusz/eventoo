import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { selectAllTickets, selectBookingLoading } from '../store/booking.selectors';
import { tap } from 'rxjs/operators';
import { BookTicketsRequest } from '../store/booking.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoading$ = this.store.pipe(
      select(selectBookingLoading),
      tap(isloading => console.log('is loading' ,isloading) )
    )
  }

 

}
