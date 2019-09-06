import { Injectable } from "@angular/core";
import { Event } from 'src/app/shared/model/event.model';
import { Subject, BehaviorSubject } from 'rxjs';
import { Location} from './model/location.model';
import { Ticket } from './model/ticket-model';

export interface EventDataOverview {
    eventId: number,
    title: string,
    img: string,
    date: Date,
    location: Location
}

export interface EventDataDetail {
    eventId: number,
    description: string,
    tickets: Ticket[]
}

@Injectable()
export class EventService {

    private searchedEventSource = new BehaviorSubject<string>('');
    searchedEvent$ = this.searchedEventSource.asObservable();

    searchEvent(bandName: string) {
        this.searchedEventSource.next(bandName);
    }

    getEventDataOverview(event: Event): EventDataOverview {
        return {
            eventId: event.id,
            title: event.title,
            img: event.img,
            date: event.date,
            location: event.location
        }
    }

    getEventDataDetail(event: Event): EventDataDetail {
        return {
            eventId: event.id,
            description: event.description,
            tickets: event.tickets
        }
    }


}