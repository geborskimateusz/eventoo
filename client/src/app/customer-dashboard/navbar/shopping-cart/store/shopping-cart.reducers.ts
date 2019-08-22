import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Event } from 'src/app/shared/model/event.model';
import { ShoppingCartActions, ShoppingCartActionTypes } from './shopping-cart.actions';

export interface ShoppingCartState extends EntityState<Event> {
}

export const adapter: EntityAdapter<Event> = createEntityAdapter<Event>();

export const initialShoppingCartState: ShoppingCartState = adapter.getInitialState();


export function shoppingCartReducer(state = initialShoppingCartState, action: ShoppingCartActions) {

    switch(action.type) {

        case ShoppingCartActionTypes.AddEvent:
            return adapter.addOne(action.payload.event, state);

        case ShoppingCartActionTypes.DeleteEvent:
                return adapter.removeOne(action.payload.event.id, state);

        case ShoppingCartActionTypes.AddEventsToShoppingCart:
                return adapter.addAll(action.payload.events, state);
        
        case ShoppingCartActionTypes.ResetShoppingCart:
            return adapter.removeAll(state)
    
        default: {
            return state;
        }
    }
}


export const {selectAll, selectIds, selectTotal} = adapter.getSelectors();