import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { selectAllTickets, selectBookingLoading } from '../store/booking.selectors';
import { tap } from 'rxjs/operators';
import { BookTicketsRequest } from '../store/booking.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-finalize-order-dialog',
  templateUrl: './finalize-order-dialog.component.html',
  styleUrls: ['./finalize-order-dialog.component.scss']
})
export class FinalizeOrderDialogComponent implements OnInit {


  @Output() confirmationOrder: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public dialogRef: MatDialogRef<FinalizeOrderDialogComponent>,
              private store: Store<AppState>) { }

  ngOnInit() {
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  orderFinalized() {
    return true;
  }

  generateOrderConfirmation() {
    console.log('odrer confirmation')
    this.store.pipe(
      select(selectAllTickets),
      tap(tickets => {

        this.store.dispatch(
          new BookTicketsRequest({
            orderedTickets: tickets
          }))
      })
    ).subscribe();
  }
}
