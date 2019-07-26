import { Component, OnInit } from '@angular/core';
import { EventModel } from 'src/app/shared/model/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventData as EventDataDetail} from './event-detail/event-detail.component';
import { EventData as EventDataOverview} from '../../../shared/event-overview/event-overview.component';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: EventModel;
  eventDataDetail: EventDataDetail;
  eventDataOverview: EventDataOverview;


  constructor(private router: ActivatedRoute) { 
    console.log('in event component')
  }

  ngOnInit() {
    this.event = this.router.snapshot.data['event'];

    this.eventDataOverview = {
      eventId: this.event.id,
      title: this.event.title,
      img: this.event.img
    }

    this.eventDataDetail = {
      eventId: this.event.id,
      description: this.event.description,
      tickets: this.event.tickets
    }
  }

}
