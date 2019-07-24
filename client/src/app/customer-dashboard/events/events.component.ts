import { Component, OnInit, ɵConsole } from '@angular/core';
import { EVENTS_DATASOURCE } from 'src/app/shared/events-datasource';
import { Event } from 'src/app/shared/event.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectAllEvents } from './store/events.selectors';
import { AllEventsRequested } from './store/events.actions';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events$: Observable<Event[]>;
  

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.store.dispatch(new AllEventsRequested());

    this.events$ = this.store.pipe(
      select(selectAllEvents)
    );

  }

  getDate(index: number) {
    let event = this.events$[index];
    return `${event.date.getMonth()}, ${event.date.getDay()}`;
  }


}


