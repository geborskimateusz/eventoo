import { Component, OnInit, Input, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Event } from '../../../shared/model/event.model';
import { Observable, of, forkJoin } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { map, tap, startWith, delay, switchMap, filter, concat, concatMap, mergeMap } from 'rxjs/operators';
import { selectAllEvents, selectEventsByGenre, selectEventsPageByGenre, selectEventsLoading } from '../store/events.selectors';
import { EventsPageRequested } from '../store/events.actions';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { PaginationService, PAGE_SIZE } from 'src/app/shared/pagination/pagination.service';
import { MusicGenre, genreToEnum } from 'src/app/shared/model/music-genres.model';
import { selectPricePerType } from '../../book/store/booking.selectors';
@Component({
  selector: 'app-events-card-list',
  templateUrl: './events-card-list.component.html',
  styleUrls: ['./events-card-list.component.scss']
})
export class EventsCardListComponent implements OnInit {

  @Input() musicGenre: string;

  events$: Observable<Event[]>;

  isLoading$: Observable<boolean>;

  isEmpty$: Observable<boolean>;

  constructor(private store: Store<AppState>,
    private paginationService: PaginationService) { }

  ngOnInit() {

    this.isLoading$ = this.store.pipe(select(selectEventsLoading))

    this.events$ = this.paginationService.page$.pipe(
      switchMap(pageIndex => this.store.pipe(
        delay(0),
        select(selectEventsPageByGenre(this.musicGenre, { pageIndex: pageIndex, pageSize: PAGE_SIZE })),
        map(events => {

          if (events.length > 0) {
            return events;
          }

          this.store.dispatch(new EventsPageRequested({
            musicGenre: genreToEnum(this.musicGenre),
            page: {
              pageIndex: pageIndex,
              pageSize: PAGE_SIZE
            }
          }));

          return [];
        }),
        tap(events => {
          this.isEmpty$ = of(this.isListEmpty(events))
          this.paginationService.isIncrementEnabled(events)
        })
      ))
    );

  }


  getDate(event: Event) {
    return `${event.date.getDay()}.${event.date.getMonth()}.${event.date.getFullYear()}`;
  }

  getStandsTicketPrice(tickets: Ticket[]) {
    const prices = tickets.map(ticket => ticket.price);
    return prices.reduce((acc, currentVal) => Math.min(acc, currentVal));
  }

  isListEmpty(events: Event[]): boolean {
    return events.length === 0;
  }

  onBookmark(eventId: number) {
    console.log('onBookmark ', eventId)
    //if event is in store -> remove 
    //else add to store 
    //change icon style
  }

  isActive(eventId: number) {
    //select if in bookmark store
    //return true/false 
    return of(false)

  }

}
