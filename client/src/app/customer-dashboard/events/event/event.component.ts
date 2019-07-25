import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/event.model';
import { ActivatedRoute } from '@angular/router';
import { EventData as EventDataDetail} from './event-detail/event-detail.component';
import { EventData as EventDataOverwiev} from './event-overview/event-overview.component';
import {EventData as EventDataCta} from './event-cta/event-cta.component'


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: Event;
  eventDataDetail: EventDataDetail;
  eventDataOverview: EventDataOverwiev;
  eventDataCta: EventDataCta;


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

    this.eventDataCta = {
      eventId: this.event.id,
      title: this.event.title,
      img: this.event.img,
      date: this.event.date,
      tickets: this.event.tickets
    }
  }

}
