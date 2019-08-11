import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PaginationService {

    private paginationPageSource = new Subject<number>();

    page$ = this.paginationPageSource.asObservable();

    resetPointer() {
        const firstPage = 1;

        this.paginationPageSource.next(firstPage);
    }

    pageChange(page: number) {
        this.paginationPageSource.next(page);
    }
    
    
}