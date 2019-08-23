import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { selectEventsPageByGenre } from 'src/app/customer-dashboard/events/store/events.selectors';
import { tap } from 'rxjs/operators';
import { EventsPageRequested } from 'src/app/customer-dashboard/events/store/events.actions';
import { genreToEnum } from '../model/music-genres.model';
import { Event } from '../model/event.model';

@Injectable()
export class PaginationService {
    firstPage = 0;

    private paginationPageSource = new BehaviorSubject<number>(this.firstPage);
    page$ = this.paginationPageSource.asObservable();

    private nextPageEventsFlagSource = new Subject<boolean>();
    nextPageEvents$ = this.nextPageEventsFlagSource.asObservable();

    constructor(private store: Store<AppState>) { }

    resetPointer() {
        this.paginationPageSource.next(this.firstPage);
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