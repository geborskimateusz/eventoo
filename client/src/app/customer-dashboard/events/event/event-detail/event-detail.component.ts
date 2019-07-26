import { Component, OnInit, Input } from '@angular/core';
import { TicketModel } from 'src/app/shared/model/ticket-model';

export interface EventData {
  eventId: number,
  description: string,
  tickets: TicketModel[]
}

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  
  @Input() eventData: EventData;

  constructor() { }

  ngOnInit() {
    console.log(this.eventData)
  }

}
