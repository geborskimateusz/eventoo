import { Component, OnInit, Input, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Event } from '../../../shared/model/event.model';
import { Observable, of, forkJoin } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { EVENTS_DATASOURCE } from 'src/app/shared/fake-datasource/events-datasource';
import { map, tap, startWith, delay, switchMap, filter, concat, concatMap, mergeMap } from 'rxjs/operators';
import { selectAllEvents, selectEventsByGenre, selectEventsPageByGenre } from '../store/events.selectors';
import { EventsPageRequested } from '../store/events.actions';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { PaginationService, PAGE_SIZE } from 'src/app/shared/pagination/pagination.service';
import { MusicGenre } from 'src/app/shared/model/music-genres.model';
import { selectPricePerType } from '../../book/store/booking.selectors';
@Component({
  selector: 'app-events-card-list',
  templateUrl: './events-card-list.component.html',
  styleUrls: ['./events-card-list.component.scss']
})
export class EventsCardListComponent implements OnInit {

  @Input() musicGenre: string;

  events$: Observable<Event[]>;


  constructor(private store: Store<AppState>,
    private paginationService: PaginationService) { }

  ngOnInit() {
  

    this.events$ = this.paginationService.page$.pipe(
      switchMap(pageIndex => this.store.pipe(
        delay(0),
        select(selectEventsPageByGenre(this.musicGenre, { pageIndex: pageIndex, pageSize: 3 })),
        map(events => {

          if (events.length > 0) {
            return events;
          }

          this.store.dispatch(new EventsPageRequested({
            musicGenre: MusicGenre[this.musicGenre.toUpperCase()],
            page: {
              pageIndex: pageIndex,
              pageSize: PAGE_SIZE
            }
          }));
    
          return [];
        })
      ))
    );

  }


  getDate(event: Event) {
    return `${event.date.getMonth()}, ${event.date.getDay()}`;
  }

  getStandsTicketPrice(tickets: Ticket[]) {
    const prices = tickets.map(ticket => ticket.price);
    return prices.reduce((acc, currentVal) => Math.min(acc, currentVal));
  }

}
