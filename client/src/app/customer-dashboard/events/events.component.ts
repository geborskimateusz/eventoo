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
  
  allEvents$: Observable<Event[]>;
  electronicEvents$: Observable<Event[]>;
  jazzEvents$: Observable<Event[]>;
  flamencoEvents$: Observable<Event[]>;
  danceEvents$: Observable<Event[]>;
  popEvents$: Observable<Event[]>;
  hipHopEvents$: Observable<Event[]>;
  rockEvents$: Observable<Event[]>;
  metalEvents$: Observable<Event[]>;
  folkEvents$: Observable<Event[]>;
  reggaeEvents$: Observable<Event[]>;
  soulEvents$: Observable<Event[]>;


  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.store.dispatch(new AllEventsRequested());

    // const events$ = this.store.pipe(
    //   select(selectAllEvents)
    // );
    const events$ = of(EVENTS_DATASOURCE);

    this.allEvents$ = events$;
    
    this.electronicEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.ELECTRONIC))
    )

    this.flamencoEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.FLAMENCO))
    )

    this.danceEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.DANCE))
    )

    this.popEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.POP))
    )

    this.jazzEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.JAZZ))
    )

    this.hipHopEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.HIP_HOP))
    )

    this.rockEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.ROCK))
    )

    this.metalEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.METAL))
    )

    this.folkEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.FOLK))
    )

    this.reggaeEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.REGGAE))
    )

    this.soulEvents$ = events$.pipe(
      map(events => events.filter(event => event.genre === MusicGenres.SOUL))
    )

  }

  


}


