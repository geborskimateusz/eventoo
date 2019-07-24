import { Component, OnInit, ɵConsole } from '@angular/core';
import { EVENTS_DATASOURCE } from 'src/app/shared/events-datasource';
import { Event } from 'src/app/shared/event.model';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectAllEvents } from './store/events.selectors';
import { AllEventsRequested } from './store/events.actions';
import { map } from 'rxjs/operators';
import { MusicGenres } from 'src/app/shared/music-genres.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  electronicEvents$: Observable<Event[]>;
  jazzEvents$: Observable<Event[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.store.dispatch(new AllEventsRequested());

    // const events$ = this.store.pipe(
    //   select(selectAllEvents)
    // );
    const events$ = of(EVENTS_DATASOURCE);
    
    this.electronicEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.ELECTRONIC))
    )

    this.jazzEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.JAZZ))
    )

  }

  


}


