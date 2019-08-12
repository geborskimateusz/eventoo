import { Component, OnInit, ɵConsole } from '@angular/core';
import { EVENTS_DATASOURCE } from 'src/app/shared/fake-datasource/events-datasource';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectAllEvents } from './store/events.selectors';
import { EventsPageRequested } from './store/events.actions';
import { map } from 'rxjs/operators';
import { MusicGenre } from 'src/app/shared/model/music-genres.model';
import { MatTabChangeEvent } from '@angular/material';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  genresTabs: any[] = [];

  currentTab: MusicGenre = MusicGenre.ALL;

  constructor(private store: Store<AppState>,
    private paginationService: PaginationService) {
  }

  ngOnInit() {
    console.log('initialize EventsComponent')

    this.initMatTabs();

    this.paginationService.page$.subscribe(pageIndex => {
      console.log(this.currentTab, pageIndex)
      this.store.dispatch(new EventsPageRequested({
        musicGenre: this.currentTab,
        page: {
          pageIndex: pageIndex,
          pageSize: 3
        }
      }));
    });
  }


  initMatTabs() {
    this.genresTabs = Object.values(MusicGenre);
  }


  tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    const activePage = tabChangeEvent.tab.textLabel;

    if (activePage !== this.currentTab) {
      console.log('reset page')
      this.paginationService.resetPointer();
      this.currentTab = MusicGenre[activePage.toUpperCase()];
    }

    console.log(this.currentTab)
  }




}


