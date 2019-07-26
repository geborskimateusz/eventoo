import { Component, OnInit, Input } from '@angular/core';
import { TicketModel } from 'src/app/shared/ticket';

export interface EventData {
  eventId: number,
  title: string,
  img: string;
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
