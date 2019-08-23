import { Component, OnInit, Input, AfterViewInit, AfterContentChecked, OnChanges } from '@angular/core';
import { Event } from '../../../shared/model/event.model';
import { Observable, of, forkJoin, EMPTY, zip, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { map, tap, startWith, delay, switchMap, filter, concat, concatMap, mergeMap, first, withLatestFrom, flatMap, take, repeat, exhaust, exhaustMap } from 'rxjs/operators';
import { selectAllEvents, selectEventsByGenre, selectEventsPageByGenre, selectEventsLoading } from '../store/events.selectors';
import { EventsPageRequested } from '../store/events.actions';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { PaginationService, PAGE_SIZE } from 'src/app/shared/pagination/pagination.service';
import { MusicGenre, genreToEnum } from 'src/app/shared/model/music-genres.model';
import { selectPricePerType } from '../../book/store/booking.selectors';
import { AddEvent, DeleteEvent } from '../../navbar/shopping-cart/store/shopping-cart.actions';
import { selectEventsIDs as selectEventsIDs } from '../../navbar/shopping-cart/store/shopping-cart.selectors';
import { EventService } from 'src/app/shared/event.service';
@Component({
  selector: 'app-events-card-list',
  templateUrl: './events-card-list.component.html',
  styleUrls: ['./events-card-list.component.scss']
})
export class EventsCardListComponent implements OnInit, AfterViewInit {

  @Input() musicGenre: string;

  events$: Observable<Event[]>;

  isLoading$: Observable<boolean>;

  isEmpty$: Observable<boolean>;

  constructor(private store: Store<AppState>,
    private paginationService: PaginationService,
    private eventService: EventService) { }

  ngOnInit() {

    this.isLoading$ = this.store.pipe(select(selectEventsLoading))

    this.events$ = this.initEvents();

  }

  ngAfterViewInit() {

    combineLatest(this.eventService.searchedEvent$, this.events$)
      .subscribe(([input, events]) => {

        if (input !== '') {
          console.log('searching for ' + input + ' in [].size = ' + events.length)
        } else {
          console.log('empty imput, resetting array')
        }
      })


  }

  initEvents() {
    return this.paginationService.page$.pipe(
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

  onAddToShoppingCart(event: Event) {

    this.store.pipe(

      // <any> -> ngrx issue workaround
      select(<any>selectEventsIDs),
      first(),
      tap(ids => {

        ids.includes(event.id) ?
          this.store.dispatch(new DeleteEvent({ event: event })) :
          this.store.dispatch(new AddEvent({ event }));


      })
    ).subscribe();
  }

  isInShoppingCart(eventId: number): Observable<boolean> {
    return this.store.pipe(
      select(<any>selectEventsIDs),
      map(ids => ids.includes(eventId))
    )
  }

}
