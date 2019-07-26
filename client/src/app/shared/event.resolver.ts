import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {  Event } from 'src/app/shared/model/event.model';
import { Observable, of } from 'rxjs';
import { EVENTS_DATASOURCE } from 'src/app/shared/events-datasource';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { selectEventById } from '../customer-dashboard/events/store/events.selectors';
import { EventRequested } from '../customer-dashboard/events/store/events.actions';
import { tap, filter, first } from 'rxjs/operators';

@Injectable() 
export class EventResolver implements Resolve<Event> {

    constructor(private store: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> {
        
        const eventId = route.params['id'];

        console.log('resolving id ', eventId)

        return this.store.pipe(
            select(selectEventById(eventId)),
            tap(event => {
                if(!event) {
                    this.store.dispatch(new EventRequested({eventId}))
                }
            }),
            filter(event => !!event),
            first()
        );
    }
}