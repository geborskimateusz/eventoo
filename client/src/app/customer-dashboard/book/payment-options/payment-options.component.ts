import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { selectAllTickets, selectBookingLoading, selectLatestInvoice } from '../store/booking.selectors';
import { tap } from 'rxjs/operators';
import { BookTicketsRequest } from '../store/booking.actions';
import { Observable } from 'rxjs';
import { DownloadRequested, SendByEmailRequested } from 'src/app/shared/util/util-store/util.actions';

@Component({
  selector: 'app-payment-options',
  templateUrl: './payment-options.component.html',
  styleUrls: ['./payment-options.component.scss']
})
export class PaymentOptionsComponent implements OnInit {

  isLoading$: Observable<boolean>;

  invoiceName: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isLoading$ = this.store.pipe(
      select(selectBookingLoading),
    )

    this.store.pipe(
      select(selectLatestInvoice),
    ).subscribe(fileName => this.invoiceName = fileName)
  }

  downloadInvoice() {
    this.store.dispatch(new DownloadRequested({ fileName: this.invoiceName }))
  }

  sendConfirmationOrderEmail() {
    this.store.dispatch(new SendByEmailRequested({ fileName: this.invoiceName }))
  }


}
