import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatStepper } from '@angular/material';
import { Event } from 'src/app/shared/model/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventData as EventDataOverview } from '../../shared/event/event-overview/event-overview.component';
import { EventService } from '../../shared/event.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { selectAllTickets, selectTotalPrice } from './store/booking.selectors';
import { map } from 'rxjs/operators';
import { ListTypes } from './list-type';
import { Observable, of } from 'rxjs';
import { FinalizeOrderDialogComponent } from './finalize-order-dialog/finalize-order-dialog.component';



@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @ViewChild('stepper', { static: true }) stepper: MatStepper;


  aviableTicketsList = ListTypes.AVILABLE_TICKETS;
  shoppingList = ListTypes.SHOPPING_LIST;

  eventDataOverview: EventDataOverview;

  event: Event;

  avilableTickets: Observable<Ticket[]>;
  totalPrice: Observable<number>;


  constructor(private router: ActivatedRoute,
    private eventService: EventService,
    private store: Store<AppState>,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.event = this.router.snapshot.data['event'];

    this.initAvilableTickets();

    this.eventDataOverview = this.eventService.getEventDataOverview(this.event);

    this.totalPrice = this.store.pipe(
      select(selectTotalPrice)
    );

  }

  areTicketsChoosen(): Observable<boolean> {
    return this.store.pipe(
      select(selectAllTickets),
      map(tickets => tickets.length != 0)
    );
  }

  private initAvilableTickets() {
    this.avilableTickets = of([...this.event.tickets])
  }

  finalizePayment() {
    const dialogRef = this.dialog.open(FinalizeOrderDialogComponent, {
      maxWidth: '60rem',
    });

    dialogRef.afterClosed().subscribe(isOrderFinalized => {
      if (isOrderFinalized) {
        this.stepper.next();
      }
    });
  }

}
