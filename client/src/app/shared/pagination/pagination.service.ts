import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Event } from '../model/event.model';

export const PAGE_SIZE: number = 6;

@Injectable()
export class PaginationService {
    
    firstPage = 0;

    private paginationPageSource = new BehaviorSubject<number>(this.firstPage);
    page$ = this.paginationPageSource.asObservable();

    private nextPageEventsFlagSource = new Subject<boolean>();
    nextPageEvents$ = this.nextPageEventsFlagSource.asObservable();

    constructor() { }

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
