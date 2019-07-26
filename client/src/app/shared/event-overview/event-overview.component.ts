import { Component, OnInit, Input } from '@angular/core';
import { TicketModel } from 'src/app/shared/model/ticket-model';
import { Location } from '../model/location.model';

export interface EventData {
  eventId: number,
  title: string,
  img: string,
  date: Date,
  location: Location,
}

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.scss']
})
export class EventOverviewComponent implements OnInit {

  @Input() eventData: EventData;

  constructor() { }

  ngOnInit() {
  }

}
