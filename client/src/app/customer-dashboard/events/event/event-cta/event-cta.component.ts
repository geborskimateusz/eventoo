import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TicketModel } from 'src/app/shared/ticket';

// BOOK DATA
// export interface EventData {
//   eventId: number,
//   img: string,
//   title: string,
//   date: Date,
//   tickets: {
//     VIP?: TicketModel,
//     goldenCircleEarlyEntrance?: TicketModel,
//     goldenCircleRegular?: TicketModel,
//     generalAdmission?: TicketModel,
//     stands?: TicketModel
//   }
// }

@Component({
  selector: 'app-event-cta',
  templateUrl: './event-cta.component.html',
  styleUrls: ['./event-cta.component.scss']
})
export class EventCtaComponent implements OnInit {

  @Input() eventId: number;

  constructor() { }

  ngOnInit() {
  }

}
