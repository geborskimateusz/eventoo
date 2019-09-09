import { async } from "@angular/core/testing";
import { EVENTS_DATASOURCE } from 'src/app/shared/fake-datasource/events-datasource';
import { AddEvent, DeleteEvent, AddEventsToShoppingCart, ResetShoppingCart } from './shopping-cart.actions';
import { shoppingCartReducer, initialShoppingCartState } from './shopping-cart.reducers';

describe('ShoppingCartReducer', () => {

    let events = [...EVENTS_DATASOURCE];
    let event = events[0];

    beforeEach(() => {
        const action = new AddEvent({ event });
        shoppingCartReducer(initialShoppingCartState, action);
    })


    it('ShoppingCartActionTypes.AddEvent', () => {

        const action = new AddEvent({ event });
        const newState = shoppingCartReducer(initialShoppingCartState, action);

        const expectedState = {
            ...initialShoppingCartState,
            entities: {
                [event.id]: event
            },
            ids: [event.id]
        }

        expect(
            newState.entities[event.id].title)
            .toBe(expectedState.entities[event.id].title);

        expect(newState.ids.length).toBe(expectedState.ids.length);

    })


    it('ShoppingCartActionTypes.DeleteEvent', () => {

        let deleteAction = new DeleteEvent({ event });
        const newState = shoppingCartReducer(initialShoppingCartState, deleteAction);

        const expectedState = {
            ...initialShoppingCartState,
            entities: {},
            ids: []
        }

        expect(newState.ids.length).toBe(expectedState.ids.length);
    })

    it('ShoppingCartActionTypes.AddEventsToShoppingCart', () => {
        let eventsArr = [...events.slice(0, 2)];
        const action = new AddEventsToShoppingCart({ events: eventsArr });
        const newState = shoppingCartReducer(initialShoppingCartState, action);

        const expectedState = {
            ...initialShoppingCartState,
            entities: {
                [eventsArr[0].id]: eventsArr[0],
                [eventsArr[1].id]: eventsArr[1],
            },
            ids: [
                eventsArr[0].id,
                eventsArr[1].id,
            ]
        }

        expect(
            newState.entities[eventsArr[0].id].title)
            .toBe(expectedState.entities[eventsArr[0].id].title);

        expect(newState.ids.length).toBe(expectedState.ids.length);
    })

    it('ShoppingCartActionTypes.ResetShoppingCart', () => {
        let deleteAction = new ResetShoppingCart();
        const newState = shoppingCartReducer(initialShoppingCartState, deleteAction);

        const expectedState = {
            ...initialShoppingCartState,
            entities: {},
            ids: []
        }

        expect(newState).toEqual(expectedState);
    })

})