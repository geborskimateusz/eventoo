import { Action } from '@ngrx/store';
import { Event } from 'src/app/shared/model/event.model';

export enum ShoppingCartActionTypes {
    AddEvent = '[Shopping Cart API] Add event',
    DeleteEvent = '[Shopping Cart API] Delete event',
    ShoppingCartRequest = '[Shopping Cart API] Shopping Cart Request',
    AddEventsToShoppingCart = '[Shopping Cart API] Add Events To Shopping Cart',
    PutShoppingCart = '[Shopping Cart API] Put Shopping Car',
}

export class AddEvent implements Action {
    readonly type = ShoppingCartActionTypes.AddEvent;
    constructor(public payload: { event: Event }) { }
}

export class DeleteEvent implements Action {
    readonly type = ShoppingCartActionTypes.DeleteEvent;
    constructor(public payload: { eventId: number }) { }
}

export class ShoppingCartRequest implements Action {
    readonly type = ShoppingCartActionTypes.ShoppingCartRequest;
    constructor(public payload: { userId: number }) { }
}

export class AddEventsToShoppingCart implements Action {
    readonly type = ShoppingCartActionTypes.AddEventsToShoppingCart;
    constructor(public payload: { events: Event[] }) { }
}

export class PutShoppingCart implements Action {
    readonly type = ShoppingCartActionTypes.PutShoppingCart;
    constructor(public payload: {eventsIds: number[] }) { }
}

export type ShoppingCartActions =
    AddEvent
    | DeleteEvent
    | ShoppingCartRequest
    | AddEventsToShoppingCart
    | PutShoppingCart;