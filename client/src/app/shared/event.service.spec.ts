import { EventService, EventDataOverview, EventDataDetail } from "./event.service";
import { TestBed, async, flushMicrotasks, fakeAsync, tick } from '@angular/core/testing';
import { EVENTS_DATASOURCE } from './fake-datasource/events-datasource';

fdescribe('EventService', () => {

    let eventService: EventService;
    let fakeEvent = EVENTS_DATASOURCE[0];

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                EventService
            ]
        });

        eventService = TestBed.get(EventService);
    })

    it('initial value', fakeAsync(() => {
        let initialVal: string = '';

        eventService.searchedEvent$.subscribe(data => {
            expect(data).toBe(initialVal);
        })
    }))

    it('searchEvent', fakeAsync(() => {
        let bandName: string = 'Metallica';

        spyOn(eventService, 'searchEvent').and.callThrough();

        eventService.searchEvent(bandName);

        expect(eventService.searchEvent).toHaveBeenCalledWith(bandName);

        eventService.searchedEvent$.subscribe(data => {
            expect(data).toBe(bandName);
        })

    }));

    it('getEventDataOverview', () => {

        let eventDataOverview: EventDataOverview =
            eventService.getEventDataOverview(fakeEvent);

        expect(
            eventDataOverview.eventId === fakeEvent.id &&
            eventDataOverview.date == fakeEvent.date
        ).toBeTruthy();

    })


    it('getEventDataDetail', () => {

        let eventDataDetail: EventDataDetail =
            eventService.getEventDataDetail(fakeEvent);

        expect(
            eventDataDetail.eventId === fakeEvent.id &&
            eventDataDetail.description == fakeEvent.description
        ).toBeTruthy();

    })


})









