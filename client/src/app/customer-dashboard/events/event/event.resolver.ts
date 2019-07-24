import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Event } from 'src/app/shared/event.model';
import { Observable, of } from 'rxjs';
import { EVENTS_DATASOURCE } from 'src/app/shared/events-datasource';

@Injectable() 
export class EventResolver implements Resolve<Event> {

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> {
        const eventId = route.params['id'];
        console.log('Requesting event with id ' + eventId);

        return of(EVENTS_DATASOURCE[0]);
    }
}