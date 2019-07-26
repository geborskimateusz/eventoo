import { Component, OnInit, ɵConsole } from '@angular/core';
import { EVENTS_DATASOURCE } from 'src/app/shared/events-datasource';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectAllEvents } from './store/events.selectors';
import { AllEventsRequested } from './store/events.actions';
import { map } from 'rxjs/operators';
import { MusicGenres } from 'src/app/shared/model/music-genres.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  genresTabs: any[] = [];
  
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.initMatTabs();

    this.store.dispatch(new AllEventsRequested());
  }


  initMatTabs() {
    this.genresTabs = Object.values(MusicGenres);
  }

  


}


