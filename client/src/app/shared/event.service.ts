import { Injectable } from "@angular/core";
import { Event } from 'src/app/shared/model/event.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class EventService {

    private searchedEventSource = new BehaviorSubject<string>('');
    searchedEvent$ = this.searchedEventSource.asObservable();

    searchEvent(bandName: string) {
        this.searchedEventSource.next(bandName);
    }



    getEventDataOverview(event: Event) {
        return {
            eventId: event.id,
            title: event.title,
            img: event.img,
            date: event.date,
            location: event.location
        }
    }

    getEventDataDetail(event: Event) {
        return {
            eventId: event.id,
            description: event.description,
            tickets: event.tickets
        }
    }


}