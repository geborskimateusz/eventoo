import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Event } from 'src/app/shared/model/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventData as EventDataOverview } from '../../shared/event/event-overview/event-overview.component';
import { EventService } from '../../shared/event.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { TicketsAdded } from './store/booking.actions';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';
import { Ticket } from 'src/app/shared/model/ticket-model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  eventDataOverview: EventDataOverview;

  event: Event;

  avilableTickets: Ticket[] = [];
  userShoppingList: OrderedTicket[] = [];
  totalPrice: number = 0;

  constructor(private router: ActivatedRoute,
    private eventService: EventService,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.event = this.router.snapshot.data['event'];

    this.initAvilableTickets();

    this.eventDataOverview = this.eventService.getEventDataOverview(this.event)
  }



  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  calculateTotalPrice(ticketPrice: number) {
    this.totalPrice += ticketPrice;
  }

  private initAvilableTickets() {
    this.avilableTickets = [...this.event.tickets];
  }

 


}
