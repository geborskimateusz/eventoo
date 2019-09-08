import { TestBed, fakeAsync, tick, flushMicrotasks } from "@angular/core/testing";
import { PaginationService } from './pagination.service';
import { of } from 'rxjs/internal/observable/of';

fdescribe('PaginationService', () => {
    const firstPage = 0;

    let pagintationService: PaginationService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            providers: [PaginationService]
        }).compileComponents();

        pagintationService = TestBed.get(PaginationService);
    })

    it('resetPointer', () => {

        spyOn(pagintationService, 'resetPointer');

        pagintationService.resetPointer();

        pagintationService.page$.subscribe(pageNum => {
            expect(pageNum).toBe(firstPage);
        })

        expect(pagintationService.resetPointer).toHaveBeenCalled();
    })

    it('pageChange', fakeAsync(() => {
        let pageNum = 3;
        
        spyOn(pagintationService, 'pageChange').and.callThrough();

        pagintationService.pageChange(pageNum);

        pagintationService.page$.subscribe(num =>
            expect(num).toBe(pageNum))

        expect(pagintationService.pageChange).toHaveBeenCalledWith(3);
    }))

    it('isIncrementEnabled should return false', fakeAsync(() => {
        spyOn(pagintationService, 'isIncrementEnabled');

        pagintationService.isIncrementEnabled([]);

        expect(pagintationService.isIncrementEnabled).toHaveBeenCalled();

        pagintationService.nextPageEvents$.subscribe(enabled => {
            expect(enabled).toBeFalsy();
        })
    }))


})