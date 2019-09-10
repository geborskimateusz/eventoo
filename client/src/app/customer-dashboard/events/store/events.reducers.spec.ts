import { EVENTS_DATASOURCE } from "src/app/shared/fake-datasource/events-datasource";
import { EventLoaded, EventsPageLoaded } from './events.actions';
import { initialEventsState, eventsReducer } from './events.reducers';

fdescribe('EventsReducers', () => {

    let events = [...EVENTS_DATASOURCE];
    let event = events[0];

    it('EventsActionTypes.EventLoaded', () => {
        const action = new EventLoaded({ event });
        let newState = eventsReducer(initialEventsState, action);

        const expectedState = {
            ...initialEventsState,
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

    it('', () => {
        let eventsArr = [...events.slice(0, 2)];

        const expectedState = {
            ...initialEventsState,
            entities: {
                [eventsArr[0].id]: eventsArr[0],
                [eventsArr[1].id]: eventsArr[1],
            },
            ids: [
                eventsArr[0].id,
                eventsArr[1].id,
            ]
        }

        const addAction = new EventsPageLoaded({ events: eventsArr });
        const stateAfterInsert = eventsReducer(initialEventsState, addAction);

        expect(
            stateAfterInsert.entities[eventsArr[0].id].title)
            .toBe(expectedState.entities[eventsArr[0].id].title);

        let event = eventsArr[0];
        let oldTitle = event.title;
        let newTitle = 'Fake Title';
        event.title = newTitle;

        const updateAction = new EventsPageLoaded({ events: [event] });
        const stateAfterUpdate = eventsReducer(initialEventsState, updateAction);

        expect(stateAfterUpdate.entities[eventsArr[0].id].title)
        .toEqual(newTitle);


    })



})