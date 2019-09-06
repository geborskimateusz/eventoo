import { EventService } from "./event.service";
import { TestBed, async, flushMicrotasks, fakeAsync, tick } from '@angular/core/testing';

fdescribe('EventService', () => {

    let eventService: EventService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                EventService
            ]
        });

        eventService = TestBed.get(EventService);
    })

    it('initial value', fakeAsync(() => {
        let initialVal = '';

        eventService.searchedEvent$.subscribe(data => {
            expect(data).toBe(initialVal);
        })
    }))

    it('searchEvent', fakeAsync(() => {
        let bandName = 'Metallica';

        spyOn(eventService, 'searchEvent').and.callThrough();

        eventService.searchEvent(bandName);

        expect(eventService.searchEvent).toHaveBeenCalledWith(bandName);

        eventService.searchedEvent$.subscribe(data => {
            expect(data).toBe(bandName);
        })

    }));


})