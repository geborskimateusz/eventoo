import { Component, OnInit, Input } from '@angular/core';
import {Event} from '../../../shared/event.model';
@Component({
  selector: 'app-events-card-list',
  templateUrl: './events-card-list.component.html',
  styleUrls: ['./events-card-list.component.scss']
})
export class EventsCardListComponent implements OnInit {

  @Input() events: Event[];

  constructor() { }

  ngOnInit() {
    console.log(this.events)
  }
  
  getDate(event: Event) {
    // let event = this.events$[index];
    return `${event.date.getMonth()}, ${event.date.getDay()}`;
  }
}
