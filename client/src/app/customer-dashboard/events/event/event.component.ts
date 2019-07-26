import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/model/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventData as EventDataDetail } from './event-detail/event-detail.component';
import { EventData as EventDataOverview } from '../../../shared/event/event-overview/event-overview.component';
import { EventService } from '../../../shared/event.service';


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
  }

  ngOnInit() {
    this.event = this.router.snapshot.data['event'];

    this.eventDataOverview = this.eventService.getEventDataOverview(this.event);

    this.eventDataDetail = this.eventService.getEventDataDetail(this.event);
  }

}
