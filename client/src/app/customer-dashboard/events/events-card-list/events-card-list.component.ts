import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../../shared/event.model';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { EVENTS_DATASOURCE } from 'src/app/shared/events-datasource';
import { map } from 'rxjs/operators';
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
    console.log(this.musicGenre)
       // const events$ = this.store.pipe(
    //   select(selectAllEvents)
    // );
    // const events$ = of(EVENTS_DATASOURCE);

    //   this.events$ = events$.pipe(
    //   map(events => events.filter(event => event.genre === this.musicGenre.toUpperCase()))
    // )
  }

  getDate(event: Event) {
    // let event = this.events$[index];
    return `${event.date.getMonth()}, ${event.date.getDay()}`;
  }
}
