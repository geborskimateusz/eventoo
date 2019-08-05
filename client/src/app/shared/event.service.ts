import { Injectable } from "@angular/core";
import { Event } from 'src/app/shared/model/event.model';

@Injectable()
export class EventService {

    getEventDataOverview(event: Event) {
        return {
            eventId: event.id,
            title: event.title,
            img: event.img,
            date: event.date,
            location: event.locations
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