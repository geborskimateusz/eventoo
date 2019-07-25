import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../shared/event.model';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { EVENTS_DATASOURCE } from 'src/app/shared/events-datasource';
import { map } from 'rxjs/operators';
import { selectAllEvents, selectEventsByGenre } from '../store/events.selectors';
import { AllEventsRequested } from '../store/events.actions';
@Component({
  selector: 'app-events-card-list',
  templateUrl: './events-card-list.component.html',
  styleUrls: ['./events-card-list.component.scss']
})
export class EventsCardListComponent implements OnInit {

  @Input() musicGenre: string;

  events$: Observable<Event[]>;


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.events$ = this.store.pipe(
      select(selectEventsByGenre(this.musicGenre))
    );
  }

  getDate(event: Event) {
    // let event = this.events$[index];
    return `${event.date.getMonth()}, ${event.date.getDay()}`;
  }
}
