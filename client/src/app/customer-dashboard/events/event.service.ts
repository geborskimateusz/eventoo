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
            location: event.location
        }
    }


}