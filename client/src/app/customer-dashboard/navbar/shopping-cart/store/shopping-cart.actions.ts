import { Action } from '@ngrx/store';
import { Event } from 'src/app/shared/model/event.model';

export enum ShoppingCartActionTypes {
    AddEvent = '[Shopping Cart API] Add event',
    DeleteEvent = '[Shopping Cart API] Delete event',
    ShoppingCartRequest = '[Shopping Cart API] Shopping Cart Request',
    AddEventsToShoppingCart = '[Shopping Cart API] Add Events To Shopping Cart',
    PutShoppingCart = '[Shopping Cart API] Put Shopping Cart',
    ResetShoppingCart = '[Shopping Cart API] Reset Shopping Cart',
}

export class AddEvent implements Action {
    readonly type = ShoppingCartActionTypes.AddEvent;
    constructor(public payload: { event: Event }) { }
}

export class DeleteEvent implements Action {
    readonly type = ShoppingCartActionTypes.DeleteEvent;
    constructor(public payload: { event: Event }) { }
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
    constructor(public payload: { userId: string, events: Event[] }) { }
}

export class ResetShoppingCart implements Action {
    readonly type = ShoppingCartActionTypes.ResetShoppingCart;
}


export type ShoppingCartActions =
    AddEvent
    | DeleteEvent
    | ShoppingCartRequest
    | AddEventsToShoppingCart
    | PutShoppingCart
    | ResetShoppingCart
