import { Component, OnInit, Input, AfterViewInit, AfterContentChecked } from '@angular/core';
import { Event } from '../../../shared/model/event.model';
import { Observable, of, forkJoin } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { EVENTS_DATASOURCE } from 'src/app/shared/fake-datasource/events-datasource';
import { map, tap, startWith, delay } from 'rxjs/operators';
import { selectAllEvents, selectEventsByGenre, selectEventsPageByGenre } from '../store/events.selectors';
import { EventsPageRequested } from '../store/events.actions';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
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
  pageIndex: number;


  constructor(private store: Store<AppState>,
    private paginationService: PaginationService) { }

  ngOnInit() {

    this.events$ = this.store.pipe(
      select(selectEventsByGenre(this.musicGenre)),
    );
  }



    // this.paginationService.page$.subscribe(
    //   pageIndex => {
    //     this.events$ = this.store.pipe(
    //       tap(() => console.log(this.musicGenre, pageIndex)),
    //       select(selectEventsPageByGenre(this.musicGenre, { pageIndex: pageIndex, pageSize: 3 })),
    //     );
    //   }
    // )

  

  getDate(event: Event) {
    return `${event.date.getMonth()}, ${event.date.getDay()}`;
  }

  getStandsTicketPrice(tickets: Ticket[]) {
    const prices = tickets.map(ticket => ticket.price);
    return prices.reduce((acc, currentVal) => Math.min(acc, currentVal));
  }

}
