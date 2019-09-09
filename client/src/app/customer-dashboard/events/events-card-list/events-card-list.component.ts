import { Component, OnInit, Input, AfterViewInit, AfterContentChecked, OnChanges } from '@angular/core';
import { Observable, of, forkJoin, EMPTY, zip, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { map, tap, startWith, delay, switchMap, filter, concat, concatMap, mergeMap, first, withLatestFrom, flatMap, take, repeat, exhaust, exhaustMap } from 'rxjs/operators';
import { selectAllEvents, selectEventsByGenre, selectEventsPageByGenre } from '../store/events.selectors';
import { EventsPageRequested } from '../store/events.actions';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { PaginationService, PAGE_SIZE } from 'src/app/shared/pagination/pagination.service';
import { MusicGenre, genreToEnum } from 'src/app/shared/model/music-genres.model';
import { selectPricePerType } from '../../book/store/booking.selectors';
import { AddEvent, DeleteEvent } from '../../navbar/shopping-cart/store/shopping-cart.actions';
import { selectEventsIDs as selectEventsIDs } from '../../navbar/shopping-cart/store/shopping-cart.selectors';
import { EventService } from 'src/app/shared/event.service';
import { Event } from 'src/app/shared/model/event.model';
import { selectIsLoading } from 'src/app/shared/ui/ui-store/ui.selectors';
import { StartLoading, StopLoading } from 'src/app/shared/ui/ui-store/ui.actions';

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
    this.isLoading$ = this.store.pipe(select(selectIsLoading))
    this.events$ = this.initEvents();
  }

  ngAfterViewInit() {
    this.events$ = this.onSearchEvents();
  }

  initEvents() {
    this.store.dispatch(new StartLoading())

    return this.paginationService.page$.pipe(
      switchMap(pageIndex => this.store.pipe(
        delay(0),
        select(selectEventsPageByGenre(this.musicGenre, { pageIndex: pageIndex, pageSize: PAGE_SIZE })),
        map(events => {
          return this.fetchOrSelectEvents(events, pageIndex)
        }),
        tap(events => {
          this.isEmpty$ = of(this.isListEmpty(events))
          this.paginationService.isIncrementEnabled(events)
        })
      ))
    );
  }

  fetchOrSelectEvents(events: Event[], pageIndex: number): any {
    if (events.length > 0) {

      this.store.dispatch(new StopLoading())

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
  }

  onSearchEvents() {
    return combineLatest(this.eventService.searchedEvent$, this.events$)
      .pipe(
        switchMap(([input, events]) => {

          input = input.toUpperCase();

          const isNotEmpty = input !== '';
          if (isNotEmpty) {

            events = events.reduce((arr, event) => {

              let upperCaseTitle = event.title.toUpperCase();

              if (upperCaseTitle.includes(input)) {
                arr.push(event);
              }

              return arr;

            }, [])
          }

          return [events];
        }))
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
