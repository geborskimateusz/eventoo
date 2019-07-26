import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/model/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventData as EventDataDetail} from './event-detail/event-detail.component';
import { EventData as EventDataOverview} from '../../../shared/event-overview/event-overview.component';
import { EventService } from '../event.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: Event;
  eventDataDetail: EventDataDetail;
  eventDataOverview: EventDataOverview;


  constructor(private router: ActivatedRoute,
              private eventService: EventService) { 
    console.log('in event component')
  }

  ngOnInit() {
    this.event = this.router.snapshot.data['event'];

    this.eventDataOverview = this.eventService.getEventDataOverview(this.event);

    this.eventDataDetail = {
      eventId: this.event.id,
      description: this.event.description,
      tickets: this.event.tickets
    }
  }

}
