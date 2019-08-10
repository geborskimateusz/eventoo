import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PaginationService {

    private paginationPointerResetSource = new Subject<number>();

    poinerReset$ = this.paginationPointerResetSource.asObservable();

    resetPointer() {
        const firstPAge = 1;

        this.paginationPointerResetSource.next(firstPAge);
    }
    
    
}