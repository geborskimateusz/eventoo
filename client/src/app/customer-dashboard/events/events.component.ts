import { Component, OnInit, ɵConsole } from '@angular/core';
import { EVENTS_DATASOURCE } from 'src/app/shared/events-datasource';
import { Event } from 'src/app/shared/event.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  musicEvents$: Event[];
  

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.musicEvents$ = EVENTS_DATASOURCE;

  }

  getDate(index: number) {
    let event = this.musicEvents$[index];
    return `${event.date.getMonth()}, ${event.date.getDay()}`;
  }


}


