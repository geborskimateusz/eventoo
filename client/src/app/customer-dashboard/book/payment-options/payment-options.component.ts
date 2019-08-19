import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { selectAllTickets, selectBookingLoading, selectLatestInvoice } from '../store/booking.selectors';
import { tap } from 'rxjs/operators';
import { BookTicketsRequest } from '../store/booking.actions';
import { Observable } from 'rxjs';
import { DownloadRequested } from 'src/app/shared/util/file-store/files.actions';

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
    )
  }

  downloadInvoice() {
    this.store.pipe(
      select(selectLatestInvoice),
      tap(name => console.log(name))
    ).subscribe(invoiceName => {
      this.store.dispatch(new DownloadRequested({ fileName: invoiceName }))
    })
  }


}
