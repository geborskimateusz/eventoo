import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Event } from 'src/app/shared/model/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventData as EventDataOverview } from '../../shared/event/event-overview/event-overview.component';
import { EventService } from '../../shared/event.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { TicketsAdded, TicketAdded } from './store/booking.actions';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { selectAllTickets, selectTotalPrice } from './store/booking.selectors';
import { map, tap } from 'rxjs/operators';
import { ListTypes } from './list-type';
import { Observable, of } from 'rxjs';
import { selectEventById } from '../events/store/events.selectors';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  aviableTicketsList = ListTypes.AVILABLE_TICKETS;
  shoppingList = ListTypes.SHOPPING_LIST;

  eventDataOverview: EventDataOverview;

  event: Event;

  avilableTickets: Observable<Ticket[]>;
  // userShoppingList: Ticket[] = [];
  totalPrice: Observable<number>;

  constructor(private router: ActivatedRoute,
    private eventService: EventService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.event = this.router.snapshot.data['event'];

    this.initAvilableTickets();

    this.eventDataOverview = this.eventService.getEventDataOverview(this.event);

    this.totalPrice = this.store.pipe(
      select(selectTotalPrice)
    );

  }

  private initAvilableTickets() {
    this.avilableTickets = of([...this.event.tickets])
  }




}
