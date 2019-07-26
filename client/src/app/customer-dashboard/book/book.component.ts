import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Event } from 'src/app/shared/model/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventData as EventDataOverview} from '../../shared/event-overview/event-overview.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  eventDataOverview: EventDataOverview;

  event: Event;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  avilableTicketsArrName = 'Avilable Tickets';
  avilableTickets = [];

  userShoppingListArrName = 'Avilable Tickets';
  userShoppingList = [];

  constructor(private formBuilder: FormBuilder,
    private router: ActivatedRoute) { }

  ngOnInit() {
    console.log('in book component')
    this.event = this.router.snapshot.data['event'];

    this.initAvilableTickets();

    this.eventDataOverview = {
      eventId: this.event.id,
      title: this.event.title,
      img: this.event.img
    }
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

  private initAvilableTickets() {
    this.avilableTickets = this.event.tickets;
  }

  onShoppingListTicketAmmount() {

  }
}
