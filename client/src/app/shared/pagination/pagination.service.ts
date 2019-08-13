import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectEventsPageByGenre } from 'src/app/customer-dashboard/events/store/events.selectors';
import { tap } from 'rxjs/operators';
import { EventsPageRequested } from 'src/app/customer-dashboard/events/store/events.actions';
import { genreToEnum } from '../model/music-genres.model';
import { Event } from '../model/event.model';

@Injectable()
export class PaginationService {

    private paginationPageSource = new Subject<number>();
    page$ = this.paginationPageSource.asObservable();

    private nextPageEventsFlagSource = new Subject<boolean>();
    nextPageEvents$ = this.nextPageEventsFlagSource.asObservable();

    constructor(private store: Store<AppState>) { }

    resetPointer() {
        const firstPage = 0;
        this.paginationPageSource.next(firstPage);
    }

    pageChange(page: number) {
        this.paginationPageSource.next(page);
    }

    isIncrementEnabled(events: Event[]) {
        if (events.length !== 0) {
            this.nextPageEventsFlagSource.next(true);
        } else {
            this.nextPageEventsFlagSource.next(false);
        }
    }

}

export const PAGE_SIZE: number = 6;