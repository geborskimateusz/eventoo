import { Component, OnInit, ɵConsole } from '@angular/core';
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

  constructor(private paginationService: PaginationService) {
  }

  ngOnInit() {
    this.initMatTabs();
  }


  initMatTabs() {
    this.genresTabs = Object.values(MusicGenre);
  }


  tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    const activePage = tabChangeEvent.tab.textLabel;

    if (activePage !== this.currentTab) {
      this.paginationService.resetPointer();
    }
  }




}


