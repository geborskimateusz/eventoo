import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { MusicGenre } from 'src/app/shared/model/music-genres.model';
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


