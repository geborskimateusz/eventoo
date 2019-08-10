import { Component, OnInit, ɵConsole } from '@angular/core';
import { EVENTS_DATASOURCE } from 'src/app/shared/fake-datasource/events-datasource';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectAllEvents } from './store/events.selectors';
import { EventsRequested } from './store/events.actions';
import { map } from 'rxjs/operators';
import { MusicGenre } from 'src/app/shared/model/music-genres.model';
import { MatTabChangeEvent } from '@angular/material';

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

    //initial request
    this.store.dispatch(new EventsRequested({musicGenre: MusicGenre.ALL, pageNum: 0}));
  }


  initMatTabs() {
    this.genresTabs = Object.values(MusicGenre);
  }


  tabChanged(tabChangeEvent: MatTabChangeEvent): void {
    console.log('tabChangeEvent => ', tabChangeEvent.tab.textLabel);
  }

  


}


