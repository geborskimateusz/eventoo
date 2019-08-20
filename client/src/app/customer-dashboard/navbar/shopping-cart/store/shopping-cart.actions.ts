import { Action } from '@ngrx/store';
import { Event } from 'src/app/shared/model/event.model';

export enum ShoppingCartActionTypes {
    AddEvent = '[Shopping Cart API] Add event',
    DeleteEvent = '[Shopping Cart API] Delete event' 
}

export class AddEvent implements Action {
    readonly type = ShoppingCartActionTypes.AddEvent;
    constructor(public payload: {event: Event}) {}
}

export class DeleteEvent implements Action {
    readonly type = ShoppingCartActionTypes.DeleteEvent;
    constructor(public payload: {eventId: number}) {}
}

export type ShoppingCartActions = 
    AddEvent |
    DeleteEvent;